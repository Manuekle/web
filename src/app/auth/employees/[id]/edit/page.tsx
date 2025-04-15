import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getEmployeeById,
  getDepartments,
} from "@/app/actions/employee-actions";
import { EmployeeForm } from "@/components/employees/employee-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function EditEmployeePage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const [employee, departments] = await Promise.all([
      getEmployeeById(params.id),
      getDepartments(),
    ]);

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Link href={`/employees/${params.id}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">
            Editar Empleado: {employee.firstName} {employee.lastName}
          </h1>
        </div>

        <EmployeeForm employee={employee} departments={departments} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
