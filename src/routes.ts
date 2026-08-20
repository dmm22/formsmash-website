export const routes = {
  home: { path: "/", label: "Home" },
  about: { path: "/about", label: "About" },
  contact: { path: "/contact", label: "Contact" },
  privacy: { path: "/privacy", label: "Privacy Policy" },
  terms: { path: "/terms", label: "Terms of Service" },
  uninstall: { path: "/uninstall", label: "Uninstall" },
} as const;

export type AppRoutePath = (typeof routes)[keyof typeof routes]["path"];
