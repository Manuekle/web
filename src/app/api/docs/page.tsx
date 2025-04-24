import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ApiDocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documentación API</h1>
        <p className="text-muted-foreground">Referencia para la integración con dispositivos Arduino</p>
      </div>

      <Tabs defaultValue="auth" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="auth" className="flex-1 sm:flex-none">
            Autenticación
          </TabsTrigger>
          <TabsTrigger value="devices" className="flex-1 sm:flex-none">
            Dispositivos
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex-1 sm:flex-none">
            Asistencia
          </TabsTrigger>
          <TabsTrigger value="fingerprints" className="flex-1 sm:flex-none">
            Huellas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="auth">
          <Card>
            <CardHeader>
              <CardTitle>Autenticación de Dispositivos</CardTitle>
              <CardDescription>Proceso para autenticar dispositivos Arduino con el servidor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Endpoint: POST /api/devices</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Este endpoint permite a los dispositivos Arduino autenticarse con el servidor.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Solicitud:</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  {`{
  "token": "a1b2c3d4e5f6g7h8i9j0",
  "deviceInfo": {
    "mac": "AA:BB:CC:DD:EE:FF",
    "firmware": "v1.2.3",
    "batteryLevel": 85
  }
}`}
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Respuesta exitosa:</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  {`{
  "success": true,
  "deviceId": "dev-001",
  "serverTime": "2023-05-15T08:30:00.000Z"
}`}
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Respuesta de error:</h4>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  {`{
  "error": "Dispositivo no autorizado"
}`}
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Notas:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Cada dispositivo debe tener un token único asignado desde la interfaz web.</li>
                  <li>El token debe mantenerse seguro y no debe compartirse.</li>
                  <li>La respuesta incluye la hora del servidor para sincronización.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>API de Dispositivos</CardTitle>
              <CardDescription>Endpoints para gestionar dispositivos Arduino</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">GET /api/devices/{"{id}"}</h3>
                <p className="text-sm text-muted-foreground">Obtiene la configuración de un dispositivo específico.</p>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "id": "dev-001",
  "name": "Dispositivo Principal",
  "status": "online",
  "lastSync": "2023-05-15T08:30:00.000Z",
  "config": {
    "offlineMode": true,
    "syncInterval": 5,
    "fingerprintSensitivity": "medium",
    "lcdBrightness": "medium",
    "sound": true
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">PATCH /api/devices/{"{id}"}</h3>
                <p className="text-sm text-muted-foreground">Actualiza el estado o configuración de un dispositivo.</p>

                <div className="space-y-2">
                  <h4 className="font-medium">Solicitud:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "status": "online",
  "config": {
    "syncInterval": 15
  }
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "success": true,
  "device": {
    "id": "dev-001",
    "name": "Dispositivo Principal",
    "status": "online",
    "lastSync": "2023-05-15T08:35:00.000Z",
    "config": {
      "offlineMode": true,
      "syncInterval": 15,
      "fingerprintSensitivity": "medium",
      "lcdBrightness": "medium",
      "sound": true
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>API de Asistencia</CardTitle>
              <CardDescription>Endpoints para registrar y consultar marcaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">POST /api/attendance</h3>
                <p className="text-sm text-muted-foreground">Registra una nueva marcación de asistencia.</p>

                <div className="space-y-2">
                  <h4 className="font-medium">Solicitud:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "empleadoId": 1,
  "metodoRegistro": "HUELLA",
  "deviceId": "dev-001",
  "observacion": "Registro automático"
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "success": true,
  "record": {
    "id": 3,
    "empleadoId": 1,
    "tipoRegistro": "ENTRADA",
    "metodoRegistro": "HUELLA",
    "fecha": "2023-05-15T09:00:00.000Z",
    "observacion": "Registro automático",
    "deviceId": "dev-001"
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">GET /api/attendance</h3>
                <p className="text-sm text-muted-foreground">
                  Consulta registros de asistencia con filtros opcionales.
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium">Parámetros:</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Parámetro</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descripción</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>empleadoId</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>Filtrar por ID de empleado</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>fecha</TableCell>
                        <TableCell>string (ISO)</TableCell>
                        <TableCell>Filtrar por fecha específica</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>deviceId</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell>Filtrar por ID de dispositivo</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "records": [
    {
      "id": 1,
      "empleadoId": 1,
      "tipoRegistro": "ENTRADA",
      "metodoRegistro": "HUELLA",
      "fecha": "2023-05-15T08:02:00.000Z",
      "observacion": null,
      "deviceId": "dev-001"
    },
    {
      "id": 2,
      "empleadoId": 2,
      "tipoRegistro": "ENTRADA",
      "metodoRegistro": "HUELLA",
      "fecha": "2023-05-15T08:15:00.000Z",
      "observacion": null,
      "deviceId": "dev-001"
    }
  ]
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fingerprints">
          <Card>
            <CardHeader>
              <CardTitle>API de Huellas Dactilares</CardTitle>
              <CardDescription>Endpoints para gestionar huellas dactilares</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">POST /api/fingerprints</h3>
                <p className="text-sm text-muted-foreground">Registra o actualiza la huella dactilar de un empleado.</p>

                <div className="space-y-2">
                  <h4 className="font-medium">Solicitud:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "empleadoId": 1,
  "template": "hash123"
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta:</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "success": true,
  "message": "Huella registrada correctamente",
  "fingerprint": {
    "id": 1,
    "empleadoId": 1,
    "template": "hash123",
    "createdAt": "2023-05-15T10:00:00.000Z"
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">GET /api/fingerprints</h3>
                <p className="text-sm text-muted-foreground">
                  Obtiene la lista de empleados con huella registrada o la huella de un empleado específico.
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium">Parámetros:</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Parámetro</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descripción</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>empleadoId</TableCell>
                        <TableCell>number</TableCell>
                        <TableCell>ID del empleado (opcional)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta (sin empleadoId):</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "empleadosConHuella": [1, 2]
}`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Respuesta (con empleadoId):</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    {`{
  "fingerprint": {
    "id": 1,
    "empleadoId": 1,
    "template": "hash123",
    "createdAt": "2023-05-15T10:00:00.000Z"
  }
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
