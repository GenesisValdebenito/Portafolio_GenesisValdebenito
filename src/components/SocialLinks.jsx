const links = [
  { label: "GitHub", href: "https://github.com/GenesisValdebenito", Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/genesis-valdebenito-quintupil", Icon: LinkedInIcon, external: true },
  { label: "Gmail", href: "mailto:g.valdebenitoquintupil@gmail.com", Icon: MailIcon },
  { label: "Teléfono", href: "tel:+56965117646", Icon: PhoneIcon },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="Redes y datos de contacto">
      {links.map(({ label, href, Icon, external }) => (
        <a aria-label={label} href={href} key={label} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined} title={label}>
          <Icon />
        </a>
      ))}
    </div>
  );
}

function GitHubIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.21.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1 1.52 1 .89 1.5 2.33 1.07 2.9.82.09-.64.35-1.07.63-1.32-2.22-.25-4.56-1.09-4.56-4.88 0-1.08.4-1.96 1.02-2.65-.1-.25-.44-1.26.1-2.63 0 0 .84-.26 2.74 1.01A9.7 9.7 0 0 1 12 6.55a9.8 9.8 0 0 1 2.5.34c1.9-1.27 2.73-1.01 2.73-1.01.54 1.37.2 2.38.1 2.63.64.69 1.03 1.57 1.03 2.65 0 3.8-2.34 4.62-4.57 4.87.36.3.68.87.68 1.76v2.61c0 .27.18.59.69.48A10 10 0 0 0 12 2Z" /></svg>;
}

function LinkedInIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.2 8.6H3.1V21h3.1V8.6ZM4.65 3A1.8 1.8 0 1 0 4.7 6.6 1.8 1.8 0 0 0 4.65 3ZM21 13.9c0-3.75-2-5.5-4.67-5.5a4.04 4.04 0 0 0-3.65 2V8.6H9.6V21h3.08v-6.14c0-1.62.3-3.2 2.3-3.2 1.97 0 2 1.84 2 3.3V21H21v-7.1Z" /></svg>;
}

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>;
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3 4.5 4.5c-.8.5-.9 1.5-.5 2.4 2.4 5.1 4.5 7.2 9.6 9.6.9.4 1.9.3 2.4-.5L17 13.5l-3.5-2-1.7 1.7a12 12 0 0 1-1.1-1.1 12 12 0 0 1-1.1-1.1L11.5 9 9.5 5.5 7 3Z" /></svg>;
}
