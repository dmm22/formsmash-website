import axios, { isAxiosError } from "axios";

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
};

function readStringField(data: unknown, field: string): string | undefined {
  if (typeof data !== "object" || data === null) {
    return undefined;
  }

  if (!(field in data)) {
    return undefined;
  }

  const value = (data as Record<string, unknown>)[field];

  if (typeof value !== "string") {
    return undefined;
  }

  return value;
}

function toApiError(error: unknown): ApiError {
  if (!isAxiosError(error)) {
    return { message: "Something went wrong" };
  }

  if (!error.response) {
    return { message: "Network error — check your connection" };
  }

  return {
    message: readStringField(error.response.data, "message") ?? "Request failed",
    status: error.response.status,
    code: readStringField(error.response.data, "code"),
  };
}

const baseURL = import.meta.env.VITE_API_BASE_URL;

if (!baseURL) {
  throw new Error("VITE_API_BASE_URL is not defined");
}

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(toApiError(error)),
);
