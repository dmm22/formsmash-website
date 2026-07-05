import api from "../lib/axios";

export type ShowcaseEventName =
  | "with_or_without_section_viewed"
  | "manage_autofill_data_section_viewed"
  | "try_it_out_section_viewed"
  | "battle_tested_section_viewed";

export type AnalyticsEventName =
  | "page_visit"
  | "nav_link_clicked"
  | "footer_link_clicked"
  | "hero_viewed"
  | "cta_button_clicked"
  | "custom_gpt_button_clicked"
  | "contact_form_submitted"
  | "footer_scrolled_into_view"
  | ShowcaseEventName;

export type AnalyticsEventPayload = {
  event: AnalyticsEventName;
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
