import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Endpoint para actualizar el resultado de un comando
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const commandId = params.id;
    const data = await request.json();
    const { status, result } = data;

    if (!status) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    // Verificar si el comando existe
    const command = await prisma.comando.findUnique({
      where: { id: commandId },
    });

    if (!command) {
      return NextResponse.json(
        { error: "Comando no encontrado" },
        { status: 404 }
      );
    }

    // Verificar token del dispositivo
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Device ")) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const deviceToken = authHeader.split(" ")[1];
    const device = await prisma.dispositivo.findUnique({
      where: { id: command.dispositivoId },
    });

    if (!device || device.token !== deviceToken) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Actualizar comando
    const updatedCommand = await prisma.comando.update({
      where: { id: commandId },
      data: {
        estado: status,
        resultado: result || {},
        fechaEjecucion: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      command: updatedCommand,
    });
  } catch (error) {
    console.error("Error al actualizar resultado:", error);
    return NextResponse.json(
      { error: "Error al actualizar resultado" },
      { status: 500 }
    );
  }
}
