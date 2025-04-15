"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Bell, Menu, X, LogOut, User, Settings } from "lucide-react";

export function Header() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-4 justify-between">
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-500 hover:text-gray-700"
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex-1" />

      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={18} />
            </div>
            <span className="hidden md:block font-medium">
              {user?.name || "Usuario"}
            </span>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-2 text-xs text-gray-500">
                {user?.companyName}
              </div>
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  Perfil
                </div>
              </a>
              {user?.role === "ADMIN" && (
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <Settings size={16} className="mr-2" />
                    Configuración
                  </div>
                </a>
              )}
              <button
                onClick={() => logout("/")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <LogOut size={16} className="mr-2" />
                  Cerrar Sesión
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
