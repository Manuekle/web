import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, Server, Wifi, Bell, Shield } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
        <p className="text-muted-foreground">Ajustes del sistema de control de asistencia</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="dispositivos">Dispositivos</TabsTrigger>
          <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
          <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configuración General</CardTitle>
              <CardDescription>Ajustes básicos del sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nombre de la Empresa</Label>
                  <Input id="company-name" defaultValue="Empresa Demo S.A." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Zona Horaria</Label>
                  <Select defaultValue="america-caracas">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Seleccionar zona horaria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-caracas">América/Caracas (GMT-4)</SelectItem>
                      <SelectItem value="america-bogota">América/Bogotá (GMT-5)</SelectItem>
                      <SelectItem value="america-santiago">América/Santiago (GMT-4)</SelectItem>
                      <SelectItem value="america-mexico">América/México (GMT-6)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-format">Formato de Fecha</Label>
                  <Select defaultValue="dd-mm-yyyy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Seleccionar formato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                      <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time-format">Formato de Hora</Label>
                  <Select defaultValue="24h">
                    <SelectTrigger id="time-format">
                      <SelectValue placeholder="Seleccionar formato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">24 horas</SelectItem>
                      <SelectItem value="12h">12 horas (AM/PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-backup">Respaldo Automático</Label>
                    <p className="text-sm text-muted-foreground">Realizar respaldo diario de la base de datos</p>
                  </div>
                  <Switch id="auto-backup" defaultChecked />
                </div>
              </div>

              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dispositivos">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle>Configuración de Dispositivos</CardTitle>
                  <CardDescription>Gestión de terminales biométricos</CardDescription>
                </div>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tiempo de Sincronización</Label>
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

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo Offline</Label>
                    <p className="text-sm text-muted-foreground">Permitir almacenamiento local</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-Descubrimiento</Label>
                    <p className="text-sm text-muted-foreground">Detectar dispositivos en la red</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle>Configuración de Red</CardTitle>
                  <CardDescription>Ajustes de conectividad</CardDescription>
                </div>
                <Wifi className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="server-url">URL del Servidor</Label>
                  <Input id="server-url" defaultValue="https://api.asistencia.ejemplo.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api-port">Puerto API</Label>
                  <Input id="api-port" defaultValue="443" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Conexión Segura (SSL)</Label>
                    <p className="text-sm text-muted-foreground">Usar HTTPS para comunicación</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="seguridad">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Configuración de Seguridad</CardTitle>
                <CardDescription>Políticas de seguridad y acceso</CardDescription>
              </div>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Tiempo de Sesión</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="session-timeout">
                    <SelectValue placeholder="Seleccionar tiempo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutos</SelectItem>
                    <SelectItem value="30">30 minutos</SelectItem>
                    <SelectItem value="60">1 hora</SelectItem>
                    <SelectItem value="120">2 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-policy">Política de Contraseñas</Label>
                <Select defaultValue="strong">
                  <SelectTrigger id="password-policy">
                    <SelectValue placeholder="Seleccionar política" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Básica (mínimo 6 caracteres)</SelectItem>
                    <SelectItem value="medium">Media (letras y números)</SelectItem>
                    <SelectItem value="strong">Fuerte (mayúsculas, minúsculas, números)</SelectItem>
                    <SelectItem value="very-strong">Muy fuerte (incluye caracteres especiales)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Autenticación de Dos Factores</Label>
                  <p className="text-sm text-muted-foreground">Requerir 2FA para administradores</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Registro de Auditoría</Label>
                  <p className="text-sm text-muted-foreground">Guardar historial de acciones</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificaciones">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Configuración de Notificaciones</CardTitle>
                <CardDescription>Alertas y mensajes del sistema</CardDescription>
              </div>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-server">Servidor SMTP</Label>
                <Input id="email-server" defaultValue="smtp.ejemplo.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-from">Correo Remitente</Label>
                <Input id="email-from" defaultValue="asistencia@ejemplo.com" />
              </div>

              <div className="space-y-4 border rounded-md p-4">
                <h3 className="font-medium">Notificaciones por Correo</h3>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-absence">Ausencias</Label>
                  <Switch id="notify-absence" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-late">Llegadas Tardías</Label>
                  <Switch id="notify-late" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-device">Problemas de Dispositivos</Label>
                  <Switch id="notify-device" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-reports">Reportes Automáticos</Label>
                  <Switch id="notify-reports" />
                </div>
              </div>

              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
