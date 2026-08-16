import { Link } from "react-router-dom";
import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { routes } from "../../../routes";
import { linkClassName, paragraphClassName } from "../termsStyles";

export default function TermsDisputesAndContact() {
  return (
    <>
      <PolicySection heading="14. Arbitration and dispute resolution">
        <TermsSubsection heading="14.1 Informal resolution first">
          <p className={paragraphClassName}>
            Before starting an arbitration or filing a claim, you and FormSmash
            agree to try to resolve the dispute informally. Send a written
            notice of dispute to{" "}
            <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
              thejobsmash@gmail.com
            </a>{" "}
            that includes your name, the email address associated with your
            account, a description of the dispute, and the relief you are
            seeking. You and FormSmash will then try in good faith to resolve it
            for 60 days after the notice is received, and neither of us may start
            an arbitration or file a claim before that period ends. Any
            applicable limitations period is tolled while the parties work toward
            resolution.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.2 Agreement to arbitrate">
          <p className={paragraphClassName}>
            IF INFORMAL RESOLUTION FAILS, YOU AND FORMSMASH AGREE THAT ANY
            DISPUTE, CLAIM, OR CONTROVERSY ARISING OUT OF OR RELATING TO THESE
            TERMS OR THE SERVICE WILL BE RESOLVED BY BINDING INDIVIDUAL
            ARBITRATION RATHER THAN IN COURT, EXCEPT AS SET OUT IN SECTION 14.3.
            YOU AND FORMSMASH ARE EACH GIVING UP THE RIGHT TO A TRIAL BY JURY.
            This agreement to arbitrate is governed by the Federal Arbitration
            Act.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.3 Exceptions">
          <p className={paragraphClassName}>
            Either of us may bring an individual claim in small claims court if
            it qualifies to be heard there. Either of us may also ask a court for
            an injunction or other equitable relief for actual or threatened
            infringement or misuse of intellectual property. Nothing in this
            section requires you to arbitrate a claim that applicable law does
            not permit to be arbitrated.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.4 Waiver of class and representative relief">
          <p className={paragraphClassName}>
            YOU AND FORMSMASH AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
            ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
            MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, OR
            REPRESENTATIVE PROCEEDING.
          </p>
          <p className={paragraphClassName}>
            The arbitrator may not consolidate more than one person&apos;s
            claims and may not preside over any form of class or representative
            proceeding. The arbitrator may award relief only in favor of the
            individual party seeking relief, and only to the extent needed to
            provide relief warranted by that party&apos;s individual claim. If
            this Section 14.4 is found unenforceable as to a particular claim or
            request for relief, that claim or request must be severed from the
            arbitration and brought in court, and the rest of this Section 14
            still applies.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.5 Arbitration rules and forum">
          <p className={paragraphClassName}>
            Arbitration will be administered by the American Arbitration
            Association (&quot;AAA&quot;) under its Consumer Arbitration Rules,
            as modified by these Terms, before a single arbitrator and in the
            English language. The AAA rules and filing forms are available at
            adr.org. Unless you and FormSmash agree otherwise, any in-person
            hearing will take place in the county where you live, and hearings
            may be held by telephone or video, or the dispute may be decided on
            the documents alone, where the AAA rules allow. Filing and
            arbitration fees are governed by the AAA rules. The
            arbitrator&apos;s award is final and binding, and judgment on it may
            be entered in any court with jurisdiction.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.6 Your right to opt out">
          <p className={paragraphClassName}>
            You may opt out of this Section 14 by sending written notice to{" "}
            <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
              thejobsmash@gmail.com
            </a>{" "}
            within 30 days of first accepting these Terms. Your notice must
            include your full name, the email address associated with your
            account, and a statement that you are opting out of the arbitration
            agreement in the FormSmash Terms of Service. Opting out affects no
            other part of these Terms and will not be held against you, and
            disputes will instead be resolved in the courts identified in
            Section 14.7. If you do not opt out within those 30 days, this
            Section 14 applies to you.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.7 Governing law and courts">
          <p className={paragraphClassName}>
            These Terms are governed by the laws of the State of Delaware and
            applicable United States federal law, without regard to conflict-of-law
            principles, except where mandatory local consumer protection law
            requires otherwise. For any dispute that is not arbitrated, whether
            because it falls within Section 14.3, because you opted out under
            Section 14.6, or because this Section 14 does not apply to you, you
            agree to the exclusive jurisdiction of the state and federal courts
            located in Delaware and consent to personal jurisdiction in those
            courts, except where prohibited by applicable law.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="14.8 European and United Kingdom consumers">
          <p className={paragraphClassName}>
            If you are a consumer in the European Economic Area or the United
            Kingdom, Sections 14.2 through 14.6 do not apply to you where local
            law prohibits them, and you may bring proceedings in the courts of
            your country of residence. You may have mandatory rights under local
            law that cannot be waived by contract, and nothing in these Terms
            limits those non-waivable rights.
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
        <p className={paragraphClassName}>
          <strong className="text-text-primary">Notices.</strong> We may give you
          notices by posting them on this website or by showing them in the
          Extension. You agree to receive notices electronically, and a posted
          notice is effective when posted. Notices to FormSmash must be sent to{" "}
          <a href="mailto:thejobsmash@gmail.com" className={linkClassName}>
            thejobsmash@gmail.com
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection heading="16. Contact">
        <p className={paragraphClassName}>
          If you have a question about these Terms, or need to send us a notice
          under Section 14, use our{" "}
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

      <footer className="mt-8 text-sm text-text-secondary">
        FormSmash · Chrome extension for form autofill
      </footer>
    </>
  );
}
