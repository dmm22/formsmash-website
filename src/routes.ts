export type AppRoute = {
  path: string;
  label: string;
  mobileOnly?: boolean;
};

export const routes = {
  home: { path: "/", label: "Home", mobileOnly: true },
  about: { path: "/about", label: "About" },
  contact: { path: "/contact", label: "Contact" },
  privacy: { path: "/privacy", label: "Privacy Policy" },
  terms: { path: "/terms", label: "Terms of Service" },
} as const;

export const navLinks: AppRoute[] = [routes.home, routes.about, routes.contact];
