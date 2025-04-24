"use client";

import { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  BellIcon,
  LogOut,
  Settings,
  User,
  Search,
  Menu,
  X,
  Check,
  Laptop,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth-context";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Header() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Nuevo registro",
      message: "Se ha registrado una nueva entrada",
      time: "Hace 5 minutos",
      read: false,
    },
    {
      id: 2,
      title: "Dispositivo desconectado",
      message: "El dispositivo AIC003 se ha desconectado",
      time: "Hace 20 minutos",
      read: false,
    },
    {
      id: 3,
      title: "Actualización disponible",
      message: "Hay una nueva versión de firmware disponible",
      time: "Hace 1 hora",
      read: true,
    },
  ]);

  // Importante: Necesitamos asegurarnos de que el componente esté montado
  // antes de acceder a theme para evitar errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
  };

  // Obtener iniciales del nombre del usuario
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  // Si no está montado, renderizamos un placeholder para evitar cambios de hidratación
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {/* Placeholders para los botones */}
          </div>
        </div>
      </header>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-background border-b shadow-sm"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div
          className={cn(
            "absolute left-0 right-0 top-0 bottom-0 bg-background flex items-center justify-center px-4 transition-all duration-300",
            showSearch
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="w-full max-w-md relative">
            <Input
              placeholder="Buscar empleados, dispositivos..."
              className="pr-10"
              autoFocus={showSearch}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={() => setShowSearch(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setShowSearch(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <BellIcon className="h-5 w-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notificaciones</span>
                {unreadNotifications > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto text-xs px-2 py-1"
                    onClick={markAllAsRead}
                  >
                    Marcar todas como leídas
                  </Button>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        "p-3 hover:bg-muted cursor-pointer",
                        !notification.read && "bg-muted/50"
                      )}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary text-[10px] h-auto py-0"
                          >
                            Nuevo
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-xs mb-1">
                        {notification.message}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-muted-foreground text-sm">
                    No hay notificaciones
                  </div>
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-center cursor-pointer">
                Ver todas las notificaciones
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Cambiar tema</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              >
                <SunIcon className="mr-2 h-4 w-4" />
                <span>Claro</span>
                {currentTheme === "light" && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="cursor-pointer"
              >
                <MoonIcon className="mr-2 h-4 w-4" />
                <span>Oscuro</span>
                {currentTheme === "dark" && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="cursor-pointer"
              >
                <Laptop className="mr-2 h-4 w-4" />
                <span>Sistema</span>
                {theme === "system" && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8 border-2 border-primary/10">
                  <AvatarImage
                    src="/placeholder.svg"
                    alt={user?.name || "Usuario"}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user ? getInitials(user.name) : "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
