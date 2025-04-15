import { getDepartments } from "@/app/actions/employee-actions";
import { DepartmentList } from "@/components/employees/department-list";
import { DepartmentForm } from "@/components/employees/department-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Departamentos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Nuevo Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <DepartmentForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Departamentos Existentes</CardTitle>
          </CardHeader>
          <CardContent>
            <DepartmentList departments={departments} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
