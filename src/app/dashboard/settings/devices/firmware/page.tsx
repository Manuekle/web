"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Download, RefreshCcw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";

type Device = {
  id: string;
  name: string;
  location: string;
  status: string;
};

type FirmwareVersion = {
  version: string;
  releaseDate: string;
  releaseNotes: string;
  downloadUrl: string;
};

export default function FirmwarePage() {
  const { toast } = useToast();
  const [devices, setDevices] = useState<Device[]>([]);
  const [firmwareVersions, setFirmwareVersions] = useState<FirmwareVersion[]>(
    []
  );
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deviceFirmware, setDeviceFirmware] = useState<Record<string, string>>(
    {}
  );

  // Cargar dispositivos
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("/api/devices");
        const data = await response.json();
        if (data.devices) {
          setDevices(data.devices);

          // Inicializar firmware de dispositivos (simulado)
          const firmwareMap: Record<string, string> = {};
          data.devices.forEach((device: Device) => {
            firmwareMap[device.id] = "1.2.0"; // Versión por defecto
          });
          setDeviceFirmware(firmwareMap);
        }
      } catch (error) {
        console.error("Error al cargar dispositivos:", error);
      }
    };

    fetchDevices();
  }, []);

  // Cargar versiones de firmware
  useEffect(() => {
    const fetchFirmwareVersions = async () => {
      try {
        const response = await fetch("/api/devices/firmware");
        const data = await response.json();
        if (data.versions) {
          setFirmwareVersions(data.versions);
        }
      } catch (error) {
        console.error("Error al cargar versiones de firmware:", error);
      }
    };

    fetchFirmwareVersions();
  }, []);

  // Actualizar firmware
  const handleUpdateFirmware = async () => {
    if (!selectedDevice || !selectedVersion) {
      toast({
        title: "Error",
        description: "Selecciona un dispositivo y una versión",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/devices/firmware", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceId: selectedDevice,
          version: selectedVersion,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Actualización programada",
          description:
            "La actualización de firmware se ha programado correctamente",
        });

        // Actualizar versión de firmware del dispositivo (simulado)
        setDeviceFirmware({
          ...deviceFirmware,
          [selectedDevice]: selectedVersion,
        });

        // Limpiar selección
        setSelectedVersion("");
      } else {
        toast({
          title: "Error",
          description: data.error || "Error al programar actualización",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error al programar actualización:", error);
      toast({
        title: "Error",
        description: "Error al programar actualización",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Gestión de Firmware</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Actualizar Firmware</CardTitle>
            <CardDescription>
              Actualiza el firmware de los dispositivos biométricos.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="device" className="text-sm font-medium">
                Dispositivo
              </label>
              <Select value={selectedDevice} onValueChange={setSelectedDevice}>
                <SelectTrigger id="device">
                  <SelectValue placeholder="Seleccionar dispositivo" />
                </SelectTrigger>
                <SelectContent>
                  {devices.map((device) => (
                    <SelectItem key={device.id} value={device.id}>
                      {device.name} ({device.location})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="version" className="text-sm font-medium">
                Versión de Firmware
              </label>
              <Select
                value={selectedVersion}
                onValueChange={setSelectedVersion}
              >
                <SelectTrigger id="version">
                  <SelectValue placeholder="Seleccionar versión" />
                </SelectTrigger>
                <SelectContent>
                  {firmwareVersions.map((version) => (
                    <SelectItem key={version.version} value={version.version}>
                      {version.version} (
                      {format(new Date(version.releaseDate), "dd/MM/yyyy")})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedVersion && (
              <div className="bg-muted p-3 rounded-md text-sm">
                <p className="font-medium">
                  Notas de la versión {selectedVersion}:
                </p>
                <p className="mt-1">
                  {
                    firmwareVersions.find((v) => v.version === selectedVersion)
                      ?.releaseNotes
                  }
                </p>
              </div>
            )}

            <Button
              onClick={handleUpdateFirmware}
              disabled={isLoading || !selectedDevice || !selectedVersion}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                  Programando actualización...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Actualizar Firmware
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estado de Firmware</CardTitle>
            <CardDescription>
              Visualiza el estado del firmware en todos los dispositivos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dispositivo</TableHead>
                  <TableHead>Ubicación</TableHead>
                  <TableHead>Versión</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => {
                  const currentVersion =
                    deviceFirmware[device.id] || "Desconocida";
                  const latestVersion =
                    firmwareVersions[0]?.version || "Desconocida";
                  const needsUpdate = currentVersion !== latestVersion;

                  return (
                    <TableRow key={device.id}>
                      <TableCell className="font-medium">
                        {device.name}
                      </TableCell>
                      <TableCell>{device.location}</TableCell>
                      <TableCell>{currentVersion}</TableCell>
                      <TableCell>
                        {needsUpdate ? (
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            <span>Actualización disponible</span>
                          </Badge>
                        ) : (
                          <Badge
                            variant="success"
                            className="flex items-center gap-1"
                          >
                            <CheckCircle className="h-3 w-3" />
                            <span>Actualizado</span>
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
