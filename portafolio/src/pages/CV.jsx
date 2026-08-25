import SiteNav from "../components/SiteNav.jsx";

export default function CV() {
  const cvUrl = `${import.meta.env.BASE_URL}CV_GenesisValdebenito_2026-08.pdf`;

  return (
    <>
      <SiteNav />

      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Currículum</div>
          <h1 className="name">
            Génesis Nazaret <span>Valdebenito Quintupil</span>
          </h1>
          <p className="tagline">
            Ingeniera en Informática · Desarrollo de Software y Analista Programador
          </p>
          <div className="chiprow">
            <a className="chip filled" href={cvUrl} download>
              <span className="dot"></span>Descargar CV en PDF
            </a>
            <a className="chip" href="mailto:g.valdebenitoquintupil@gmail.com">
              <span className="dot"></span>g.valdebenitoquintupil@gmail.com
            </a>
            <a className="chip" href="tel:+56965117646">
              <span className="dot"></span>+56 9 6511 7646
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="cv-block cv-intro">
            <h3>Resumen profesional</h3>
            <p>
              Como desarrolladora fullstack, mi objetivo principal es aportar al desarrollo de
              soluciones web mediante la construcción de aplicaciones claras, bien estructuradas
              y sostenibles, la implementación de buenas prácticas tanto en frontend como en
              backend y la garantía de un producto funcional y de calidad. Busco crear entornos de
              trabajo colaborativos y productivos mediante la comunicación, las metodologías
              ágiles y la mejora continua del código.
            </p>
          </div>

          <div className="cv-block">
            <h3>Educación</h3>
            <div className="cv-row">
              <b>Ingeniería en Informática — Instituto Profesional DUOC UC</b>
              <span className="when">2024 - Presente</span>
            </div>
            <div className="cv-row">
              <b>Técnico en Administración — Liceo Comercial Ñuñoa</b>
              <span className="when">2020 - 2023</span>
            </div>
            <p>Mención en Recursos Humanos.</p>
          </div>

          <div className="cv-block">
            <h3>Habilidades</h3>
            <p>
              <b>Lenguajes:</b> JavaScript, Java, SQL, HTML/CSS.
            </p>
            <p>
              <b>Frameworks y librerías:</b> React, Spring Boot, JWT.
            </p>
            <p>
              <b>Bases de datos:</b> MySQL, Oracle SQL, MongoDB.
            </p>
            <p>
              <b>Herramientas:</b> Git, Figma, Jira, Postman.
            </p>
            <p>
              <b>Arquitectura:</b> REST APIs, MVC, arquitectura por capas y separación
              frontend/backend.
            </p>
            <p style={{ marginBottom: 0 }}>
              <b>Metodologías:</b> Scrum, desarrollo ágil, planificación de sprints y estimación
              con Planning Poker.
            </p>
          </div>

          <div className="cv-block">
            <h3>Habilidades interpersonales</h3>
            <p style={{ marginBottom: 0 }}>
              Trabajo colaborativo en equipos multidisciplinarios · Comunicación técnica efectiva
              · Adaptabilidad y aprendizaje continuo · Gestión del tiempo y organización.
            </p>
          </div>

          <div className="cv-block">
            <h3>Proyectos destacados</h3>
            <div className="cv-row">
              <b>DANI — Plataforma GRC (ISO 27001)</b>
              <span className="when">Mar - Jul 2026</span>
            </div>
            <p>Alloxentric · React, FastAPI, Supabase, RAG, Python.</p>
            <div className="cv-row">
              <b>Pastelería Mil Sabores</b>
              <span className="when">Oct - Dic 2025</span>
            </div>
            <p>React, Spring Boot, MySQL, JWT.</p>
            <div className="cv-row">
              <b>Sistema de Gestión Académica</b>
              <span className="when">Sep 2024 - Dic 2025</span>
            </div>
            <p>Oracle PL/SQL, APEX, MongoDB.</p>
            <div className="cv-row">
              <b>App Móvil para Supermercado Retail</b>
              <span className="when">Ago - Nov 2024</span>
            </div>
            <p style={{ marginBottom: 0 }}>Scrum, Figma, Jira.</p>
          </div>

          <div className="cv-block">
            <h3>Certificaciones</h3>
            <div className="cv-row">
              <b>Introducción al Desarrollo Web</b>
              <span className="when">Desafío Latam, 2024</span>
            </div>
            <div className="cv-row" style={{ marginBottom: 0 }}>
              <b>Bases de GIT, GITHUB</b>
              <span className="when">Desafío Latam, 2026</span>
            </div>
            <div className="cv-row" style={{ marginBottom: 0 }}>
              <b>Scrum Developer Professional Certification SDPC (v2020)</b>
              <span className="when">Certiprof, 2026</span>
            </div>
          </div>

          <div className="cv-block">
            <h3>Idiomas</h3>
            <div className="cv-row" style={{ marginBottom: 0 }}>
              <b>Español — Nativo &nbsp;·&nbsp; Inglés — Intermedio</b>
            </div>
          </div>

          <div className="cv-preview cv-block" style={{ marginBottom: 0 }}>
            <div className="cv-preview-head">
              <h3>CV completo</h3>
              <span className="mono">PDF · 2026</span>
            </div>
            <iframe title="Currículum Vitae en PDF" src={cvUrl} />
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span className="mono">Génesis Valdebenito Quintupil · Santiago, Chile</span>
        </div>
      </footer>
    </>
  );
}