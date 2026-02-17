"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { getAuthRedirectByRole, getMockSession, hasRequiredRole, type AuthUser, type UserRole } from "./auth-utils";

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signInWithEmail: (email: string, _password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
  canAccess: (roles: UserRole[]) => boolean;
  getRedirectPath: () => string;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      signInWithEmail: async (email) => {
        const session = getMockSession();
        setUser({ ...session, email });
      },
      signInWithGoogle: async () => {
        setUser(getMockSession());
      },
      signOut: () => setUser(null),
      canAccess: (roles) => (user ? hasRequiredRole(user.role, roles) : false),
      getRedirectPath: () => (user ? getAuthRedirectByRole(user.role) : "/auth"),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth harus dipakai di dalam AuthProvider");
  }

  return context;
}
