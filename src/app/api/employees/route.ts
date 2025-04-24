import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Endpoint para obtener lista de empleados
export async function GET() {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin", "hr"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const employees = await prisma.empleado.findMany({
      orderBy: {
        fechaRegistro: "desc",
      },
    })

    return NextResponse.json({ employees })
  } catch (error) {
    console.error("Error al obtener empleados:", error)
    return NextResponse.json({ error: "Error al obtener empleados" }, { status: 500 })
  }
}

// Endpoint para crear un nuevo empleado
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser()
    if (!user || !hasRole(user, ["admin", "hr"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const data = await request.json()
    const { cedula, nombre, apellido } = data

    if (!cedula || !nombre || !apellido) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar si ya existe un empleado con la misma cédula
    const existingEmployee = await prisma.empleado.findUnique({
      where: { cedula },
    })

    if (existingEmployee) {
      return NextResponse.json({ error: "Ya existe un empleado con esta cédula" }, { status: 400 })
    }

    // Crear nuevo empleado
    const newEmployee = await prisma.empleado.create({
      data: {
        cedula,
        nombre,
        apellido,
        activo: true,
      },
    })

    return NextResponse.json({
      success: true,
      employee: newEmployee,
    })
  } catch (error) {
    console.error("Error al crear empleado:", error)
    return NextResponse.json({ error: "Error al crear empleado" }, { status: 500 })
  }
}
