import { Link } from "react-router-dom";
import SecondaryPageShell from "../../components/SecondaryPageShell";
import PolicySection from "./components/PolicySection";
import { routes } from "../../routes";

const paragraphClassName = "mb-4 leading-relaxed text-text-secondary";
const listClassName =
  "mb-4 list-disc space-y-2 pl-6 text-text-secondary marker:text-accent";
const linkClassName = "text-accent no-underline hover:underline";

export default function PrivacyPage() {
  return (
    <SecondaryPageShell
      title="Privacy Policy"
      caption="Effective date: July 5, 2026"
    >
      <p className={paragraphClassName}>
        FormSmash (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides
        a Chrome extension and related services that help you fill out forms
        using saved documents and optional AI assistance. This Privacy Policy
        describes how we collect, use, share, and protect information when you
        use the FormSmash extension (the &quot;Extension&quot;), our backend
        services, or our public marketing website (together, the
        &quot;Service&quot;).
      </p>
      <p className={paragraphClassName}>
        By using the Service, you agree to this Privacy Policy and our{" "}
        <Link to={routes.terms.path} className={linkClassName}>
          Terms of Service
        </Link>
        .
      </p>

      <PolicySection heading="Information we collect">
        <p className={paragraphClassName}>
          Depending on how you use the Service, we may collect:
        </p>
        <ul className={listClassName}>
          <li>
            <strong className="text-text-primary">Account information.</strong>{" "}
            If you sign in with Google, we receive your email address, display
            name, profile picture URL, and Google account identifier to create
            and manage your account.
          </li>
          <li>
            <strong className="text-text-primary">Authentication data.</strong>{" "}
            We issue access and refresh tokens so you can stay signed in. Tokens
            are stored in the Extension&apos;s local storage and on our servers
            (refresh tokens are stored in hashed form).
          </li>
          <li>
            <strong className="text-text-primary">
              User content you provide.
            </strong>{" "}
            This includes saved documents (titles and autofill field values),
            uploaded files (such as PDF or Word documents), Autofill Preferences
            (custom instructions for how forms should be filled), and any other
            information you enter into the Service. This content may include
            personal information about you or about other people (for example,
            references, employers, or clients listed in a document).
          </li>
          <li>
            <strong className="text-text-primary">Document files.</strong> When
            you upload a document, we store the file on our servers, extract
            text from it, and may send that text to our AI providers to generate
            autofill fields. The stored file and extracted data remain
            associated with your account or browser session until you delete
            them or your account is deleted.
          </li>
          <li>
            <strong className="text-text-primary">
              Form context for autofill.
            </strong>{" "}
            When you run autofill, the Extension reads form fields on the page
            you are on (such as labels, input types, and choice options).
            Unfilled fields may be sent to our servers for AI gap-fill, along
            with relevant rows from your active document and your Autofill
            Preferences.
          </li>
          <li>
            <strong className="text-text-primary">
              Usage and limits data.
            </strong>{" "}
            We assign a browser-specific client identifier and may record
            operation counts, token usage per AI request, timestamps, and your
            IP address for rate limiting, abuse prevention, and billing limits.
            Some usage may be recorded before you sign in and linked to your
            account after you sign in.
          </li>
          <li>
            <strong className="text-text-primary">
              Payment-related identifiers.
            </strong>{" "}
            If you subscribe, we use Stripe for checkout and billing. We store
            Stripe customer and subscription identifiers on our side. Stripe
            processes payment details under its own privacy policy; we do not
            store full card numbers.
          </li>
          <li>
            <strong className="text-text-primary">
              Technical and diagnostic data.
            </strong>{" "}
            Our servers log request metadata (such as paths, status codes, and
            error types). If enabled, we may use error monitoring services (such
            as Sentry) that receive exception details. Server logs are not
            intended to include full document or autofill contents unless
            required for debugging.
          </li>
          <li>
            <strong className="text-text-primary">
              Marketing website analytics.
            </strong>{" "}
            When you visit our public marketing website, we collect usage
            information such as pages viewed, button or link clicks (for
            example, links to the Chrome Web Store, support resources, or the
            contact form), random visitor and session identifiers stored in your
            browser, the referring page URL when available, browser type, and
            related request metadata (including IP address for abuse
            prevention). See the &quot;Marketing website analytics&quot; section
            below for more detail.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="Information about other people">
        <p className={paragraphClassName}>
          Content you upload or enter may include personal information about
          people other than you (for example, a client, candidate, or reference
          named in a document). You are responsible for ensuring you have the
          legal right to upload, store, and use that information through the
          Service.
        </p>
        <p className={paragraphClassName}>
          We process information about other people only to provide the Service
          to you (document storage, field extraction, and form autofill). We do
          not use that information to contact, advertise to, or market to those
          individuals.
        </p>
      </PolicySection>

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

      <PolicySection heading="Sensitive information">
        <p className={paragraphClassName}>
          Do not upload government ID numbers, financial account numbers, health
          information, or other highly sensitive data unless you accept the risk
          of storing and processing it through the Service and our AI providers.
          You provide information through the Service at your own risk.
        </p>
      </PolicySection>

      <PolicySection heading="Data security">
        <p className={paragraphClassName}>
          We transmit data between the Extension and our servers over HTTPS. We
          apply standard technical and organizational measures to protect stored
          data. No method of transmission or storage is completely secure; we
          cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection heading="Data retention">
        <p className={paragraphClassName}>
          We retain account, document, and autofill data while your account is
          active or while you use the Service, and as needed to provide the
          Service. Usage and AI request metadata may be retained for
          operational, billing, and abuse-prevention purposes. You may delete
          individual documents through the Service. To delete your account and
          associated data, contact us using the email below. Marketing website
          analytics events are retained for site measurement and operations; we
          may delete or aggregate older analytics data over time.
        </p>
      </PolicySection>

      <PolicySection heading="Your choices and rights">
        <p className={paragraphClassName}>
          Depending on where you live, you may have rights to access, correct,
          delete, or export personal information, or to object to or restrict
          certain processing. To make a request, contact us at the email below.
          We may need to verify your identity before responding.
        </p>
        <p className={paragraphClassName}>
          If you are a California resident, you have the right to know what
          personal information we collect, request deletion, and not be
          discriminated against for exercising these rights. We do not sell or
          share personal information for cross-context behavioral advertising.
        </p>
        <p className={paragraphClassName}>
          You can sign out of the Extension to clear local session tokens.
          Uninstalling the Extension removes locally stored Extension data from
          your browser. When you visit our marketing website, you can clear the
          visitor identifier stored in your browser by clearing that site&apos;s
          local storage in your browser settings.
        </p>
      </PolicySection>

      <PolicySection heading="Children">
        <p className={paragraphClassName}>
          The Service is not directed to children under 13 (or the minimum age
          required in your jurisdiction). We do not knowingly collect personal
          information from children.
        </p>
      </PolicySection>

      <PolicySection heading="International users">
        <p className={paragraphClassName}>
          If you use the Service from outside the country where our servers are
          located, your information may be processed in that country or other
          countries where our service providers operate, which may have
          different data protection laws than your home country.
        </p>
      </PolicySection>

      <PolicySection heading="Changes to this policy">
        <p className={paragraphClassName}>
          We may update this policy from time to time. We will post the revised
          policy with a new effective date. If changes are material, we may also
          notify you by email (if you have an account) or through the Service.
          Your continued use of the Service after the effective date means you
          accept the updated policy. If you do not agree, stop using the
          Service.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p className={paragraphClassName}>
          Questions about this policy or your data? Click{" "}
          <Link
            to={routes.contact.path}
            className={`font-semibold ${linkClassName}`}
          >
            here
          </Link>
          .
        </p>
      </PolicySection>

      <p className={paragraphClassName}>
        <strong className="text-text-primary">
          Chrome Web Store — Limited Use.
        </strong>{" "}
        The use of information received from Google APIs will adhere to the{" "}
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
    </SecondaryPageShell>
  );
}
