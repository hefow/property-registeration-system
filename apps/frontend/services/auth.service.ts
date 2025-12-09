import { api } from "./api"

export type AuthRole = "property_owner" | "government_official" | "admin"

const userRoleMap: Record<AuthRole, string> = {
  property_owner: "PROPERTY_OWNER",
  government_official: "GOVERNMENT_OFFICIAL",
  admin: "ADMIN",
}

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  user: {
    id: string
    email: string
    fullName: string
    role: string
  }
}

export interface RegisterPayload {
  fullName: string
  email: string
  password: string
  phoneNumber?: string
  role: AuthRole
  department?: string
}

export interface RegisterResponse {
  message: string
  userId: string
}

export async function login(payload: LoginPayload) {
  return api.post("/auth/login", payload) as Promise<LoginResponse>
}

export async function register(payload: RegisterPayload) {
  const preparedPayload = {
    ...payload,
    role: userRoleMap[payload.role] ?? payload.role.toUpperCase(),
  }

  return api.post("/auth/register", preparedPayload) as Promise<RegisterResponse>
}
