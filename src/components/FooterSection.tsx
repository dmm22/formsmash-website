type FooterLink = {
  label: string;
  href: string;
};

type FooterSectionProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <strong>{title}</strong>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
