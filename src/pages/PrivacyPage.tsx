import { useEffect } from "react"
import LegalPageLayout from "./LegalPageLayout"

const sectionClass = "mt-8 mb-2 text-lg font-semibold text-bright first:mt-0"
const paragraphClass = "mb-4 text-muted leading-relaxed"
const listClass = "mb-4 list-disc space-y-2 pl-6 text-muted marker:text-accent"

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "FormWizard — Privacy Policy"
  }, [])

  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate="May 19, 2026">
      <p className={paragraphClass}>
        FormWizard (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a Chrome
        extension and related services that help you fill out job application forms using saved
        profiles and optional AI assistance. This policy describes how we collect, use, share, and
        protect information when you use FormWizard (the &ldquo;Extension&rdquo;) and our backend
        services (together, the &ldquo;Service&rdquo;).
      </p>

      <h2 className={sectionClass}>Information we collect</h2>
      <p className={paragraphClass}>Depending on how you use the Service, we may collect:</p>
      <ul className={listClass}>
        <li>
          <strong className="text-ink">Account information.</strong> If you sign in with Google, we
          receive your email address, display name, profile picture URL, and Google account
          identifier. We use this to create and manage your account.
        </li>
        <li>
          <strong className="text-ink">Authentication data.</strong> We issue access and refresh
          tokens so you can stay signed in. Tokens are stored in the Extension&apos;s local storage
          and on our servers (refresh tokens are stored in hashed form).
        </li>
        <li>
          <strong className="text-ink">Profile data you provide.</strong> Saved profiles include
          titles and field mappings (labels, values, and matching rules). This may include personal
          information such as your name, contact details, employment history, or other data you
          choose to save.
        </li>
        <li>
          <strong className="text-ink">Document text for profile generation.</strong> If you use AI
          profile generation, the text you paste (for example, a resume or CV) is sent to our
          servers and to our AI provider to generate suggested profile fields.
        </li>
        <li>
          <strong className="text-ink">Form context for autofill.</strong> When you run autofill, the
          Extension reads form fields on the page you are on (such as labels, input types, and
          choice options). Unfilled fields may be sent to our servers for AI gap-fill, along with
          relevant rows from your active profile.
        </li>
        <li>
          <strong className="text-ink">Usage and limits data.</strong> We assign a browser-specific
          client identifier and may record operation counts, token usage per AI request, timestamps,
          and your IP address for rate limiting, abuse prevention, and billing limits. Some usage
          may be recorded before you sign in and linked to your account after you sign in.
        </li>
        <li>
          <strong className="text-ink">Payment-related identifiers.</strong> If you subscribe, we
          use Stripe for checkout and billing. We store Stripe customer and subscription identifiers
          on our side. Stripe processes payment details under its own privacy policy; we do not store
          full card numbers.
        </li>
        <li>
          <strong className="text-ink">Technical and diagnostic data.</strong> Our servers log
          request metadata (such as paths, status codes, and error types). If enabled, we may use
          error monitoring services (such as Sentry) that receive exception details. Server logs are
          not intended to include full profile or resume contents unless required for debugging.
        </li>
      </ul>
      <p className={paragraphClass}>
        The Extension may write debug information to your browser&apos;s developer console (for
        example, truncated page URLs during development). That information stays on your device
        unless you share it with us.
      </p>

      <h2 className={sectionClass}>How we use information</h2>
      <p className={paragraphClass}>We use the information above to:</p>
      <ul className={listClass}>
        <li>Provide autofill, profile storage, AI gap-fill, and AI profile generation</li>
        <li>Authenticate you and manage your account and sessions</li>
        <li>Enforce free-tier and subscription limits</li>
        <li>Process payments and manage subscriptions</li>
        <li>Maintain, secure, and improve the Service</li>
        <li>Detect abuse, fraud, and technical issues</li>
      </ul>
      <p className={paragraphClass}>
        We do not use your information for personalized advertising, and we do not sell your personal
        information.
      </p>

      <h2 className={sectionClass}>How we share information</h2>
      <p className={paragraphClass}>We share information only as needed to operate the Service:</p>
      <ul className={listClass}>
        <li>
          <strong className="text-ink">AI providers.</strong> We send prompts and related content to
          third-party AI services (such as OpenAI and Google Gemini) to provide gap-fill and profile
          generation. Those providers process data under their own terms and privacy policies.
        </li>
        <li>
          <strong className="text-ink">Google.</strong> We use Google Sign-In (OAuth) for
          authentication. Google&apos;s use of information is governed by Google&apos;s policies.
        </li>
        <li>
          <strong className="text-ink">Stripe.</strong> We use Stripe for payments and subscription
          management.
        </li>
        <li>
          <strong className="text-ink">Infrastructure providers.</strong> We host our API and
          database with cloud providers that process data on our behalf under contractual
          obligations.
        </li>
        <li>
          <strong className="text-ink">Legal and safety.</strong> We may disclose information if
          required by law, to protect rights and safety, or to prevent fraud or abuse.
        </li>
        <li>
          <strong className="text-ink">Business transfers.</strong> If we are involved in a merger,
          acquisition, or sale of assets, we may transfer information subject to this policy and
          applicable law, including obtaining consent where required.
        </li>
      </ul>

      <h2 className={sectionClass}>Browsing and page access</h2>
      <p className={paragraphClass}>
        The Extension needs access to web pages where you choose to run autofill so it can read form
        fields and fill them on your behalf. We use that access only to provide the autofill features
        described in our Chrome Web Store listing and in the Extension interface—not to build a
        general browsing history or to track you across sites for unrelated purposes.
      </p>

      <h2 className={sectionClass}>Data security</h2>
      <p className={paragraphClass}>
        We transmit data between the Extension and our servers over HTTPS. We apply standard
        technical and organizational measures to protect stored data. No method of transmission or
        storage is completely secure; we cannot guarantee absolute security.
      </p>

      <h2 className={sectionClass}>Data retention</h2>
      <p className={paragraphClass}>
        We retain account and profile data while your account is active and as needed to provide the
        Service. Usage and AI request metadata may be retained for operational, billing, and
        abuse-prevention purposes. You may delete individual profiles through the Service. If you want
        your account deleted, contact us using the email below.
      </p>

      <h2 className={sectionClass}>Your choices and rights</h2>
      <p className={paragraphClass}>
        Depending on where you live, you may have rights to access, correct, delete, or export personal
        information, or to object to or restrict certain processing. To make a request, contact us at
        the email below. We may need to verify your identity before responding.
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
        If you use the Service from outside the country where our servers are located, your
        information may be processed in that country or other countries where our service providers
        operate, which may have different data protection laws than your home country.
      </p>

      <h2 className={sectionClass}>Changes to this policy</h2>
      <p className={paragraphClass}>
        We may update this policy from time to time. We will post the revised policy with a new
        effective date. Continued use of the Service after changes become effective constitutes
        acceptance of the updated policy where permitted by law.
      </p>

      <h2 className={sectionClass}>Contact</h2>
      <p className={paragraphClass}>
        Questions about this policy or your data:{" "}
        <a
          className="text-accent-edge no-underline hover:underline"
          href="mailto:privacy@formwizard.app"
        >
          privacy@formwizard.app
        </a>
      </p>

      <div className="mt-6 rounded-xl border border-line-muted border-l-4 border-l-primary-edge bg-inset p-4 text-sm text-muted leading-relaxed">
        <strong className="text-ink">Chrome Web Store — Limited Use.</strong> The use of information
        received from Google APIs will adhere to the{" "}
        <a
          className="text-accent-edge no-underline hover:underline"
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
