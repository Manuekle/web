import { type NextRequest, NextResponse } from "next/server";
import { getCurrentUser, hasRole } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Endpoint para crear un nuevo comando
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser();
    if (!user || !hasRole(user, ["admin"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await request.json();
    const { deviceId, action, params } = data;

    if (!deviceId || !action) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    // Verificar si el dispositivo existe
    const device = await prisma.dispositivo.findUnique({
      where: { id: deviceId },
    });

    if (!device) {
      return NextResponse.json(
        { error: "Dispositivo no encontrado" },
        { status: 404 }
      );
    }

    // Crear nuevo comando
    const newCommand = await prisma.comando.create({
      data: {
        dispositivoId: deviceId,
        accion: action,
        parametros: params || {},
        estado: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      command: newCommand,
    });
  } catch (error) {
    console.error("Error al crear comando:", error);
    return NextResponse.json(
      { error: "Error al crear comando" },
      { status: 500 }
    );
  }
}

// Endpoint para obtener lista de comandos
export async function GET(request: NextRequest) {
  // Verificar si el usuario está autenticado y tiene permisos
  const user = await getCurrentUser();
  if (!user || !hasRole(user, ["admin"])) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const deviceId = searchParams.get("deviceId");
    const status = searchParams.get("status");

    // Construir filtro
    const where: any = {};

    if (deviceId) {
      where.dispositivoId = deviceId;
    }

    if (status) {
      where.estado = status;
    }

    // Obtener comandos
    const commands = await prisma.comando.findMany({
      where,
      orderBy: {
        fechaCreacion: "desc",
      },
      include: {
        dispositivo: {
          select: {
            nombre: true,
            ubicacion: true,
          },
        },
      },
    });

    return NextResponse.json({
      commands: commands.map((cmd) => ({
        id: cmd.id,
        deviceId: cmd.dispositivoId,
        deviceName: cmd.dispositivo.nombre,
        deviceLocation: cmd.dispositivo.ubicacion,
        action: cmd.accion,
        params: cmd.parametros,
        status: cmd.estado,
        result: cmd.resultado,
        createdAt: cmd.fechaCreacion,
        executedAt: cmd.fechaEjecucion,
      })),
    });
  } catch (error) {
    console.error("Error al obtener comandos:", error);
    return NextResponse.json(
      { error: "Error al obtener comandos" },
      { status: 500 }
    );
  }
}
