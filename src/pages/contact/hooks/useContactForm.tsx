import axios from "axios";
import { useState, type SubmitEvent } from "react";
import useAnalyticsEvents from "../../../hooks/useAnalyticsEvents";
import { prepareContactPayload } from "../contactForm";
import { postContactMessage } from "../../../services/contactService";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const useContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const { sendEvent } = useAnalyticsEvents();

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

  const handleEmailBlur = () => {
    sendEvent("contact_email_input_changed", { value: email });
  };

  const handleMessageBlur = () => {
    sendEvent("contact_message_input_changed", { value: message });
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
    statusMessageClassName: resolveStatusMessageClassName(),
    handleEmailBlur,
    handleMessageBlur,
    handleSubmit,
  };
};

export default useContactForm;
