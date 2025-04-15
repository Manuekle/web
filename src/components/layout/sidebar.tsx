"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Clock,
  Smartphone,
  FileText,
  Settings,
  UserCheck,
  Building,
  LogOut,
  FolderKanban,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout, hasRole } = useAuth();

  // Navegación básica para todos los usuarios
  const baseNavigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Asistencia", href: "/attendance", icon: Clock },
  ];

  // Navegación para administradores y gerentes
  // const managerNavigation = [
  //   { name: "Empleados", href: "/employees", icon: Users },
  //   { name: "Horarios", href: "/schedules", icon: Calendar },
  //   { name: "Reportes", href: "/reports", icon: FileText },
  //   { name: "Visitantes", href: "/visitors", icon: UserCheck },
  // ];

  // Navegación solo para administradores
  const adminNavigation = [
    { name: "Dispositivos", href: "/devices", icon: Smartphone },
    { name: "Configuración", href: "/settings", icon: Settings },
  ];

  // Navegación solo para super administradores
  const superAdminNavigation = [
    { name: "Empresas", href: "/companies", icon: Building },
  ];

  //sección de navegación para administradores y gerentes
  const managerNavigation = [
    { name: "Empleados", href: "/employees", icon: Users },
    {
      name: "Departamentos",
      href: "/employees/departments",
      icon: FolderKanban,
    },
    { name: "Horarios", href: "/schedules", icon: Calendar },
    { name: "Reportes", href: "/reports", icon: FileText },
    { name: "Visitantes", href: "/visitors", icon: UserCheck },
  ];

  // Construir la navegación según el rol
  let navigation = [...baseNavigation];

  if (hasRole(["ADMIN", "MANAGER"])) {
    navigation = [...navigation, ...managerNavigation];
  }

  if (hasRole(["ADMIN"])) {
    navigation = [...navigation, ...adminNavigation];
  }

  if (hasRole(["SUPER_ADMIN"])) {
    navigation = [...navigation, ...superAdminNavigation];
  }

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white w-64">
      <div className="px-4 py-6">
        <h1 className="text-xl font-bold">Control de Asistencia</h1>
        {user?.companyName && (
          <p className="text-sm text-gray-400 mt-1">{user.companyName}</p>
        )}
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm rounded-md ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => logout("/")}
          className="flex items-center px-4 py-2 text-sm rounded-md text-gray-300 hover:bg-gray-700 w-full"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
