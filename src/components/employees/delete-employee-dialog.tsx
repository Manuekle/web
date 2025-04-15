"use client";

import { useState } from "react";
import { deleteEmployee } from "@/app/actions/employee-actions";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DeleteEmployeeDialogProps {
  isOpen: boolean;
  employeeId: string;
  onClose: () => void;
}

export function DeleteEmployeeDialog({
  isOpen,
  employeeId,
  onClose,
}: DeleteEmployeeDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  // const { toast } = useToast();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteEmployee(employeeId);

      if (!result?.success) {
        toast.error("¡Error", {
          description: result?.message || "No se pudo eliminar el empleado",
        });
      }
    } catch (error) {
      toast.error("¡Error", {
        description: "Ocurrió un error al eliminar el empleado",
      });
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Si el empleado tiene registros de
            asistencia, será marcado como inactivo en lugar de ser eliminado.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Eliminando..." : "Eliminar"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
