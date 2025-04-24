import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileDown, Calendar, Printer, Users, Clock, UserCheck } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Reportes</h1>
        <p className="text-muted-foreground">Generación de reportes y estadísticas</p>
      </div>

      <Tabs defaultValue="asistencia" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="asistencia" className="flex-1 sm:flex-none">
            Asistencia
          </TabsTrigger>
          <TabsTrigger value="empleados" className="flex-1 sm:flex-none">
            Empleados
          </TabsTrigger>
          <TabsTrigger value="visitantes" className="flex-1 sm:flex-none">
            Visitantes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="asistencia">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ReportCard title="Reporte Diario" description="Asistencia por día" icon={Clock} />
            <ReportCard title="Reporte Semanal" description="Resumen de la semana" icon={Calendar} />
            <ReportCard title="Reporte Mensual" description="Estadísticas mensuales" icon={Calendar} />
          </div>
        </TabsContent>

        <TabsContent value="empleados">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ReportCard title="Listado de Empleados" description="Información completa" icon={Users} />
            <ReportCard title="Empleados por Departamento" description="Distribución organizacional" icon={Users} />
            <ReportCard title="Huellas Registradas" description="Estado de registros biométricos" icon={UserCheck} />
          </div>
        </TabsContent>

        <TabsContent value="visitantes">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ReportCard title="Registro de Visitantes" description="Historial de visitas" icon={Users} />
            <ReportCard title="Visitas por Empresa" description="Agrupado por compañía" icon={Users} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ReportCardProps {
  title: string
  description: string
  icon: React.ElementType
}

function ReportCard({ title, description, icon: Icon }: ReportCardProps) {
  return (
    <Card className="overflow-hidden border-t-4 border-t-primary">
      <CardHeader className="bg-primary/5 pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-full bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Select defaultValue="current">
              <SelectTrigger>
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Mes Actual</SelectItem>
                <SelectItem value="previous">Mes Anterior</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Formato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-2">
            <Button className="flex-1">
              <FileDown className="mr-2 h-4 w-4" />
              Descargar
            </Button>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
