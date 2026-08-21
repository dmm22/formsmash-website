import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import TermsOfServicePage from "./pages/terms_of_service/TermsOfServicePage";
import NotFoundPage from "./pages/page_not_found/NotFoundPage";
import { useEffect, useRef } from "react";
import { useAnalytics } from "./contexts/AnalyticsContext";
import SuccessPage from "./pages/subscription_success/SuccessPage";
import UninstallPage from "./pages/uninstall/UninstallPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";
import AuthSuccessPage from "./pages/auth/AuthSuccessPage";
import LoggedOutPage from "./pages/auth/LoggedOutPage";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const { pathname } = useLocation();
  const { sendEvent } = useAnalytics();
  const hasSentPageVisitRef = useRef<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (hasSentPageVisitRef.current === pathname) {
      return;
    }

    hasSentPageVisitRef.current = pathname;
    sendEvent("page_visit");
  }, [pathname, sendEvent]);

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/uninstall" element={<UninstallPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/auth-success" element={<AuthSuccessPage />} />
          <Route path="/logged-out" element={<LoggedOutPage />} />
          <Route path="/logout" element={<LoggedOutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
