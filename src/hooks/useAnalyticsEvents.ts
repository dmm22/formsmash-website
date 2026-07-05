import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { postAnalyticsEvent } from "../services/analyticsService";

export type AnalyticsEventName =
  | "page_visit"
  | "nav_link_clicked"
  | "footer_link_clicked"
  | "home_section_viewed"
  | "cta_button_clicked"
  | "custom_gpt_button_clicked"
  | "contact_email_input_changed"
  | "contact_message_input_changed"
  | "contact_form_submitted"
  | "footer_scrolled_into_view";

export type AnalyticsEventPath =
  "/" | "/about" | "/contact" | "/privacy" | "/terms" | "/success";

export type AnalyticsEventProperties<T> = Record<string, T>;

const visitorIdStorageKey = "formsmash_visitor_id";
const sessionIdStorageKey = "formsmash_session_id";

const getOrCreateVisitorId = () => {
  const storedVisitorId = localStorage.getItem(visitorIdStorageKey);

  if (storedVisitorId) {
    return storedVisitorId;
  }

  const visitorId = crypto.randomUUID();
  localStorage.setItem(visitorIdStorageKey, visitorId);

  return visitorId;
};

const getOrCreateSessionId = () => {
  const storedSessionId = sessionStorage.getItem(sessionIdStorageKey);

  if (storedSessionId) {
    return storedSessionId;
  }

  const sessionId = crypto.randomUUID();
  sessionStorage.setItem(sessionIdStorageKey, sessionId);

  return sessionId;
};

const resolveAnalyticsReferrer = () => {
  const referrer = document.referrer.trim();

  if (!referrer) {
    return undefined;
  }

  return referrer;
};

const useAnalyticsEvents = () => {
  const { pathname } = useLocation();

  const sendEvent = useCallback(
    async <T>(
      eventName: AnalyticsEventName,
      properties?: AnalyticsEventProperties<T>,
      path?: AnalyticsEventPath,
    ) => {
      const eventPath = path ?? pathname;

      try {
        await postAnalyticsEvent({
          event: eventName,
          path: eventPath.trim() || "/",
          properties: properties ?? {},
          visitorId: getOrCreateVisitorId(),
          sessionId: getOrCreateSessionId(),
          referrer: resolveAnalyticsReferrer(),
          recordedAt: new Date().toISOString(),
        });
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("analytics event failed", error);
        }
      }
    },
    [pathname],
  );

  return { sendEvent };
};

export default useAnalyticsEvents;
