"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, FileDown, RefreshCw, UserPlus, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Employee {
  id: number;
  cedula: string;
  nombre: string;
  apellido: string;
  activo: boolean;
  fechaRegistro: string;
}

export default function ExternalEmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<
    "online" | "offline" | "unknown"
  >("unknown");
  const { toast } = useToast();

  // Cargar empleados
  const loadEmployees = async (search = "") => {
    setLoading(true);
    try {
      const url = search
        ? `/api/external-employees?search=${encodeURIComponent(search)}`
        : "/api/external-employees";
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Error al cargar empleados");
      }

      const data = await res.json();
      setEmployees(data.employees || []);
      setConnectionStatus(data.connectionStatus || "unknown");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los empleados externos",
        variant: "destructive",
      });
      setConnectionStatus("offline");
    } finally {
      setLoading(false);
    }
  };

  // Sincronizar empleados
  const syncEmployees = async () => {
    setSyncing(true);
    try {
      const res = await fetch("/api/sync-employees", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Error al sincronizar");
      }

      const data = await res.json();

      toast({
        title: "Sincronización completada",
        description: `Total: ${data.stats.total}, Creados: ${data.stats.created}, Actualizados: ${data.stats.updated}`,
      });

      // Recargar la lista
      loadEmployees();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "No se pudieron sincronizar los empleados",
        variant: "destructive",
      });
    } finally {
      setSyncing(false);
    }
  };

  // Cargar empleados al montar el componente
  useEffect(() => {
    loadEmployees();
  }, []);

  // Manejar búsqueda
  const handleSearch = () => {
    loadEmployees(searchTerm);
  };

  // Formatear fecha
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Empleados Externos
          </h1>
          <p className="text-muted-foreground">
            Empleados desde SQL Server externo
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={syncEmployees} disabled={syncing}>
            {syncing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Sincronizando...
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Sincronizar
              </>
            )}
          </Button>
        </div>
      </div>

      {connectionStatus === "offline" && (
        <Alert
          variant="warning"
          className="bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800"
        >
          <WifiOff className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertTitle className="text-amber-600 dark:text-amber-400">
            Modo sin conexión
          </AlertTitle>
          <AlertDescription className="text-amber-600 dark:text-amber-400">
            No se pudo conectar al servidor SQL. Mostrando datos de ejemplo.
            Algunas funciones pueden estar limitadas.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Lista de Empleados Externos</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full sm:w-[200px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button variant="ghost" size="icon" onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="icon">
                <FileDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <RefreshCw className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Cédula</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Apellido</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Estado
                    </TableHead>
                    <TableHead className="hidden lg:table-cell">
                      Fecha Registro
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.length > 0 ? (
                    employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell className="font-medium">
                          {employee.cedula}
                        </TableCell>
                        <TableCell>{employee.nombre}</TableCell>
                        <TableCell>{employee.apellido}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge
                            variant={employee.activo ? "default" : "secondary"}
                            className={employee.activo ? "bg-green-500" : ""}
                          >
                            {employee.activo ? "Activo" : "Inactivo"}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {employee.fechaRegistro
                            ? formatDate(employee.fechaRegistro)
                            : "N/A"}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        No se encontraron empleados
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
