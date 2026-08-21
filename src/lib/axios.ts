import axios from "axios"
import { getAuthClientId } from "./clientId"

const baseURL = import.meta.env.VITE_API_BASE_URL

if (!baseURL) {
  throw new Error("VITE_API_BASE_URL is not defined")
}

const api = axios.create({
  baseURL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  config.headers.set("X-Client-Id", getAuthClientId())
  return config
})

export function getApiOrigin() {
  return String(baseURL).replace(/\/api\/?$/, "")
}

export function getGoogleStartUrl() {
  const clientId = encodeURIComponent(getAuthClientId())
  return `${String(baseURL).replace(/\/$/, "")}/auth/google/start?client_id=${clientId}`
}

export default api
