"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  UserCheck,
  FileText,
  Settings,
  Home,
  Clock,
  Menu,
  X,
  Server,
  Terminal,
  Fingerprint,
  BarChart3,
  Shield,
  Bell,
  HardDrive,
  Wifi,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarItemType = {
  title: string;
  href?: string;
  icon: React.ElementType;
  roles: string[];
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  children?: Omit<SidebarItemType, "children">[];
};

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Expandir automáticamente la sección activa
  useEffect(() => {
    const activeGroup = sidebarItems.find((item) =>
      item.children?.some((child) => child.href === pathname)
    );

    if (activeGroup && !collapsed[activeGroup.title]) {
      setCollapsed((prev) => ({ ...prev, [activeGroup.title]: true }));
    }
  }, [pathname]);

  // Definir elementos del sidebar según el rol del usuario
  const sidebarItems: SidebarItemType[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
      roles: ["admin", "hr"],
    },
    {
      title: "Personal",
      icon: Users,
      roles: ["admin", "hr"],
      children: [
        {
          title: "Empleados",
          href: "/dashboard/employees",
          icon: Users,
          roles: ["admin", "hr"],
          badge: "Nuevo",
          badgeVariant: "outline",
        },
        {
          title: "Visitantes",
          href: "/dashboard/visitors",
          icon: UserCheck,
          roles: ["admin", "hr"],
        },
        {
          title: "Empleados Externos",
          href: "/dashboard/external-employees",
          icon: Users,
          roles: ["admin", "hr"],
        },
        {
          title: "Huellas Digitales",
          href: "/dashboard/fingerprints",
          icon: Fingerprint,
          roles: ["admin"],
        },
      ],
    },
    {
      title: "Asistencia",
      icon: Clock,
      roles: ["admin", "hr"],
      children: [
        {
          title: "Registros",
          href: "/dashboard/records",
          icon: Clock,
          roles: ["admin", "hr"],
        },
        {
          title: "Reportes",
          href: "/dashboard/reports",
          icon: FileText,
          roles: ["admin", "hr"],
        },
        {
          title: "Estadísticas",
          href: "/dashboard/statistics",
          icon: BarChart3,
          roles: ["admin", "hr"],
        },
      ],
    },
    {
      title: "Dispositivos",
      icon: Server,
      roles: ["admin"],
      badge: "2",
      badgeVariant: "destructive",
      children: [
        {
          title: "Monitoreo",
          href: "/dashboard/monitoring",
          icon: Wifi,
          roles: ["admin"],
          badge: "2",
          badgeVariant: "destructive",
        },
        {
          title: "Comandos",
          href: "/dashboard/settings/devices/commands",
          icon: Terminal,
          roles: ["admin"],
        },
        {
          title: "Firmware",
          href: "/dashboard/settings/devices/firmware",
          icon: HardDrive,
          roles: ["admin"],
        },
      ],
    },
    {
      title: "Configuración",
      href: "/dashboard/settings",
      icon: Settings,
      roles: ["admin"],
    },
    {
      title: "Seguridad",
      icon: Shield,
      roles: ["admin"],
      children: [
        {
          title: "Usuarios",
          href: "/dashboard/security/users",
          icon: Users,
          roles: ["admin"],
        },
        {
          title: "Permisos",
          href: "/dashboard/security/permissions",
          icon: Shield,
          roles: ["admin"],
        },
        {
          title: "Auditoría",
          href: "/dashboard/security/audit",
          icon: FileText,
          roles: ["admin"],
        },
      ],
    },
    {
      title: "Notificaciones",
      href: "/dashboard/notifications",
      icon: Bell,
      roles: ["admin", "hr"],
      badge: "3",
      badgeVariant: "default",
    },
  ];

  // Filtrar elementos del sidebar según el rol del usuario
  const filteredItems = sidebarItems
    .filter((item) => {
      if (!user) return false;
      return item.roles.includes(user.role);
    })
    .map((item) => {
      if (item.children) {
        return {
          ...item,
          children: item.children.filter((child) =>
            child.roles.includes(user.role)
          ),
        };
      }
      return item;
    });

  // Obtener iniciales del nombre del usuario
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const toggleCollapsed = (title: string) => {
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const renderSidebarItem = (item: SidebarItemType) => {
    // Si tiene hijos, renderizar como grupo colapsable
    if (item.children && item.children.length > 0) {
      return (
        <Collapsible
          key={item.title}
          open={collapsed[item.title]}
          onOpenChange={() => toggleCollapsed(item.title)}
          className="w-full"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between px-3 py-2 h-auto",
                item.children.some((child) => isActive(child.href)) &&
                  "bg-muted"
              )}
            >
              <div className="flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                <span className="text-sm">{item.title}</span>
                {item.badge && (
                  <Badge
                    variant={item.badgeVariant}
                    className="ml-2 px-1 py-0 h-4 min-w-4 text-[10px]"
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  collapsed[item.title] ? "transform rotate-180" : ""
                )}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 pr-2">
            {item.children.map((child) => (
              <Button
                key={child.title}
                asChild
                variant={isActive(child.href) ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start px-3 py-1.5 h-auto my-1 text-sm",
                  isActive(child.href) &&
                    "bg-secondary text-secondary-foreground"
                )}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <Link href={child.href || "#"}>
                  <div className="flex items-center w-full">
                    <child.icon className="mr-2 h-4 w-4" />
                    <span>{child.title}</span>
                    {child.badge && (
                      <Badge
                        variant={child.badgeVariant}
                        className="ml-auto px-1 py-0 h-4 min-w-4 text-[10px]"
                      >
                        {child.badge}
                      </Badge>
                    )}
                  </div>
                </Link>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }

    // Si no tiene hijos, renderizar como elemento simple
    return (
      <Button
        key={item.title}
        asChild
        variant={isActive(item.href) ? "default" : "ghost"}
        className={cn(
          "w-full justify-start px-3 py-2 h-auto",
          isActive(item.href) && "bg-primary text-primary-foreground"
        )}
        onClick={() => isMobile && setIsOpen(false)}
      >
        <Link href={item.href || "#"}>
          <div className="flex items-center w-full">
            <item.icon className="mr-2 h-4 w-4" />
            <span className="text-sm">{item.title}</span>
            {item.badge && (
              <Badge
                variant={item.badgeVariant}
                className="ml-auto px-1 py-0 h-4 min-w-4 text-[10px]"
              >
                {item.badge}
              </Badge>
            )}
          </div>
        </Link>
      </Button>
    );
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-3 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-background transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center border-b px-4"></div>

        <div className="flex flex-col h-[calc(100vh-4rem)]">
          <ScrollArea className="flex-1 px-3 py-3">
            <div className="space-y-1">
              {filteredItems.map(renderSidebarItem)}
            </div>
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10 border-2 border-primary/10">
                <AvatarImage
                  src="/placeholder.svg"
                  alt={user?.name || "Usuario"}
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {user ? getInitials(user.name) : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {user?.role === "admin"
                    ? "Administrador"
                    : "Recursos Humanos"}
                </p>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
                      onClick={logout}
                    >
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>Cerrar sesión</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="bg-muted/50 rounded-lg p-2 text-center">
              <p className="text-xs text-muted-foreground">
                Versión 1.2.0 • Última actualización: 23/04/2025
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay para cerrar el sidebar en móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
