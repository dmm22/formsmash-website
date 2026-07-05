import axios from "axios";
import { useState, type SubmitEvent } from "react";
import { prepareContactPayload } from "../contactForm";
import { postContactMessage } from "../../../services/contactService";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const useContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isSubmitting = status === "submitting";

  const resolveContactErrorMessage = (httpStatus: number | undefined) => {
    if (httpStatus === 429) {
      return "You've sent too many messages. Please try again later.";
    }

    return "Something went wrong. Please try again.";
  };

  const resolveStatusMessageClassName = () => {
    if (status === "error") {
      return "text-text-secondary";
    }

    return "text-text-primary";
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const prepared = prepareContactPayload({ email, message });

    if (!prepared.ok) {
      setStatus("error");
      setStatusMessage(prepared.message);

      return;
    }

    try {
      await postContactMessage(prepared.payload);

      setEmail("");
      setMessage("");
      setStatus("success");
      setStatusMessage("Message sent. I'll get back to you soon.");
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("contact submit failed", error);
      }

      const httpStatus = axios.isAxiosError(error)
        ? error.response?.status
        : undefined;

      setStatus("error");
      setStatusMessage(resolveContactErrorMessage(httpStatus));
    }
  };

  return {
    email,
    setEmail,
    message,
    setMessage,
    statusMessage,
    isSubmitting,
    statusMessageClassName: resolveStatusMessageClassName(),
    handleSubmit,
  };
};

export default useContactForm;
