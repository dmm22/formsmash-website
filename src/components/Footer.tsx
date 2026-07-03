import FooterSection from "./FooterSection";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Install The Extension", href: "#" },
        { label: "Getting Started", href: "#" },
        { label: "Custom GPT", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "About",
      links: [{ label: "About FormSmash", href: "#" }],
    },
  ];

  return (
    <footer>
      {footerSections.map((section) => (
        <FooterSection
          key={section.title}
          title={section.title}
          links={section.links}
        />
      ))}
    </footer>
  );
}
