import { Link } from "react-router-dom";
import PolicySection from "../components/PolicySection";
import { routes } from "../../../routes";
import { linkClassName, paragraphClassName } from "../privacyStyles";

export default function PrivacyMiscAndContact() {
  return (
    <>
      <PolicySection heading="Children">
        <p className={paragraphClassName}>
          The Service is not directed to children under 13 (or the minimum age
          required in your jurisdiction). We do not knowingly collect personal
          information from children.
        </p>
      </PolicySection>

      <PolicySection heading="International users">
        <p className={paragraphClassName}>
          If you use the Service from outside the country where our servers are
          located, your information may be processed in that country or other
          countries where our service providers operate, which may have
          different data protection laws than your home country.
        </p>
      </PolicySection>

      <PolicySection heading="Changes to this policy">
        <p className={paragraphClassName}>
          We may update this policy from time to time. We will post the revised
          policy with a new effective date. If changes are material, we may also
          notify you by email (if you have an account) or through the Service.
          Your continued use of the Service after the effective date means you
          accept the updated policy. If you do not agree, stop using the
          Service.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p className={paragraphClassName}>
          Questions about this policy or your data? Click{" "}
          <Link
            to={routes.contact.path}
            className={`font-semibold ${linkClassName}`}
          >
            here
          </Link>
          .
        </p>
      </PolicySection>

      <p className={paragraphClassName}>
        <strong className="text-text-primary">
          Chrome Web Store — Limited Use.
        </strong>{" "}
        The use of information received from Google APIs will adhere to the{" "}
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
