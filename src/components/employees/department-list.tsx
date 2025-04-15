"use client";

// Define interfaces en lugar de importar desde @prisma/client
interface Department {
  id: string;
  name: string;
  description?: string | null;
  companyId: string;
}

interface DepartmentListProps {
  departments: Department[];
}

export function DepartmentList({ departments }: DepartmentListProps) {
  return (
    <div className="space-y-2">
      {departments.length === 0 ? (
        <p className="text-muted-foreground">
          No hay departamentos registrados
        </p>
      ) : (
        <ul className="divide-y">
          {departments.map((department) => (
            <li key={department.id} className="py-2">
              <div className="font-medium">{department.name}</div>
              {department.description && (
                <div className="text-sm text-muted-foreground">
                  {department.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
