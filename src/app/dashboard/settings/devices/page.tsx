"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Server, RefreshCw, Plus, SettingsIcon, Power, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Datos de ejemplo
const mockDevices = [
  {
    id: "dev-001",
    name: "Dispositivo Principal",
    location: "Entrada Principal",
    status: "online",
    ipAddress: "192.168.1.100",
    lastSync: "2023-05-15T08:30:00",
    firmware: "v1.2.3",
    batteryLevel: 85,
    sdCardSpace: 75,
    registrations: 1245,
    errors: 2,
  },
  {
    id: "dev-002",
    name: "Dispositivo Secundario",
    location: "Entrada Lateral",
    status: "online",
    ipAddress: "192.168.1.101",
    lastSync: "2023-05-15T08:25:00",
    firmware: "v1.2.3",
    batteryLevel: 92,
    sdCardSpace: 60,
    registrations: 890,
    errors: 0,
  },
  {
    id: "dev-003",
    name: "Dispositivo Cafetería",
    location: "Cafetería",
    status: "offline",
    ipAddress: "192.168.1.102",
    lastSync: "2023-05-14T17:45:00",
    firmware: "v1.2.2",
    batteryLevel: 15,
    sdCardSpace: 90,
    registrations: 456,
    errors: 5,
  },
]

export default function DevicesPage() {
  const [devices, setDevices] = useState(mockDevices)
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null)
  const [isAddingDevice, setIsAddingDevice] = useState(false)

  const getDeviceById = (id: string) => {
    return devices.find((device) => device.id === id) || null
  }

  const handleRefresh = () => {
    // Simulación de actualización de estado
    setTimeout(() => {
      const updatedDevices = [...devices]
      // Actualizar algún dispositivo aleatoriamente
      const randomIndex = Math.floor(Math.random() * devices.length)
      updatedDevices[randomIndex] = {
        ...updatedDevices[randomIndex],
        lastSync: new Date().toISOString(),
      }
      setDevices(updatedDevices)
    }, 1000)
  }

  const handleReboot = (deviceId: string) => {
    // Simulación de reinicio
    setTimeout(() => {
      const updatedDevices = devices.map((device) =>
        device.id === deviceId ? { ...device, status: "offline" } : device,
      )
      setDevices(updatedDevices)

      // Simular que vuelve online después de un tiempo
      setTimeout(() => {
        const rebootedDevices = devices.map((device) =>
          device.id === deviceId ? { ...device, status: "online", lastSync: new Date().toISOString() } : device,
        )
        setDevices(rebootedDevices)
      }, 5000)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dispositivos</h1>
          <p className="text-muted-foreground">Gestión de dispositivos biométricos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleRefresh}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualizar
          </Button>
          <Dialog open={isAddingDevice} onOpenChange={setIsAddingDevice}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Nuevo Dispositivo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Añadir Nuevo Dispositivo</DialogTitle>
                <DialogDescription>Ingrese los detalles del nuevo dispositivo biométrico.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nombre
                  </Label>
                  <Input id="name" placeholder="Dispositivo" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Ubicación
                  </Label>
                  <Input id="location" placeholder="Entrada principal" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="ip" className="text-right">
                    Dirección IP
                  </Label>
                  <Input id="ip" placeholder="192.168.1.100" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="token" className="text-right">
                    Token
                  </Label>
                  <Input id="token" placeholder="Token de autenticación" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddingDevice(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setIsAddingDevice(false)}>Guardar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-6">
        {devices.map((device) => (
          <Card
            key={device.id}
            className={`overflow-hidden ${device.status === "offline" ? "border-red-200 dark:border-red-800" : ""}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className={`h-5 w-5 ${device.status === "online" ? "text-green-500" : "text-red-500"}`} />
                  <CardTitle>{device.name}</CardTitle>
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
              <CardDescription>
                {device.location} • IP: {device.ipAddress}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="info">
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="info">Información</TabsTrigger>
                  <TabsTrigger value="stats">Estadísticas</TabsTrigger>
                  <TabsTrigger value="config">Configuración</TabsTrigger>
                  <TabsTrigger value="logs">Registros</TabsTrigger>
                </TabsList>
                <TabsContent value="info" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Firmware</p>
                      <p className="text-sm font-medium">{device.firmware}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Última sincronización</p>
                      <p className="text-sm font-medium">{new Date(device.lastSync).toLocaleString()}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Batería</p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              device.batteryLevel > 60
                                ? "bg-green-500"
                                : device.batteryLevel > 20
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${device.batteryLevel}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{device.batteryLevel}%</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">Espacio SD</p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              device.sdCardSpace < 80
                                ? "bg-green-500"
                                : device.sdCardSpace < 95
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${device.sdCardSpace}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{device.sdCardSpace}%</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="stats" className="pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Registros Totales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{device.registrations}</div>
                        <p className="text-xs text-muted-foreground">Marcaciones realizadas</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Errores</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{device.errors}</div>
                        <p className="text-xs text-muted-foreground">Fallos detectados</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="config" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Modo Offline</Label>
                        <p className="text-xs text-muted-foreground">Permitir almacenamiento local</p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Sincronización Automática</Label>
                        <p className="text-xs text-muted-foreground">Enviar datos periódicamente</p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="space-y-2">
                      <Label>Intervalo de Sincronización</Label>
                      <Select defaultValue="5">
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar intervalo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 minuto</SelectItem>
                          <SelectItem value="5">5 minutos</SelectItem>
                          <SelectItem value="15">15 minutos</SelectItem>
                          <SelectItem value="30">30 minutos</SelectItem>
                          <SelectItem value="60">1 hora</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="logs" className="pt-4">
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Fecha</TableHead>
                          <TableHead>Evento</TableHead>
                          <TableHead>Detalles</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>{new Date().toLocaleString()}</TableCell>
                          <TableCell>Sincronización</TableCell>
                          <TableCell>Datos enviados correctamente</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{new Date(Date.now() - 3600000).toLocaleString()}</TableCell>
                          <TableCell>Registro</TableCell>
                          <TableCell>10 marcaciones procesadas</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{new Date(Date.now() - 7200000).toLocaleString()}</TableCell>
                          <TableCell>Error</TableCell>
                          <TableCell>Fallo de conexión - reintentando</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleReboot(device.id)}>
                  <Power className="mr-2 h-4 w-4" />
                  Reiniciar
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Actualizar Firmware
                </Button>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelectedDevice(device.id)}>
                <SettingsIcon className="mr-2 h-4 w-4" />
                Configuración Avanzada
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Diálogo de configuración avanzada */}
      <Dialog open={!!selectedDevice} onOpenChange={(open) => !open && setSelectedDevice(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Configuración Avanzada</DialogTitle>
            <DialogDescription>
              {selectedDevice && getDeviceById(selectedDevice)?.name} -{" "}
              {selectedDevice && getDeviceById(selectedDevice)?.location}
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="network">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="network">Red</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
              <TabsTrigger value="sensors">Sensores</TabsTrigger>
            </TabsList>
            <TabsContent value="network" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ip-address">Dirección IP</Label>
                  <Input
                    id="ip-address"
                    defaultValue={selectedDevice ? getDeviceById(selectedDevice)?.ipAddress : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subnet-mask">Máscara de Subred</Label>
                  <Input id="subnet-mask" defaultValue="255.255.255.0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gateway">Puerta de Enlace</Label>
                  <Input id="gateway" defaultValue="192.168.1.1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dns">Servidor DNS</Label>
                  <Input id="dns" defaultValue="8.8.8.8" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>DHCP</Label>
                  <p className="text-xs text-muted-foreground">Obtener IP automáticamente</p>
                </div>
                <Switch defaultChecked={false} />
              </div>
            </TabsContent>
            <TabsContent value="security" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="token">Token de Autenticación</Label>
                <div className="flex gap-2">
                  <Input id="token" defaultValue="a1b2c3d4e5f6g7h8i9j0" type="password" />
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Token único para autenticar el dispositivo con el servidor
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Conexión Segura (SSL/TLS)</Label>
                  <p className="text-xs text-muted-foreground">Cifrar comunicación con el servidor</p>
                </div>
                <Switch defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Modo Administrador Local</Label>
                  <p className="text-xs text-muted-foreground">Permitir configuración desde el dispositivo</p>
                </div>
                <Switch defaultChecked={false} />
              </div>
            </TabsContent>
            <TabsContent value="sensors" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="fingerprint-sensitivity">Sensibilidad del Sensor de Huella</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="fingerprint-sensitivity">
                    <SelectValue placeholder="Seleccionar sensibilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Baja</SelectItem>
                    <SelectItem value="medium">Media</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lcd-brightness">Brillo de Pantalla LCD</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="lcd-brightness">
                    <SelectValue placeholder="Seleccionar brillo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Bajo</SelectItem>
                    <SelectItem value="medium">Medio</SelectItem>
                    <SelectItem value="high">Alto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sonido</Label>
                  <p className="text-xs text-muted-foreground">Activar buzzer para notificaciones</p>
                </div>
                <Switch defaultChecked={true} />
              </div>
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedDevice(null)}>
              Cancelar
            </Button>
            <Button onClick={() => setSelectedDevice(null)}>Guardar Cambios</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
