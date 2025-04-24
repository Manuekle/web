import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/contexts/auth-context";
import { ForceTheme } from "@/components/force-theme";
import { ThemeScript } from "./theme-script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Control de Asistencia",
  description: "Sistema de control de asistencia biométrico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ForceTheme />
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
