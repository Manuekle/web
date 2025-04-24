import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Plus, Search, FileDown, MoreHorizontal, Clock, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function VisitorsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Visitantes</h1>
          <p className="text-muted-foreground">Gestión de visitantes y registros de acceso</p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Visitante
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Lista de Visitantes</CardTitle>
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
                  <TableHead className="hidden md:table-cell">Empresa</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="hidden lg:table-cell">Fecha Registro</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visitorsData.map((visitor) => (
                  <TableRow key={visitor.id}>
                    <TableCell className="font-medium">{visitor.cedula}</TableCell>
                    <TableCell>{visitor.nombre}</TableCell>
                    <TableCell>{visitor.apellido}</TableCell>
                    <TableCell className="hidden md:table-cell">{visitor.empresa || "-"}</TableCell>
                    <TableCell>
                      <Badge
                        variant={visitor.estado === "Presente" ? "default" : "secondary"}
                        className={visitor.estado === "Presente" ? "bg-green-500" : ""}
                      >
                        {visitor.estado}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">{formatDate(visitor.fechaRegistro)}</TableCell>
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
                          {visitor.estado === "Presente" ? (
                            <DropdownMenuItem>
                              <Clock className="mr-2 h-4 w-4" />
                              Registrar salida
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Clock className="mr-2 h-4 w-4" />
                              Registrar entrada
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
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
const visitorsData = [
  {
    id: 1,
    cedula: "V-87654321",
    nombre: "Roberto",
    apellido: "Gómez",
    empresa: "Empresa ABC",
    estado: "Presente",
    fechaRegistro: new Date("2023-05-15"),
  },
  {
    id: 2,
    cedula: "V-76543210",
    nombre: "Laura",
    apellido: "Díaz",
    empresa: "Consultores XYZ",
    estado: "Ausente",
    fechaRegistro: new Date("2023-05-14"),
  },
  {
    id: 3,
    cedula: "V-65432109",
    nombre: "Pedro",
    apellido: "Fernández",
    empresa: null,
    estado: "Ausente",
    fechaRegistro: new Date("2023-05-10"),
  },
  {
    id: 4,
    cedula: "V-54321098",
    nombre: "Sofía",
    apellido: "Torres",
    empresa: "Servicios Técnicos",
    estado: "Presente",
    fechaRegistro: new Date("2023-05-15"),
  },
  {
    id: 5,
    cedula: "V-43210987",
    nombre: "Miguel",
    apellido: "Ramírez",
    empresa: "Constructora ABC",
    estado: "Ausente",
    fechaRegistro: new Date("2023-05-12"),
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
