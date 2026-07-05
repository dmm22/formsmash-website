export type LabeledListItem = {
  label: string;
  text: string;
};

export type PrivacySectionContent = {
  heading: string;
  paragraphs?: string[];
  labeledListItems?: LabeledListItem[];
  plainListItems?: string[];
};

export const privacyIntroParagraph =
  `FormSmash ("we," "us," or "our") provides a Chrome extension and related services that help you fill out forms using saved documents and optional AI assistance. This Privacy Policy describes how we collect, use, share, and protect information when you use the FormSmash extension (the "Extension"), our backend services, or our public marketing website (together, the "Service").`;

export const privacySections: PrivacySectionContent[] = [
  {
    heading: "Information we collect",
    paragraphs: ["Depending on how you use the Service, we may collect:"],
    labeledListItems: [
      {
        label: "Account information.",
        text: "If you sign in with Google, we receive your email address, display name, profile picture URL, and Google account identifier to create and manage your account.",
      },
      {
        label: "Authentication data.",
        text: "We issue access and refresh tokens so you can stay signed in. Tokens are stored in the Extension's local storage and on our servers (refresh tokens are stored in hashed form).",
      },
      {
        label: "User content you provide.",
        text: "This includes saved documents (titles and autofill field values), uploaded files (such as PDF or Word documents), Autofill Preferences (custom instructions for how forms should be filled), and any other information you enter into the Service. This content may include personal information about you or about other people (for example, references, employers, or clients listed in a document).",
      },
      {
        label: "Document files.",
        text: "When you upload a document, we store the file on our servers, extract text from it, and may send that text to our AI providers to generate autofill fields. The stored file and extracted data remain associated with your account or browser session until you delete them or your account is deleted.",
      },
      {
        label: "Form context for autofill.",
        text: "When you run autofill, the Extension reads form fields on the page you are on (such as labels, input types, and choice options). Unfilled fields may be sent to our servers for AI gap-fill, along with relevant rows from your active document and your Autofill Preferences.",
      },
      {
        label: "Usage and limits data.",
        text: "We assign a browser-specific client identifier and may record operation counts, token usage per AI request, timestamps, and your IP address for rate limiting, abuse prevention, and billing limits. Some usage may be recorded before you sign in and linked to your account after you sign in.",
      },
      {
        label: "Payment-related identifiers.",
        text: "If you subscribe, we use Stripe for checkout and billing. We store Stripe customer and subscription identifiers on our side. Stripe processes payment details under its own privacy policy; we do not store full card numbers.",
      },
      {
        label: "Technical and diagnostic data.",
        text: "Our servers log request metadata (such as paths, status codes, and error types). If enabled, we may use error monitoring services (such as Sentry) that receive exception details. Server logs are not intended to include full document or autofill contents unless required for debugging.",
      },
      {
        label: "Marketing website analytics.",
        text: 'When you visit our public marketing website, we collect usage information such as pages viewed, button or link clicks (for example, links to the Chrome Web Store, support resources, or the contact form), random visitor and session identifiers stored in your browser, the referring page URL when available, browser type, and related request metadata (including IP address for abuse prevention). See the "Marketing website analytics" section below for more detail.',
      },
    ],
  },
  {
    heading: "Information about other people",
    paragraphs: [
      "Content you upload or enter may include personal information about people other than you (for example, a client, candidate, or reference named in a document). You are responsible for ensuring you have the legal right to upload, store, and use that information through the Service.",
      "We process information about other people only to provide the Service to you (document storage, field extraction, and form autofill). We do not use that information to contact, advertise to, or market to those individuals.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We use the information above to:",
      "We do not use your information for personalized advertising, and we do not sell your personal information. We do not use your user content to train FormSmash's own AI models.",
    ],
    plainListItems: [
      "Provide autofill, document storage, AI gap-fill, and document field extraction",
      "Authenticate you and manage your account and sessions",
      "Enforce free-tier and subscription limits",
      "Process payments and manage subscriptions",
      "Maintain, secure, and improve the Service",
      "Understand traffic to and improve our public marketing website",
      "Detect abuse, fraud, and technical issues",
    ],
  },
  {
    heading: "How we share information",
    paragraphs: ["We share information only as needed to operate the Service:"],
    labeledListItems: [
      {
        label: "AI providers.",
        text: "We send relevant user content (document text, autofill field data, form field labels, and Autofill Preferences) to third-party AI services (such as OpenAI and Google) to provide gap-fill and document field extraction. Those providers process data under their own terms and privacy policies. We cannot control third-party practices.",
      },
      {
        label: "Google.",
        text: "We use Google Sign-In (OAuth) for authentication. Google's use of information is governed by Google's policies.",
      },
      {
        label: "Stripe.",
        text: "We use Stripe for payments and subscription management.",
      },
      {
        label: "Infrastructure providers.",
        text: "We host our API and database with cloud providers that process data on our behalf under contractual obligations.",
      },
      {
        label: "Legal and safety.",
        text: "We may disclose information if required by law, to protect rights and safety, or to prevent fraud or abuse.",
      },
      {
        label: "Business transfers.",
        text: "If we are involved in a merger, acquisition, or sale of assets, we may transfer information subject to this policy and applicable law.",
      },
    ],
  },
  {
    heading: "Browsing and page access",
    paragraphs: [
      "The Extension needs access to web pages where you choose to run autofill so it can read form fields and fill them on your behalf. We use that access only to provide the autofill features described in our Chrome Web Store listing and in the Extension interface—not to build a general browsing history or to track you across sites for unrelated purposes.",
    ],
  },
  {
    heading: "Marketing website analytics",
    paragraphs: [
      "When you visit our public marketing website, we use first-party analytics to understand how visitors use the site. This may include the pages you view, button or link clicks (such as links to the Chrome Web Store, the FormSmash Assistant, Getting Started, or the contact form), a random visitor identifier stored in your browser's local storage, a session identifier stored for that browser session, the referring page URL when your browser provides it, browser type, timestamps, and related request metadata (including IP address for rate limiting and abuse prevention).",
      "We use marketing website analytics only to measure traffic, understand which parts of the site are useful, and improve the marketing website. We do not use this data for personalized advertising, cross-site tracking, or to build advertising profiles. We do not sell marketing website analytics data.",
    ],
  },
  {
    heading: "Sensitive information",
    paragraphs: [
      "Do not upload government ID numbers, financial account numbers, health information, or other highly sensitive data unless you accept the risk of storing and processing it through the Service and our AI providers. You provide information through the Service at your own risk.",
    ],
  },
  {
    heading: "Data security",
    paragraphs: [
      "We transmit data between the Extension and our servers over HTTPS. We apply standard technical and organizational measures to protect stored data. No method of transmission or storage is completely secure; we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "We retain account, document, and autofill data while your account is active or while you use the Service, and as needed to provide the Service. Usage and AI request metadata may be retained for operational, billing, and abuse-prevention purposes. You may delete individual documents through the Service. To delete your account and associated data, contact us using the email below. Marketing website analytics events are retained for site measurement and operations; we may delete or aggregate older analytics data over time.",
    ],
  },
  {
    heading: "Your choices and rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or export personal information, or to object to or restrict certain processing. To make a request, contact us at the email below. We may need to verify your identity before responding.",
      "If you are a California resident, you have the right to know what personal information we collect, request deletion, and not be discriminated against for exercising these rights. We do not sell or share personal information for cross-context behavioral advertising.",
      "You can sign out of the Extension to clear local session tokens. Uninstalling the Extension removes locally stored Extension data from your browser. When you visit our marketing website, you can clear the visitor identifier stored in your browser by clearing that site's local storage in your browser settings.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "The Service is not directed to children under 13 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "International users",
    paragraphs: [
      "If you use the Service from outside the country where our servers are located, your information may be processed in that country or other countries where our service providers operate, which may have different data protection laws than your home country.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. We will post the revised policy with a new effective date. If changes are material, we may also notify you by email (if you have an account) or through the Service. Your continued use of the Service after the effective date means you accept the updated policy. If you do not agree, stop using the Service.",
    ],
  },
];

export const privacyChromeWebStoreNotice = {
  label: "Chrome Web Store — Limited Use.",
  beforeLink:
    "The use of information received from Google APIs will adhere to the ",
  linkLabel: "Chrome Web Store User Data Policy",
  afterLink: ", including the Limited Use requirements.",
  policyUrl:
    "https://developer.chrome.com/docs/webstore/program-policies/",
};
