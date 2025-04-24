"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RefreshCw, Wifi, WifiOff, Battery, Thermometer, Database, Clock, AlertTriangle, Terminal } from "lucide-react"

// Datos simulados de dispositivos
const mockDevices = [
  {
    id: "AIC001",
    name: "Dispositivo Principal",
    location: "Entrada Principal",
    status: "online",
    lastHeartbeat: new Date().toISOString(),
    metrics: {
      battery: 85,
      memoryUsage: 15,
      temperature: 26,
      storageUsage: 25,
      uptime: 86400, // en segundos
      pendingRecords: 0,
      lastSyncTime: new Date().toISOString(),
    },
  },
  {
    id: "AIC002",
    name: "Dispositivo Secundario",
    location: "Entrada Lateral",
    status: "online",
    lastHeartbeat: new Date().toISOString(),
    metrics: {
      battery: 92,
      memoryUsage: 12,
      temperature: 24,
      storageUsage: 18,
      uptime: 172800, // en segundos
      pendingRecords: 0,
      lastSyncTime: new Date().toISOString(),
    },
  },
  {
    id: "AIC003",
    name: "Dispositivo Cafetería",
    location: "Cafetería",
    status: "offline",
    lastHeartbeat: new Date(Date.now() - 3600000).toISOString(), // 1 hora atrás
    metrics: {
      battery: 15,
      memoryUsage: 45,
      temperature: 28,
      storageUsage: 72,
      uptime: 43200, // en segundos
      pendingRecords: 23,
      lastSyncTime: new Date(Date.now() - 3600000).toISOString(),
    },
  },
]

// Datos simulados de eventos recientes
const mockEvents = [
  {
    deviceId: "AIC001",
    timestamp: new Date(Date.now() - 120000).toISOString(),
    type: "MARCACION",
    description: "Empleado: Carlos Pérez - Entrada",
  },
  {
    deviceId: "AIC002",
    timestamp: new Date(Date.now() - 180000).toISOString(),
    type: "MARCACION",
    description: "Empleado: María González - Entrada",
  },
  {
    deviceId: "AIC003",
    timestamp: new Date(Date.now() - 3540000).toISOString(),
    type: "ERROR",
    description: "Pérdida de conexión con el servidor",
  },
  {
    deviceId: "AIC001",
    timestamp: new Date(Date.now() - 600000).toISOString(),
    type: "COMANDO",
    description: "Sincronización de hora ejecutada",
  },
  {
    deviceId: "AIC002",
    timestamp: new Date(Date.now() - 900000).toISOString(),
    type: "SISTEMA",
    description: "Inicio de modo de registro de huella",
  },
]

export default function MonitoringPage() {
  const [devices, setDevices] = useState(mockDevices)
  const [events, setEvents] = useState(mockEvents)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulación de actualización periódica
  useEffect(() => {
    const interval = setInterval(() => {
      // Actualizar timestamps para simular datos en tiempo real
      const updatedDevices = devices.map((device) => {
        if (device.status === "online") {
          return {
            ...device,
            lastHeartbeat: new Date().toISOString(),
            metrics: {
              ...device.metrics,
              battery: Math.max(0, device.metrics.battery - 0.1), // Simular descarga gradual
              memoryUsage: Math.min(100, device.metrics.memoryUsage + (Math.random() > 0.5 ? 0.2 : -0.1)),
              uptime: device.metrics.uptime + 10, // 10 segundos más
            },
          }
        }
        return device
      })
      setDevices(updatedDevices)
    }, 10000) // Actualizar cada 10 segundos

    return () => clearInterval(interval)
  }, [devices])

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simular una actualización de datos
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1500)
  }

  // Formatear tiempo de actividad
  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m`
    } else if (hours > 0) {
      return `${hours}h ${minutes}m`
    } else {
      return `${minutes}m`
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Monitoreo en Tiempo Real</h1>
          <p className="text-muted-foreground">Estado de los dispositivos de control de asistencia</p>
        </div>
        <Button onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
          {isRefreshing ? "Actualizando..." : "Actualizar"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Resumen de Dispositivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>En línea</span>
                </div>
                <span className="font-medium">{devices.filter((d) => d.status === "online").length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Desconectados</span>
                </div>
                <span className="font-medium">{devices.filter((d) => d.status === "offline").length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>Con alertas</span>
                </div>
                <span className="font-medium">
                  {
                    devices.filter(
                      (d) =>
                        d.metrics.battery < 20 ||
                        d.metrics.memoryUsage > 80 ||
                        d.metrics.storageUsage > 80 ||
                        d.metrics.pendingRecords > 0,
                    ).length
                  }
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Database className="h-4 w-4 mr-2 text-primary" />
                  <span>Registros pendientes</span>
                </div>
                <span className="font-medium">
                  {devices.reduce((total, device) => total + device.metrics.pendingRecords, 0)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Actividad Reciente</CardTitle>
            <CardDescription>Últimos eventos registrados por los dispositivos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.slice(0, 4).map((event, index) => {
                const device = devices.find((d) => d.id === event.deviceId)
                return (
                  <div key={index} className="flex items-start gap-2 pb-2 border-b last:border-0">
                    <div
                      className={`mt-0.5 p-1 rounded-full 
                      ${
                        event.type === "ERROR"
                          ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                          : event.type === "MARCACION"
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {event.type === "ERROR" ? (
                        <AlertTriangle className="h-4 w-4" />
                      ) : event.type === "MARCACION" ? (
                        <Clock className="h-4 w-4" />
                      ) : (
                        <Terminal className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-sm">{event.description}</p>
                        <span className="text-xs text-muted-foreground">
                          {new Date(event.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{device?.name || event.deviceId}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="online">En línea</TabsTrigger>
          <TabsTrigger value="offline">Desconectados</TabsTrigger>
          <TabsTrigger value="alerts">Con alertas</TabsTrigger>
        </TabsList>

        {["all", "online", "offline", "alerts"].map((tabValue) => (
          <TabsContent key={tabValue} value={tabValue} className="space-y-4">
            {devices
              .filter((device) => {
                if (tabValue === "all") return true
                if (tabValue === "online") return device.status === "online"
                if (tabValue === "offline") return device.status === "offline"
                if (tabValue === "alerts")
                  return (
                    device.metrics.battery < 20 ||
                    device.metrics.memoryUsage > 80 ||
                    device.metrics.storageUsage > 80 ||
                    device.metrics.pendingRecords > 0
                  )
                return true
              })
              .map((device) => (
                <Card
                  key={device.id}
                  className={`overflow-hidden ${device.status === "offline" ? "border-red-200 dark:border-red-800" : ""}`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {device.status === "online" ? (
                          <Wifi className="h-5 w-5 text-green-500" />
                        ) : (
                          <WifiOff className="h-5 w-5 text-red-500" />
                        )}
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
                      {device.location} • ID: {device.id} • Último heartbeat:{" "}
                      {new Date(device.lastHeartbeat).toLocaleTimeString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <Battery className="h-4 w-4 mr-1 text-primary" />
                            <span>Batería</span>
                          </div>
                          <span className={`font-medium ${device.metrics.battery < 20 ? "text-red-500" : ""}`}>
                            {device.metrics.battery}%
                          </span>
                        </div>
                        <Progress
                          value={device.metrics.battery}
                          className="h-2"
                          indicatorClassName={
                            device.metrics.battery > 60
                              ? "bg-green-500"
                              : device.metrics.battery > 20
                                ? "bg-amber-500"
                                : "bg-red-500"
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <Database className="h-4 w-4 mr-1 text-primary" />
                            <span>Memoria</span>
                          </div>
                          <span className={`font-medium ${device.metrics.memoryUsage > 80 ? "text-red-500" : ""}`}>
                            {device.metrics.memoryUsage}%
                          </span>
                        </div>
                        <Progress
                          value={device.metrics.memoryUsage}
                          className="h-2"
                          indicatorClassName={
                            device.metrics.memoryUsage < 60
                              ? "bg-green-500"
                              : device.metrics.memoryUsage < 80
                                ? "bg-amber-500"
                                : "bg-red-500"
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <Database className="h-4 w-4 mr-1 text-primary" />
                            <span>Almacenamiento</span>
                          </div>
                          <span className={`font-medium ${device.metrics.storageUsage > 80 ? "text-red-500" : ""}`}>
                            {device.metrics.storageUsage}%
                          </span>
                        </div>
                        <Progress
                          value={device.metrics.storageUsage}
                          className="h-2"
                          indicatorClassName={
                            device.metrics.storageUsage < 60
                              ? "bg-green-500"
                              : device.metrics.storageUsage < 80
                                ? "bg-amber-500"
                                : "bg-red-500"
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Thermometer className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-sm">Temperatura</span>
                        </div>
                        <span
                          className={`text-sm font-medium ${device.metrics.temperature > 35 ? "text-red-500" : ""}`}
                        >
                          {device.metrics.temperature}°C
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-sm">Tiempo activo</span>
                        </div>
                        <span className="text-sm font-medium">{formatUptime(device.metrics.uptime)}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Database className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-sm">Registros pendientes</span>
                        </div>
                        <span
                          className={`text-sm font-medium ${device.metrics.pendingRecords > 0 ? "text-amber-500" : ""}`}
                        >
                          {device.metrics.pendingRecords}
                        </span>
                      </div>
                    </div>

                    {device.metrics.pendingRecords > 0 && (
                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-amber-700 dark:text-amber-400">
                              Registros pendientes de sincronización
                            </p>
                            <p className="text-sm text-amber-600 dark:text-amber-500">
                              Este dispositivo tiene {device.metrics.pendingRecords} registros almacenados localmente
                              que no han sido sincronizados con el servidor.
                            </p>
                            <Button size="sm" variant="outline" className="mt-2">
                              Forzar sincronización
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

            {devices.filter((device) => {
              if (tabValue === "all") return true
              if (tabValue === "online") return device.status === "online"
              if (tabValue === "offline") return device.status === "offline"
              if (tabValue === "alerts")
                return (
                  device.metrics.battery < 20 ||
                  device.metrics.memoryUsage > 80 ||
                  device.metrics.storageUsage > 80 ||
                  device.metrics.pendingRecords > 0
                )
              return true
            }).length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No hay dispositivos que coincidan con este filtro
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
