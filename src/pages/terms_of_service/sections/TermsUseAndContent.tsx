import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { listClassName, paragraphClassName } from "../termsStyles";

export default function TermsUseAndContent() {
  return (
    <>
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
    </>
  );
}
