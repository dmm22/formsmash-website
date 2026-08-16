import { Link } from "react-router-dom";
import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { routes } from "../../../routes";
import {
  linkClassName,
  paragraphClassName,
} from "../termsStyles";

export default function TermsAcceptanceAndEligibility() {
  return (
    <>
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

      <p className={paragraphClassName}>
        <strong className="text-text-primary">
          Arbitration and class action waiver.
        </strong>{" "}
        SECTION 14 REQUIRES MOST DISPUTES BETWEEN YOU AND FORMSMASH TO BE
        RESOLVED BY BINDING INDIVIDUAL ARBITRATION RATHER THAN IN COURT, AND
        WAIVES YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION. You may opt out of
        Section 14 within 30 days of first accepting these Terms, as described
        in Section 14.6.
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
          the updated Terms here with a revised effective date, and where a
          change is material we will make reasonable efforts to give notice in
          the Extension before it takes effect. Your continued use of the
          Service after the effective date of updated Terms constitutes
          acceptance of the changes. If you do not agree to updated Terms, you
          must stop using the Service and uninstall the Extension. Changes to
          Section 14 (Arbitration and dispute resolution) do not apply to any
          dispute of which we had notice before the change.
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
    </>
  );
}
