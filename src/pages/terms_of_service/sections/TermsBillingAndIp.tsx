import PolicySection from "../../privacy/components/PolicySection";
import TermsSubsection from "../components/TermsSubsection";
import { paragraphClassName } from "../termsStyles";

export default function TermsBillingAndIp() {
  return (
    <>
      <PolicySection heading="8. Fees, billing, and payment">
        <TermsSubsection heading="8.1 Subscriptions">
          <p className={paragraphClassName}>
            We offer free and paid subscription plans (&quot;Subscriptions&quot;).
            Features, limits, and pricing for each plan are shown in the Extension
            or at checkout.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.2 Payment processing">
          <p className={paragraphClassName}>
            Paid Subscriptions are processed by Stripe. By subscribing, you
            authorize us and Stripe to charge your payment method on a recurring
            basis according to your plan. You represent that you are authorized
            to use the payment method you provide. Stripe&apos;s terms and
            privacy policy apply to payment processing.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.3 Automatic renewal">
          <p className={paragraphClassName}>
            Paid Subscriptions renew automatically at the end of each billing
            period unless you cancel before renewal through the subscription
            management tools in the Extension or Stripe customer portal.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.4 Cancellation">
          <p className={paragraphClassName}>
            You may cancel a Paid Subscription at any time. After cancellation,
            you will retain access to paid features through the end of the
            current billing period, then your account will revert to free-tier
            limits unless you subscribe again. Some jurisdictions have mandatory
            laws regarding cancellation and renewal; nothing in this section
            overrides those laws.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.5 Refunds and fee changes">
          <p className={paragraphClassName}>
            Except where required by law, payments are non-refundable and we do
            not provide credits for partial billing periods or unused usage. We
            may change fees with advance notice; changes apply to your next
            billing cycle after notice.
          </p>
        </TermsSubsection>

        <TermsSubsection heading="8.6 Taxes">
          <p className={paragraphClassName}>
            Fees are exclusive of applicable taxes unless stated otherwise. You
            are responsible for taxes associated with your purchase, except taxes
            based on our net income.
          </p>
        </TermsSubsection>
      </PolicySection>

      <PolicySection heading="9. Intellectual property">
        <p className={paragraphClassName}>
          FormSmash and its licensors own the Service, including the Extension,
          software, branding, design, and documentation. Except for the limited
          license in Section 4.1, these Terms grant you no rights to our
          intellectual property. You may not remove proprietary notices from
          the Service.
        </p>
        <p className={paragraphClassName}>
          If you provide feedback or suggestions about the Service, we may use
          them without restriction or obligation to you.
        </p>
      </PolicySection>
    </>
  );
}
