import api from "../lib/axios";

export type ContactMessagePayload = {
  email: string;
  message: string;
};

export const postContactMessage = async (payload: ContactMessagePayload) => {
  return api.post<{ ok: true }>("/contact", payload);
};
