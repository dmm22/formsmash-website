import api from "../lib/axios"

export type AuthUser = {
  id: number
  email: string
  username: string | null
  avatar: string | null
}

type AuthUserResponse = {
  user: AuthUser
}

function messageFromError(error: unknown, fallback: string) {
  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response &&
    error.response.data &&
    typeof error.response.data === "object" &&
    "message" in error.response.data &&
    typeof error.response.data.message === "string"
  ) {
    return error.response.data.message
  }
  return fallback
}

export async function fetchAuthMe() {
  try {
    const response = await api.get<AuthUserResponse>("/auth/me")
    return response.data.user
  } catch {
    return null
  }
}

export async function loginWithPassword(email: string, password: string) {
  try {
    const response = await api.post<AuthUserResponse>("/auth/login", { email, password })
    return { ok: true as const, user: response.data.user }
  } catch (error) {
    return { ok: false as const, message: messageFromError(error, "Could not log in.") }
  }
}

export async function registerWithPassword(email: string, password: string) {
  try {
    const response = await api.post<{ ok: boolean; message: string }>("/auth/register", {
      email,
      password,
    })
    return { ok: true as const, message: response.data.message }
  } catch (error) {
    return { ok: false as const, message: messageFromError(error, "Could not create account.") }
  }
}

export async function requestPasswordReset(email: string) {
  try {
    const response = await api.post<{ ok: boolean; message: string }>("/auth/password/forgot", {
      email,
    })
    return { ok: true as const, message: response.data.message }
  } catch (error) {
    return { ok: false as const, message: messageFromError(error, "Could not send reset email.") }
  }
}

export async function resetPassword(token: string, password: string) {
  try {
    const response = await api.post<{ ok: boolean; message: string }>("/auth/password/reset", {
      token,
      password,
    })
    return { ok: true as const, message: response.data.message }
  } catch (error) {
    return { ok: false as const, message: messageFromError(error, "Could not reset password.") }
  }
}

export async function verifyEmailToken(token: string) {
  try {
    const response = await api.post<{ ok: boolean; message: string }>("/auth/email/verify", {
      token,
    })
    return { ok: true as const, message: response.data.message }
  } catch (error) {
    return {
      ok: false as const,
      message: messageFromError(error, "Verification link is invalid or expired."),
    }
  }
}

export async function logoutSession() {
  await api.post("/auth/logout")
}
