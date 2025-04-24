import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Endpoint para registrar entrada/salida de visitante
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser()
    if (!user || !hasRole(user, ["admin", "hr"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const data = await request.json()
    const { visitanteId, tipo, motivo, personaVisitada } = data

    if (!visitanteId || !tipo || !motivo) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar si el visitante existe
    const visitante = await prisma.visitante.findUnique({
      where: { id: visitanteId },
    })

    if (!visitante) {
      return NextResponse.json({ error: "Visitante no encontrado" }, { status: 404 })
    }

    if (tipo === "entrada") {
      // Verificar si ya tiene una entrada sin salida
      const registroActivo = await prisma.registroVisitante.findFirst({
        where: {
          visitanteId,
          salida: null,
        },
      })

      if (registroActivo) {
        return NextResponse.json({ error: "El visitante ya tiene una entrada activa" }, { status: 400 })
      }

      // Registrar entrada
      const registro = await prisma.registroVisitante.create({
        data: {
          visitanteId,
          motivo,
          personaVisitada,
        },
      })

      return NextResponse.json({
        success: true,
        record: registro,
      })
    } else if (tipo === "salida") {
      // Buscar entrada sin salida
      const registroActivo = await prisma.registroVisitante.findFirst({
        where: {
          visitanteId,
          salida: null,
        },
        orderBy: {
          entrada: "desc",
        },
      })

      if (!registroActivo) {
        return NextResponse.json({ error: "No hay entrada activa para este visitante" }, { status: 400 })
      }

      // Registrar salida
      const registro = await prisma.registroVisitante.update({
        where: { id: registroActivo.id },
        data: {
          salida: new Date(),
        },
      })

      return NextResponse.json({
        success: true,
        record: registro,
      })
    } else {
      return NextResponse.json({ error: "Tipo de registro inválido" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error al registrar visitante:", error)
    return NextResponse.json({ error: "Error al registrar visitante" }, { status: 500 })
  }
}

// Endpoint para obtener registros de visitantes
export async function GET(request: NextRequest) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin", "hr"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const visitanteId = searchParams.get("visitanteId")
    const fecha = searchParams.get("fecha")

    // Construir filtro
    const where: any = {}

    if (visitanteId) {
      where.visitanteId = Number.parseInt(visitanteId)
    }

    if (fecha) {
      const targetDate = new Date(fecha)
      where.entrada = {
        gte: new Date(targetDate.setHours(0, 0, 0, 0)),
        lt: new Date(targetDate.setHours(23, 59, 59, 999)),
      }
    }

    // Obtener registros
    const records = await prisma.registroVisitante.findMany({
      where,
      orderBy: {
        entrada: "desc",
      },
      include: {
        visitante: true,
      },
    })

    return NextResponse.json({
      records,
    })
  } catch (error) {
    console.error("Error al obtener registros:", error)
    return NextResponse.json({ error: "Error al obtener registros" }, { status: 500 })
  }
}
