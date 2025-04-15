"use client";

import { useState } from "react";
import { createDepartment } from "@/app/actions/employee-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function DepartmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await createDepartment(name, description);

      if (result.success) {
        toast.success("Departamento creado", {
          description: "El departamento ha sido creado exitosamente",
        });
        // Limpiar formulario
        setName("");
        setDescription("");
      } else {
        toast.error("Error", {
          description: result.message || "Error al crear el departamento",
        });
      }
    } catch (error) {
      console.error("Error al crear departamento:", error);
      toast.error("Error", {
        description: "Error al crear el departamento",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre *</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creando..." : "Crear Departamento"}
      </Button>
    </form>
  );
}
