"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RefreshCw,
  Power,
  Clock,
  Download,
  Upload,
  Fingerprint,
  Terminal,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Datos simulados de dispositivos
const mockDevices = [
  {
    id: "AIC001",
    name: "Dispositivo Principal",
    location: "Entrada Principal",
    status: "online",
  },
  {
    id: "AIC002",
    name: "Dispositivo Secundario",
    location: "Entrada Lateral",
    status: "online",
  },
  {
    id: "AIC003",
    name: "Dispositivo Cafetería",
    status: "offline",
    location: "Cafetería",
  },
];

// Comandos predefinidos
const predefinedCommands = [
  {
    id: "restart",
    name: "Reiniciar dispositivo",
    description: "Reinicia el dispositivo completamente",
    icon: Power,
  },
  {
    id: "sync_time",
    name: "Sincronizar hora",
    description: "Actualiza la hora del RTC con el servidor",
    icon: Clock,
  },
  {
    id: "update_firmware",
    name: "Actualizar firmware",
    description: "Descarga e instala la última versión del firmware",
    icon: Download,
  },
  {
    id: "sync_data",
    name: "Sincronizar datos",
    description: "Fuerza la sincronización de registros pendientes",
    icon: Upload,
  },
  {
    id: "enroll_mode",
    name: "Modo registro",
    description: "Activa el modo de registro de huellas",
    icon: Fingerprint,
  },
  {
    id: "maintenance_mode",
    name: "Modo mantenimiento",
    description: "Activa el modo de mantenimiento",
    icon: Terminal,
  },
];

// Historial de comandos simulado
const mockCommandHistory = [
  {
    id: 1,
    deviceId: "AIC001",
    command: "sync_time",
    params: {},
    status: "completed",
    sentAt: new Date(Date.now() - 3600000).toISOString(),
    completedAt: new Date(Date.now() - 3590000).toISOString(),
    result: "Hora sincronizada correctamente",
  },
  {
    id: 2,
    deviceId: "AIC002",
    command: "enroll_mode",
    params: { employeeId: 123 },
    status: "completed",
    sentAt: new Date(Date.now() - 7200000).toISOString(),
    completedAt: new Date(Date.now() - 7150000).toISOString(),
    result: "Modo de registro activado para empleado #123",
  },
  {
    id: 3,
    deviceId: "AIC003",
    command: "restart",
    params: {},
    status: "pending",
    sentAt: new Date(Date.now() - 1800000).toISOString(),
    completedAt: null,
    result: null,
  },
  {
    id: 4,
    deviceId: "AIC001",
    command: "update_firmware",
    params: { version: "1.2.3" },
    status: "failed",
    sentAt: new Date(Date.now() - 86400000).toISOString(),
    completedAt: new Date(Date.now() - 86350000).toISOString(),
    result: "Error: Espacio insuficiente en memoria",
  },
];

// Reemplazar la función para obtener dispositivos
// Añadir esta función después de las importaciones y antes del componente principal
async function getDevices() {
  try {
    const devices = await prisma.dispositivo.findMany({
      select: {
        id: true,
        nombre: true,
        ubicacion: true,
        estado: true,
      },
    });
    return devices;
  } catch (error) {
    console.error("Error al obtener dispositivos:", error);
    return [];
  }
}

// Reemplazar la función para obtener el historial de comandos
async function getCommandHistory() {
  try {
    const commands = await prisma.comando.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        dispositivo: {
          select: {
            nombre: true,
            ubicacion: true,
          },
        },
      },
      take: 20, // Limitar a los 20 más recientes
    });
    return commands;
  } catch (error) {
    console.error("Error al obtener historial de comandos:", error);
    return [];
  }
}

export default function DeviceCommandsPage() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [commandParams, setCommandParams] = useState<Record<string, any>>({});
  const [commandHistory, setCommandHistory] = useState(mockCommandHistory);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [customCommand, setCustomCommand] = useState("");
  const [commandResult, setCommandResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleDeviceChange = (deviceId: string) => {
    setSelectedDevice(deviceId);
    setSelectedCommand(null);
    setCommandParams({});
    setShowConfirmation(false);
    setCommandResult(null);
  };

  const handleCommandChange = (commandId: string) => {
    setSelectedCommand(commandId);
    setCommandParams({});
    setShowConfirmation(false);
    setCommandResult(null);
  };

  const handleParamChange = (key: string, value: any) => {
    setCommandParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleExecuteCommand = () => {
    if (!selectedDevice || (!selectedCommand && !customCommand)) return;

    setShowConfirmation(true);
  };

  const confirmExecuteCommand = () => {
    setIsExecuting(true);
    setShowConfirmation(false);

    // Simulación de ejecución de comando
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% de probabilidad de éxito

      // Crear nuevo registro de comando
      const newCommand = {
        id: commandHistory.length + 1,
        deviceId: selectedDevice!,
        command: selectedCommand || "custom",
        params: commandParams,
        status: success ? "completed" : "failed",
        sentAt: new Date().toISOString(),
        completedAt: success ? new Date().toISOString() : null,
        result: success
          ? selectedCommand === "restart"
            ? "Dispositivo reiniciado correctamente"
            : selectedCommand === "sync_time"
            ? "Hora sincronizada correctamente"
            : selectedCommand === "enroll_mode"
            ? "Modo de registro activado"
            : "Comando ejecutado correctamente"
          : "Error: No se pudo ejecutar el comando",
      };

      setCommandHistory([newCommand, ...commandHistory]);

      setCommandResult({
        success,
        message: success
          ? "Comando enviado y ejecutado correctamente"
          : "Error al ejecutar el comando",
      });

      setIsExecuting(false);
    }, 2000);
  };

  // Reemplazar las funciones que usan datos simulados con funciones que obtengan datos reales

  // Reemplazar la función getDeviceById
  const getDeviceById = async (id: string) => {
    try {
      const device = await prisma.dispositivo.findUnique({
        where: { id },
      });
      return device;
    } catch (error) {
      console.error("Error al obtener dispositivo:", error);
      return null;
    }
  };

  const getCommandById = (id: string) => {
    return predefinedCommands.find((c) => c.id === id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Comandos Remotos</h1>
        <p className="text-muted-foreground">
          Envío de instrucciones a los dispositivos biométricos
        </p>
      </div>

      <Tabs defaultValue="send" className="space-y-4">
        <TabsList>
          <TabsTrigger value="send">Enviar Comandos</TabsTrigger>
          <TabsTrigger value="history">Historial</TabsTrigger>
        </TabsList>

        <TabsContent value="send">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Enviar Comando</CardTitle>
                <CardDescription>
                  Seleccione un dispositivo y el comando a ejecutar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="device">Dispositivo</Label>
                  <Select onValueChange={handleDeviceChange}>
                    <SelectTrigger id="device">
                      <SelectValue placeholder="Seleccionar dispositivo" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockDevices.map((device) => (
                        <SelectItem
                          key={device.id}
                          value={device.id}
                          disabled={device.status === "offline"}
                        >
                          <div className="flex items-center">
                            <span>{device.name}</span>
                            {device.status === "offline" && (
                              <Badge
                                variant="outline"
                                className="ml-2 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                              >
                                Desconectado
                              </Badge>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedDevice && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="command-type">Tipo de comando</Label>
                      <Tabs defaultValue="predefined" className="mt-2">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="predefined">
                            Predefinido
                          </TabsTrigger>
                          <TabsTrigger value="custom">
                            Personalizado
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent
                          value="predefined"
                          className="space-y-4 pt-4"
                        >
                          <div className="grid grid-cols-2 gap-2">
                            {predefinedCommands.map((command) => (
                              <Button
                                key={command.id}
                                variant={
                                  selectedCommand === command.id
                                    ? "default"
                                    : "outline"
                                }
                                className="justify-start h-auto py-3 px-4"
                                onClick={() => handleCommandChange(command.id)}
                              >
                                <command.icon className="h-4 w-4 mr-2" />
                                <div className="text-left">
                                  <p className="font-medium">{command.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {command.description}
                                  </p>
                                </div>
                              </Button>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="custom" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="custom-command">
                              Comando personalizado
                            </Label>
                            <Textarea
                              id="custom-command"
                              placeholder="Ingrese el comando en formato JSON"
                              value={customCommand}
                              onChange={(e) => setCustomCommand(e.target.value)}
                              className="font-mono text-sm"
                              rows={5}
                            />
                            <p className="text-xs text-muted-foreground">
                              Los comandos personalizados deben seguir el
                              formato JSON especificado en la documentación.
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    {selectedCommand === "enroll_mode" && (
                      <div className="space-y-2">
                        <Label htmlFor="employee-id">ID de Empleado</Label>
                        <Input
                          id="employee-id"
                          type="number"
                          placeholder="Ingrese el ID del empleado"
                          onChange={(e) =>
                            handleParamChange(
                              "employeeId",
                              Number.parseInt(e.target.value)
                            )
                          }
                        />
                      </div>
                    )}

                    {selectedCommand === "update_firmware" && (
                      <div className="space-y-2">
                        <Label htmlFor="firmware-version">
                          Versión de Firmware
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleParamChange("version", value)
                          }
                        >
                          <SelectTrigger id="firmware-version">
                            <SelectValue placeholder="Seleccionar versión" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1.2.3">
                              v1.2.3 (Estable)
                            </SelectItem>
                            <SelectItem value="1.3.0-beta">
                              v1.3.0 (Beta)
                            </SelectItem>
                            <SelectItem value="latest">
                              Última versión
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {selectedCommand === "restart" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="force-restart">
                            Reinicio forzado
                          </Label>
                          <Switch
                            id="force-restart"
                            onCheckedChange={(checked) =>
                              handleParamChange("force", checked)
                            }
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          El reinicio forzado no espera a que se completen las
                          operaciones en curso.
                        </p>
                      </div>
                    )}
                  </>
                )}

                {commandResult && (
                  <Alert
                    variant={commandResult.success ? "default" : "destructive"}
                  >
                    {commandResult.success ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    <AlertTitle>
                      {commandResult.success ? "Éxito" : "Error"}
                    </AlertTitle>
                    <AlertDescription>{commandResult.message}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleExecuteCommand}
                  disabled={
                    !selectedDevice ||
                    (!selectedCommand && !customCommand) ||
                    isExecuting
                  }
                  className="w-full"
                >
                  {isExecuting ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Ejecutando...
                    </>
                  ) : (
                    <>
                      <Terminal className="mr-2 h-4 w-4" />
                      Ejecutar Comando
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información del Dispositivo</CardTitle>
                <CardDescription>
                  Detalles del dispositivo seleccionado
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDevice ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Dispositivo</Label>
                      <div className="flex items-center justify-between">
                        <p className="font-medium">
                          {getDeviceById(selectedDevice)?.name}
                        </p>
                        <Badge
                          variant="outline"
                          className={
                            getDeviceById(selectedDevice)?.status === "online"
                              ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }
                        >
                          <div
                            className={`mr-1 h-2 w-2 rounded-full ${
                              getDeviceById(selectedDevice)?.status === "online"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          />
                          {getDeviceById(selectedDevice)?.status === "online"
                            ? "Conectado"
                            : "Desconectado"}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Ubicación</Label>
                      <p>{getDeviceById(selectedDevice)?.location}</p>
                    </div>

                    <div className="space-y-2">
                      <Label>ID del Dispositivo</Label>
                      <p className="font-mono text-sm">{selectedDevice}</p>
                    </div>

                    {selectedCommand && (
                      <div className="space-y-2">
                        <Label>Comando Seleccionado</Label>
                        <div className="flex items-center gap-2">
                          {/* {getCommandById(selectedCommand)?.icon && (
                            <getCommandById(selectedCommand)!.icon className="h-4 w-4 text-primary" />
                          )} */}
                          <p className="font-medium">
                            {getCommandById(selectedCommand)?.name}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {getCommandById(selectedCommand)?.description}
                        </p>
                      </div>
                    )}

                    {Object.keys(commandParams).length > 0 && (
                      <div className="space-y-2">
                        <Label>Parámetros</Label>
                        <pre className="bg-muted p-3 rounded-md text-xs overflow-auto">
                          {JSON.stringify(commandParams, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Terminal className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Seleccione un dispositivo para ver su información
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Diálogo de confirmación */}
          {showConfirmation && (
            <Card className="mt-4 border-amber-200 dark:border-amber-800">
              <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
                <CardTitle className="text-amber-800 dark:text-amber-400">
                  Confirmar ejecución de comando
                </CardTitle>
                <CardDescription>
                  ¿Está seguro de que desea ejecutar este comando en el
                  dispositivo seleccionado?
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Dispositivo</Label>
                    <p className="font-medium">
                      {getDeviceById(selectedDevice!)?.name}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Comando</Label>
                    <p className="font-medium">
                      {selectedCommand
                        ? getCommandById(selectedCommand)?.name
                        : "Comando personalizado"}
                    </p>
                  </div>

                  {Object.keys(commandParams).length > 0 && (
                    <div className="space-y-2">
                      <Label>Parámetros</Label>
                      <pre className="bg-muted p-3 rounded-md text-xs overflow-auto">
                        {JSON.stringify(commandParams, null, 2)}
                      </pre>
                    </div>
                  )}

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Advertencia</AlertTitle>
                    <AlertDescription>
                      Algunos comandos pueden interrumpir el funcionamiento
                      normal del dispositivo.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmation(false)}
                >
                  Cancelar
                </Button>
                <Button variant="default" onClick={confirmExecuteCommand}>
                  Confirmar y ejecutar
                </Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Comandos</CardTitle>
              <CardDescription>
                Registro de comandos enviados a los dispositivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commandHistory.length > 0 ? (
                  commandHistory.map((cmd) => (
                    <div
                      key={cmd.id}
                      className="border rounded-lg p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {cmd.command === "restart" ? (
                            <Power className="h-4 w-4 text-primary" />
                          ) : cmd.command === "sync_time" ? (
                            <Clock className="h-4 w-4 text-primary" />
                          ) : cmd.command === "update_firmware" ? (
                            <Download className="h-4 w-4 text-primary" />
                          ) : cmd.command === "sync_data" ? (
                            <Upload className="h-4 w-4 text-primary" />
                          ) : cmd.command === "enroll_mode" ? (
                            <Fingerprint className="h-4 w-4 text-primary" />
                          ) : (
                            <Terminal className="h-4 w-4 text-primary" />
                          )}
                          <span className="font-medium">
                            {cmd.command === "restart"
                              ? "Reiniciar dispositivo"
                              : cmd.command === "sync_time"
                              ? "Sincronizar hora"
                              : cmd.command === "update_firmware"
                              ? "Actualizar firmware"
                              : cmd.command === "sync_data"
                              ? "Sincronizar datos"
                              : cmd.command === "enroll_mode"
                              ? "Modo registro"
                              : cmd.command === "custom"
                              ? "Comando personalizado"
                              : cmd.command}
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            cmd.status === "completed"
                              ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : cmd.status === "pending"
                              ? "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                              : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }
                        >
                          {cmd.status === "completed"
                            ? "Completado"
                            : cmd.status === "pending"
                            ? "Pendiente"
                            : "Fallido"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Dispositivo</p>
                          <p>
                            {getDeviceById(cmd.deviceId)?.name || cmd.deviceId}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Enviado</p>
                          <p>{new Date(cmd.sentAt).toLocaleString()}</p>
                        </div>
                      </div>

                      {Object.keys(cmd.params).length > 0 && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Parámetros
                          </p>
                          <pre className="bg-muted p-2 rounded-md text-xs overflow-auto">
                            {JSON.stringify(cmd.params, null, 2)}
                          </pre>
                        </div>
                      )}

                      {cmd.result && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            Resultado
                          </p>
                          <p
                            className={
                              cmd.status === "completed"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }
                          >
                            {cmd.result}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    No hay comandos en el historial
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
