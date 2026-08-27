import { useState } from "react";
import SiteNav from "../components/SiteNav.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import {
  ApiServiceIcon,
  AutomationServiceIcon,
  CodeServiceIcon,
  DatabaseIcon,
  FolderIcon,
  ServerIcon,
  ShieldIcon,
} from "../components/icons.jsx";

export default function CV() {
  const cvUrl = `${import.meta.env.BASE_URL}CV_GenesisValdebenito_2026-08.pdf`;
  const [activeFolder, setActiveFolder] = useState("profile");
  const [showPreview, setShowPreview] = useState(false);
  const folders = [
    { id: "profile", title: "Perfil profesional", subtitle: "Resumen de perfil y datos de contacto", icon: ShieldIcon },
    { id: "about", title: "Sobre mí", subtitle: "Historia personal y forma de crear", icon: FolderIcon },
    { id: "education", title: "Educación", subtitle: "Formación académica y experiencia práctica", icon: FolderIcon },
    { id: "skills", title: "Habilidades", subtitle: "Tecnologías y stack técnico", icon: CodeServiceIcon },
    { id: "projects", title: "Proyectos destacados", subtitle: "Proyectos académicos y profesionales", icon: FolderIcon },
    { id: "certifications", title: "Certificaciones", subtitle: "Certificaciones obtenidas", icon: FolderIcon },
  ];
  const activeFolderData = folders.find((folder) => folder.id === activeFolder);

  return (
    <>
      <SiteNav />

      <section className="section">
        <div className="wrap">
          <div className="eyebrow cv-page-eyebrow">Currículum · 2026</div>
          <div className="cv-file-app">
            <aside className="cv-sidebar">
              <div className="cv-sidebar-actions"><span>+</span><span>⌕</span><span>☆</span></div>
              <div className="cv-sidebar-title">Este equipo</div>
              <nav aria-label="Secciones del CV">
                {folders.map(({ id, title, icon: Icon }) => (
                  <button className={`cv-sidebar-folder${activeFolder === id ? " is-active" : ""}`} key={id} onClick={() => setActiveFolder(id)} type="button">
                    <Icon />
                    <span>{title}</span>
                  </button>
                ))}
              </nav>
              <button className="cv-sidebar-print" onClick={() => setShowPreview(true)} type="button">▤ <span>Ver Curriculum</span></button>
              <SocialLinks className="cv-sidebar-social-links" />
            </aside>
            <section className="cv-file-content" aria-live="polite">
              <div className="cv-file-toolbar"><span>CV / {activeFolderData.title}</span><span>⌕　☆</span></div>
              <div className="cv-file-heading">
                <span className="cv-folder-symbol"><FolderIcon /></span>
                <div className="cv-file-heading-copy">
                  <h2>{activeFolderData.title}</h2>
                  <p>{activeFolderData.subtitle}</p>
                </div>
              </div>
              <div className="cv-file-body"><FolderContent folder={activeFolder} /></div>
            </section>
          </div>

        </div>
      </section>

      {showPreview && <PdfPreview url={cvUrl} onClose={() => setShowPreview(false)} />}

      <footer>
        <div className="wrap">
          <span className="mono">Génesis Valdebenito Quintupil · Santiago, Chile</span>
        </div>
      </footer>
    </>
  );
}

function FolderContent({ folder }) {
  if (folder === "profile") return <><p>Como desarrolladora fullstack, mi objetivo es construir soluciones web claras, sostenibles y funcionales, combinando buenas prácticas técnicas con comunicación, metodologías ágiles y mejora continua.</p><div className="cv-contact-row"><span>Ubicación</span><b>Santiago, Chile</b></div><div className="cv-contact-row"><span>Especialidad</span><b>Desarrollo de Software</b></div><div className="cv-contact-row"><span>Idiomas</span><b>Español nativo · Inglés intermedio</b></div></>;
  if (folder === "about") return <div className="cv-about-terminal"><p><span>genesis@ltbub:~$</span> whoami</p><p className="cv-terminal-output"><b>Génesis Nazaret Valdebenito Quintupil</b><br />Soy una desarrolladora y creadora con un enfoque híbrido entre la resolución de problemas técnicos y el diseño creativo.</p><p><span>genesis@ltbub:~$</span> cat story.txt</p><p className="cv-terminal-output">Disfruto aprender cada día y crear cosas nuevas, pero sobre todo me apasiona resolver problemas. Me guío por la responsabilidad y la perseverancia.</p><p><span>genesis@ltbub:~$</span> cat creative-process.md</p><p className="cv-terminal-output">En cada decisión aplico mi creatividad para ofrecer soluciones visualmente atractivas y técnicamente sólidas. Mi objetivo es dar siempre lo mejor de mí, creciendo junto a quienes confían en mi trabajo.</p><p><span>genesis@ltbub:~$</span> ls hobbies/</p><p className="cv-terminal-output">diseño_creativo/　 aprender/　 crear_cosas_nuevas/　 explorar_ideas/</p><p className="cv-terminal-prompt"><span>genesis@ltbub:~$</span> _</p></div>;
  if (folder === "education") return <EducationTimeline />;
  if (folder === "skills") return <div className="cv-skills-list"><SkillCategory title="Tecnologías y Stack Técnico" icon={CodeServiceIcon} items={["JavaScript", "Java", "SQL", "HTML/CSS"]} /><SkillCategory title="Backend y Frameworks" icon={ServerIcon} items={["React", "Spring Boot", "JWT", "FastAPI"]} /><SkillCategory title="Bases de Datos" icon={DatabaseIcon} items={["MySQL", "Oracle SQL", "MongoDB", "Supabase"]} /><SkillCategory title="Herramientas y DevOps" icon={AutomationServiceIcon} items={["Git", "Figma", "Jira", "Postman"]} /><SkillCategory title="Arquitectura y Metodologías" icon={ApiServiceIcon} items={["REST APIs", "MVC", "Scrum", "Planning Poker"]} /></div>;
  if (folder === "projects") return <><ProjectEntry name="DANI — Plataforma GRC (ISO 27001)" date="Mar - Jul 2026" detail="Alloxentric · React, FastAPI, Supabase, RAG, Python." /><ProjectEntry name="Pastelería Mil Sabores" date="Oct - Dic 2025" detail="React, Spring Boot, MySQL, JWT." /><ProjectEntry name="Sistema de Gestión Académica" date="Sep 2024 - Dic 2025" detail="Oracle PL/SQL, APEX, MongoDB." /><ProjectEntry name="App Móvil para Supermercado Retail" date="Ago - Nov 2024" detail="Scrum, Figma, Jira." /></>;
  if (folder === "certifications") return <div className="certification-grid">
    <CertificationCard title="Introducción al Desarrollo Web" issuer="Desafío Latam" status="Obtenido" year="2024" />
    <CertificationCard title="Bases de GIT, GITHUB" issuer="Desafío Latam" status="Obtenido" year="2026" />
    <CertificationCard title="Scrum Developer Professional Certification" issuer="CertiProf" status="Obtenido" year="2026" />
  </div>;
  return null;
}


function ProjectEntry({ name, date, detail }) {
  return <div className="cv-entry"><div><b>{name}</b>{detail && <p>{detail}</p>}</div><span className="when">{date}</span></div>;
}

function EducationTimeline() {
  return (
    <ol className="education-timeline">
      <li>
        <span className="education-marker" aria-hidden="true" />
        <div className="education-content">
          <span className="education-date">2024 - Presente</span>
          <h3>Ingeniería en Informática</h3>
          <p>Duoc UC · Mención en Desarrollo de Software. Salida intermedia: Analista Programador (2026).</p>
          <p className="education-note">Práctica profesional pendiente.</p>
        </div>
      </li>
      <li className="education-practice-entry">
        <span className="education-marker" aria-hidden="true" />
        <div className="education-content">
          <span className="education-date">noviembre 2023 - julio 2024</span>
          <h3>Práctica profesional · Asistente administrativo</h3>
          <p>Soc. Comercializadora y Servicios Bueno E Hijos SPA.</p>
        </div>
      </li>
      <li>
        <span className="education-marker" aria-hidden="true" />
        <div className="education-content">
          <span className="education-date">2020 - 2023</span>
          <h3>Técnico en Administración</h3>
          <p>Liceo Comercial Ñuñoa · Mención en Recursos Humanos.</p>
        </div>
      </li>
    </ol>
  );
}

function CertificationCard({ title, issuer, status, year }) {
  return (
    <article className="certification-card">
      <div className="certification-card-copy">
        <h3>{title}</h3>
        <p>{issuer}</p>
        <span>{status}: {year}</span>
      </div>
      <span className="certification-seal" aria-label={`Certificación ${status.toLowerCase()}`}>★</span>
    </article>
  );
}

function PdfPreview({ url, onClose }) {
  return (
    <div className="cv-preview-modal" role="dialog" aria-modal="true" aria-label="Vista previa del CV">
      <div className="cv-preview-window">
        <div className="cv-preview-toolbar">
          <span className="terminal-lights"><i /><i /><i /></span>
          <span>CV_GenesisValdebenito_2026-08.pdf</span>
          <button onClick={onClose} type="button" aria-label="Cerrar vista previa">×</button>
        </div>
        <iframe title="Vista previa del currículum en PDF" src={url} />
      </div>
    </div>
  );
}

function SkillCategory({ title, icon: Icon, items }) {
  return <section className="cv-skill-category"><h3><Icon />{title}</h3><div>{items.map((item) => <span className="cv-skill-tag" key={item}>{item}</span>)}</div></section>;
}
