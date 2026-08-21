const SITE_CLIENT_ID_KEY = "formsmash_site_client_id"
const SESSION_CLIENT_ID_KEY = "formsmash_auth_client_id"

function createClientId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }
  return `web-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function captureClientIdFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const fromQuery = params.get("client_id")?.trim()
  if (!fromQuery) {
    return
  }
  sessionStorage.setItem(SESSION_CLIENT_ID_KEY, fromQuery)
}

export function getAuthClientId() {
  captureClientIdFromUrl()
  const fromSession = sessionStorage.getItem(SESSION_CLIENT_ID_KEY)?.trim()
  if (fromSession) {
    return fromSession
  }
  const existing = localStorage.getItem(SITE_CLIENT_ID_KEY)?.trim()
  if (existing) {
    return existing
  }
  const created = createClientId()
  localStorage.setItem(SITE_CLIENT_ID_KEY, created)
  return created
}
