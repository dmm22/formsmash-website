import PolicySection from "../../privacy/components/PolicySection";
import { paragraphClassName } from "../termsStyles";

export default function TermsTerminationAndLiability() {
  return (
    <>
      <PolicySection heading="10. Suspension and termination">
        <p className={paragraphClassName}>
          We may suspend or terminate your access to the Service immediately if
          we reasonably believe you violated these Terms, pose a risk to the
          Service or others, or if required by law. We may also terminate
          inactive free accounts after extended non-use.
        </p>
        <p className={paragraphClassName}>
          Upon termination, your right to use the Service ends. We may delete
          user content from our live systems, subject to backup and legal
          retention requirements. FormSmash is not liable to you for suspension
          or termination conducted in accordance with these Terms.
        </p>
        <p className={paragraphClassName}>
          Sections that by their nature should survive termination (including
          Sections 5, 6.2, 8, 11, 12, 13, and 14) will survive.
        </p>
      </PolicySection>

      <PolicySection heading="11. Disclaimer of warranties">
        <p className={paragraphClassName}>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE
          FULLEST EXTENT PERMITTED BY LAW, FORMSMASH DISCLAIMS ALL WARRANTIES,
          INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p className={paragraphClassName}>
          WITHOUT LIMITING THE FOREGOING, FORMSMASH DOES NOT WARRANT THAT THE
          SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL
          COMPONENTS, OR THAT AI-GENERATED OUTPUTS WILL BE ACCURATE, COMPLETE,
          OR SUITABLE FOR YOUR USE CASE. YOU USE THE SERVICE AND ALL AI OUTPUTS
          AT YOUR SOLE RISK.
        </p>
        <p className={paragraphClassName}>
          Some jurisdictions do not allow certain warranty disclaimers. In those
          jurisdictions, disclaimers apply to the maximum extent permitted by
          law.
        </p>
      </PolicySection>

      <PolicySection heading="12. Limitation of liability">
        <p className={paragraphClassName}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FORMSMASH AND ITS OPERATORS,
          AFFILIATES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
          OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM
          OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
        </p>
        <p className={paragraphClassName}>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FORMSMASH&apos;S TOTAL
          AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE
          SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT
          YOU PAID FORMSMASH IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING
          RISE TO LIABILITY OR (B) FIFTY US DOLLARS ($50).
        </p>
        <p className={paragraphClassName}>
          These limitations apply even if FormSmash has been advised of the
          possibility of such damages and even if a remedy fails of its
          essential purpose. Some jurisdictions do not allow certain
          limitations; in those cases, our liability is limited to the maximum
          extent permitted by law.
        </p>
      </PolicySection>

      <PolicySection heading="13. Indemnification">
        <p className={paragraphClassName}>
          You agree to defend, indemnify, and hold harmless FormSmash and its
          operators, affiliates, and suppliers from and against any claims,
          damages, losses, liabilities, costs, and expenses (including
          reasonable attorneys&apos; fees) arising out of or related to: (a) your
          user content; (b) your use of the Service; (c) forms you submit using
          the Service; (d) your violation of these Terms; or (e) your violation
          of any law or third-party rights, including privacy or intellectual
          property rights.
        </p>
      </PolicySection>
    </>
  );
}
