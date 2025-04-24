"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "hr"
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Verificar si el usuario está autenticado al cargar la página
  useEffect(() => {
    async function loadUserFromAPI() {
      try {
        const res = await fetch("/api/auth/me")
        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
        }
      } catch (error) {
        console.error("Error al cargar usuario:", error)
      } finally {
        setLoading(false)
      }
    }

    loadUserFromAPI()
  }, [])

  // Función para iniciar sesión
  const login = async (email: string, password: string): Promise<boolean> => {
    setError(null)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión")
        return false
      }

      setUser(data.user)
      return true
    } catch (error) {
      console.error("Error en login:", error)
      setError("Error al conectar con el servidor")
      return false
    }
  }

  // Función para cerrar sesión
  const logout = async (): Promise<void> => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      })
      setUser(null)
      window.location.href = "/login"
    } catch (error) {
      console.error("Error en logout:", error)
    }
  }

  return <AuthContext.Provider value={{ user, loading, login, logout, error }}>{children}</AuthContext.Provider>
}

// Hook personalizado para usar el contexto de autenticación
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}
