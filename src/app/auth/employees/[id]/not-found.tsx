import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmployeeNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Empleado no encontrado
      </h2>
      <p className="mt-2 text-gray-500">
        El empleado que estás buscando no existe o no tienes permisos para
        verlo.
      </p>
      <Link href="/employees" className="mt-6">
        <Button>Volver a la lista de empleados</Button>
      </Link>
    </div>
  );
}
