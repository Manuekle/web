import Link from "next/link";
import { getEmployees, getDepartments } from "@/app/actions/employee-actions";
import { EmployeeList } from "@/components/employees/employee-list";
import { EmployeeFilters } from "@/components/employees/employee-filters";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default async function EmployeesPage({
  searchParams,
}: {
  searchParams: { search?: string; department?: string; status?: string };
}) {
  // Obtener parámetros de búsqueda
  const search = searchParams.search || "";
  const departmentId = searchParams.department || undefined;
  const isActive = searchParams.status
    ? searchParams.status === "active"
    : undefined;

  // Obtener datos
  const [employees, departments] = await Promise.all([
    getEmployees(search, departmentId, isActive),
    getDepartments(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Empleados</h1>
        <Link href="/auth/employees/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Empleado
          </Button>
        </Link>
      </div>

      <EmployeeFilters departments={departments} />

      <EmployeeList employees={employees} />
    </div>
  );
}
