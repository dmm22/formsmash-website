import SecondaryPageShell from "../../components/SecondaryPageShell";
import PrivacyIntroAndCollection from "./sections/PrivacyIntroAndCollection";
import PrivacyUseAndSharing from "./sections/PrivacyUseAndSharing";
import PrivacySecurityAndRights from "./sections/PrivacySecurityAndRights";
import PrivacyMiscAndContact from "./sections/PrivacyMiscAndContact";

export default function PrivacyPage() {
  return (
    <SecondaryPageShell
      title="Privacy Policy"
      caption="Effective date: July 5, 2026"
    >
      <PrivacyIntroAndCollection />
      <PrivacyUseAndSharing />
      <PrivacySecurityAndRights />
      <PrivacyMiscAndContact />
    </SecondaryPageShell>
  );
}
