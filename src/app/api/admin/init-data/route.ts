import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAuth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    // Verificar que el usuario es administrador
    const token = await request.cookies.get("authToken")?.value;
    if (!token) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const payload = await verifyAuth(token);
    if (!payload || payload.role !== "admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    // Inicializar datos de ejemplo para dispositivos
    const dispositivos = [
      {
        id: "AIC001",
        nombre: "Dispositivo Principal",
        ubicacion: "Entrada Principal",
        token: "token-unico-para-autenticacion", // Token único para autenticar el dispositivo
        estado: "online",
        configuracion: JSON.stringify({
          ip: "192.168.1.100",
          mac: "00:11:22:33:44:55",
          modelo: "BioAccess-A10",
          firmware: "1.2.3",
          modoOperacion: "normal", // normal, enrollment, maintenance
          tiempoSincronizacion: 300, // segundos
          umbralHuella: 80, // porcentaje de coincidencia requerido
          timeoutOperacion: 30, // segundos
          volumenBuzzer: 70, // porcentaje
          brilloPantalla: 80, // porcentaje
        }),
        ultimaSincronizacion: new Date(),
      },

      // Para crear dispositivos adicionales en el futuro, descomenta estos ejemplos
      // y modifica según sea necesario:

      /*
      {
        id: "AIC002",
        nombre: "Dispositivo Secundario",
        ubicacion: "Entrada Lateral",
        token: "token-unico-dispositivo-2",
        estado: "online",
        configuracion: JSON.stringify({
          ip: "192.168.1.101",
          mac: "00:11:22:33:44:56",
          modelo: "BioAccess-A10",
          firmware: "1.2.3",
          modoOperacion: "normal",
          tiempoSincronizacion: 300,
          umbralHuella: 80,
          timeoutOperacion: 30,
          volumenBuzzer: 70,
          brilloPantalla: 80,
        }),
        ultimaSincronizacion: new Date(),
      },
      
      {
        id: "AIC003",
        nombre: "Dispositivo Cafetería",
        ubicacion: "Cafetería",
        token: "token-unico-dispositivo-3",
        estado: "offline",
        configuracion: JSON.stringify({
          ip: "192.168.1.102",
          mac: "00:11:22:33:44:57",
          modelo: "BioAccess-A8",
          firmware: "1.2.2",
          modoOperacion: "normal",
          tiempoSincronizacion: 300,
          umbralHuella: 75,
          timeoutOperacion: 30,
          volumenBuzzer: 65,
          brilloPantalla: 75,
        }),
        ultimaSincronizacion: new Date(Date.now() - 86400000), // Último acceso hace 1 día
      },
      */
    ];

    // Inicializar datos de ejemplo para comandos
    const comandos = [
      {
        dispositivoId: "AIC001",
        accion: "sync_time",
        parametros: {},
        estado: "completed",
        resultado: { mensaje: "Hora sincronizada correctamente" },
        fechaCreacion: new Date(Date.now() - 3600000),
        fechaEjecucion: new Date(Date.now() - 3500000),
      },

      /*
      {
        dispositivoId: "AIC001",
        accion: "restart",
        parametros: {},
        estado: "pending",
        resultado: null,
        fechaCreacion: new Date(),
        fechaEjecucion: null,
      },
      */
    ];

    // Inicializar datos de ejemplo para versiones de firmware
    const firmwareVersiones = [
      {
        version: "1.2.3",
        fechaLanzamiento: new Date("2025-01-15"),
        notasLanzamiento:
          "- Mejora en la detección de huellas\n- Optimización del consumo de energía\n- Corrección de errores en la sincronización",
        urlDescarga: "https://example.com/firmware/v1.2.3.bin",
        tamanio: 256, // KB
        md5: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
      },

      /*
      {
        version: "1.3.0-beta",
        fechaLanzamiento: new Date("2025-03-20"),
        notasLanzamiento:
          "- Nueva interfaz de usuario en LCD\n- Soporte para múltiples huellas por usuario\n- Mejoras en el modo offline",
        urlDescarga: "https://example.com/firmware/v1.3.0-beta.bin",
        tamanio: 280, // KB
        md5: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7",
      },
      */
    ];

    // Crear transacción para insertar todos los datos
    await prisma.$transaction(async (tx) => {
      // Insertar dispositivos
      for (const dispositivo of dispositivos) {
        await tx.dispositivo.upsert({
          where: { id: dispositivo.id },
          update: dispositivo,
          create: dispositivo,
        });
      }

      // Insertar comandos
      for (const comando of comandos) {
        await tx.comando.create({
          data: comando,
        });
      }

      // Insertar versiones de firmware (si existe el modelo)
      try {
        for (const firmware of firmwareVersiones) {
          await tx.firmwareVersion.upsert({
            where: { version: firmware.version },
            update: firmware,
            create: firmware,
          });
        }
      } catch (error) {
        console.log(
          "Nota: El modelo FirmwareVersion no existe aún. Omitiendo inserción de firmware."
        );
      }
    });

    return NextResponse.json({
      success: true,
      message: "Datos de ejemplo inicializados correctamente",
    });
  } catch (error) {
    console.error("Error al inicializar datos de ejemplo:", error);
    return NextResponse.json(
      { error: "Error al inicializar datos de ejemplo" },
      { status: 500 }
    );
  }
}
