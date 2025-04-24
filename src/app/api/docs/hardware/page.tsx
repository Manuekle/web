import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HardwareDocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documentación Hardware</h1>
        <p className="text-muted-foreground">
          Especificaciones para la comunicación entre dispositivos Arduino y el servidor
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="overview" className="flex-1 sm:flex-none">
            Visión General
          </TabsTrigger>
          <TabsTrigger value="protocol" className="flex-1 sm:flex-none">
            Protocolo
          </TabsTrigger>
          <TabsTrigger value="endpoints" className="flex-1 sm:flex-none">
            Endpoints
          </TabsTrigger>
          <TabsTrigger value="errors" className="flex-1 sm:flex-none">
            Manejo de Errores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Arquitectura de Comunicación</CardTitle>
              <CardDescription>Visión general del sistema de comunicación entre hardware y software</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Componentes del Sistema</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Hardware (Arduino)</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Arduino Mega 2560 como controlador principal</li>
                      <li>Sensor de huella dactilar (FPM10A o R305/R307)</li>
                      <li>Pantalla LCD 16x2 con I2C</li>
                      <li>Teclado matricial 4x4</li>
                      <li>Módulo WiFi (ESP8266) o Ethernet Shield</li>
                      <li>RTC DS3231 para fecha/hora</li>
                      <li>LEDs y buzzer para indicaciones</li>
                      <li>Tarjeta SD para almacenamiento local</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Software (Servidor)</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>API REST para comunicación con dispositivos</li>
                      <li>Base de datos para almacenamiento de registros</li>
                      <li>Sistema de autenticación y autorización</li>
                      <li>Interfaz web para administración</li>
                      <li>Sistema de notificaciones</li>
                      <li>Generación de reportes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Flujo de Comunicación</h3>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Etapa</TableHead>
                        <TableHead>Descripción</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">1. Inicialización</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>El dispositivo se conecta a la red WiFi configurada</li>
                            <li>Realiza una solicitud de autenticación al servidor</li>
                            <li>Recibe y almacena un token de sesión</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">2. Sincronización Inicial</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Descarga configuración actualizada</li>
                            <li>Verifica actualizaciones de firmware</li>
                            <li>Sincroniza base de datos local de empleados/huellas</li>
                            <li>Envía registros pendientes almacenados en la SD</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">3. Operación Normal</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Envía marcaciones en tiempo real</li>
                            <li>Envía heartbeats periódicos (cada 2-5 minutos)</li>
                            <li>Consulta periódicamente por comandos pendientes</li>
                            <li>Ejecuta comandos recibidos del servidor</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">4. Manejo de Fallos</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Detecta pérdidas de conexión</li>
                            <li>Cambia a modo offline automáticamente</li>
                            <li>Almacena marcaciones en la tarjeta SD</li>
                            <li>Reintenta conexión con intervalos crecientes</li>
                            <li>Sincroniza datos pendientes al recuperar conexión</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Diagrama de Arquitectura</h3>
                <div className="bg-muted p-4 rounded-md overflow-auto">
                  <pre className="text-xs">
                    {`+-------------------+
|                   |
|   Arduino Mega    |
|                   |
+--------+----------+
         |
  +------+------+
  |             |
+-+--+  +-----+ |      +-------+
|LCD |  |Huella| +------+ WiFi |----> Internet ---> Servidor Web
+----+  +-----+ |      +-------+
         |      |
      +--+--+   |
      |Teclado| |
      +-----+   |
         |      |
+-------++------+--------+
|LEDs   |RTC    |SD Card |
+-------+-------+--------+`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocol">
          <Card>
            <CardHeader>
              <CardTitle>Protocolo de Comunicación</CardTitle>
              <CardDescription>Especificaciones del protocolo utilizado entre dispositivos y servidor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Características Generales</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Protocolo: HTTP/HTTPS</li>
                  <li>Formato de datos: JSON</li>
                  <li>Autenticación: Token-based</li>
                  <li>Seguridad: TLS/SSL para cifrado</li>
                  <li>Manejo de errores: Códigos HTTP estándar + mensajes específicos</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Autenticación</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">Proceso de autenticación:</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Cada dispositivo tiene un ID único y una clave privada preconfigurados</li>
                    <li>Al iniciar, el dispositivo envía sus credenciales al servidor</li>
                    <li>El servidor valida las credenciales y genera un token de sesión</li>
                    <li>El dispositivo utiliza este token en todas las solicitudes posteriores</li>
                    <li>El token expira después de un período configurable (por defecto 24 horas)</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Ejemplo de solicitud de autenticación:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`POST /api/devices/auth
Content-Type: application/json

{
  "device_id": "AIC001",
  "device_key": "a1b2c3d4e5f6g7h8i9j0",
  "device_info": {
    "model": "Arduino Mega 2560",
    "firmware": "v1.2.3",
    "mac": "AA:BB:CC:DD:EE:FF"
  }
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Ejemplo de respuesta:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_at": "2025-04-17T10:44:29Z",
  "server_time": "2025-04-16T10:44:29Z"
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Formato de Mensajes</h3>

                <div className="space-y-2">
                  <h4 className="font-medium">Heartbeat (latido):</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`POST /api/devices/heartbeat
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "device_id": "AIC001",
  "status": "online",
  "timestamp": "2025-04-16T08:35:00Z",
  "metrics": {
    "battery": 85,
    "memory_free": 8450,
    "storage_free": 3145728,
    "temperature": 26,
    "uptime": 86400
  }
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Registro de marcación:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`POST /api/attendance
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "device_id": "AIC001",
  "employee_id": "1234567890",
  "timestamp": "2025-04-16T08:30:25Z",
  "type": "entry",
  "verification_method": "fingerprint",
  "verification_score": 98,
  "device_status": {
    "battery": 85,
    "memory_usage": 15,
    "temperature": 26
  }
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Consulta de comandos pendientes:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`GET /api/devices/AIC001/commands
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta de comandos:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`{
  "commands": [
    {
      "id": "cmd123",
      "action": "sync_time",
      "params": {
        "server_time": "2025-04-16T10:44:29Z"
      },
      "priority": "high"
    },
    {
      "id": "cmd124",
      "action": "enroll_mode",
      "params": {
        "employee_id": 123,
        "timeout": 60
      },
      "priority": "normal"
    }
  ]
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Confirmación de ejecución de comando:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`POST /api/devices/commands/cmd123/result
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "device_id": "AIC001",
  "command_id": "cmd123",
  "status": "completed",
  "timestamp": "2025-04-16T10:45:00Z",
  "result": {
    "success": true,
    "message": "Hora sincronizada correctamente"
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints">
          <Card>
            <CardHeader>
              <CardTitle>Endpoints de la API</CardTitle>
              <CardDescription>Listado de endpoints disponibles para la comunicación con dispositivos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Método</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>Autenticación</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">/api/devices/auth</TableCell>
                        <TableCell>POST</TableCell>
                        <TableCell>Autenticación inicial del dispositivo</TableCell>
                        <TableCell>ID y clave del dispositivo</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">/api/devices/heartbeat</TableCell>
                        <TableCell>POST</TableCell>
                        <TableCell>Envío periódico de estado del dispositivo</TableCell>
                        <TableCell>Token</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">/api/attendance</TableCell>
                        <TableCell>POST</TableCell>
                        <TableCell>Registro de marcaciones de entrada/salida</TableCell>
                        <TableCell>Token</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">/api/devices/{"{device_id}"}/commands</TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>Consulta de comandos pendientes</TableCell>
                        <TableCell>Token</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">/api/devices/commands/{"{command_id}"}/result</TableCell>
                        <TableCell>POST</TableCell>
                        <TableCell>Confirmación de ejecución de comandos</TableCell>
                        <TableCell>Token</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">/api/devices/{"{device_id}"}/sync</TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>Sincronización de datos (empleados, huellas)</TableCell>
                        <TableCell>Token</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">/api/devices/{"{device_id}"}/firmware</TableCell>
                        <TableCell>GET</TableCell>
                        <TableCell>Verificación y descarga de actualizaciones</TableCell>
                        <TableCell>Token</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Detalles de Endpoints</h3>

                  <div className="space-y-2">
                    <h4 className="font-medium">1. Autenticación</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                      {`POST /api/devices/auth

Solicitud:
{
  "device_id": "AIC001",
  "device_key": "a1b2c3d4e5f6g7h8i9j0",
  "device_info": {
    "model": "Arduino Mega 2560",
    "firmware": "v1.2.3",
    "mac": "AA:BB:CC:DD:EE:FF"
  }
}

Respuesta:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_at": "2025-04-17T10:44:29Z",
  "server_time": "2025-04-16T10:44:29Z"
}`}
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">2. Registro de Marcaciones</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                      {`POST /api/attendance

Solicitud:
{
  "device_id": "AIC001",
  "employee_id": "1234567890",
  "timestamp": "2025-04-16T08:30:25Z",
  "type": "entry", // o "exit"
  "verification_method": "fingerprint", // o "code"
  "verification_score": 98,
  "device_status": {
    "battery": 85,
    "memory_usage": 15,
    "temperature": 26
  }
}

Respuesta:
{
  "success": true,
  "record_id": "rec123456",
  "employee_name": "Carlos Pérez",
  "message": "Entrada registrada correctamente"
}`}
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">3. Consulta de Comandos</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                      {`GET /api/devices/AIC001/commands

Respuesta:
{
  "commands": [
    {
      "id": "cmd123",
      "action": "sync_time",
      "params": {
        "server_time": "2025-04-16T10:44:29Z"
      },
      "priority": "high"
    },
    {
      "id": "cmd124",
      "action": "enroll_mode",
      "params": {
        "employee_id": 123,
        "timeout": 60
      },
      "priority": "normal"
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Manejo de Errores</CardTitle>
              <CardDescription>Estrategias para el manejo de errores y fallos de conectividad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Códigos de Error</h3>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Código HTTP</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>Acción del Dispositivo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>400 Bad Request</TableCell>
                        <TableCell>Solicitud mal formada o datos inválidos</TableCell>
                        <TableCell>Revisar formato de datos y reintentar</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>401 Unauthorized</TableCell>
                        <TableCell>Token inválido o expirado</TableCell>
                        <TableCell>Solicitar nuevo token de autenticación</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>403 Forbidden</TableCell>
                        <TableCell>Acceso denegado al recurso</TableCell>
                        <TableCell>Registrar error y notificar al usuario</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>404 Not Found</TableCell>
                        <TableCell>Recurso no encontrado</TableCell>
                        <TableCell>Verificar URL y parámetros</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>429 Too Many Requests</TableCell>
                        <TableCell>Límite de solicitudes excedido</TableCell>
                        <TableCell>Implementar backoff exponencial</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>500 Internal Server Error</TableCell>
                        <TableCell>Error en el servidor</TableCell>
                        <TableCell>Reintentar con backoff exponencial</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Manejo de Fallos de Conectividad</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">Estrategia de almacenamiento local:</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Detectar pérdida de conexión (timeout en solicitudes HTTP)</li>
                    <li>Cambiar a modo offline automáticamente</li>
                    <li>
                      Almacenar marcaciones en la tarjeta SD con formato CSV:
                      <pre className="bg-muted p-2 rounded-md text-xs mt-1">
                        employee_id,timestamp,type,verification_method,verification_score
                      </pre>
                    </li>
                    <li>Mostrar indicación visual en la pantalla LCD (ícono de desconexión)</li>
                    <li>Activar LED rojo intermitente para indicar modo offline</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Estrategia de reconexión:</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      Intentar reconexión periódica con intervalos crecientes:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Primer intento: 30 segundos</li>
                        <li>Segundo intento: 1 minuto</li>
                        <li>Tercer intento: 2 minutos</li>
                        <li>Cuarto intento en adelante: 5 minutos</li>
                      </ul>
                    </li>
                    <li>
                      Al recuperar conexión:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Solicitar nuevo token de autenticación</li>
                        <li>Sincronizar hora con el servidor</li>
                        <li>Enviar registros pendientes de la tarjeta SD</li>
                        <li>Actualizar configuración y base de datos local</li>
                      </ul>
                    </li>
                    <li>
                      Confirmar sincronización exitosa:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Eliminar registros sincronizados de la SD</li>
                        <li>Mostrar mensaje de confirmación en LCD</li>
                        <li>Activar LED verde para indicar reconexión</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Ejemplo de formato de registro offline:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                    {`# Archivo: RECORDS_20250416.CSV
# Formato: employee_id,timestamp,type,verification_method,verification_score
1234567890,2025-04-16T08:30:25,entry,fingerprint,98
9876543210,2025-04-16T08:45:12,entry,fingerprint,95
1234567890,2025-04-16T17:15:30,exit,fingerprint,97`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Seguridad</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Toda la comunicación debe usar HTTPS/SSL para cifrado</li>
                  <li>Los tokens de autenticación deben renovarse periódicamente</li>
                  <li>Las plantillas de huellas digitales deben almacenarse en formato encriptado</li>
                  <li>Implementar verificación de integridad en actualizaciones de firmware</li>
                  <li>Limitar el número de intentos de autenticación fallidos</li>
                  <li>Registrar todos los eventos de seguridad en un log local</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
