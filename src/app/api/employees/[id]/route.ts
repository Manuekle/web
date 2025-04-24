import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Obtener un empleado específico
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

    const employee = await prisma.empleado.findUnique({
      where: { id },
      include: {
        registros: {
          orderBy: {
            fecha: "desc",
          },
          take: 10,
        },
      },
    })

    if (!employee) {
      return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ employee })
  } catch (error) {
    console.error("Error al obtener empleado:", error)
    return NextResponse.json({ error: "Error al obtener empleado" }, { status: 500 })
  }
}

// Actualizar un empleado
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
    const { cedula, nombre, apellido, activo } = data

    // Verificar si el empleado existe
    const employee = await prisma.empleado.findUnique({
      where: { id },
    })

    if (!employee) {
      return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 })
    }

    // Si se está actualizando la cédula, verificar que no exista otro empleado con esa cédula
    if (cedula && cedula !== employee.cedula) {
      const existingEmployee = await prisma.empleado.findUnique({
        where: { cedula },
      })

      if (existingEmployee) {
        return NextResponse.json({ error: "Ya existe un empleado con esta cédula" }, { status: 400 })
      }
    }

    // Actualizar empleado
    const updatedEmployee = await prisma.empleado.update({
      where: { id },
      data: {
        cedula: cedula || undefined,
        nombre: nombre || undefined,
        apellido: apellido || undefined,
        activo: activo !== undefined ? activo : undefined,
      },
    })

    return NextResponse.json({
      success: true,
      employee: updatedEmployee,
    })
  } catch (error) {
    console.error("Error al actualizar empleado:", error)
    return NextResponse.json({ error: "Error al actualizar empleado" }, { status: 500 })
  }
}

// Eliminar un empleado
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

    // Verificar si el empleado existe
    const employee = await prisma.empleado.findUnique({
      where: { id },
    })

    if (!employee) {
      return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 })
    }

    // En lugar de eliminar, marcar como inactivo
    const updatedEmployee = await prisma.empleado.update({
      where: { id },
      data: {
        activo: false,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Empleado desactivado correctamente",
    })
  } catch (error) {
    console.error("Error al desactivar empleado:", error)
    return NextResponse.json({ error: "Error al desactivar empleado" }, { status: 500 })
  }
}
