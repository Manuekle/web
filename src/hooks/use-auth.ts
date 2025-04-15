"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  
  const login = async (email: string, password: string, companyId?: string) => {
    return signIn("credentials", {
      redirect: false,
      email,
      password,
      companyId,
    });
  };
  
  const logout = async (callbackUrl = "/") => {
    await signOut({ redirect: false });
    router.push(callbackUrl);
  };
  
  const hasRole = (roles: string | string[]) => {
    if (!session?.user?.role) return false;
    
    if (typeof roles === "string") {
      return session.user.role === roles;
    }
    
    return roles.includes(session.user.role);
  };
  
  return {
    session,
    user: session?.user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    hasRole,
  };
}