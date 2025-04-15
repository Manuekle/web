import Link from "next/link";
import { getDepartments } from "@/app/actions/employee-actions";
import { EmployeeForm } from "@/components/employees/employee-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function NewEmployeePage() {
  const departments = await getDepartments();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/employees">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Nuevo Empleado</h1>
      </div>

      <EmployeeForm departments={departments} />
    </div>
  );
}
