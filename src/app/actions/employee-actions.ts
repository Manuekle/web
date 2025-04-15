"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";

// Esquema de validación para crear/actualizar empleados
const employeeSchema = z.object({
  employeeId: z.string().min(1, "ID de empleado es requerido"),
  firstName: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "Apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido").optional().nullable(),
  phone: z.string().optional().nullable(),
  position: z.string().optional().nullable(),
  departmentId: z.string().optional().nullable(),
  fingerprintId: z.string().optional().nullable(),
  hireDate: z.string().min(1, "Fecha de contratación es requerida"),
  isActive: z.boolean().default(true),
});

// Tipo para los datos del formulario
type EmployeeFormData = z.infer<typeof employeeSchema>;

// Función para obtener el ID de la empresa del usuario autenticado
async function getCompanyId() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.companyId) {
    throw new Error("No autorizado");
  }
  return session.user.companyId;
}

// Obtener todos los empleados de la empresa
export async function getEmployees(
  search?: string,
  departmentId?: string,
  isActive?: boolean
) {
  const companyId = await getCompanyId();

  const employees = await prisma.employee.findMany({
    where: {
      companyId,
      ...(search
        ? {
            OR: [
              { firstName: { contains: search, mode: "insensitive" } },
              { lastName: { contains: search, mode: "insensitive" } },
              { employeeId: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(departmentId ? { departmentId } : {}),
      ...(isActive !== undefined ? { isActive } : {}),
    },
    include: {
      department: true,
    },
    orderBy: {
      lastName: "asc",
    },
  });

  return employees;
}

// Obtener un empleado por ID
export async function getEmployeeById(id: string) {
  const companyId = await getCompanyId();

  const employee = await prisma.employee.findFirst({
    where: {
      id,
      companyId,
    },
    include: {
      department: true,
    },
  });

  if (!employee) {
    throw new Error("Empleado no encontrado");
  }

  return employee;
}

// Crear un nuevo empleado
export async function createEmployee(formData: EmployeeFormData) {
  const companyId = await getCompanyId();

  // Validar datos
  const validatedData = employeeSchema.parse(formData);

  try {
    // Verificar si ya existe un empleado con el mismo ID en la empresa
    const existingEmployee = await prisma.employee.findFirst({
      where: {
        companyId,
        employeeId: validatedData.employeeId,
      },
    });

    if (existingEmployee) {
      return {
        success: false,
        message: "Ya existe un empleado con este ID en la empresa",
      };
    }

    // Verificar si ya existe un empleado con el mismo fingerprintId en la empresa
    if (validatedData.fingerprintId) {
      const existingFingerprint = await prisma.employee.findFirst({
        where: {
          companyId,
          fingerprintId: validatedData.fingerprintId,
        },
      });

      if (existingFingerprint) {
        return {
          success: false,
          message: "Ya existe un empleado con este ID de huella digital",
        };
      }
    }

    // Crear el empleado
    await prisma.employee.create({
      data: {
        employeeId: validatedData.employeeId,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        position: validatedData.position,
        departmentId: validatedData.departmentId || null,
        fingerprintId: validatedData.fingerprintId,
        hireDate: new Date(validatedData.hireDate),
        isActive: validatedData.isActive,
        companyId,
      },
    });

    revalidatePath("/employees");
    redirect("/employees");
  } catch (error) {
    console.error("Error al crear empleado:", error);
    return {
      success: false,
      message: "Error al crear el empleado",
    };
  }
}

// Actualizar un empleado existente
export async function updateEmployee(id: string, formData: EmployeeFormData) {
  const companyId = await getCompanyId();

  // Validar datos
  const validatedData = employeeSchema.parse(formData);

  try {
    // Verificar si el empleado existe
    const employee = await prisma.employee.findFirst({
      where: {
        id,
        companyId,
      },
    });

    if (!employee) {
      return {
        success: false,
        message: "Empleado no encontrado",
      };
    }

    // Verificar si ya existe otro empleado con el mismo ID en la empresa
    if (employee.employeeId !== validatedData.employeeId) {
      const existingEmployee = await prisma.employee.findFirst({
        where: {
          companyId,
          employeeId: validatedData.employeeId,
          id: { not: id },
        },
      });

      if (existingEmployee) {
        return {
          success: false,
          message: "Ya existe un empleado con este ID en la empresa",
        };
      }
    }

    // Verificar si ya existe otro empleado con el mismo fingerprintId en la empresa
    if (
      validatedData.fingerprintId &&
      employee.fingerprintId !== validatedData.fingerprintId
    ) {
      const existingFingerprint = await prisma.employee.findFirst({
        where: {
          companyId,
          fingerprintId: validatedData.fingerprintId,
          id: { not: id },
        },
      });

      if (existingFingerprint) {
        return {
          success: false,
          message: "Ya existe un empleado con este ID de huella digital",
        };
      }
    }

    // Actualizar el empleado
    await prisma.employee.update({
      where: { id },
      data: {
        employeeId: validatedData.employeeId,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        position: validatedData.position,
        departmentId: validatedData.departmentId || null,
        fingerprintId: validatedData.fingerprintId,
        hireDate: new Date(validatedData.hireDate),
        isActive: validatedData.isActive,
      },
    });

    revalidatePath(`/employees/${id}`);
    revalidatePath("/employees");
    redirect(`/employees/${id}`);
  } catch (error) {
    console.error("Error al actualizar empleado:", error);
    return {
      success: false,
      message: "Error al actualizar el empleado",
    };
  }
}

// Eliminar un empleado (o marcarlo como inactivo)
export async function deleteEmployee(id: string) {
  const companyId = await getCompanyId();

  try {
    // Verificar si el empleado existe
    const employee = await prisma.employee.findFirst({
      where: {
        id,
        companyId,
      },
    });

    if (!employee) {
      return {
        success: false,
        message: "Empleado no encontrado",
      };
    }

    // Verificar si el empleado tiene registros de asistencia
    const attendanceCount = await prisma.attendanceRecord.count({
      where: {
        employeeId: id,
      },
    });

    if (attendanceCount > 0) {
      // Si tiene registros, solo lo marcamos como inactivo
      await prisma.employee.update({
        where: { id },
        data: {
          isActive: false,
        },
      });
    } else {
      // Si no tiene registros, lo eliminamos completamente
      await prisma.employee.delete({
        where: { id },
      });
    }

    revalidatePath("/employees");
    redirect("/employees");
  } catch (error) {
    console.error("Error al eliminar empleado:", error);
    return {
      success: false,
      message: "Error al eliminar el empleado",
    };
  }
}

// Obtener todos los departamentos de la empresa
export async function getDepartments() {
  const companyId = await getCompanyId();

  const departments = await prisma.department.findMany({
    where: {
      companyId,
    },
    orderBy: {
      name: "asc",
    },
  });

  return departments;
}

// Crear un nuevo departamento
export async function createDepartment(name: string, description?: string) {
  const companyId = await getCompanyId();

  try {
    // Verificar si ya existe un departamento con el mismo nombre en la empresa
    const existingDepartment = await prisma.department.findFirst({
      where: {
        companyId,
        name: { equals: name, mode: "insensitive" },
      },
    });

    if (existingDepartment) {
      return {
        success: false,
        message: "Ya existe un departamento con este nombre",
      };
    }

    // Crear el departamento
    const department = await prisma.department.create({
      data: {
        name,
        description,
        companyId,
      },
    });

    revalidatePath("/employees/departments");
    return {
      success: true,
      data: department,
    };
  } catch (error) {
    console.error("Error al crear departamento:", error);
    return {
      success: false,
      message: "Error al crear el departamento",
    };
  }
}
