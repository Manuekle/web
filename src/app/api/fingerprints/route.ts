import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Endpoint para registrar huella
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser()
    if (!user || !hasRole(user, ["admin"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const data = await request.json()

    // Validar datos requeridos
    if (!data.empleadoId || !data.template) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar si el empleado existe
    const empleado = await prisma.empleado.findUnique({
      where: { id: data.empleadoId },
    })

    if (!empleado) {
      return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 })
    }

    // Actualizar huella del empleado
    const updatedEmployee = await prisma.empleado.update({
      where: { id: data.empleadoId },
      data: {
        huellaDactilar: data.template,
        ultimaActualizacion: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      message: "Huella registrada correctamente",
      fingerprint: {
        empleadoId: updatedEmployee.id,
        template: updatedEmployee.huellaDactilar,
        createdAt: updatedEmployee.ultimaActualizacion,
      },
    })
  } catch (error) {
    console.error("Error al registrar huella:", error)
    return NextResponse.json({ error: "Error al registrar huella" }, { status: 500 })
  }
}

// Endpoint para obtener huellas
export async function GET(request: NextRequest) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const empleadoId = searchParams.get("empleadoId")

    if (empleadoId) {
      const id = Number.parseInt(empleadoId)

      if (isNaN(id)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 })
      }

      const empleado = await prisma.empleado.findUnique({
        where: { id },
        select: {
          id: true,
          huellaDactilar: true,
          ultimaActualizacion: true,
        },
      })

      if (!empleado || !empleado.huellaDactilar) {
        return NextResponse.json({ error: "Huella no encontrada" }, { status: 404 })
      }

      return NextResponse.json({
        fingerprint: {
          empleadoId: empleado.id,
          template: empleado.huellaDactilar,
          createdAt: empleado.ultimaActualizacion,
        },
      })
    }

    // Devolver lista de empleados con huella registrada
    const empleadosConHuella = await prisma.empleado.findMany({
      where: {
        huellaDactilar: {
          not: null,
        },
      },
      select: {
        id: true,
      },
    })

    return NextResponse.json({
      empleadosConHuella: empleadosConHuella.map((e) => e.id),
    })
  } catch (error) {
    console.error("Error al obtener huellas:", error)
    return NextResponse.json({ error: "Error al obtener huellas" }, { status: 500 })
  }
}
