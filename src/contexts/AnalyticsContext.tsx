import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import {
  postAnalyticsEvent,
  type AnalyticsEventName,
} from "../services/analyticsService";

export type {
  AnalyticsEventName,
  ShowcaseEventName,
} from "../services/analyticsService";

export type AnalyticsEventProperties = Record<string, unknown>;

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

const buildSendAnalyticsEvent = (pathname: string) => {
  return async (
    eventName: AnalyticsEventName,
    properties?: AnalyticsEventProperties,
  ) => {
    try {
      await postAnalyticsEvent({
        event: eventName,
        path: pathname.trim() || "/",
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
  };
};

export type SendAnalyticsEvent = ReturnType<typeof buildSendAnalyticsEvent>;

type AnalyticsContextValue = {
  sendEvent: SendAnalyticsEvent;
};

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  const sendEvent = useCallback(buildSendAnalyticsEvent(pathname), [pathname]);

  return (
    <AnalyticsContext.Provider value={{ sendEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);

  if (!context) {
    throw new Error("useAnalytics must be used within AnalyticsProvider");
  }

  return context;
};

export const useScrollViewAnalytics = (scrollEventName: AnalyticsEventName) => {
  const { sendEvent } = useAnalytics();
  const scrollObserverRef = useRef<HTMLDivElement>(null);
  const viewEventSentRef = useRef(false);

  useEffect(() => {
    const observerElement = scrollObserverRef.current;

    if (!observerElement) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (!entry?.isIntersecting) {
        return;
      }

      if (viewEventSentRef.current) {
        return;
      }

      viewEventSentRef.current = true;
      sendEvent(scrollEventName);
      observer.disconnect();
    });

    observer.observe(observerElement);

    return () => {
      observer.disconnect();
    };
  }, [scrollEventName, sendEvent]);

  return { scrollObserverRef };
};
