const DEFAULT_BASE = "http://localhost:3001"
const ACCESS_TOKEN_STORAGE_KEY = "saferecord:access_token"

const normalizeBase = (value?: string) => value?.replace(/\/+$/g, "") ?? DEFAULT_BASE
const trimPath = (path: string) => path.replace(/^\/+/, "")
const API_BASE_URL = normalizeBase(process.env.NEXT_PUBLIC_API_URL)

const buildUrl = (path: string) => `${API_BASE_URL}/${trimPath(path)}`

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
}

export const readStoredToken = () => {
  if (typeof window === "undefined") return null
  return window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

export const persistAccessToken = (token: string | null) => {
  if (typeof window === "undefined") return
  if (token) {
    window.localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token)
  } else {
    window.localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
  }
}

const handleResponse = async (response: Response) => {
  const payload = await response.json().catch(() => null)

  if (!response.ok) {
    const message = payload?.message || response.statusText || "Request failed"
    throw new Error(message)
  }

  return payload
}

const request = async (path: string, init?: RequestInit) => {
  const token = readStoredToken()

  const headers = new Headers(defaultHeaders)
  if (token) headers.set("Authorization", `Bearer ${token}`)

  const initHeaders = init?.headers
  if (initHeaders) {
    if (initHeaders instanceof Headers) {
      initHeaders.forEach((value, key) => headers.set(key, value))
    } else if (Array.isArray(initHeaders)) {
      for (const [key, value] of initHeaders) {
        headers.set(key, value)
      }
    } else {
      for (const [key, value] of Object.entries(initHeaders)) {
        if (value !== undefined) headers.set(key, String(value))
      }
    }
  }

  try {
    const response = await fetch(buildUrl(path), {
      ...(init ?? {}),
      headers,
    })

    return handleResponse(response)
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Unable to reach the backend server. Please ensure it is running.")
    }
    throw error
  }
}

export const api = {
  request,
  get: (path: string) => request(path),
  post: (path: string, body: unknown) =>
    request(path, { method: "POST", body: JSON.stringify(body) }),
}

export { ACCESS_TOKEN_STORAGE_KEY }
