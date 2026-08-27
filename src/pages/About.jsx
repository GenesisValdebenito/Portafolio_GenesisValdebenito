import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav.jsx";

const terminalLines = [
  {
    command: "whoami",
    output: "Soy una desarrolladora y creadora con un enfoque híbrido entre la resolución de problemas técnicos y el diseño creativo.",
  },
  {
    command: "cat story.txt",
    output: "Disfruto aprender cada día y crear cosas nuevas, pero sobre todo me apasiona resolver problemas. Me guío por la responsabilidad y la perseverancia.",
  },
  {
    command: "cat creative-process.md",
    output: "En cada decisión aplico mi creatividad para ofrecer soluciones visualmente atractivas y técnicamente sólidas. Mi objetivo es dar siempre lo mejor de mí, creciendo junto a quienes confían en mi trabajo.",
  },
  {
    command: "cat motivation.txt",
    output: "aprender · superarme · tecnología · innovar",
  },
  {
    command: "ls hobbies/",
    output: "diseño_creativo/  aprender/  crear_cosas_nuevas/  explorar_ideas/",
  },
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleLines((current) => {
        if (current >= terminalLines.length) {
          clearInterval(intervalId);
          return current;
        }
        return current + 1;
      });
    }, 650);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <SiteNav />

      <header className="hero about-hero">
        <div className="wrap">
          <div className="eyebrow">Perfil · LTBUB Studio</div>
          <h1 className="name">Sobre <span>mí</span></h1>
          <p className="tagline">
            Un poco sobre mi y sobre lo que me motiva cada día
            proyecto.
          </p>
        </div>
      </header>

      <main className="about-page">
        <div className="wrap">
          <section className="terminal-window" aria-label="Perfil interactivo de Génesis">
            <div className="terminal-bar">
              <span className="terminal-lights"><i /><i /><i /></span>
              <span className="terminal-title">genesis@ltbub: ~/sobre-mi</span>
              <span className="terminal-status">ONLINE</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-command"><span>genesis@ltbub:~$</span> init profile</p>
              <p className="terminal-output">Abriendo perfil personal...</p>
              {terminalLines.slice(0, visibleLines).map(({ command, output }) => (
                <div className="terminal-line" key={command}>
                  <p className="terminal-command"><span>genesis@ltbub:~$</span> {command}</p>
                  <p className="terminal-output">{output}</p>
                </div>
              ))}
              <p className="terminal-command terminal-cursor"><span>genesis@ltbub:~$</span> _</p>
            </div>
          </section>

        </div>
      </main>

      <footer>
        <div className="wrap">
          <span className="mono">Génesis Valdebenito Quintupil · Santiago, Chile</span>
        </div>
      </footer>
    </>
  );
}