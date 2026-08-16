import { Link } from "react-router-dom";
import PolicySection from "../components/PolicySection";
import { routes } from "../../../routes";
import { linkClassName, paragraphClassName } from "../privacyStyles";

export default function PrivacyMiscAndContact() {
  return (
    <>
      <PolicySection heading="Children">
        <p className={paragraphClassName}>
          The Service is not directed to children under 13, or under the minimum
          age required where you live, and we do not knowingly collect personal
          information from them. If you believe a child has given us personal
          information, contact us and we will delete it.
        </p>
      </PolicySection>

      <PolicySection heading="Where we process information">
        <p className={paragraphClassName}>
          We are based in the United States. If you use the Service from
          somewhere else, your information may be transferred to, stored in, or
          accessed from the United States and other countries where we or our
          service providers operate, and those countries may have different data
          protection laws than your own.
        </p>
      </PolicySection>

      <PolicySection heading="Changes to this policy">
        <p className={paragraphClassName}>
          We may update this policy from time to time, and we will post the
          revised version here with a new effective date. If a change is
          significant, we will also make reasonable efforts to tell you in the
          Extension. Continuing to use the Service after the new effective date
          means you accept the updated policy. If you do not agree with it, stop
          using the Service and uninstall the Extension.
        </p>
      </PolicySection>

      <PolicySection heading="How to contact us">
        <p className={paragraphClassName}>
          If you have a question about this policy or your data, use our{" "}
          <Link
            to={routes.contact.path}
            className={`font-semibold ${linkClassName}`}
          >
            contact page
          </Link>{" "}
          or email{" "}
          <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
            thejobsmash@gmail.com
          </a>
          .
        </p>
      </PolicySection>

      <p className={paragraphClassName}>
        <strong className="text-text-primary">
          Chrome Web Store — Limited Use.
        </strong>{" "}
        Our use of information received from Google APIs adheres to the{" "}
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
    </>
  );
}
