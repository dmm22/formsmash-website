import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
import useAnalyticsEvents from "../hooks/useAnalyticsEvents";
import useScrollViewAnalytics from "../pages/home/hooks/useScrollViewAnalytics";

export default function Footer() {
  const navigate = useNavigate();
  const { sendEvent } = useAnalyticsEvents();
  const observerRef = useScrollViewAnalytics("footer_scrolled_into_view");

  const handleFooterLinkClicked = (
    label: string,
    path?: string,
    externalUrl?: string,
  ) => {
    sendEvent("footer_link_clicked", { label });

    if (path) {
      navigate(path);
      return;
    }

    if (!externalUrl) {
      return;
    }

    window.open(externalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative mb-8 flex flex-col gap-4 p-4">
      <div
        ref={observerRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 h-px w-full opacity-0"
      />
      <div className="grid grid-cols-2 gap-8">
        <div>
          <strong className="underline">Product</strong>
          <ul>
            <li className="text-text-secondary">
              <button
                type="button"
                onClick={() =>
                  handleFooterLinkClicked(
                    "Install The Extension",
                    undefined,
                    import.meta.env.VITE_CHROME_LISTING_URL,
                  )
                }
              >
                Install The Extension
              </button>
            </li>
            <li className="text-text-secondary">
              <button
                type="button"
                onClick={() =>
                  handleFooterLinkClicked(
                    "Custom GPT",
                    undefined,
                    import.meta.env.VITE_CUSTOM_GPT_URL,
                  )
                }
              >
                Custom GPT
              </button>
            </li>
          </ul>
        </div>
        <div>
          <strong className="underline">Support</strong>
          <ul>
            <li className="text-text-secondary">
              <button
                type="button"
                onClick={() =>
                  handleFooterLinkClicked("Contact", routes.contact.path)
                }
              >
                Contact
              </button>
            </li>
            <li className="text-text-secondary">
              <button
                type="button"
                onClick={() =>
                  handleFooterLinkClicked("Privacy Policy", routes.privacy.path)
                }
              >
                Privacy Policy
              </button>
            </li>
            <li className="text-text-secondary">
              <button
                type="button"
                onClick={() =>
                  handleFooterLinkClicked("Terms of Service", routes.terms.path)
                }
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
        <div>
          <strong className="underline">About</strong>
          <ul>
            <li className="text-text-secondary">
              <button
                type="button"
                onClick={() =>
                  handleFooterLinkClicked("About FormSmash", routes.about.path)
                }
              >
                About FormSmash
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
