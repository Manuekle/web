"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fingerprint, Lock, User, AlertCircle } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
  const router = useRouter();
  const { user, login, error, loading } = useAuth();
  const [adminEmail, setAdminEmail] = useState();
  const [adminPassword, setAdminPassword] = useState();
  const [hrEmail, setHrEmail] = useState();
  const [hrPassword, setHrPassword] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await login(adminEmail, adminPassword);
    if (success) {
      router.push("/dashboard");
    }
    setIsSubmitting(false);
  };

  const handleHRLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await login(hrEmail, hrPassword);
    if (success) {
      router.push("/dashboard");
    }
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-zinc-900 p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col items-center justify-center space-y-6">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-black/10 dark:bg-white/10 rounded-full animate-pulse animation-delay-200"></div>
            <div className="absolute inset-8 bg-black/15 dark:bg-white/15 rounded-full animate-pulse animation-delay-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Fingerprint className="h-32 w-32 text-black dark:text-white" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">
              Sistema de Control de Asistencia
            </h1>
            <p className="text-muted-foreground max-w-md">
              Gestión biométrica de asistencia para empleados y visitantes con
              tecnología de reconocimiento de huella dactilar.
            </p>
          </div>
        </div>

        <Card className="w-full shadow-lg border-black/5 dark:border-white/5">
          <CardHeader className="space-y-1">
            <div className="flex md:hidden items-center justify-center mb-4">
              <Fingerprint className="h-16 w-16 text-black dark:text-white" />
            </div>
            <CardTitle className="text-2xl text-center">
              Acceso al Sistema
            </CardTitle>
            <CardDescription className="text-center">
              Ingrese sus credenciales para acceder al sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-4 flex flex-row items-center border px-4 py-3 rounded-lg border-red-400 text-red-400 gap-4">
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>{error}</AlertDescription>
              </div>
            )}

            <Tabs defaultValue="admin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="admin" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Administrador
                </TabsTrigger>
                <TabsTrigger value="hr" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Recursos Humanos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="admin">
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Correo electrónico</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      placeholder="admin@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="admin-password">Contraseña</Label>
                      <a
                        href="#"
                        className="text-xs text-primary hover:underline"
                      >
                        ¿Olvidó su contraseña?
                      </a>
                    </div>
                    <Input
                      id="admin-password"
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Iniciando sesión..."
                      : "Acceder como Administrador"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="hr">
                <form onSubmit={handleHRLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hr-email">Correo electrónico</Label>
                    <Input
                      id="hr-email"
                      type="email"
                      value={hrEmail}
                      onChange={(e) => setHrEmail(e.target.value)}
                      placeholder="rrhh@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hr-password">Contraseña</Label>
                      <a
                        href="#"
                        className="text-xs text-primary hover:underline"
                      >
                        ¿Olvidó su contraseña?
                      </a>
                    </div>
                    <Input
                      id="hr-password"
                      type="password"
                      value={hrPassword}
                      onChange={(e) => setHrPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Iniciando sesión..."
                      : "Acceder como Recursos Humanos"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-xs text-center text-muted-foreground">
              Al acceder, acepta los términos de servicio y la política de
              privacidad.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
