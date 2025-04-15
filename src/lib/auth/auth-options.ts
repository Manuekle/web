import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { CustomPrismaAdapter } from "./prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: CustomPrismaAdapter(prisma) as any,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        companyId: { label: "Company ID", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        // Si estamos en la página de login de empresa, necesitamos el companyId
        const companyId = credentials.companyId;

        // Buscar usuario por email y companyId si está disponible
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            ...(companyId ? { companyId } : {}),
          },
          include: {
            company: true,
            employee: true,
          },
        });

        if (!user) {
          throw new Error("Usuario no encontrado");
        }

        if (!user.isActive) {
          throw new Error("Usuario inactivo");
        }

        // Verificar contraseña
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Contraseña incorrecta");
        }

        // Actualizar último login
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() },
        });

        // Devolver datos del usuario para el token
        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          companyId: user.companyId,
          companyName: user.company?.name,
          employeeId: user.employeeId,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Pasar datos del usuario al token
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.companyId = user.companyId;
        token.companyName = user.companyName;
        token.employeeId = user.employeeId;
      }
      return token;
    },
    async session({ session, token }) {
      // Pasar datos del token a la sesión
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.companyId = token.companyId as string;
        session.user.companyName = token.companyName as string;
        session.user.employeeId = token.employeeId as string | null;
      }
      return session;
    },
  },
};
