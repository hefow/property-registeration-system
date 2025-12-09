'use client';

import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { login, type LoginPayload } from "../services/auth.service";
import { persistAccessToken, readStoredToken } from "../services/api";
import { User } from "../types/user.types";

const USER_STORAGE_KEY = "saferecord:user";

const readStoredUser = () => {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(USER_STORAGE_KEY);
  if (!value) return null;

  try {
    return JSON.parse(value) as User;
  } catch (error) {
    console.warn("Failed to parse stored user", error);
    return null;
  }
};

const persistUser = (next: User | null) => {
  if (typeof window === "undefined") return;

  if (next) {
    window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(next));
  } else {
    window.localStorage.removeItem(USER_STORAGE_KEY);
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = readStoredToken();
    const storedUser = readStoredUser();

    if (storedToken) {
      setAccessToken(storedToken);
    }

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const signIn = useCallback(async (payload: LoginPayload) => {
    const response = await login(payload);
    const nextUser: User = {
      id: response.user.id,
      fullName: response.user.fullName,
      email: response.user.email,
      role: response.user.role as User["role"],
    };

    setUser(nextUser);
    setAccessToken(response.access_token);
    persistUser(nextUser);
    persistAccessToken(response.access_token);

    return response;
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    setAccessToken(null);
    persistUser(null);
    persistAccessToken(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      accessToken,
      signIn,
      signOut,
    }),
    [user, accessToken, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
