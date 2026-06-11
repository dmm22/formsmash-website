import { useEffect } from "react"
import { Link } from "react-router-dom"
import LegalPageLayout from "./LegalPageLayout"
import { linkClass, listClass, noticeClass, paragraphClass, sectionClass } from "./legalStyles"

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "FormSmash — Privacy Policy"
  }, [])

  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="May 26, 2026">
      <p className={paragraphClass}>
        FormSmash (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a Chrome
        extension and related services that help you fill out forms using saved documents and optional
        AI assistance. This Privacy Policy describes how we collect, use, share, and protect
        information when you use the FormSmash extension (the &ldquo;Extension&rdquo;) and our backend
        services (together, the &ldquo;Service&rdquo;).
      </p>
      <p className={paragraphClass}>
        By using the Service, you agree to this Privacy Policy and our{" "}
        <Link className={linkClass} to="/terms">
          Terms of Service
        </Link>
        .
      </p>

      <h2 className={sectionClass}>Information we collect</h2>
      <p className={paragraphClass}>Depending on how you use the Service, we may collect:</p>
      <ul className={listClass}>
        <li>
          <strong className="text-marketing-text">Account information.</strong> If you sign in with Google, we
          receive your email address, display name, profile picture URL, and Google account identifier
          to create and manage your account.
        </li>
        <li>
          <strong className="text-marketing-text">Authentication data.</strong> We issue access and refresh tokens
          so you can stay signed in. Tokens are stored in the Extension&apos;s local storage and on
          our servers (refresh tokens are stored in hashed form).
        </li>
        <li>
          <strong className="text-marketing-text">User content you provide.</strong> This includes saved documents
          (titles and autofill field values), uploaded files (such as PDF or Word documents), Autofill
          Preferences (custom instructions for how forms should be filled), and any other information
          you enter into the Service. This content may include personal information about you or about
          other people (for example, references, employers, or clients listed in a document).
        </li>
        <li>
          <strong className="text-marketing-text">Document files.</strong> When you upload a document, we store
          the file on our servers, extract text from it, and may send that text to our AI providers to
          generate autofill fields. The stored file and extracted data remain associated with your
          account or browser session until you delete them or your account is deleted.
        </li>
        <li>
          <strong className="text-marketing-text">Form context for autofill.</strong> When you run autofill, the
          Extension reads form fields on the page you are on (such as labels, input types, and choice
          options). Unfilled fields may be sent to our servers for AI gap-fill, along with relevant
          rows from your active document and your Autofill Preferences.
        </li>
        <li>
          <strong className="text-marketing-text">Usage and limits data.</strong> We assign a browser-specific
          client identifier and may record operation counts, token usage per AI request, timestamps, and
          your IP address for rate limiting, abuse prevention, and billing limits. Some usage may be
          recorded before you sign in and linked to your account after you sign in.
        </li>
        <li>
          <strong className="text-marketing-text">Payment-related identifiers.</strong> If you subscribe, we use
          Stripe for checkout and billing. We store Stripe customer and subscription identifiers on our
          side. Stripe processes payment details under its own privacy policy; we do not store full
          card numbers.
        </li>
        <li>
          <strong className="text-marketing-text">Technical and diagnostic data.</strong> Our servers log request
          metadata (such as paths, status codes, and error types). If enabled, we may use error
          monitoring services (such as Sentry) that receive exception details. Server logs are not
          intended to include full document or autofill contents unless required for debugging.
        </li>
      </ul>

      <h2 className={sectionClass}>Information about other people</h2>
      <p className={paragraphClass}>
        Content you upload or enter may include personal information about people other than you (for
        example, a client, candidate, or reference named in a document). You are responsible for
        ensuring you have the legal right to upload, store, and use that information through the
        Service.
      </p>
      <p className={paragraphClass}>
        We process information about other people only to provide the Service to you (document storage,
        field extraction, and form autofill). We do not use that information to contact, advertise to,
        or market to those individuals.
      </p>

      <h2 className={sectionClass}>How we use information</h2>
      <p className={paragraphClass}>We use the information above to:</p>
      <ul className={listClass}>
        <li>Provide autofill, document storage, AI gap-fill, and document field extraction</li>
        <li>Authenticate you and manage your account and sessions</li>
        <li>Enforce free-tier and subscription limits</li>
        <li>Process payments and manage subscriptions</li>
        <li>Maintain, secure, and improve the Service</li>
        <li>Detect abuse, fraud, and technical issues</li>
      </ul>
      <p className={paragraphClass}>
        We do not use your information for personalized advertising, and we do not sell your personal
        information. We do not use your user content to train FormSmash&apos;s own AI models.
      </p>

      <h2 className={sectionClass}>How we share information</h2>
      <p className={paragraphClass}>We share information only as needed to operate the Service:</p>
      <ul className={listClass}>
        <li>
          <strong className="text-marketing-text">AI providers.</strong> We send relevant user content (document
          text, autofill field data, form field labels, and Autofill Preferences) to third-party AI services
          (such as OpenAI and Google) to provide gap-fill and document field extraction. Those
          providers process data under their own terms and privacy policies. We cannot control
          third-party practices.
        </li>
        <li>
          <strong className="text-marketing-text">Google.</strong> We use Google Sign-In (OAuth) for
          authentication. Google&apos;s use of information is governed by Google&apos;s policies.
        </li>
        <li>
          <strong className="text-marketing-text">Stripe.</strong> We use Stripe for payments and subscription
          management.
        </li>
        <li>
          <strong className="text-marketing-text">Infrastructure providers.</strong> We host our API and database
          with cloud providers that process data on our behalf under contractual obligations.
        </li>
        <li>
          <strong className="text-marketing-text">Legal and safety.</strong> We may disclose information if
          required by law, to protect rights and safety, or to prevent fraud or abuse.
        </li>
        <li>
          <strong className="text-marketing-text">Business transfers.</strong> If we are involved in a merger,
          acquisition, or sale of assets, we may transfer information subject to this policy and
          applicable law.
        </li>
      </ul>

      <h2 className={sectionClass}>Browsing and page access</h2>
      <p className={paragraphClass}>
        The Extension needs access to web pages where you choose to run autofill so it can read form
        fields and fill them on your behalf. We use that access only to provide the autofill features
        described in our Chrome Web Store listing and in the Extension interface—not to build a
        general browsing history or to track you across sites for unrelated purposes.
      </p>

      <h2 className={sectionClass}>Sensitive information</h2>
      <p className={paragraphClass}>
        Do not upload government ID numbers, financial account numbers, health information, or other
        highly sensitive data unless you accept the risk of storing and processing it through the
        Service and our AI providers. You provide information through the Service at your own risk.
      </p>

      <h2 className={sectionClass}>Data security</h2>
      <p className={paragraphClass}>
        We transmit data between the Extension and our servers over HTTPS. We apply standard technical
        and organizational measures to protect stored data. No method of transmission or storage is
        completely secure; we cannot guarantee absolute security.
      </p>

      <h2 className={sectionClass}>Data retention</h2>
      <p className={paragraphClass}>
        We retain account, document, and autofill data while your account is active or while you use the
        Service, and as needed to provide the Service. Usage and AI request metadata may be retained
        for operational, billing, and abuse-prevention purposes. You may delete individual documents
        through the Service. To delete your account and associated data, contact us using the email
        below.
      </p>

      <h2 className={sectionClass}>Your choices and rights</h2>
      <p className={paragraphClass}>
        Depending on where you live, you may have rights to access, correct, delete, or export personal
        information, or to object to or restrict certain processing. To make a request, contact us at
        the email below. We may need to verify your identity before responding.
      </p>
      <p className={paragraphClass}>
        If you are a California resident, you have the right to know what personal information we
        collect, request deletion, and not be discriminated against for exercising these rights. We do
        not sell or share personal information for cross-context behavioral advertising.
      </p>
      <p className={paragraphClass}>
        You can sign out of the Extension to clear local session tokens. Uninstalling the Extension
        removes locally stored Extension data from your browser.
      </p>

      <h2 className={sectionClass}>Children</h2>
      <p className={paragraphClass}>
        The Service is not directed to children under 13 (or the minimum age required in your
        jurisdiction). We do not knowingly collect personal information from children.
      </p>

      <h2 className={sectionClass}>International users</h2>
      <p className={paragraphClass}>
        If you use the Service from outside the country where our servers are located, your information
        may be processed in that country or other countries where our service providers operate, which
        may have different data protection laws than your home country.
      </p>

      <h2 className={sectionClass}>Changes to this policy</h2>
      <p className={paragraphClass}>
        We may update this policy from time to time. We will post the revised policy with a new
        effective date. If changes are material, we may also notify you by email (if you have an
        account) or through the Service. Your continued use of the Service after the effective date
        means you accept the updated policy. If you do not agree, stop using the Service.
      </p>

      <h2 className={sectionClass}>Contact</h2>
      <p className={paragraphClass}>
        Questions about this policy or your data? Click{" "}
        <Link to="/contact" className="font-semibold text-marketing-accent no-underline hover:underline">
          here
        </Link>
        .
      </p>

      <div className={`${noticeClass} mb-0 mt-6`}>
        <strong className="text-marketing-text">Chrome Web Store — Limited Use.</strong> The use of information
        received from Google APIs will adhere to the{" "}
        <a
          className={linkClass}
          href="https://developer.chrome.com/docs/webstore/program-policies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome Web Store User Data Policy
        </a>
        , including the Limited Use requirements.
      </div>
    </LegalPageLayout>
  )
}
