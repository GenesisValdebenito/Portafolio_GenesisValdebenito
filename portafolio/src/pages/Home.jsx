import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
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

      <header className="hero">
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
          <div className="chiprow">
            <a className="chip" href="https://github.com/GenesisValdebenito" target="_blank" rel="noopener noreferrer">
              <span className="dot"></span>github.com/GenesisValdebenito
            </a>
            <a className="chip" href="http://www.linkedin.com/in/genesis-valdebenito-quintupil" target="_blank" rel="noopener noreferrer">
              <span className="dot"></span>LinkedIn
            </a>
            <a className="chip" href="mailto:g.valdebenitoquintupil@gmail.com">
              <span className="dot"></span>g.valdebenitoquintupil@gmail.com
            </a>
            <a className="chip" href="https://emprendimiento-creativo.my.canva.site/" target="_blank" rel="noopener noreferrer">
              <span className="dot"></span>Sitio personal
            </a>
          </div>
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
          <div className="studio">
            <div>
              <div className="studio-eyebrow">Marca personal</div>
              <h2>LTBUB Studio</h2>
              <p>
                Mi espacio para ofrecer servicios de desarrollo a medida: sitios web,
                aplicaciones a pequeña escala y soporte técnico fullstack para proyectos
                personales y de pequeños negocios.
              </p>
              <a className="studio-cta" href="https://www.patreon.com/cw/LTBUBStudio" target="_blank" rel="noopener noreferrer">
                Apoya u ofrece un proyecto en Patreon →
              </a>
            </div>
            <div className="studio-card">
              <span className="lbl">// SERVICIOS</span>
              <ul>
                <li>Desarrollo web fullstack a medida</li>
                <li>Integración y consumo de APIs</li>
                <li>Automatizaciones y widgets a pedido</li>
                <li>Soporte y mejoras sobre proyectos existentes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span className="mono">Génesis Valdebenito Quintupil · Santiago, Chile</span>
        <div className="flinks">
          <a href="https://github.com/GenesisValdebenito" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="http://www.linkedin.com/in/genesis-valdebenito-quintupil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:g.valdebenitoquintupil@gmail.com">Email</a>
          <a href="https://www.patreon.com/cw/LTBUBStudio" target="_blank" rel="noopener noreferrer">LTBUB Studio</a>
        </div>
      </div>
    </footer>
  );
}   