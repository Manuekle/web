"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ForceTheme() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Forzar la aplicación del tema al cargar
    const currentTheme = localStorage.getItem("theme") || "system";
    setTheme(currentTheme);

    // Verificar si el tema se aplicó correctamente
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const hasThemeClass =
        htmlElement.classList.contains("dark") ||
        htmlElement.classList.contains("light");

      if (!hasThemeClass && resolvedTheme) {
        // Si no tiene clase de tema, forzar la aplicación
        htmlElement.classList.add(resolvedTheme);
      }
    };

    checkTheme();
    // Verificar nuevamente después de un breve retraso
    const timer = setTimeout(checkTheme, 500);

    return () => clearTimeout(timer);
  }, [setTheme, resolvedTheme]);

  return null;
}
