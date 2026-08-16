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
            FormSmash saves the answers job applications ask you for, so you can
            reuse them. You can add answers yourself, or upload a PDF or Word
            resume that we turn into a starting set of answers using a
            rule-based parser. On a job application page, you right-click and
            choose &quot;Autofill Application,&quot; and the Extension matches
            the questions on that form to your saved answers and fills the
            fields it can.
          </p>
          <p className={paragraphClassName}>
            The Extension fills fields only. It does not submit an application
            for you, and it does not run on a page unless you ask it to. You
            review the form and submit it yourself. With a Premium subscription,
            the Service can also use AI to write answers for questions your
            saved answers do not cover, as described in Section 6.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="4.3 Restrictions">
          <p className={paragraphClassName}>
            You agree that you will not, and will not help others to:
          </p>
          <ul className={listClassName}>
            <li>
              Reverse engineer, decompile, disassemble, or attempt to discover
              the source code or underlying structure of the Service, except
              where that restriction is prohibited by law
            </li>
            <li>
              Resell, sublicense, rent, lend, or otherwise provide access to the
              Service to third parties except as expressly permitted
            </li>
            <li>
              Circumvent usage limits, authentication, security measures, or any
              technical limitation we implement
            </li>
            <li>
              Create multiple or duplicate accounts to evade limits or
              enforcement
            </li>
            <li>
              Crawl, scrape, or spider the Service, or access our APIs by any
              automated means other than the Extension
            </li>
            <li>
              Run bots or automated processes against the Service, or place an
              unreasonable load on our infrastructure
            </li>
            <li>
              Attempt to gain unauthorized access to the Service, to other
              users&apos; data, or to the systems and networks behind it,
              including by probing, scanning, or testing their security
            </li>
            <li>
              Use the Service, or any output of it, to build or train a
              competing product or model
            </li>
            <li>Remove or obscure any proprietary notices in the Service</li>
            <li>
              Use the Service for unlawful, fraudulent, or harmful purposes
            </li>
            <li>
              Upload malware or content you do not have the right to use
            </li>
            <li>
              Use the Service to send spam or other unsolicited, deceptive, or
              fraudulent communications
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
          <p className={paragraphClassName}>
            You also agree to comply with applicable export and sanctions laws,
            and you represent that you are not located in, or a resident of, a
            country or region subject to a United States embargo, and that you
            are not listed on any United States government list of restricted or
            prohibited parties.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="4.4 Using FormSmash on other websites">
          <p className={paragraphClassName}>
            The Extension fills forms on websites operated by other people. You
            are responsible for complying with the terms of those websites, and
            you may not use the Service on a website where you have agreed not
            to use automated or assistive form-filling tools.
          </p>
          <p className={paragraphClassName}>
            You are responsible for everything you submit through a form the
            Extension filled, including its accuracy and completeness, and you
            agree to review each form before submitting it. FormSmash is not
            affiliated with, endorsed by, or acting on behalf of any job board,
            applicant tracking system, or employer, and we are not responsible
            for their websites, their decisions, or the outcome of any
            application.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="4.5 Service changes">
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
            custom instructions, and any other information you upload, enter,
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
            and, when AI features are used, our AI providers.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="5.5 License to FormSmash">
          <p className={paragraphClassName}>
            You grant FormSmash a worldwide, non-exclusive, royalty-free license
            to host, store, reproduce, process, and transmit your user content,
            and to display it back to you in the Extension, solely to provide,
            maintain, secure, and improve the Service. We do not publish your
            user content or make it available to other users, and we do not use
            it to train AI models. This license ends when your user content is
            deleted from our systems, except where retention is required by law
            or legitimate backup practices.
          </p>
        </TermsSubsection>
      </PolicySection>
    </>
  );
}
