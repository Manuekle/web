import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Endpoint para registrar asistencia
export async function POST(request: NextRequest) {
  try {
    // Para dispositivos, verificar token de dispositivo
    // Para usuarios web, verificar autenticación
    const authHeader = request.headers.get("authorization")

    // Si es una solicitud desde un dispositivo (con token de dispositivo)
    if (authHeader && authHeader.startsWith("Device ")) {
      const deviceToken = authHeader.split(" ")[1]

      // Verificar token del dispositivo
      const device = await prisma.dispositivo.findUnique({
        where: { token: deviceToken },
      })

      if (!device) {
        return NextResponse.json({ error: "Dispositivo no autorizado" }, { status: 401 })
      }
    } else {
      // Si es una solicitud desde la web, verificar usuario autenticado
      const user = await getCurrentUser()
      if (!user || !hasRole(user, ["admin"])) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 })
      }
    }

    const data = await request.json()

    // Validar datos requeridos
    if (!data.empleadoId || !data.deviceId || !data.metodoRegistro) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 })
    }

    // Verificar si el empleado existe
    const empleado = await prisma.empleado.findUnique({
      where: { id: data.empleadoId },
    })

    if (!empleado) {
      return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 })
    }

    // Determinar tipo de registro (entrada/salida)
    // Buscar el último registro del empleado
    const ultimoRegistro = await prisma.registroAsistencia.findFirst({
      where: { empleadoId: data.empleadoId },
      orderBy: { fecha: "desc" },
    })

    // Si el último registro es una entrada, el siguiente es una salida y viceversa
    let tipoRegistro = "ENTRADA"
    if (ultimoRegistro && ultimoRegistro.tipoRegistro === "ENTRADA") {
      tipoRegistro = "SALIDA"
    }

    // Crear nuevo registro
    const newRecord = await prisma.registroAsistencia.create({
      data: {
        empleadoId: data.empleadoId,
        tipoRegistro: tipoRegistro as any,
        metodoRegistro: data.metodoRegistro as any,
        fecha: new Date(),
        observacion: data.observacion || null,
        deviceId: data.deviceId,
      },
    })

    return NextResponse.json({
      success: true,
      record: newRecord,
    })
  } catch (error) {
    console.error("Error en la solicitud:", error)
    return NextResponse.json({ error: "Error en la solicitud" }, { status: 500 })
  }
}

// Endpoint para obtener registros
export async function GET(request: NextRequest) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin", "hr"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const empleadoId = searchParams.get("empleadoId")
    const fecha = searchParams.get("fecha")
    const deviceId = searchParams.get("deviceId")

    // Construir filtro
    const where: any = {}

    if (empleadoId) {
      where.empleadoId = Number.parseInt(empleadoId)
    }

    if (fecha) {
      const targetDate = new Date(fecha)
      where.fecha = {
        gte: new Date(targetDate.setHours(0, 0, 0, 0)),
        lt: new Date(targetDate.setHours(23, 59, 59, 999)),
      }
    }

    if (deviceId) {
      where.deviceId = deviceId
    }

    // Obtener registros
    const records = await prisma.registroAsistencia.findMany({
      where,
      orderBy: {
        fecha: "desc",
      },
      include: {
        empleado: true,
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
