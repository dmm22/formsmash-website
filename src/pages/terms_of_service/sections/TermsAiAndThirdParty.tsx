import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { linkClassName, paragraphClassName } from "../termsStyles";

export default function TermsAiAndThirdParty() {
  return (
    <>
      <PolicySection heading="6. AI features">
        <TermsSubsection heading="6.1 AI-assisted autofill and extraction">
          <p className={paragraphClassName}>
            Depending on your plan, the Service may use third-party AI to
            extract fields from documents and suggest values for unfilled form
            fields. AI outputs are provided as suggestions only.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="6.2 No guarantee of accuracy">
          <p className={paragraphClassName}>
            AI-generated outputs may be wrong, incomplete, outdated, or
            inappropriate for your situation. You must verify all suggestions
            before relying on them or submitting a form. Do not use AI outputs
            as your sole source of factual information. FormSmash does not
            guarantee that AI outputs comply with any website&apos;s terms,
            employer policies, or applicable laws.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="6.3 Usage limits">
          <p className={paragraphClassName}>
            Free and paid plans may include limits on document uploads,
            autofills, or AI usage. If you exceed your plan limits, we may
            require a subscription upgrade or block further use until the next
            billing period or reset window.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="6.4 Third-party AI providers">
          <p className={paragraphClassName}>
            We send relevant user content to third-party AI providers (such as
            OpenAI and Google) to operate AI features. Those providers process
            data under their own terms and policies. We cannot control
            third-party practices.
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="7. Third-party services">
        <p className={paragraphClassName}>
          The Service integrates with third parties including Google
          (authentication), Stripe (payments), cloud hosting providers, and AI
          providers. Your use of those services is subject to their terms and
          privacy policies. FormSmash is not responsible for third-party
          services or for any loss arising from your use of them.
        </p>
        <p className={paragraphClassName}>
          FormSmash&apos;s use of information received from Google APIs adheres
          to the{" "}
          <a
            href="https://developer.chrome.com/docs/webstore/program-policies/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Chrome Web Store User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
      </PolicySection>
    </>
  );
}
