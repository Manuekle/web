import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Clave secreta para firmar los tokens JWT (en producción, usar variables de entorno)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "tu_clave_secreta_muy_segura_para_jwt"
);

export type UserRole = "admin" | "hr";

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

// Función para crear un token JWT
export async function createToken(user: UserData): Promise<string> {
  const token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h") // Token válido por 8 horas
    .sign(JWT_SECRET);

  return token;
}

// Función para verificar un token JWT
export async function verifyToken(token: string): Promise<UserData | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as UserData;
  } catch (error) {
    return null;
  }
}

// Función para obtener el usuario actual desde las cookies
export async function getCurrentUser(): Promise<UserData | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token")?.value;

  if (!token) return null;

  return verifyToken(token);
}

// Middleware para proteger rutas de API
export async function authMiddleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const user = await verifyToken(token);

  if (!user) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }

  // Añadir el usuario a la solicitud para usarlo en los controladores
  return NextResponse.next();
}

// Función para verificar si un usuario tiene un rol específico
export function hasRole(user: UserData | null, roles: UserRole[]): boolean {
  if (!user) return false;
  return roles.includes(user.role);
}

// Función para autenticar un usuario
export async function authenticateUser(
  email: string,
  password: string
): Promise<UserData | null> {
  try {
    // Buscar usuario en la base de datos
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) return null;

    // En producción, verificar hash de contraseña
    // const passwordMatch = await bcrypt.compare(password, user.password)
    // if (!passwordMatch) return null

    // Para simplificar, comparamos directamente (en producción, usar bcrypt)
    if (user.password !== password) return null;

    return {
      id: user.id,
      email: user.email,
      name: user.nombre,
      role: user.rol,
    };
  } catch (error) {
    console.error("Error al autenticar usuario:", error);
    return null;
  }
}

// Función para crear un usuario (para inicialización)
export async function createUser(
  email: string,
  name: string,
  password: string,
  role: UserRole
): Promise<UserData | null> {
  try {
    // En producción, hashear contraseña
    // const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.usuario.create({
      data: {
        email,
        nombre: name,
        password, // En producción: hashedPassword
        rol: role as any,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.nombre,
      role: user.rol,
    };
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return null;
  }
}

export async function verifyAuth(token: string) {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    return verified.payload as any;
  } catch (error) {
    throw new Error("Your token has expired.");
  }
}
