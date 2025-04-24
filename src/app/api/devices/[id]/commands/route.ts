import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Endpoint para que los dispositivos obtengan sus comandos pendientes
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deviceId = params.id;

    // Verificar token del dispositivo
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Device ")) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const deviceToken = authHeader.split(" ")[1];
    const device = await prisma.dispositivo.findUnique({
      where: { id: deviceId },
    });

    if (!device || device.token !== deviceToken) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Actualizar estado del dispositivo
    await prisma.dispositivo.update({
      where: { id: deviceId },
      data: {
        estado: "online",
        ultimaSincronizacion: new Date(),
      },
    });

    // Obtener comandos pendientes
    const pendingCommands = await prisma.comando.findMany({
      where: {
        dispositivoId: deviceId,
        estado: "pending",
      },
      orderBy: {
        fechaCreacion: "asc",
      },
    });

    return NextResponse.json({
      commands: pendingCommands.map((cmd) => ({
        id: cmd.id,
        action: cmd.accion,
        params: cmd.parametros,
      })),
    });
  } catch (error) {
    console.error("Error al obtener comandos pendientes:", error);
    return NextResponse.json(
      { error: "Error al obtener comandos pendientes" },
      { status: 500 }
    );
  }
}
