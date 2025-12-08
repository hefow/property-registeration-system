'use client';

import { createContext, useContext } from "react";
import { User } from "../types/user.types";

type AuthContextValue = {
  user: User | null;
  signIn: () => Promise<void>;
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
