import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { listClassName, paragraphClassName } from "../termsStyles";

export default function TermsAiAndThirdParty() {
  return (
    <>
      <PolicySection heading="6. AI features">
        <TermsSubsection heading="6.1 AI gap-fill">
          <p className={paragraphClassName}>
            AI gap-fill is a Premium feature. When it is available on your plan
            and you turn it on, and a form asks something your saved answers do
            not cover, we send the unanswered questions, the saved answers we
            hold for you, your custom instructions, and job posting text from
            the page to our AI provider, and the Extension fills the answers it
            writes. Turning AI gap-fill off leaves the rest of autofill working.
            Resume import is rule-based and does not use AI.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="6.2 No guarantee of accuracy">
          <p className={paragraphClassName}>
            AI-generated outputs may be wrong, incomplete, outdated, or
            inappropriate for your situation. They are filled into the form
            without human review, so you must read them and correct them before
            you submit. Do not use AI outputs as your sole source of factual
            information. FormSmash does not guarantee that AI outputs comply
            with any website&apos;s terms, employer policies, or applicable
            laws, and you are responsible for what you submit.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="6.3 Usage limits">
          <p className={paragraphClassName}>
            Saving answers, importing a resume, and autofilling from your saved
            answers are not subject to a usage count. Resume uploads must be a
            PDF or Word document no larger than 20 MB. Each Premium
            subscription includes an allowance for AI features per billing
            period; if you reach it, AI features stop working until your next
            billing period begins, and the rest of the Service keeps working. We
            may change allowances with notice as described in Section 8.6.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="6.4 AI usage restrictions">
          <p className={paragraphClassName}>
            You may not use AI features to:
          </p>
          <ul className={listClassName}>
            <li>
              Produce content that is unlawful, deceptive, or deliberately
              misleading, including misrepresenting your identity,
              qualifications, work history, or work authorization
            </li>
            <li>
              Produce content that infringes anyone&apos;s rights or violates a
              website&apos;s terms
            </li>
            <li>
              Develop or train a competing product, service, or AI model, or
              otherwise generate output for the purpose of benchmarking against
              or replicating the Service
            </li>
            <li>
              Generate volumes of requests beyond ordinary personal use of the
              Service
            </li>
          </ul>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="7. Third-party services">
        <p className={paragraphClassName}>
          The Service relies on third parties to work: Google for sign-in,
          OpenAI for AI gap-fill, Stripe for payments and subscription
          management, and cloud providers for hosting. Your use of those
          services is subject to their own terms and privacy policies, and they
          process the information described in our Privacy Policy. We do not
          control third-party practices, and FormSmash is not responsible for
          third-party services or for any loss arising from your use of them.
        </p>
        <p className={paragraphClassName}>
          The Service may contain links to websites we do not operate. We do not
          endorse or take responsibility for their content, terms, or privacy
          practices, and following a link is at your own risk.
        </p>
      </PolicySection>
    </>
  );
}
