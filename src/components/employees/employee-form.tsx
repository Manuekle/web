"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEmployee, updateEmployee } from "@/app/actions/employee-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { formatDateForInput } from "@/lib/utils";

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

interface EmployeeFormProps {
  employee?: Employee;
  departments: Department[];
}

export function EmployeeForm({ employee, departments }: EmployeeFormProps) {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    employeeId: employee?.employeeId || "",
    firstName: employee?.firstName || "",
    lastName: employee?.lastName || "",
    email: employee?.email || "",
    phone: employee?.phone || "",
    position: employee?.position || "",
    departmentId: employee?.departmentId || "",
    fingerprintId: employee?.fingerprintId || "",
    hireDate: employee
      ? formatDateForInput(employee.hireDate)
      : formatDateForInput(new Date()),
    isActive: employee?.isActive ?? true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      let result;

      if (employee) {
        // Actualizar empleado existente
        result = await updateEmployee(employee.id, formData);
      } else {
        // Crear nuevo empleado
        result = await createEmployee(formData);
      }

      if (!result?.success) {
        setFormError(result?.message || "Error al guardar el empleado");
        // toast({
        //   title: "Error",
        //   description: result?.message || "Error al guardar el empleado",
        //   variant: "destructive",
        // });
        toast.error("Ocurrió un error al guardar el empleado");
      }
    } catch (error) {
      console.error("Error al guardar empleado:", error);
      setFormError("Ocurrió un error al guardar el empleado");
      toast.error("Ocurrió un error al guardar el empleado");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (employee) {
      router.push(`/employees/${employee.id}`);
    } else {
      router.push("/employees");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {formError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employeeId">ID de Empleado *</Label>
                  <Input
                    id="employeeId"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fingerprintId">ID de Huella Digital</Label>
                  <Input
                    id="fingerprintId"
                    name="fingerprintId"
                    value={formData.fingerprintId}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="departmentId">Departamento</Label>
                <Select
                  value={formData.departmentId}
                  onValueChange={(value) =>
                    handleSelectChange("departmentId", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Sin departamento</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.id}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Posición</Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hireDate">Fecha de Contratación *</Label>
                <Input
                  id="hireDate"
                  name="hireDate"
                  type="date"
                  value={formData.hireDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center space-x-2 pt-4">
                <Switch
                  id="isActive"
                  checked={formData.isActive}
                  onCheckedChange={(checked) =>
                    handleSwitchChange("isActive", checked)
                  }
                />
                <Label htmlFor="isActive">Empleado Activo</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Guardando..."
            : employee
            ? "Actualizar Empleado"
            : "Crear Empleado"}
        </Button>
      </div>
    </form>
  );
}
