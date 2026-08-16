import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { paragraphClassName } from "../termsStyles";

export default function TermsBillingAndIp() {
  return (
    <>
      <PolicySection heading="8. Fees, billing, and payment">
        <TermsSubsection heading="8.1 Free and paid access">
          <p className={paragraphClassName}>
            Saving answers, importing a resume, and autofilling from your saved
            answers cost nothing. A Premium subscription (a
            &quot;Subscription&quot;) adds AI gap-fill, subject to the allowance
            in Section 6.3. The features, allowance, and price of each plan are
            shown in the Extension and at checkout, and those are the terms that
            apply to your purchase.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.2 Payment processing">
          <p className={paragraphClassName}>
            Subscriptions are processed by Stripe. By subscribing, you authorize
            us and Stripe to charge your payment method on a recurring basis
            according to your plan, and you represent that you are authorized to
            use the payment method you provide. We never receive your full card
            number; Stripe&apos;s terms and privacy policy apply to payment
            processing.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.3 Automatic renewal">
          <p className={paragraphClassName}>
            Your Subscription renews automatically at the end of each billing
            period for a further period of the same length, at our then-current
            price for your plan, unless you cancel before the renewal date.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.4 Cancellation">
          <p className={paragraphClassName}>
            You may cancel at any time in the Stripe customer portal, which you
            reach from &quot;Manage Subscription&quot; in the Extension.
            Cancelling stops future renewals; you keep Premium features through
            the end of the current billing period, after which your account
            returns to the features available without a Subscription unless you
            subscribe again. Some jurisdictions have mandatory laws regarding
            cancellation and renewal, and nothing in this section overrides
            those laws.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.5 Refunds">
          <p className={paragraphClassName}>
            Except where required by law, payments are non-refundable and we do
            not provide credits or refunds for partial billing periods, for
            unused allowance, or for periods in which you did not use Premium
            features.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.6 Fee and allowance changes">
          <p className={paragraphClassName}>
            We may change our fees or the allowance included with a plan. We
            will give you advance notice, and the change applies to your next
            billing period after that notice. If you do not agree to a change,
            cancel before the change takes effect.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.7 Taxes">
          <p className={paragraphClassName}>
            Fees are exclusive of applicable taxes unless stated otherwise. You
            are responsible for taxes associated with your purchase, except taxes
            based on our net income.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.8 Failed payments">
          <p className={paragraphClassName}>
            You are responsible for keeping a valid payment method on file. If a
            charge fails, Premium features may become unavailable until a
            payment succeeds, and we may suspend or terminate your Subscription
            for non-payment. The rest of the Service continues to work.
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="9. Intellectual property">
        <p className={paragraphClassName}>
          FormSmash and its licensors own the Service, including the Extension,
          software, branding, design, and documentation. Except for the limited
          license in Section 4.1, these Terms grant you no rights to our
          intellectual property.
        </p>
        <p className={paragraphClassName}>
          If you provide feedback or suggestions about the Service, we may use
          them without restriction or obligation to you.
        </p>
      </PolicySection>
    </>
  );
}
