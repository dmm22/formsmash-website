import { Link } from "react-router-dom";
import SecondaryPageShell from "../../components/SecondaryPageShell";
import PolicySection from "./components/PolicySection";
import {
  privacyChromeWebStoreNotice,
  privacyIntroParagraph,
  privacySections,
  type PrivacySectionContent,
} from "../../content/privacyContent";
import { routes } from "../../routes";

const paragraphClassName = "mb-4 leading-relaxed text-text-secondary";
const listClassName =
  "mb-4 list-disc space-y-2 pl-6 text-text-secondary marker:text-accent";
const linkClassName = "text-accent no-underline hover:underline";

function renderSectionBody(section: PrivacySectionContent) {
  const hasList = section.labeledListItems || section.plainListItems;
  const introParagraph = hasList ? section.paragraphs?.[0] : undefined;
  const bodyParagraphs = hasList
    ? section.paragraphs?.slice(1)
    : section.paragraphs;

  return (
    <>
      {introParagraph && <p className={paragraphClassName}>{introParagraph}</p>}

      {section.labeledListItems && (
        <ul className={listClassName}>
          {section.labeledListItems.map((item) => (
            <li key={item.label}>
              <strong className="text-text-primary">{item.label}</strong>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      )}

      {section.plainListItems && (
        <ul className={listClassName}>
          {section.plainListItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {bodyParagraphs?.map((paragraph) => (
        <p key={paragraph} className={paragraphClassName}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

function renderSection(section: PrivacySectionContent) {
  return (
    <PolicySection key={section.heading} heading={section.heading}>
      {renderSectionBody(section)}
    </PolicySection>
  );
}

export default function PrivacyPage() {
  return (
    <SecondaryPageShell
      title="Privacy Policy"
      caption="Effective date: July 5, 2026"
    >
      <div className="w-full rounded-2xl border border-border-primary px-6 py-8 md:px-10 md:py-10">
        <p className={paragraphClassName}>{privacyIntroParagraph}</p>
        <p className={paragraphClassName}>
          By using the Service, you agree to this Privacy Policy and our{" "}
          <Link to={routes.terms.path} className={linkClassName}>
            Terms of Service
          </Link>
          .
        </p>

        {privacySections.map(renderSection)}

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

        <div className="mt-6 mb-0 rounded-lg border border-l-[3px] border-border-primary border-l-accent bg-bg-accent-light/40 p-4 text-sm leading-relaxed text-text-secondary">
          <strong className="text-text-primary">
            {privacyChromeWebStoreNotice.label}
          </strong>{" "}
          {privacyChromeWebStoreNotice.beforeLink}
          <a
            href={privacyChromeWebStoreNotice.policyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {privacyChromeWebStoreNotice.linkLabel}
          </a>
          {privacyChromeWebStoreNotice.afterLink}
        </div>
      </div>
    </SecondaryPageShell>
  );
}
