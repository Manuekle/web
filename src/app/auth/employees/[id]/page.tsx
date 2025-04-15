import Link from "next/link";
import { notFound } from "next/navigation";
import { getEmployeeById } from "@/app/actions/employee-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function EmployeeDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const employee = await getEmployeeById(params.id);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/employees">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">
              {employee.firstName} {employee.lastName}
            </h1>
            {employee.isActive ? (
              <Badge variant="success">Activo</Badge>
            ) : (
              <Badge variant="destructive">Inactivo</Badge>
            )}
          </div>
          <div className="flex gap-2">
            <Link href={`/employees/${employee.id}/attendance`}>
              <Button variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Ver Asistencia
              </Button>
            </Link>
            <Link href={`/employees/${employee.id}/edit`}>
              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    ID de Empleado
                  </p>
                  <p>{employee.employeeId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Departamento
                  </p>
                  <p>{employee.department?.name || "-"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Posición
                  </p>
                  <p>{employee.position || "-"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Fecha de Contratación
                  </p>
                  <p>{formatDate(employee.hireDate)}</p>
                </div>
                {employee.terminationDate && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Fecha de Terminación
                    </p>
                    <p>{formatDate(employee.terminationDate)}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Email
                  </p>
                  <p>{employee.email || "-"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Teléfono
                  </p>
                  <p>{employee.phone || "-"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    ID de Huella Digital
                  </p>
                  <p>{employee.fingerprintId || "-"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Creado
                  </p>
                  <p>{formatDate(employee.createdAt, true)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Última Actualización
                  </p>
                  <p>{formatDate(employee.updatedAt, true)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
