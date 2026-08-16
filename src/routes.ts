export const routes = {
  home: { path: "/", label: "Home", mobileOnly: true },
  about: { path: "/about", label: "About" },
  contact: { path: "/contact", label: "Contact" },
  privacy: { path: "/privacy", label: "Privacy Policy" },
  terms: { path: "/terms", label: "Terms of Service" },
  uninstall: { path: "/uninstall", label: "Uninstall" },
} as const;

export type AppRoutePath = (typeof routes)[keyof typeof routes]["path"];

export type AppRoute = {
  path: AppRoutePath;
  label: string;
  mobileOnly?: boolean;
};

export const navLinks: AppRoute[] = [routes.home, routes.about, routes.contact];
