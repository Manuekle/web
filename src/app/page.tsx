import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCheck, UserX, Clock, Users, CalendarClock, AlertTriangle } from "lucide-react"
import { redirect } from "next/navigation"

export default function Home() {
  // Redirigir a la página de login
  redirect("/login")
  return null
}

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Resumen del sistema de control de asistencia</p>
      </div>

      <Tabs defaultValue="hoy" className="space-y-4">
        <TabsList>
          <TabsTrigger value="hoy">Hoy</TabsTrigger>
          <TabsTrigger value="semana">Esta Semana</TabsTrigger>
          <TabsTrigger value="mes">Este Mes</TabsTrigger>
        </TabsList>
        <TabsContent value="hoy" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Presentes</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+2 desde ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ausentes</CardTitle>
                <UserX className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">-1 desde ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 desde ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Registros Tardíos</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 desde ayer</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimos registros de entrada y salida</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivityTable />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Dispositivos Activos</CardTitle>
                <CardDescription>Estado de los dispositivos de registro</CardDescription>
              </CardHeader>
              <CardContent>
                <DeviceStatusList />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="semana" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Asistencia Promedio</CardTitle>
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">+2% desde la semana pasada</p>
              </CardContent>
            </Card>
            {/* Más tarjetas para la vista semanal */}
          </div>
        </TabsContent>
        <TabsContent value="mes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Registros</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
              </CardContent>
            </Card>
            {/* Más tarjetas para la vista mensual */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RecentActivityTable() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground">
        <div>Empleado</div>
        <div>Tipo</div>
        <div>Hora</div>
      </div>
      <div className="divide-y divide-border rounded-md border">
        {[
          { name: "Carlos Pérez", type: "ENTRADA", time: "08:02 AM" },
          { name: "María González", type: "ENTRADA", time: "08:15 AM" },
          { name: "Juan Rodríguez", type: "SALIDA", time: "12:30 PM" },
          { name: "Ana Martínez", type: "ENTRADA", time: "13:05 PM" },
          { name: "Luis Sánchez", type: "SALIDA", time: "17:00 PM" },
        ].map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center p-4 text-sm">
            <div className="font-medium">{item.name}</div>
            <div className={item.type === "ENTRADA" ? "text-green-500" : "text-red-500"}>{item.type}</div>
            <div>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DeviceStatusList() {
  return (
    <div className="space-y-4">
      {[
        { name: "Dispositivo Principal", location: "Entrada Principal", status: "online" },
        { name: "Dispositivo Secundario", location: "Entrada Lateral", status: "online" },
        { name: "Dispositivo Cafetería", location: "Cafetería", status: "offline" },
      ].map((device, index) => (
        <div key={index} className="flex items-center justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{device.name}</p>
            <p className="text-sm text-muted-foreground">{device.location}</p>
          </div>
          <div className={`flex items-center ${device.status === "online" ? "text-green-500" : "text-red-500"}`}>
            <div
              className={`mr-1 h-2 w-2 rounded-full ${device.status === "online" ? "bg-green-500" : "bg-red-500"}`}
            />
            {device.status === "online" ? "Conectado" : "Desconectado"}
          </div>
        </div>
      ))}
    </div>
  )
}
