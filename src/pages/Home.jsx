import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import {
  ApiServiceIcon,
  AutomationServiceIcon,
  CodeServiceIcon,
  SupportServiceIcon,
} from "../components/icons.jsx";
import { projects } from "../data/projects.js";

export default function Home() {
  const [visibleLength, setVisibleLength] = useState(0);
  const firstName = "Génesis Valdebenito ";
  const lastName = "Quintupil";
  const fullName = firstName + lastName;

  useEffect(() => {
    let intervalId;
    const startTyping = () => {
      clearInterval(intervalId);
      setVisibleLength(0);
      intervalId = setInterval(() => {
        setVisibleLength((currentLength) => {
          if (currentLength >= fullName.length) {
            clearInterval(intervalId);
            return currentLength;
          }
          return currentLength + 1;
        });
      }, 55);
    };

    startTyping();
    const observer = new MutationObserver(startTyping);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [fullName]);

  const typedName = fullName.slice(0, visibleLength);

  return (
    <>
      <SiteNav />

      <header className="hero portfolio-hero">
        <div className="wrap">
          <div className="eyebrow">Portafolio · 2026</div>
          <h1 className={`name${visibleLength < fullName.length ? " typing" : ""}`} aria-label={fullName}>
            {typedName.slice(0, firstName.length)}
            {visibleLength > firstName.length && <span>{typedName.slice(firstName.length)}</span>}
          </h1>
          <p className="tagline">
            Desarrolladora Fullstack Trainee — construyo software de punta a punta: desde el
            modelo de datos hasta la interfaz, pasando por el despliegue en la nube. Estudiante
            de Ingeniería en Informática en Duoc UC.
          </p>
          <SocialLinks className="hero-social-links" />
        </div>
      </header>

      <section className="section" id="proyectos">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="section-num">// 01</div>
              <h2 className="section-title">Galería de proyectos</h2>
            </div>
            <p className="section-desc">
              Proyectos reales en los que he trabajado: académicos, colaborativos y
              profesionales, cubriendo backend, frontend, bases de datos y despliegue en la
              nube.
            </p>
          </div>

          <div className="gallery">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ltbub">
        <div className="wrap">
          <StudioSection />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function StudioSection() {
  return (
    <div className="studio">
      <div className="studio-copy">
        <div className="studio-eyebrow">Marca personal</div>
        <h2>LTBUB Studio</h2>
        <div className="studio-manifesto">Design <span>|</span> Technology</div>
        <p>
          Diseño y desarrollo soluciones digitales a medida para ideas que quieren
          convertirse en proyectos reales.
        </p>
        <a className="studio-cta" href="https://www.patreon.com/cw/LTBUBStudio" target="_blank" rel="noopener noreferrer">
          Hablemos de tu proyecto <span aria-hidden="true">→</span>
        </a>
        <span className="studio-cta-note">Cuéntame qué necesitas a través de Patreon.</span>
      </div>
      <div className="studio-card">
        <div className="studio-card-content">
          <span className="lbl">Servicios</span>
          <ul>
            <ServiceItem Icon={CodeServiceIcon}>Desarrollo web fullstack a medida</ServiceItem>
            <ServiceItem Icon={ApiServiceIcon}>Integración y consumo de APIs</ServiceItem>
            <ServiceItem Icon={AutomationServiceIcon}>Automatizaciones y widgets a pedido</ServiceItem>
            <ServiceItem Icon={SupportServiceIcon}>Soporte y mejoras sobre proyectos existentes</ServiceItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ Icon, children }) {
  return (
    <li>
      <Icon />
      <span>{children}</span>
    </li>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span className="mono">Génesis Valdebenito Quintupil · Santiago, Chile</span>
        <SocialLinks />
      </div>
    </footer>
  );
}   
