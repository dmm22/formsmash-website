import PolicySection from "../components/PolicySection";
import { listClassName, paragraphClassName } from "../privacyStyles";

export default function PrivacyUseAndSharing() {
  return (
    <>
      <PolicySection heading="Why we collect it">
        <p className={paragraphClassName}>We use the information above to:</p>
        <ul className={listClassName}>
          <li>Fill the forms you ask us to fill</li>
          <li>Turn a resume you upload into answers you can reuse</li>
          <li>
            Match the questions on a form to your saved answers, and improve how
            well we match them
          </li>
          <li>
            Write answers with AI when that feature is available on your plan and
            you turn it on
          </li>
          <li>
            Keep you signed in and keep your answers attached to your browser or
            your account
          </li>
          <li>Take payment and manage subscriptions</li>
          <li>Keep the Service running, secure, and free of abuse</li>
          <li>
            Understand how the Extension and our website are used so we can
            improve them
          </li>
          <li>Reply to you when you contact us</li>
        </ul>
      </PolicySection>

      <PolicySection heading="How we disclose it">
        <p className={paragraphClassName}>
          We disclose information only where it is needed to run the Service:
        </p>
        <ul className={listClassName}>
          <li>
            <strong className="text-text-primary">Google.</strong> When you sign
            in, we send the sign-in token from your browser to Google to confirm
            who you are and to retrieve your email address, name, and profile
            picture URL.
          </li>
          <li>
            <strong className="text-text-primary">OpenAI.</strong> When AI
            features are available on your plan and you turn them on, we send
            OpenAI the questions the form still needs answered, the saved answers
            we hold for you, the job posting text from the page, and your custom
            instructions, so it can write the missing answers. OpenAI handles
            that information under its own terms and privacy policy. We do not
            send it your uploaded resume.
          </li>
          <li>
            <strong className="text-text-primary">Stripe.</strong> If you
            subscribe, Stripe processes the payment and manages the subscription
            under its own privacy policy.
          </li>
          <li>
            <strong className="text-text-primary">
              Hosting and infrastructure providers.
            </strong>{" "}
            Our servers and database run on cloud infrastructure, and those
            providers process data on our behalf under contract.
          </li>
          <li>
            <strong className="text-text-primary">Legal and safety.</strong> We
            may disclose information where the law requires it, or where we need
            it to protect our rights, our users, or the public, or to
            investigate fraud and abuse.
          </li>
          <li>
            <strong className="text-text-primary">Business transfers.</strong>{" "}
            If we are involved in a merger, acquisition, or sale of assets, we
            may transfer information, subject to this policy and applicable law.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="We do not sell your information">
        <p className={paragraphClassName}>
          We do not sell your personal information, and we do not share it for
          cross-context behavioral advertising. We do not show you ads, we do not
          work with advertising networks, and we do not use your content to train
          AI models, ours or anyone else&apos;s. The Extension contains no
          third-party analytics, advertising, or error-monitoring services.
        </p>
        <p className={paragraphClassName}>
          We also do not transfer your information to data brokers or
          information resellers, and we do not use it, or let anyone else use it,
          to assess your creditworthiness or for lending purposes.
        </p>
      </PolicySection>

      <PolicySection heading="Site access and what the Extension reads">
        <p className={paragraphClassName}>
          Installing the Extension gives it no access to the websites you visit.
          It asks for permission to read a site the first time you run autofill
          on that site, so it only ever has access to the sites where you have
          used it. No part of the Extension runs on a page until you trigger it.
        </p>
        <p className={paragraphClassName}>
          When you do run autofill, the Extension looks through the page,
          including forms embedded inside it, to find the fields it can fill. It
          reads the labels, input types, and options of those fields, and on runs
          that use AI it also reads the job posting text. It fills the fields and
          leaves the form to you: it never submits an application on your behalf.
        </p>
        <p className={paragraphClassName}>
          It does not read your browsing history, your other tabs, or the cookies
          belonging to the sites you visit. It does not take screenshots, read
          your clipboard, or intercept your network traffic. We use page access
          only for the autofill features described in our Chrome Web Store
          listing and in the Extension itself, and not to build a record of where
          you go online.
        </p>
      </PolicySection>

      <PolicySection heading="Our website">
        <p className={paragraphClassName}>
          Most of this policy is about the Extension. Our website collects
          less: we measure how visitors move through it so we can tell which
          pages are useful and improve them. That measurement is our own, it stays
          on our servers, and we do not use it for advertising or to follow you
          across other sites. If you write to us through the contact form, we use
          your email address and message to reply to you and for nothing else.
        </p>
      </PolicySection>

      <PolicySection heading="Cookies and browser storage">
        <p className={paragraphClassName}>
          When you sign in, we set one cookie that keeps you signed in. It is an
          HTTP-only session cookie, it lasts 30 days, and it is not used for
          advertising or to follow you between sites.
        </p>
        <p className={paragraphClassName}>
          The Extension keeps a few things in your browser&apos;s own storage:
          the random identifier for your browser, your settings such as theme,
          the delay between fields, the loading indicator, and your AI
          preferences, a note of which prompts you have dismissed, and a cached
          copy of its configuration. Uninstalling the Extension removes all of
          it.
        </p>
        <p className={paragraphClassName}>
          We do not use cookies on our website. The visitor and session
          identifiers described above are stored in your browser&apos;s local and
          session storage instead, and you can clear them at any time through
          your browser settings.
        </p>
      </PolicySection>

      <PolicySection heading="Links to other sites">
        <p className={paragraphClassName}>
          Our website and the Extension link to places we do not control, such
          as the Chrome Web Store and the FormSmash Assistant. Those sites have
          their own privacy policies, which we would encourage you to read.
        </p>
      </PolicySection>
    </>
  );
}
