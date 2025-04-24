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
import { AlertCircle, CheckCircle, Database, RefreshCw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

export default function InitDataPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleInitData = async () => {
    if (
      !confirm(
        "¿Estás seguro de que deseas inicializar los datos de ejemplo? Esta acción puede sobrescribir datos existentes."
      )
    ) {
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/admin/init-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setResult({
          success: true,
          message: data.message || "Datos inicializados correctamente",
        });
        toast.success("Éxito", {
          description: "Datos de ejemplo inicializados correctamente",
        });
      } else {
        setResult({
          success: false,
          message: data.error || "Error al inicializar datos",
        });
        toast.error("Error", {
          description: data.error || "Error al inicializar datos",
        });
      }
    } catch (error) {
      console.error("Error al inicializar datos:", error);
      setResult({
        success: false,
        message: "Error al conectar con el servidor",
      });
      toast("Error", {
        description: "Error al conectar con el servidor",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Inicialización de Datos</h1>

      <Card>
        <CardHeader>
          <CardTitle>Inicializar Datos de Ejemplo</CardTitle>
          <CardDescription>
            Esta herramienta permite inicializar la base de datos con datos de
            ejemplo para pruebas y desarrollo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Advertencia</AlertTitle>
            <AlertDescription>
              Esta acción inicializará la base de datos con datos de ejemplo.
              Los datos existentes pueden ser sobrescritos. Utiliza esta función
              solo en entornos de desarrollo o pruebas.
            </AlertDescription>
          </Alert>

          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">
              Se inicializarán los siguientes datos:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Dispositivos biométricos de ejemplo</li>
              <li>Comandos remotos de ejemplo</li>
              <li>Versiones de firmware de ejemplo</li>
            </ul>
          </div>

          {result && (
            <Alert variant={result.success ? "default" : "destructive"}>
              {result.success ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>{result.success ? "Éxito" : "Error"}</AlertTitle>
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleInitData}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Inicializando datos...
              </>
            ) : (
              <>
                <Database className="mr-2 h-4 w-4" />
                Inicializar Datos de Ejemplo
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
