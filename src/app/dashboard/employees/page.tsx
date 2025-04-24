import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Plus, Search, FileDown, FileUp, Fingerprint, MoreHorizontal, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function EmployeesPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Empleados</h1>
          <p className="text-muted-foreground">Gestión de empleados y huellas dactilares</p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Empleado
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Lista de Empleados</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar..." className="w-full pl-8 sm:w-[200px]" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <FileDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <FileUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cédula</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Apellido</TableHead>
                  <TableHead className="hidden md:table-cell">Estado</TableHead>
                  <TableHead className="hidden md:table-cell">Huella</TableHead>
                  <TableHead className="hidden lg:table-cell">Fecha Registro</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employeesData.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium">{employee.cedula}</TableCell>
                    <TableCell>{employee.nombre}</TableCell>
                    <TableCell>{employee.apellido}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge
                        variant={employee.activo ? "default" : "secondary"}
                        className={employee.activo ? "bg-green-500" : ""}
                      >
                        {employee.activo ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {employee.huellaDactilar ? (
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        >
                          <Fingerprint className="mr-1 h-3 w-3" />
                          Registrada
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        >
                          Pendiente
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">{formatDate(employee.fechaRegistro)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem className={!employee.huellaDactilar ? "text-primary font-medium" : ""}>
                            <Fingerprint className="mr-2 h-4 w-4" />
                            {employee.huellaDactilar ? "Actualizar huella" : "Registrar huella"}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            {employee.activo ? "Desactivar" : "Activar"}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Datos de ejemplo
const employeesData = [
  {
    id: 1,
    cedula: "V-12345678",
    nombre: "Carlos",
    apellido: "Pérez",
    huellaDactilar: "hash123",
    activo: true,
    fechaRegistro: new Date("2023-01-15"),
  },
  {
    id: 2,
    cedula: "V-23456789",
    nombre: "María",
    apellido: "González",
    huellaDactilar: "hash456",
    activo: true,
    fechaRegistro: new Date("2023-02-20"),
  },
  {
    id: 3,
    cedula: "V-34567890",
    nombre: "Juan",
    apellido: "Rodríguez",
    huellaDactilar: null,
    activo: true,
    fechaRegistro: new Date("2023-03-10"),
  },
  {
    id: 4,
    cedula: "V-45678901",
    nombre: "Ana",
    apellido: "Martínez",
    huellaDactilar: "hash789",
    activo: false,
    fechaRegistro: new Date("2023-01-05"),
  },
  {
    id: 5,
    cedula: "V-56789012",
    nombre: "Luis",
    apellido: "Sánchez",
    huellaDactilar: "hash101",
    activo: true,
    fechaRegistro: new Date("2023-04-12"),
  },
]

// Función para formatear fechas
function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}
