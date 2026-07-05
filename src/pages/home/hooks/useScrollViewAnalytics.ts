import { useEffect, useRef } from "react";
import useAnalyticsEvents, {
  type AnalyticsEventName,
} from "../../../hooks/useAnalyticsEvents";

const useScrollViewAnalytics = (eventName: AnalyticsEventName) => {
  const observerRef = useRef<HTMLDivElement>(null);
  const hasLoggedRef = useRef(false);
  const { sendEvent } = useAnalyticsEvents();

  useEffect(() => {
    const observerElement = observerRef.current;

    if (!observerElement) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (hasLoggedRef.current) {
        return;
      }

      hasLoggedRef.current = true;
      sendEvent(eventName);
      observer.disconnect();
    });

    observer.observe(observerElement);

    return () => observer.disconnect();
  }, [eventName, sendEvent]);

  return observerRef;
};

export default useScrollViewAnalytics;
