import { Link } from "react-router-dom";
import SecondaryPageShell from "../../components/SecondaryPageShell";
import PolicySection from "../privacy/components/PolicySection";
import TermsSubsection from "./components/TermsSubsection";
import { routes } from "../../routes";

const paragraphClassName = "mb-4 leading-relaxed text-text-secondary";
const listClassName =
  "mb-4 list-disc space-y-2 pl-6 text-text-secondary marker:text-accent";
const linkClassName = "text-accent no-underline hover:underline";

export default function TermsOfServicePage() {
  return (
    <SecondaryPageShell
      title="Terms of Service"
      caption="Effective date: May 26, 2026"
    >
      <p className={paragraphClassName}>
        These Terms of Service (the &quot;Terms&quot;) form an agreement between
        FormSmash (&quot;FormSmash,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) and you or the entity you represent (&quot;you&quot; or
        &quot;your&quot;). They govern your access to and use of the FormSmash
        Chrome extension (the &quot;Extension&quot;), our websites, APIs, and
        related online services (collectively, the &quot;Service&quot;).
      </p>
      <p className={paragraphClassName}>
        Please read these Terms carefully. They include important information
        about your legal rights and obligations, including warranty disclaimers,
        limitations of liability, and your agreement to indemnify FormSmash in
        certain situations.
      </p>

      <p className={paragraphClassName}>
        Our{" "}
        <Link to={routes.privacy.path} className={linkClassName}>
          Privacy Policy
        </Link>{" "}
        explains how we collect and use personal information. The Privacy Policy
        is incorporated into these Terms by reference.
      </p>

      <p className={paragraphClassName}>
        <strong className="text-text-primary">Paid subscriptions.</strong> If
        you subscribe to a paid plan, your subscription will automatically renew
        for additional periods of the same duration as your initial subscription
        at FormSmash&apos;s then-current fees unless you cancel before the
        renewal date through the subscription management tools we provide.
      </p>

      <PolicySection heading="1. Your acceptance of these Terms">
        <p className={paragraphClassName}>
          These Terms take effect when you install the Extension, create an
          account, access the Service, or otherwise indicate that you accept
          these Terms, whichever happens first. By installing the Extension
          from the Chrome Web Store or using the Service, you agree to be bound
          by these Terms and the Privacy Policy.
        </p>
        <p className={paragraphClassName}>
          If you do not agree, do not install or use the Service. If you are
          accepting these Terms on behalf of a company or other legal entity,
          you represent that you have authority to bind that entity, and
          &quot;you&quot; refers to that entity.
        </p>
        <p className={paragraphClassName}>
          You represent that you are not barred from using the Service under
          applicable law and that you meet the eligibility requirements in
          Section 3.
        </p>
      </PolicySection>

      <PolicySection heading="2. Changes to these Terms">
        <p className={paragraphClassName}>
          We may update these Terms from time to time. When we do, we will post
          the updated Terms with a revised effective date. If changes are
          material, we may also notify you by email (if you have an account) or
          through the Service. Your continued use of the Service after the
          effective date of updated Terms constitutes acceptance of the
          changes. If you do not agree to updated Terms, you must stop using
          the Service and uninstall the Extension.
        </p>
      </PolicySection>

      <PolicySection heading="3. Eligibility and accounts">
        <TermsSubsection heading="3.1 Age requirements">
          <p className={paragraphClassName}>
            You may use the Service only if you are old enough to consent to
            share your data under applicable law (for example, at least 13 in the
            United States or 16 in parts of the European Union). If your
            jurisdiction requires a higher age without parental consent, you
            must meet that requirement.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="3.2 Accounts and credentials">
          <p className={paragraphClassName}>
            Some features work without signing in. If you create an account (for
            example, through Google Sign-In), you are responsible for all
            activity under your account and for keeping your credentials secure.
            Notify us promptly if you believe your account has been compromised.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="3.3 Anonymous use">
          <p className={paragraphClassName}>
            Before you sign in, we may associate documents and usage with a
            browser-specific identifier. If you later sign in, that data may be
            linked to your account as described in our Privacy Policy.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="3.4 Account deletion">
          <p className={paragraphClassName}>
            You may stop using the Service at any time by uninstalling the
            Extension. To request deletion of account data stored on our
            servers, contact us at{" "}
            <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
              thejobsmash@gmail.com
            </a>
            . Deletion may be subject to retention required by law or for
            legitimate business purposes (such as billing records).
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="4. Your use of the Service">
        <TermsSubsection heading="4.1 License grant">
          <p className={paragraphClassName}>
            Subject to your compliance with these Terms, we grant you a limited,
            revocable, non-exclusive, non-transferable, non-sublicensable right
            to install and use the Extension and access the Service for your
            personal or internal business purposes. The Service is provided on a
            subscription or access basis; we are not selling the software to
            you.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="4.2 What the Service does">
          <p className={paragraphClassName}>
            FormSmash lets you upload documents, extract and store autofill
            data, set Autofill Preferences, and fill form fields on websites you
            visit. The Extension reads form fields only when you choose to run
            autofill. The Service may send relevant content to third-party AI
            providers to suggest field values.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="4.3 Restrictions">
          <p className={paragraphClassName}>
            You agree that you will not, and will not help others to:
          </p>
          <ul className={listClassName}>
            <li>
              Reverse engineer, decompile, or attempt to discover the source
              code of the Service except where prohibited by law
            </li>
            <li>
              Resell, sublicense, or provide access to the Service to third
              parties except as expressly permitted
            </li>
            <li>
              Circumvent usage limits, authentication, or security measures
            </li>
            <li>
              Use the Service for unlawful, fraudulent, or harmful purposes
            </li>
            <li>
              Upload malware, spam, or content you do not have the right to use
            </li>
            <li>
              Impersonate any person or misrepresent your affiliation with any
              entity
            </li>
            <li>
              Use the Service in a manner that could disable, overburden, or
              impair our systems
            </li>
          </ul>
        </TermsSubsection>

        <TermsSubsection heading="4.4 Service changes">
          <p className={paragraphClassName}>
            We may modify, suspend, or discontinue any part of the Service at
            any time. We will use reasonable efforts to notify you of changes
            that materially reduce core functionality if you have a paid
            subscription.
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="5. User content">
        <TermsSubsection heading="5.1 Definition and ownership">
          <p className={paragraphClassName}>
            &quot;User content&quot; means documents, autofill field data,
            Autofill Preferences, and any other information you upload, enter,
            or generate through the Service. You retain ownership of your user
            content.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="5.2 Your responsibilities">
          <p className={paragraphClassName}>
            You represent and warrant that:
          </p>
          <ul className={listClassName}>
            <li>
              You have all rights and permissions needed to upload, store, and
              use user content through the Service
            </li>
            <li>
              Your use of the Service complies with applicable laws, including
              privacy and data protection laws
            </li>
            <li>
              You will not upload information about other people unless you have
              a lawful basis to do so (such as consent or a legitimate business
              relationship)
            </li>
            <li>
              You will review all autofilled forms before submitting them to
              third parties
            </li>
          </ul>
          <p className={paragraphClassName}>
            You are solely responsible for user content and for any forms you
            submit using the Service. We do not review user content for accuracy,
            completeness, or legality.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="5.3 Information about other people">
          <p className={paragraphClassName}>
            User content may include personal information about third parties
            (for example, clients, candidates, or references). You are
            responsible for ensuring you may lawfully provide that information
            to us and our service providers for processing in connection with
            the Service.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="5.4 Sensitive data">
          <p className={paragraphClassName}>
            Do not upload government ID numbers, financial account numbers,
            protected health information, or other highly sensitive data unless
            you accept the risk of storing and processing it through the Service
            and our AI providers.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="5.5 License to FormSmash">
          <p className={paragraphClassName}>
            You grant FormSmash a worldwide, non-exclusive, royalty-free license
            to host, store, reproduce, process, transmit, and display your user
            content solely to provide, maintain, secure, and improve the Service.
            We do not use your user content to train FormSmash&apos;s own AI
            models. This license ends when your user content is deleted from our
            systems, except where retention is required by law or legitimate
            backup practices.
          </p>
        </TermsSubsection>
      </PolicySection>

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

      <PolicySection heading="8. Fees, billing, and payment">
        <TermsSubsection heading="8.1 Subscriptions">
          <p className={paragraphClassName}>
            We offer free and paid subscription plans (&quot;Subscriptions&quot;).
            Features, limits, and pricing for each plan are shown in the Extension
            or at checkout.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.2 Payment processing">
          <p className={paragraphClassName}>
            Paid Subscriptions are processed by Stripe. By subscribing, you
            authorize us and Stripe to charge your payment method on a recurring
            basis according to your plan. You represent that you are authorized
            to use the payment method you provide. Stripe&apos;s terms and
            privacy policy apply to payment processing.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.3 Automatic renewal">
          <p className={paragraphClassName}>
            Paid Subscriptions renew automatically at the end of each billing
            period unless you cancel before renewal through the subscription
            management tools in the Extension or Stripe customer portal.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.4 Cancellation">
          <p className={paragraphClassName}>
            You may cancel a Paid Subscription at any time. After cancellation,
            you will retain access to paid features through the end of the
            current billing period, then your account will revert to free-tier
            limits unless you subscribe again. Some jurisdictions have mandatory
            laws regarding cancellation and renewal; nothing in this section
            overrides those laws.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.5 Refunds and fee changes">
          <p className={paragraphClassName}>
            Except where required by law, payments are non-refundable and we do
            not provide credits for partial billing periods or unused usage. We
            may change fees with advance notice; changes apply to your next
            billing cycle after notice.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.6 Taxes">
          <p className={paragraphClassName}>
            Fees are exclusive of applicable taxes unless stated otherwise. You
            are responsible for taxes associated with your purchase, except taxes
            based on our net income.
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="9. Intellectual property">
        <p className={paragraphClassName}>
          FormSmash and its licensors own the Service, including the Extension,
          software, branding, design, and documentation. Except for the limited
          license in Section 4.1, these Terms grant you no rights to our
          intellectual property. You may not remove proprietary notices from
          the Service.
        </p>
        <p className={paragraphClassName}>
          If you provide feedback or suggestions about the Service, we may use
          them without restriction or obligation to you.
        </p>
      </PolicySection>

      <PolicySection heading="10. Suspension and termination">
        <p className={paragraphClassName}>
          We may suspend or terminate your access to the Service immediately if
          we reasonably believe you violated these Terms, pose a risk to the
          Service or others, or if required by law. We may also terminate
          inactive free accounts after extended non-use.
        </p>
        <p className={paragraphClassName}>
          Upon termination, your right to use the Service ends. We may delete
          user content from our live systems, subject to backup and legal
          retention requirements. FormSmash is not liable to you for suspension
          or termination conducted in accordance with these Terms.
        </p>
        <p className={paragraphClassName}>
          Sections that by their nature should survive termination (including
          Sections 5, 6.2, 8, 11, 12, 13, and 14) will survive.
        </p>
      </PolicySection>

      <PolicySection heading="11. Disclaimer of warranties">
        <p className={paragraphClassName}>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE
          FULLEST EXTENT PERMITTED BY LAW, FORMSMASH DISCLAIMS ALL WARRANTIES,
          INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p className={paragraphClassName}>
          WITHOUT LIMITING THE FOREGOING, FORMSMASH DOES NOT WARRANT THAT THE
          SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL
          COMPONENTS, OR THAT AI-GENERATED OUTPUTS WILL BE ACCURATE, COMPLETE,
          OR SUITABLE FOR YOUR USE CASE. YOU USE THE SERVICE AND ALL AI OUTPUTS
          AT YOUR SOLE RISK.
        </p>
        <p className={paragraphClassName}>
          Some jurisdictions do not allow certain warranty disclaimers. In those
          jurisdictions, disclaimers apply to the maximum extent permitted by
          law.
        </p>
      </PolicySection>

      <PolicySection heading="12. Limitation of liability">
        <p className={paragraphClassName}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FORMSMASH AND ITS OPERATORS,
          AFFILIATES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
          OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM
          OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
        </p>
        <p className={paragraphClassName}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FORMSMASH&apos;S TOTAL
          AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE
          SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT
          YOU PAID FORMSMASH IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING
          RISE TO LIABILITY OR (B) FIFTY US DOLLARS ($50).
        </p>
        <p className={paragraphClassName}>
          These limitations apply even if FormSmash has been advised of the
          possibility of such damages and even if a remedy fails of its
          essential purpose. Some jurisdictions do not allow certain
          limitations; in those cases, our liability is limited to the maximum
          extent permitted by law.
        </p>
      </PolicySection>

      <PolicySection heading="13. Indemnification">
        <p className={paragraphClassName}>
          You agree to defend, indemnify, and hold harmless FormSmash and its
          operators, affiliates, and suppliers from and against any claims,
          damages, losses, liabilities, costs, and expenses (including
          reasonable attorneys&apos; fees) arising out of or related to: (a) your
          user content; (b) your use of the Service; (c) forms you submit using
          the Service; (d) your violation of these Terms; or (e) your violation
          of any law or third-party rights, including privacy or intellectual
          property rights.
        </p>
      </PolicySection>

      <PolicySection heading="14. Disputes and governing law">
        <TermsSubsection heading="14.1 Informal resolution">
          <p className={paragraphClassName}>
            Before filing a formal claim, you agree to contact us at{" "}
            <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
              thejobsmash@gmail.com
            </a>{" "}
            and attempt to resolve the dispute informally.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.2 Governing law">
          <p className={paragraphClassName}>
            These Terms are governed by the laws of the State of Delaware and
            applicable United States federal law, without regard to conflict-of-law
            principles, except where mandatory local consumer protection law
            requires otherwise.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.3 Venue">
          <p className={paragraphClassName}>
            Except where prohibited by applicable law, you agree that exclusive
            jurisdiction for disputes not subject to small claims court will lie
            in the state or federal courts located in Delaware, and you consent
            to personal jurisdiction in those courts.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.4 European users">
          <p className={paragraphClassName}>
            If you are a consumer in the European Economic Area or United
            Kingdom, you may have mandatory rights under local law that cannot be
            waived by contract. Nothing in these Terms limits those non-waivable
            rights.
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="15. General">
        <p className={paragraphClassName}>
          <strong className="text-text-primary">Entire agreement.</strong> These
          Terms and the Privacy Policy are the entire agreement between you and
          FormSmash regarding the Service and supersede prior agreements on the
          same subject.
        </p>
        <p className={paragraphClassName}>
          <strong className="text-text-primary">Severability.</strong> If any
          provision is unenforceable, the remaining provisions remain in effect.
        </p>
        <p className={paragraphClassName}>
          <strong className="text-text-primary">No waiver.</strong> Our failure
          to enforce a provision is not a waiver of our right to do so later.
        </p>
        <p className={paragraphClassName}>
          <strong className="text-text-primary">Assignment.</strong> You may not
          assign these Terms without our consent. We may assign these Terms in
          connection with a merger, acquisition, or sale of assets.
        </p>
        <p className={paragraphClassName}>
          <strong className="text-text-primary">Force majeure.</strong> We are
          not liable for delays or failures caused by events beyond our
          reasonable control.
        </p>
      </PolicySection>

      <PolicySection heading="16. Contact">
        <p className={paragraphClassName}>
          Questions about these Terms? Click{" "}
          <Link
            to={routes.contact.path}
            className={`font-semibold ${linkClassName}`}
          >
            here
          </Link>
          .
        </p>
        <p className={paragraphClassName}>
          Privacy requests? Click{" "}
          <Link
            to={routes.contact.path}
            className={`font-semibold ${linkClassName}`}
          >
            here
          </Link>
          .
        </p>
      </PolicySection>

      <footer className="mt-8 text-sm text-text-secondary">
        FormSmash · Chrome extension for form autofill
      </footer>
    </SecondaryPageShell>
  );
}
