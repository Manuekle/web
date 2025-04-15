"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import { DeleteEmployeeDialog } from "./delete-employee-dialog";

// Define interfaces en lugar de importar desde @prisma/client
interface Department {
  id: string;
  name: string;
  description?: string | null;
  companyId: string;
}

interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email?: string | null;
  phone?: string | null;
  position?: string | null;
  departmentId?: string | null;
  fingerprintId?: string | null;
  hireDate: Date;
  terminationDate?: Date | null;
  isActive: boolean;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
  department?: Department | null;
}

interface EmployeeListProps {
  employees: Employee[];
}

export function EmployeeList({ employees }: EmployeeListProps) {
  const [employeeToDelete, setEmployeeToDelete] = useState<string | null>(null);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead className="hidden md:table-cell">Departamento</TableHead>
            <TableHead className="hidden md:table-cell">Posición</TableHead>
            <TableHead className="hidden md:table-cell">Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center py-8 text-muted-foreground"
              >
                No se encontraron empleados
              </TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">
                  {employee.employeeId}
                </TableCell>
                <TableCell>
                  {employee.firstName} {employee.lastName}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {employee.department?.name || "-"}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {employee.position || "-"}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {employee.isActive ? (
                    <Badge variant="success">Activo</Badge>
                  ) : (
                    <Badge variant="destructive">Inactivo</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/employees/${employee.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Ver</span>
                      </Button>
                    </Link>
                    <Link href={`/employees/${employee.id}/edit`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Editar</span>
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setEmployeeToDelete(employee.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <DeleteEmployeeDialog
        isOpen={!!employeeToDelete}
        employeeId={employeeToDelete || ""}
        onClose={() => setEmployeeToDelete(null)}
      />
    </div>
  );
}
