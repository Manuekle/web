import { type NextRequest, NextResponse } from "next/server";
import { getCurrentUser, hasRole } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Endpoint para obtener información de firmware
export async function GET(request: NextRequest) {
  try {
    // Verificar si es una solicitud desde un dispositivo (con token de dispositivo)
    const authHeader = request.headers.get("authorization");

    if (authHeader && authHeader.startsWith("Device ")) {
      const deviceToken = authHeader.split(" ")[1];

      // Verificar token del dispositivo
      const device = await prisma.dispositivo.findUnique({
        where: { token: deviceToken },
      });

      if (!device) {
        return NextResponse.json(
          { error: "Dispositivo no autorizado" },
          { status: 401 }
        );
      }

      // Devolver información de firmware para el dispositivo
      return NextResponse.json({
        currentVersion: "1.2.3",
        latestVersion: "1.3.0",
        updateAvailable: true,
        updateUrl: "https://example.com/firmware/v1.3.0.bin",
        releaseNotes: "Mejoras de rendimiento y corrección de errores",
      });
    } else {
      // Si es una solicitud desde la web, verificar usuario autenticado
      const user = await getCurrentUser();
      if (!user || !hasRole(user, ["admin"])) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 });
      }

      // Devolver lista de versiones de firmware disponibles
      return NextResponse.json({
        versions: [
          {
            version: "1.3.0",
            releaseDate: "2023-04-15",
            releaseNotes: "Mejoras de rendimiento y corrección de errores",
            downloadUrl: "https://example.com/firmware/v1.3.0.bin",
          },
          {
            version: "1.2.3",
            releaseDate: "2023-03-01",
            releaseNotes: "Soporte para nuevos sensores",
            downloadUrl: "https://example.com/firmware/v1.2.3.bin",
          },
          {
            version: "1.2.0",
            releaseDate: "2023-01-15",
            releaseNotes: "Versión inicial",
            downloadUrl: "https://example.com/firmware/v1.2.0.bin",
          },
        ],
      });
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return NextResponse.json(
      { error: "Error en la solicitud" },
      { status: 500 }
    );
  }
}

// Endpoint para actualizar firmware
export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser();
    if (!user || !hasRole(user, ["admin"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await request.json();
    const { deviceId, version } = data;

    if (!deviceId || !version) {
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

    // Crear comando para actualizar firmware
    const command = await prisma.comando.create({
      data: {
        dispositivoId: deviceId,
        accion: "update_firmware",
        parametros: { version },
        estado: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Actualización de firmware programada",
      command,
    });
  } catch (error) {
    console.error("Error al programar actualización:", error);
    return NextResponse.json(
      { error: "Error al programar actualización" },
      { status: 500 }
    );
  }
}
