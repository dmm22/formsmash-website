import { Link } from "react-router-dom";
import PolicySection from "../components/PolicySection";
import { routes } from "../../../routes";
import {
  linkClassName,
  listClassName,
  paragraphClassName,
} from "../privacyStyles";

export default function PrivacySecurityAndRights() {
  return (
    <>
      <PolicySection heading="How we protect it">
        <p className={paragraphClassName}>
          Everything the Extension sends to our servers travels over HTTPS. Your
          session is stored in hashed form, so the contents of the cookie in your
          browser cannot be read back out of our database. Access to production
          data is limited to the people who need it to operate the Service, and
          we look at what you have saved only where we need it to run the
          Service, to look into a problem you have reported, to keep the Service
          secure, or to comply with the law. No method of transmission or storage
          is completely secure, so we cannot promise absolute security.
        </p>
      </PolicySection>

      <PolicySection heading="Sensitive information">
        <p className={paragraphClassName}>
          Some of what you save is sensitive, because that is what applications
          ask for: work authorization and sponsorship, salary expectations, and
          the demographic questions many employers include. We use that
          information to fill the forms you ask us to fill and to provide the
          Service, and for nothing else. We do not sell or share it, and we do
          not use it to draw inferences about you.
        </p>
      </PolicySection>

      <PolicySection heading="How long we keep it">
        <p className={paragraphClassName}>
          We keep your account information, saved answers, and extracted resume
          text for as long as you are using the Service, and until you delete
          them or ask us to delete your account. Records of autofill runs, AI
          requests, and subscription usage are kept for as long as we need them
          to support the feature, account for billing, and investigate abuse.
          Analytics events are kept for measurement and operations, and we may
          delete or aggregate older events over time. Where the law requires us
          to keep something longer, such as billing records, we do.
        </p>
        <p className={paragraphClassName}>
          Uninstalling the Extension clears what it stored in your browser, but
          it does not delete the data held on our servers. To remove that, delete
          the individual items or ask us to delete your account.
        </p>
      </PolicySection>

      <PolicySection heading="Your choices and rights">
        <p className={paragraphClassName}>
          You can do all of the following yourself:
        </p>
        <ul className={listClassName}>
          <li>Edit or delete any saved answer in the Extension</li>
          <li>Delete a resume you uploaded</li>
          <li>Sign out, which ends your session</li>
          <li>
            Leave AI features turned off, where they are available on your plan
          </li>
          <li>
            Uninstall the Extension, which removes what it stored in your browser
          </li>
          <li>
            Clear the visitor and session identifiers our website stored by
            clearing that site&apos;s storage in your browser settings
          </li>
        </ul>
        <p className={paragraphClassName}>
          Depending on where you live, you may also have the right to access,
          correct, delete, or export your personal information, or to object to
          or restrict how we use it. To make one of those requests, or to have
          your account and its data deleted, contact us through our{" "}
          <Link to={routes.contact.path} className={linkClassName}>
            contact page
          </Link>{" "}
          or at{" "}
          <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
            thejobsmash@gmail.com
          </a>
          . We may need to verify your identity before we act on a request.
        </p>
        <p className={paragraphClassName}>
          If you live in California or another US state with a comprehensive
          privacy law, you have the right to know what personal information we
          collect and why, to request a copy of it, to correct it, to have it
          deleted, and not to be treated differently for exercising any of those
          rights. As described above, we do not sell personal information and we
          do not share it for cross-context behavioral advertising.
        </p>
      </PolicySection>
    </>
  );
}
