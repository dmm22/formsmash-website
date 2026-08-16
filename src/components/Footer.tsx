import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
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
      { label: "About FormSmash", path: routes.about.path },
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
    <footer className="relative flex items-center justify-between gap-4 px-4 py-8 lg:mx-auto lg:w-[90dvw]">
      <ScrollViewAnchor ref={scrollObserverRef} />
      <div className="mb-8 hidden flex-col gap-2 lg:flex">
        <div className="flex items-center gap-2">
          <img src={logo} alt="FormSmash Logo" className="h-7" />
          <strong>FormSmash</strong>
        </div>
        <p className="w-max text-sm text-text-secondary">
          Autofill job applications in one click.
        </p>
      </div>
      <div className="flex w-full justify-between lg:justify-end lg:gap-36">
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
