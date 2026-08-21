export const routes = {
  home: { path: "/", label: "Home" },
  about: { path: "/about", label: "About" },
  contact: { path: "/contact", label: "Contact" },
  privacy: { path: "/privacy", label: "Privacy Policy" },
  terms: { path: "/terms", label: "Terms of Service" },
  uninstall: { path: "/uninstall", label: "Uninstall" },
  login: { path: "/login", label: "Log In" },
  register: { path: "/register", label: "Sign Up" },
  authSuccess: { path: "/auth-success", label: "Signed In" },
  loggedOut: { path: "/logged-out", label: "Logged Out" },
  forgotPassword: { path: "/forgot-password", label: "Forgot Password" },
  resetPassword: { path: "/reset-password", label: "Reset Password" },
  verifyEmail: { path: "/verify-email", label: "Verify Email" },
} as const;

export type AppRoutePath = (typeof routes)[keyof typeof routes]["path"];
