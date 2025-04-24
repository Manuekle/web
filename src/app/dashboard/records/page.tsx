import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, FileDown, Calendar, Filter, Fingerprint } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecordsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Registros</h1>
        <p className="text-muted-foreground">Historial de registros de asistencia</p>
      </div>

      <Tabs defaultValue="empleados" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="empleados" className="flex-1 sm:flex-none">
            Empleados
          </TabsTrigger>
          <TabsTrigger value="visitantes" className="flex-1 sm:flex-none">
            Visitantes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="empleados">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Registros de Asistencia</CardTitle>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Buscar..." className="w-full pl-8 sm:w-[200px]" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FileDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Tipo de Registro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="ENTRADA">Entrada</SelectItem>
                    <SelectItem value="SALIDA">Salida</SelectItem>
                    <SelectItem value="PERMISO">Permiso</SelectItem>
                    <SelectItem value="COMISION">Comisión</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Método de Registro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="HUELLA">Huella</SelectItem>
                    <SelectItem value="CEDULA">Cédula</SelectItem>
                    <SelectItem value="MANUAL">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Empleado</TableHead>
                      <TableHead className="hidden md:table-cell">Cédula</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead className="hidden md:table-cell">Método</TableHead>
                      <TableHead>Fecha y Hora</TableHead>
                      <TableHead className="hidden lg:table-cell">Observación</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{`${record.empleado.nombre} ${record.empleado.apellido}`}</TableCell>
                        <TableCell className="hidden md:table-cell">{record.empleado.cedula}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getBadgeClass(record.tipoRegistro)}>
                            {record.tipoRegistro}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge
                            variant="outline"
                            className={
                              record.metodoRegistro === "HUELLA"
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                : record.metodoRegistro === "CEDULA"
                                  ? "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                  : "bg-gray-50 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                            }
                          >
                            <Fingerprint
                              className={`mr-1 h-3 w-3 ${record.metodoRegistro === "HUELLA" ? "inline-block" : "hidden"}`}
                            />
                            {record.metodoRegistro}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDateTime(record.fecha)}</TableCell>
                        <TableCell className="hidden lg:table-cell">{record.observacion || "-"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visitantes">
          <Card>
            <CardHeader>
              <CardTitle>Registros de Visitantes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-6 text-muted-foreground">
                Seleccione esta pestaña para ver los registros de visitantes
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Datos de ejemplo
const attendanceRecords = [
  {
    id: 1,
    empleado: {
      nombre: "Carlos",
      apellido: "Pérez",
      cedula: "V-12345678",
    },
    tipoRegistro: "ENTRADA",
    metodoRegistro: "HUELLA",
    fecha: new Date("2023-05-15T08:02:00"),
    observacion: null,
  },
  {
    id: 2,
    empleado: {
      nombre: "María",
      apellido: "González",
      cedula: "V-23456789",
    },
    tipoRegistro: "ENTRADA",
    metodoRegistro: "HUELLA",
    fecha: new Date("2023-05-15T08:15:00"),
    observacion: null,
  },
  {
    id: 3,
    empleado: {
      nombre: "Juan",
      apellido: "Rodríguez",
      cedula: "V-34567890",
    },
    tipoRegistro: "SALIDA",
    metodoRegistro: "CEDULA",
    fecha: new Date("2023-05-15T12:30:00"),
    observacion: "Salida para almuerzo",
  },
  {
    id: 4,
    empleado: {
      nombre: "Ana",
      apellido: "Martínez",
      cedula: "V-45678901",
    },
    tipoRegistro: "ENTRADA",
    metodoRegistro: "HUELLA",
    fecha: new Date("2023-05-15T13:05:00"),
    observacion: "Regreso de almuerzo",
  },
  {
    id: 5,
    empleado: {
      nombre: "Luis",
      apellido: "Sánchez",
      cedula: "V-56789012",
    },
    tipoRegistro: "SALIDA",
    metodoRegistro: "HUELLA",
    fecha: new Date("2023-05-15T17:00:00"),
    observacion: null,
  },
]

// Función para formatear fechas con hora
function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

// Función para obtener la clase de estilo para los badges según el tipo de registro
function getBadgeClass(tipo: string) {
  switch (tipo) {
    case "ENTRADA":
      return "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    case "SALIDA":
      return "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    case "PERMISO":
      return "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
    case "COMISION":
      return "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
    default:
      return ""
  }
}
