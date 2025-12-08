'use client';

import { ReactNode, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user.types";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo(
    () => ({
      user,
      signIn: async () => setUser({ id: "1", name: "Sandbox", email: "sandbox@safe.gov", role: "admin" }),
      signOut: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
