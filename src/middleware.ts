import { type NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

// Rutas públicas que no requieren autenticación
const publicRoutes = ["/login", "/api/auth/login"];

// Rutas que requieren rol de administrador
const adminRoutes = ["/settings", "/api/devices"];

// Rutas que requieren rol de recursos humanos o administrador
const hrRoutes = ["/employees", "/visitors", "/api/employees"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Permitir rutas públicas
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Verificar token de autenticación
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    // Redirigir a login si no hay token
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const user = await verifyToken(token);

  if (!user) {
    // Redirigir a login si el token es inválido
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Verificar permisos para rutas de administrador
  if (
    adminRoutes.some((route) => pathname.startsWith(route)) &&
    user.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Verificar permisos para rutas de recursos humanos
  if (
    hrRoutes.some((route) => pathname.startsWith(route)) &&
    user.role !== "admin" &&
    user.role !== "hr"
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
