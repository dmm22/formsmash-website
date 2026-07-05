import { Link } from "react-router-dom";
import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { routes } from "../../../routes";
import { linkClassName, paragraphClassName } from "../termsStyles";

export default function TermsDisputesAndContact() {
  return (
    <>
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
    </>
  );
}
