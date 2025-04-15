"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Department } from "@/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface EmployeeFiltersProps {
  departments: Department[];
}

export function EmployeeFilters({ departments }: EmployeeFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [department, setDepartment] = useState(
    searchParams.get("department") || ""
  );
  const [status, setStatus] = useState(searchParams.get("status") || "");

  // Aplicar filtros
  const applyFilters = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (department) params.set("department", department);
    if (status) params.set("status", status);

    router.push(`/employees?${params.toString()}`);
  };

  // Limpiar filtros
  const clearFilters = () => {
    setSearch("");
    setDepartment("");
    setStatus("");
    router.push("/employees");
  };

  // Manejar búsqueda al presionar Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      applyFilters();
    }
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex-1 relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre, ID o email..."
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <Select value={department} onValueChange={setDepartment}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Departamento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los departamentos</SelectItem>
          {departments.map((dept) => (
            <SelectItem key={dept.id} value={dept.id}>
              {dept.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="active">Activos</SelectItem>
          <SelectItem value="inactive">Inactivos</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex gap-2">
        <Button onClick={applyFilters}>Filtrar</Button>
        <Button variant="outline" onClick={clearFilters}>
          <X className="mr-2 h-4 w-4" />
          Limpiar
        </Button>
      </div>
    </div>
  );
}
