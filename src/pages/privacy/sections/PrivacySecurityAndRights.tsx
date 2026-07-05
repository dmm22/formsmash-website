import PolicySection from "../components/PolicySection";
import { paragraphClassName } from "../privacyStyles";

export default function PrivacySecurityAndRights() {
  return (
    <>
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
    </>
  );
}
