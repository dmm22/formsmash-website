import axios from "axios";
import { useState, type SubmitEvent } from "react";
import type { SendAnalyticsEvent } from "../../../contexts/AnalyticsContext";
import { prepareContactPayload } from "../contactForm";
import { postContactMessage } from "../../../services/contactService";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const useContactForm = (sendEvent: SendAnalyticsEvent) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isSubmitting = status === "submitting";
  const statusMessageClassName =
    status === "error" ? "text-text-secondary" : "text-text-primary";

  const resolveContactErrorMessage = (httpStatus: number | undefined) => {
    if (httpStatus === 429) {
      return "You've sent too many messages. Please try again later.";
    }

    return "Something went wrong. Please try again.";
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

      sendEvent("contact_form_submitted");

      setEmail("");
      setMessage("");
      setStatus("success");
      setStatusMessage("Message sent. I'll get back to you soon.");
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("contact submit failed", error);
      }

      let httpStatus: number | undefined;

      if (axios.isAxiosError(error)) {
        httpStatus = error.response?.status;
      }

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
    statusMessageClassName,
    handleSubmit,
  };
};

export default useContactForm;
