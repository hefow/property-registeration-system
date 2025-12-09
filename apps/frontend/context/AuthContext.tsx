'use client';

import { createContext, useContext } from "react";
import type { LoginPayload, LoginResponse } from "../services/auth.service";
import { User } from "../types/user.types";

type AuthContextValue = {
  user: User | null;
  accessToken: string | null;
  signIn: (payload: LoginPayload) => Promise<LoginResponse>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
}
