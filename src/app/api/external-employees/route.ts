import { NextResponse, type NextRequest } from "next/server";
import {
  executeQuery,
  executeQueryWithParams,
  checkConnection,
} from "@/lib/db";
import { getCurrentUser, hasRole } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    // Verificar si el usuario está autenticado y tiene permisos
    const user = await getCurrentUser();
    if (!user || !hasRole(user, ["admin", "hr"])) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Verificar la conexión antes de intentar obtener datos
    const isConnected = await checkConnection();

    // Obtener parámetros de consulta (opcional)
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    let employees = [];

    if (search) {
      // Consulta con parámetros
      const searchPattern = `%${search}%`;
      employees = await executeQueryWithParams(
        `SELECT 
          ID as id,
          Cedula as cedula,
          Nombre as nombre,
          Apellido as apellido,
          FechaRegistro as fechaRegistro,
          Activo as activo
        FROM Empleados
        WHERE Nombre LIKE @search OR Apellido LIKE @search OR Cedula LIKE @search`,
        { search: searchPattern }
      );
    } else {
      // Consulta sin parámetros
      employees = await executeQuery(`
        SELECT 
          ID as id,
          Cedula as cedula,
          Nombre as nombre,
          Apellido as apellido,
          FechaRegistro as fechaRegistro,
          Activo as activo
        FROM Empleados
      `);
    }

    return NextResponse.json({
      employees,
      connectionStatus: isConnected ? "online" : "offline",
    });
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    return NextResponse.json(
      { error: "Error al obtener empleados" },
      { status: 500 }
    );
  }
}
