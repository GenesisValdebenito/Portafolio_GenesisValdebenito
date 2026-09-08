import { useEffect, useRef, useState } from "react";

const email = "g.valdebenitoquintupil@gmail.com";

const links = [
  { label: "GitHub", href: "https://github.com/GenesisValdebenito", Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/genesis-valdebenito-quintupil", Icon: LinkedInIcon, external: true },
  { label: "Gmail", href: "mailto:g.valdebenitoquintupil@gmail.com", Icon: MailIcon },
  { label: "Teléfono", href: "tel:+56965117646", Icon: PhoneIcon },
];

export default function SocialLinks({ className = "" }) {
  const [copyStatus, setCopyStatus] = useState(null);
  const copyStatusTimeout = useRef(null);

  useEffect(() => () => clearTimeout(copyStatusTimeout.current), []);

  const showCopyStatus = (status) => {
    clearTimeout(copyStatusTimeout.current);
    setCopyStatus(status);
    copyStatusTimeout.current = setTimeout(() => {
      setCopyStatus(null);
      copyStatusTimeout.current = null;
    }, 3000);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(email);
        } catch {
          copyEmailWithFallback();
        }
      } else {
        copyEmailWithFallback();
      }
      showCopyStatus("copied");
    } catch {
      showCopyStatus("error");
    }
  };

  return (
    <div className={`social-links ${className}`.trim()} aria-label="Redes y datos de contacto">
      {links.map(({ label, href, Icon, external, copy }) => (
        copy ? (
          <button
            aria-label="Copiar correo electrónico"
            className="social-copy-button"
            key={label}
            onClick={copyEmail}
            title="Copiar correo electrónico"
            type="button"
          >
            <Icon />
          </button>
        ) : (
          <a aria-label={label} href={href} key={label} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined} title={label}>
            <Icon />
          </a>
        )
      ))}
      <span
        className={`social-copy-status${copyStatus ? ` is-visible ${copyStatus}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {copyStatus && (
          <>
            <span>{copyStatus === "copied" ? "Correo copiado" : "No se pudo copiar"}</span>
            <span className="social-copy-email">{email}</span>
          </>
        )}
      </span>
    </div>
  );
}

function copyEmailWithFallback() {
  const input = document.createElement("textarea");
  input.value = email;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  let copied;
  try {
    input.select();
    copied = document.execCommand("copy");
  } finally {
    input.remove();
  }

  if (!copied) {
    throw new Error("The browser could not copy the email address");
  }
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

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>;
}
