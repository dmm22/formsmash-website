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
        FormSmash (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a
        Chrome extension that fills out job application forms using answers you
        have saved. This Privacy Policy explains what information we collect,
        why we collect it, and what we do with it when you use the FormSmash
        extension (the &quot;Extension&quot;), the servers the Extension talks
        to, or our website (together, the &quot;Service&quot;).
      </p>
      <p className={paragraphClassName}>
        By using the Service, you agree to this Privacy Policy and our{" "}
        <Link to={routes.terms.path} className={linkClassName}>
          Terms of Service
        </Link>
        .
      </p>

      <PolicySection heading="The short version">
        <p className={paragraphClassName}>
          We hope you read all of this, but here are the points that matter
          most:
        </p>
        <ul className={listClassName}>
          <li>
            You can use the Extension without an account. Signing in with
            Google is optional.
          </li>
          <li>
            The Extension has no access to the websites you visit until you ask
            it to fill a form on one, and it reads a page only when you run
            autofill.
          </li>
          <li>
            When you upload a resume, we keep the text we extract from it, not
            the file itself.
          </li>
          <li>
            We do not sell your information, we do not use it for advertising,
            and we do not use your content to train AI models.
          </li>
          <li>
            You can edit or delete any saved answer at any time, and you can ask
            us to delete your account data.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="Information we collect">
        <p className={paragraphClassName}>
          Depending on how you use the Service, we collect:
        </p>
        <ul className={listClassName}>
          <li>
            <strong className="text-text-primary">Account information.</strong>{" "}
            If you sign in with Google, we receive and store your email address,
            your name, the URL of your Google profile picture, and your Google
            account identifier, which we use to identify your account and keep
            your saved answers attached to it. Google handles the sign-in itself,
            so we never see your Google password.
          </li>
          <li>
            <strong className="text-text-primary">
              Browser and session identifiers.
            </strong>{" "}
            The Extension creates a random identifier for your browser and sends
            it with its requests so we can save your answers before you sign in.
            If you do sign in later, the answers and resumes saved under that
            identifier are attached to your account. Signing in also sets a
            session cookie that keeps you signed in for 30 days, and we store
            that session in hashed form on our servers. Session credentials are
            not kept in the Extension&apos;s local storage.
          </li>
          <li>
            <strong className="text-text-primary">Your saved answers.</strong>{" "}
            The field labels and values you save, whether you typed them in or
            they came from a resume you uploaded. These are the answers we fill
            forms with, so they usually include personal details such as your
            name, contact information, and work authorization, and they may
            include information about other people, such as a reference you
            list.
          </li>
          <li>
            <strong className="text-text-primary">
              Resumes you upload.
            </strong>{" "}
            You can upload a PDF or Word resume up to 20 MB. We extract the text
            from it and store that text along with the filename and file size.
            We do not store the file itself. Saved answers are generated from
            that text by a rule-based parser on our servers, not by AI.
          </li>
          <li>
            <strong className="text-text-primary">
              Custom instructions.
            </strong>{" "}
            If AI features are available on your plan, we store the instructions
            you write telling the AI how to answer.
          </li>
          <li>
            <strong className="text-text-primary">
              Form and page information from an autofill run.
            </strong>{" "}
            When you run autofill, the Extension reads the form on the page and
            sends us the address of that page along with the form&apos;s field
            labels, input types, and the options offered by dropdowns and
            checkboxes. We store this so we can build the fill plan and improve
            how well we match questions.
          </li>
          <li>
            <strong className="text-text-primary">Job posting text.</strong> If
            AI features are available on your plan and you turn them on, the
            Extension also reads the job posting text from the page the form is
            on, so the AI can write answers that fit the role. This happens only
            on runs where the AI is used.
          </li>
          <li>
            <strong className="text-text-primary">AI request records.</strong>{" "}
            When the AI writes answers for you, we store what we sent it, what
            it returned, and how many tokens the request used, so we can support
            the feature, investigate problems, and account for usage against
            your plan.
          </li>
          <li>
            <strong className="text-text-primary">
              Extension usage events.
            </strong>{" "}
            We record product events such as installing, updating or removing
            the Extension, opening the popup, and running autofill, so we can
            see which features are used and whether they are working. These
            events contain the name of the event and a link to your browser
            session or account. They do not contain your saved answers, the address of the
            page you were on, or your IP address. When you remove the Extension,
            your browser opens a FormSmash address that records the removal
            before taking you to our website.
          </li>
          <li>
            <strong className="text-text-primary">
              Subscription identifiers.
            </strong>{" "}
            If you subscribe, Stripe handles the payment and we store the
            customer and subscription identifiers it gives us, along with your
            plan and its status, so we can tell whether your subscription is
            active and which features to enable. We never see or store your full
            card number.
          </li>
          <li>
            <strong className="text-text-primary">
              Website usage information.
            </strong>{" "}
            When you visit our website, we record which pages you view, which
            links and buttons you click, how far you scroll, the page that
            referred you when your browser provides it, your browser type, and
            your IP address. We also store a random visitor identifier in your
            browser&apos;s local storage and a session identifier that lasts for
            that browsing session. We use all of this to see which pages are
            useful and to improve them.
          </li>
          <li>
            <strong className="text-text-primary">
              Messages you send us.
            </strong>{" "}
            If you use our contact form, we receive your email address and your
            message, and we record the IP address the message came from to
            prevent abuse.
          </li>
          <li>
            <strong className="text-text-primary">Server logs.</strong> Our
            servers log request details such as the method, path, response
            status, and how long the request took, which we use to keep the
            Service running and diagnose errors.
          </li>
        </ul>
      </PolicySection>

      <PolicySection heading="Where we get information">
        <ul className={listClassName}>
          <li>
            <strong className="text-text-primary">From you.</strong> The answers
            you save, the resumes you upload, your custom instructions, and the
            messages you send us.
          </li>
          <li>
            <strong className="text-text-primary">
              From your browser, when you run autofill.
            </strong>{" "}
            The form on the page, the address of that page, and, on runs that
            use AI, the job posting text.
          </li>
          <li>
            <strong className="text-text-primary">
              From Google, when you sign in.
            </strong>{" "}
            Your email address, name, profile picture URL, and Google account
            identifier.
          </li>
          <li>
            <strong className="text-text-primary">
              From Stripe, if you subscribe.
            </strong>{" "}
            Your customer and subscription identifiers and the status of your
            subscription.
          </li>
        </ul>
      </PolicySection>
    </>
  );
}
