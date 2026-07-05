import SecondaryPageShell from "../../components/SecondaryPageShell";
import TermsAcceptanceAndEligibility from "./sections/TermsAcceptanceAndEligibility";
import TermsUseAndContent from "./sections/TermsUseAndContent";
import TermsAiAndThirdParty from "./sections/TermsAiAndThirdParty";
import TermsBillingAndIp from "./sections/TermsBillingAndIp";
import TermsTerminationAndLiability from "./sections/TermsTerminationAndLiability";
import TermsDisputesAndContact from "./sections/TermsDisputesAndContact";

export default function TermsOfServicePage() {
  return (
    <SecondaryPageShell
      title="Terms of Service"
      caption="Effective date: May 26, 2026"
    >
      <TermsAcceptanceAndEligibility />
      <TermsUseAndContent />
      <TermsAiAndThirdParty />
      <TermsBillingAndIp />
      <TermsTerminationAndLiability />
      <TermsDisputesAndContact />
    </SecondaryPageShell>
  );
}
