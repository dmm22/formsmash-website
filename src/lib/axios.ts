import axios, { type AxiosInstance } from "axios";

let apiInstance: AxiosInstance | null = null;

export function getApi(): AxiosInstance {
  if (apiInstance) {
    return apiInstance;
  }

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  if (!baseURL) {
    throw new Error("VITE_API_BASE_URL is not defined");
  }

  apiInstance = axios.create({
    baseURL,
  });

  return apiInstance;
}
