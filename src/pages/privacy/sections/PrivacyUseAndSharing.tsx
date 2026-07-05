import PolicySection from "../components/PolicySection";
import { listClassName, paragraphClassName } from "../privacyStyles";

export default function PrivacyUseAndSharing() {
  return (
    <>
      <PolicySection heading="How we use information">
        <p className={paragraphClassName}>We use the information above to:</p>
        <ul className={listClassName}>
          <li>
            Provide autofill, document storage, AI gap-fill, and document field
            extraction
          </li>
          <li>Authenticate you and manage your account and sessions</li>
          <li>Enforce free-tier and subscription limits</li>
          <li>Process payments and manage subscriptions</li>
          <li>Maintain, secure, and improve the Service</li>
          <li>
            Understand traffic to and improve our public marketing website
          </li>
          <li>Detect abuse, fraud, and technical issues</li>
        </ul>
        <p className={paragraphClassName}>
          We do not use your information for personalized advertising, and we do
          not sell your personal information. We do not use your user content to
          train FormSmash&apos;s own AI models.
        </p>
      </PolicySection>

      <PolicySection heading="How we share information">
        <p className={paragraphClassName}>
          We share information only as needed to operate the Service:
        </p>
        <ul className={listClassName}>
          <li>
            <strong className="text-text-primary">AI providers.</strong> We send
            relevant user content (document text, autofill field data, form
            field labels, and Autofill Preferences) to third-party AI services
            (such as OpenAI and Google) to provide gap-fill and document field
            extraction. Those providers process data under their own terms and
            privacy policies. We cannot control third-party practices.
          </li>
          <li>
            <strong className="text-text-primary">Google.</strong> We use Google
            Sign-In (OAuth) for authentication. Google&apos;s use of information
            is governed by Google&apos;s policies.
          </li>
          <li>
            <strong className="text-text-primary">Stripe.</strong> We use Stripe
            for payments and subscription management.
          </li>
          <li>
            <strong className="text-text-primary">
              Infrastructure providers.
            </strong>{" "}
            We host our API and database with cloud providers that process data
            on our behalf under contractual obligations.
          </li>
          <li>
            <strong className="text-text-primary">Legal and safety.</strong> We
            may disclose information if required by law, to protect rights and
            safety, or to prevent fraud or abuse.
          </li>
          <li>
            <strong className="text-text-primary">Business transfers.</strong>{" "}
            If we are involved in a merger, acquisition, or sale of assets, we
            may transfer information subject to this policy and applicable law.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="Browsing and page access">
        <p className={paragraphClassName}>
          The Extension needs access to web pages where you choose to run
          autofill so it can read form fields and fill them on your behalf. We
          use that access only to provide the autofill features described in our
          Chrome Web Store listing and in the Extension interface—not to build a
          general browsing history or to track you across sites for unrelated
          purposes.
        </p>
      </PolicySection>

      <PolicySection heading="Marketing website analytics">
        <p className={paragraphClassName}>
          When you visit our public marketing website, we use first-party
          analytics to understand how visitors use the site. This may include
          the pages you view, button or link clicks (such as links to the Chrome
          Web Store, the FormSmash Assistant, or the contact form), a random
          visitor identifier stored in your browser&apos;s local storage, a
          session identifier stored for that browser session, the referring page
          URL when your browser provides it, browser type, timestamps, and
          related request metadata (including IP address for rate limiting and
          abuse prevention).
        </p>
        <p className={paragraphClassName}>
          We use marketing website analytics only to measure traffic, understand
          which parts of the site are useful, and improve the marketing website.
          We do not use this data for personalized advertising, cross-site
          tracking, or to build advertising profiles. We do not sell marketing
          website analytics data.
        </p>
      </PolicySection>
    </>
  );
}
