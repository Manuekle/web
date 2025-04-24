import { NextResponse, type NextRequest } from "next/server";
import { executeQuery, checkConnection } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { getCurrentUser, hasRole } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser();
    if (!user || !hasRole(user, ["admin"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Verificar la conexión antes de intentar sincronizar
    const isConnected = await checkConnection();

    if (!isConnected) {
      return NextResponse.json(
        {
          error: "No se puede sincronizar en modo offline",
          connectionStatus: "offline",
        },
        { status: 503 }
      );
    }

    // Obtener empleados de SQL Server
    const query = `
      SELECT 
        ID as id,
        Cedula as cedula,
        Nombre as nombre,
        Apellido as apellido,
        FechaRegistro as fechaRegistro,
        Activo as activo
      FROM Empleados
    `;

    const externalEmployees = await executeQuery(query);

    // Contador para estadísticas
    let created = 0;
    let updated = 0;
    const skipped = 0;

    // Procesar cada empleado
    for (const emp of externalEmployees) {
      // Verificar si ya existe en nuestra base de datos
      const existingEmployee = await prisma.empleado.findUnique({
        where: { cedula: emp.cedula },
      });

      if (!existingEmployee) {
        // Crear nuevo empleado
        await prisma.empleado.create({
          data: {
            cedula: emp.cedula,
            nombre: emp.nombre,
            apellido: emp.apellido,
            activo: emp.activo === 1 || emp.activo === true,
            fechaRegistro: new Date(emp.fechaRegistro) || new Date(),
          },
        });
        created++;
      } else {
        // Actualizar empleado existente
        await prisma.empleado.update({
          where: { id: existingEmployee.id },
          data: {
            nombre: emp.nombre,
            apellido: emp.apellido,
            activo: emp.activo === 1 || emp.activo === true,
          },
        });
        updated++;
      }
    }

    return NextResponse.json({
      success: true,
      connectionStatus: "online",
      stats: {
        total: externalEmployees.length,
        created,
        updated,
        skipped,
      },
    });
  } catch (error) {
    console.error("Error al sincronizar empleados:", error);
    return NextResponse.json(
      {
        error: "Error al sincronizar empleados",
        connectionStatus: "offline",
      },
      { status: 500 }
    );
  }
}
