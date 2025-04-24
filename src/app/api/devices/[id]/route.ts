import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser, hasRole } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// Obtener configuración de dispositivo
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser()
  if (!user || !hasRole(user, ["admin"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const device = await prisma.dispositivo.findUnique({
      where: { id: params.id },
    })

    if (!device) {
      return NextResponse.json({ error: "Dispositivo no encontrado" }, { status: 404 })
    }

    return NextResponse.json({
      id: device.id,
      name: device.nombre,
      location: device.ubicacion,
      status: device.estado,
      lastSync: device.ultimaSincronizacion,
      config: device.configuracion,
    })
  } catch (error) {
    console.error("Error al obtener dispositivo:", error)
    return NextResponse.json({ error: "Error al obtener dispositivo" }, { status: 500 })
  }
}

// Actualizar configuración de dispositivo
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser()
    if (!user || !hasRole(user, ["admin"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const data = await request.json()
    const device = await prisma.dispositivo.findUnique({
      where: { id: params.id },
    })

    if (!device) {
      return NextResponse.json({ error: "Dispositivo no encontrado" }, { status: 404 })
    }

    // Actualizar dispositivo
    const updatedDevice = await prisma.dispositivo.update({
      where: { id: params.id },
      data: {
        estado: data.status || undefined,
        configuracion: data.config ? { ...device.configuracion, ...data.config } : undefined,
        ultimaSincronizacion: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      device: {
        id: updatedDevice.id,
        name: updatedDevice.nombre,
        location: updatedDevice.ubicacion,
        status: updatedDevice.estado,
        lastSync: updatedDevice.ultimaSincronizacion,
        config: updatedDevice.configuracion,
      },
    })
  } catch (error) {
    console.error("Error al actualizar dispositivo:", error)
    return NextResponse.json({ error: "Error al actualizar dispositivo" }, { status: 500 })
  }
}
