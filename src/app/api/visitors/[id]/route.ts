import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Obtener un visitante específico
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin", "hr"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const visitor = await prisma.visitante.findUnique({
      where: { id },
      include: {
        registros: {
          orderBy: {
            entrada: "desc",
          },
        },
      },
    })

    if (!visitor) {
      return NextResponse.json({ error: "Visitante no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ visitor })
  } catch (error) {
    console.error("Error al obtener visitante:", error)
    return NextResponse.json({ error: "Error al obtener visitante" }, { status: 500 })
  }
}

// Actualizar un visitante
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin", "hr"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const data = await request.json()
    const { cedula, nombre, apellido, empresa, motivo } = data

    // Verificar si el visitante existe
    const visitor = await prisma.visitante.findUnique({
      where: { id },
    })

    if (!visitor) {
      return NextResponse.json({ error: "Visitante no encontrado" }, { status: 404 })
    }

    // Si se está actualizando la cédula, verificar que no exista otro visitante con esa cédula
    if (cedula && cedula !== visitor.cedula) {
      const existingVisitor = await prisma.visitante.findUnique({
        where: { cedula },
      })

      if (existingVisitor) {
        return NextResponse.json({ error: "Ya existe un visitante con esta cédula" }, { status: 400 })
      }
    }

    // Actualizar visitante
    const updatedVisitor = await prisma.visitante.update({
      where: { id },
      data: {
        cedula: cedula || undefined,
        nombre: nombre || undefined,
        apellido: apellido || undefined,
        empresa: empresa !== undefined ? empresa : undefined,
        motivo: motivo !== undefined ? motivo : undefined,
      },
    })

    return NextResponse.json({
      success: true,
      visitor: updatedVisitor,
    })
  } catch (error) {
    console.error("Error al actualizar visitante:", error)
    return NextResponse.json({ error: "Error al actualizar visitante" }, { status: 500 })
  }
}

// Eliminar un visitante
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const id = Number.parseInt(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    // Verificar si el visitante existe
    const visitor = await prisma.visitante.findUnique({
      where: { id },
    })

    if (!visitor) {
      return NextResponse.json({ error: "Visitante no encontrado" }, { status: 404 })
    }

    // Eliminar registros del visitante
    await prisma.registroVisitante.deleteMany({
      where: { visitanteId: id },
    })

    // Eliminar visitante
    await prisma.visitante.delete({
      where: { id },
    })

    return NextResponse.json({
      success: true,
      message: "Visitante eliminado correctamente",
    })
  } catch (error) {
    console.error("Error al eliminar visitante:", error)
    return NextResponse.json({ error: "Error al eliminar visitante" }, { status: 500 })
  }
}
