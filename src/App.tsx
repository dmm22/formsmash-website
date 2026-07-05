import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import TermsOfServicePage from "./pages/terms_of_service/TermsOfServicePage";
import NotFoundPage from "./pages/page_not_found/NotFoundPage";
import { useEffect } from "react";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
