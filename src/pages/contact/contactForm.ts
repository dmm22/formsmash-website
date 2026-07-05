import type { ContactMessagePayload } from "../../services/contactService";

export type ContactFormInput = {
  email: string;
  message: string;
};

type PreparedContactPayload =
  | { ok: true; payload: ContactMessagePayload }
  | { ok: false; message: string };

export const prepareContactPayload = (
  raw: ContactFormInput,
): PreparedContactPayload => {
  const email = raw.email.trim();
  const message = raw.message.trim();

  if (email.length < 3) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (email.length > 254) {
    return { ok: false, message: "Email address is too long." };
  }

  if (message.length < 1) {
    return { ok: false, message: "Please enter a message." };
  }

  if (message.length > 2000) {
    return { ok: false, message: "Message is too long." };
  }

  return { ok: true, payload: { email, message } };
};
