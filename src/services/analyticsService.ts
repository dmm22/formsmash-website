import api from "../lib/axios";

export type AnalyticsEventPayload = {
  event: string;
  path: string;
  properties: Record<string, unknown>;
  visitorId: string;
  sessionId: string;
  referrer?: string;
  recordedAt?: string;
};

export const postAnalyticsEvent = async (payload: AnalyticsEventPayload) => {
  return api.post("/analytics/event", payload);
};
