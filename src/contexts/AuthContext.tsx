import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { captureClientIdFromUrl } from "../lib/clientId"
import { fetchAuthMe, logoutSession, type AuthUser } from "../services/authService"

type AuthContextValue = {
  authReady: boolean
  user: AuthUser | null
  refreshUser: () => Promise<AuthUser | null>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authReady, setAuthReady] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  const refreshUser = useCallback(async () => {
    captureClientIdFromUrl()
    const next = await fetchAuthMe()
    setUser(next)
    return next
  }, [])

  const logout = useCallback(async () => {
    await logoutSession()
    setUser(null)
  }, [])

  useEffect(() => {
    void refreshUser().finally(() => {
      setAuthReady(true)
    })
  }, [refreshUser])

  const value = useMemo(
    () => ({
      authReady,
      user,
      refreshUser,
      logout,
    }),
    [authReady, user, refreshUser, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (value === null) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return value
}
