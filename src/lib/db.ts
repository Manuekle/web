import { Connection, Request, TYPES } from "tedious";

// Configuración de la conexión
const config = {
  server: "192.168.5.117\\SQLEXPRESS",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "Nomin@123456",
    },
  },
  options: {
    database: "AIC", // Reemplaza con el nombre de tu base de datos
    encrypt: false,
    trustServerCertificate: true,
    port: 1433, // Puerto predeterminado de SQL Server
    rowCollectionOnRequestCompletion: true,
  },
};

// Función para ejecutar una consulta
export function executeQuery(query: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);
    const results: any[] = [];

    connection.on("connect", (err) => {
      if (err) {
        console.error("Error de conexión:", err);
        reject(err);
        return;
      }

      const request = new Request(query, (err, rowCount, rows) => {
        if (err) {
          console.error("Error en la consulta:", err);
          reject(err);
          return;
        }

        // Convertir los resultados a un formato más amigable
        const formattedResults = rows.map((row) => {
          const item: Record<string, any> = {};
          row.forEach((column: any) => {
            item[column.metadata.colName] = column.value;
          });
          return item;
        });

        resolve(formattedResults);
        connection.close();
      });

      connection.execSql(request);
    });

    connection.on("error", (err) => {
      console.error("Error de conexión:", err);
      reject(err);
    });

    connection.connect();
  });
}

// Función para ejecutar una consulta parametrizada
export function executeQueryWithParams(
  query: string,
  params: Record<string, any>
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);
    const results: any[] = [];

    connection.on("connect", (err) => {
      if (err) {
        console.error("Error de conexión:", err);
        reject(err);
        return;
      }

      const request = new Request(query, (err, rowCount, rows) => {
        if (err) {
          console.error("Error en la consulta:", err);
          reject(err);
          return;
        }

        // Convertir los resultados a un formato más amigable
        const formattedResults = rows.map((row) => {
          const item: Record<string, any> = {};
          row.forEach((column: any) => {
            item[column.metadata.colName] = column.value;
          });
          return item;
        });

        resolve(formattedResults);
        connection.close();
      });

      // Añadir parámetros
      Object.entries(params).forEach(([key, value]) => {
        if (typeof value === "string") {
          request.addParameter(key, TYPES.NVarChar, value);
        } else if (typeof value === "number") {
          request.addParameter(key, TYPES.Int, value);
        } else if (value instanceof Date) {
          request.addParameter(key, TYPES.DateTime, value);
        } else if (typeof value === "boolean") {
          request.addParameter(key, TYPES.Bit, value);
        }
      });

      connection.execSql(request);
    });

    connection.on("error", (err) => {
      console.error("Error de conexión:", err);
      reject(err);
    });

    connection.connect();
  });
}
