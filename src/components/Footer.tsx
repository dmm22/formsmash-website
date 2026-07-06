import { useNavigate } from "react-router-dom";
import ScrollViewAnchor from "./ScrollViewAnchor";
import { routes, type AppRoutePath } from "../routes";
import { openExternalUrl } from "../utils/urlUtils";
import {
  useAnalytics,
  useScrollViewAnalytics,
} from "../contexts/AnalyticsContext";

type FooterLinkItem = {
  label: string;
  path?: AppRoutePath;
  externalUrl?: string;
};

type FooterSection = {
  title: string;
  links: FooterLinkItem[];
};

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      {
        label: "Install The Extension",
        externalUrl: import.meta.env.VITE_CHROME_LISTING_URL,
      },
      {
        label: "Custom GPT",
        externalUrl: import.meta.env.VITE_CUSTOM_GPT_URL,
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", path: routes.contact.path },
      { label: "Privacy Policy", path: routes.privacy.path },
      { label: "Terms of Service", path: routes.terms.path },
    ],
  },
  {
    title: "About",
    links: [{ label: "About FormSmash", path: routes.about.path }],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const { sendEvent } = useAnalytics();
  const { scrollObserverRef } = useScrollViewAnalytics(
    "footer_scrolled_into_view",
  );

  const handleFooterLinkClicked = (link: FooterLinkItem) => {
    if (!link.path && !link.externalUrl) {
      return;
    }

    sendEvent("footer_link_clicked", { label: link.label });

    if (link.path) {
      navigate(link.path);
      return;
    }

    if (!link.externalUrl) {
      return;
    }

    openExternalUrl(link.externalUrl);
  };

  return (
    <footer className="relative flex flex-col gap-4 px-4 py-8">
      <ScrollViewAnchor ref={scrollObserverRef} />
      <div className="grid grid-cols-2 gap-8 lg:mx-auto lg:w-[90dvw] lg:grid-cols-3">
        {footerSections.map((section) => (
          <div key={section.title}>
            <strong className="underline">{section.title}</strong>
            <ul>
              {section.links.map((link) => (
                <li key={link.label} className="text-text-secondary">
                  <button onClick={() => handleFooterLinkClicked(link)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
