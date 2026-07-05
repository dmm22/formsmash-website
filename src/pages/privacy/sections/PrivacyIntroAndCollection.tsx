import { Link } from "react-router-dom";
import PolicySection from "../components/PolicySection";
import { routes } from "../../../routes";
import {
  linkClassName,
  listClassName,
  paragraphClassName,
} from "../privacyStyles";

export default function PrivacyIntroAndCollection() {
  return (
    <>
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
    </>
  );
}
