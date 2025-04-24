import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Endpoint para obtener lista de visitantes
export async function GET() {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin", "hr"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const visitors = await prisma.visitante.findMany({
      orderBy: {
        fechaRegistro: "desc",
      },
      include: {
        registros: {
          orderBy: {
            entrada: "desc",
          },
          take: 1,
        },
      },
    })

    // Transformar los datos para incluir el estado (presente/ausente)
    const visitorsWithStatus = visitors.map((visitor) => {
      const lastRecord = visitor.registros[0]
      const estado = lastRecord && !lastRecord.salida ? "Presente" : "Ausente"

      return {
        ...visitor,
        estado,
      }
    })

    return NextResponse.json({ visitors: visitorsWithStatus })
  } catch (error) {
    console.error("Error al obtener visitantes:", error)
    return NextResponse.json({ error: "Error al obtener visitantes" }, { status: 500 })
  }
}

// Endpoint para crear un nuevo visitante
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser()
    if (!user || !hasRole(user, ["admin", "hr"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const data = await request.json()
    const { cedula, nombre, apellido, empresa, motivo } = data

    if (!cedula || !nombre || !apellido) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar si ya existe un visitante con la misma cédula
    const existingVisitor = await prisma.visitante.findUnique({
      where: { cedula },
    })

    if (existingVisitor) {
      return NextResponse.json({ error: "Ya existe un visitante con esta cédula" }, { status: 400 })
    }

    // Crear nuevo visitante
    const newVisitor = await prisma.visitante.create({
      data: {
        cedula,
        nombre,
        apellido,
        empresa,
        motivo,
      },
    })

    return NextResponse.json({
      success: true,
      visitor: newVisitor,
    })
  } catch (error) {
    console.error("Error al crear visitante:", error)
    return NextResponse.json({ error: "Error al crear visitante" }, { status: 500 })
  }
}
