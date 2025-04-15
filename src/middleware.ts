import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

// Rutas que no requieren autenticación
const publicRoutes = ["/", "/login", "/register", "/api/auth"];

// Rutas que requieren roles específicos
const roleRoutes = {
  "/admin": ["SUPER_ADMIN"],
  "/settings": ["SUPER_ADMIN", "ADMIN"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Verificar si es una ruta pública
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  
  // Verificar token de autenticación
  const token = await getToken({ req: request });
  
  // Si no hay token, redirigir a login
  if (!token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }
  
  // Verificar permisos de rol para rutas específicas
  for (const [route, roles] of Object.entries(roleRoutes)) {
    if (pathname.startsWith(route) && !roles.includes(token.role as string)) {
      // Redirigir a dashboard si no tiene permisos
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};