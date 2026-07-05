export type ContactFormInput = {
  email: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const prepareContactPayload = (raw: ContactFormInput) => {
  const email = raw.email.trim();
  const message = raw.message.trim();

  if (email.length < 1) {
    return { ok: false as const, message: "Please enter your email address." };
  }

  if (email.length > 254) {
    return { ok: false as const, message: "Email address is too long." };
  }

  if (!emailPattern.test(email)) {
    return { ok: false as const, message: "Please enter a valid email address." };
  }

  if (message.length < 1) {
    return { ok: false as const, message: "Please enter a message." };
  }

  if (message.length > 2000) {
    return { ok: false as const, message: "Message is too long." };
  }

  return { ok: true as const, payload: { email, message } };
};
