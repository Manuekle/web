import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Esquema de validación
const registerSchema = z.object({
  companyName: z.string().min(3),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar datos
    const validationResult = registerSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Datos de registro inválidos",
          errors: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const { companyName, firstName, lastName, email, password } =
      validationResult.data;

    // Verificar si el email ya está registrado
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "El correo electrónico ya está registrado" },
        { status: 400 }
      );
    }

    // Crear transacción para asegurar que todo se crea correctamente
    const result = await prisma.$transaction(async (tx) => {
      // 1. Crear la empresa
      const company = await tx.company.create({
        data: {
          name: companyName,
        },
      });

      // 2. Crear configuración de la empresa
      await tx.companySettings.create({
        data: {
          companyId: company.id,
        },
      });

      // 3. Hashear la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // 4. Crear el usuario administrador
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          role: "ADMIN", // Rol de administrador para el creador de la empresa
          isActive: true,
          companyId: company.id,
        },
      });

      return { company, user };
    });

    // Devolver respuesta exitosa
    return NextResponse.json(
      {
        message: "Empresa registrada exitosamente",
        companyId: result.company.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar empresa:", error);
    return NextResponse.json(
      { message: "Error al procesar el registro" },
      { status: 500 }
    );
  }
}
