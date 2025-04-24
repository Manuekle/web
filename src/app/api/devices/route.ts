import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Endpoint para autenticar dispositivos
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser()
    if (!user || !hasRole(user, ["admin"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const data = await request.json()

    // Verificar token de dispositivo
    const device = await prisma.dispositivo.findUnique({
      where: { token: data.token },
    })

    if (!device) {
      return NextResponse.json({ error: "Dispositivo no autorizado" }, { status: 401 })
    }

    // Actualizar estado del dispositivo
    await prisma.dispositivo.update({
      where: { id: device.id },
      data: {
        estado: "online",
        ultimaSincronizacion: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      deviceId: device.id,
      serverTime: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error en la solicitud:", error)
    return NextResponse.json({ error: "Error en la solicitud" }, { status: 400 })
  }
}

// Endpoint para obtener lista de dispositivos
export async function GET() {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const devices = await prisma.dispositivo.findMany({
      orderBy: {
        nombre: "asc",
      },
    })

    return NextResponse.json({
      devices: devices.map((d) => ({
        id: d.id,
        name: d.nombre,
        location: d.ubicacion,
        status: d.estado,
        lastSync: d.ultimaSincronizacion,
      })),
    })
  } catch (error) {
    console.error("Error al obtener dispositivos:", error)
    return NextResponse.json({ error: "Error al obtener dispositivos" }, { status: 500 })
  }
}
