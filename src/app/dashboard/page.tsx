import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck, UserX, Clock, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido al sistema de control de asistencia</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Presentes</CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+2 desde ayer</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ausentes</CardTitle>
            <UserX className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">-1 desde ayer</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 desde ayer</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registros Tardíos</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 desde ayer</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg">Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivityTable />
          </CardContent>
        </Card>
        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg">Dispositivos Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <DeviceStatusList />
          </CardContent>
        </Card>
      </div>
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
          <div key={index} className="grid grid-cols-3 items-center p-3 text-sm">
            <div className="font-medium">{item.name}</div>
            <div>
              <Badge
                variant="outline"
                className={
                  item.type === "ENTRADA"
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                }
              >
                {item.type}
              </Badge>
            </div>
            <div>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DeviceStatusList() {
  return (
    <div className="space-y-3">
      {[
        { name: "Dispositivo Principal", location: "Entrada Principal", status: "online" },
        { name: "Dispositivo Secundario", location: "Entrada Lateral", status: "online" },
        { name: "Dispositivo Cafetería", location: "Cafetería", status: "offline" },
      ].map((device, index) => (
        <div key={index} className="flex items-center justify-between space-x-4 rounded-md border p-3">
          <div className="space-y-0.5">
            <p className="text-sm font-medium leading-none">{device.name}</p>
            <p className="text-xs text-muted-foreground">{device.location}</p>
          </div>
          <Badge
            variant="outline"
            className={
              device.status === "online"
                ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            }
          >
            <div
              className={`mr-1 h-2 w-2 rounded-full ${device.status === "online" ? "bg-green-500" : "bg-red-500"}`}
            />
            {device.status === "online" ? "Conectado" : "Desconectado"}
          </Badge>
        </div>
      ))}
    </div>
  )
}
