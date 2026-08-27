import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CV from "./pages/CV.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    let frameId;

    const updatePointer = (event) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", updatePointer);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowIntro(false), 2900);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showIntro && <StartupTerminal />}
      <div className="spark-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/sobre-mi" element={<About />} />
      </Routes>
    </>
  );
}

function StartupTerminal() {
  return (
    <div className="startup-screen" role="status" aria-label="Iniciando portafolio">
      <div className="startup-terminal">
        <div className="startup-bar">
          <span className="terminal-lights"><i /><i /><i /></span>
          <span>genesis@ltbub: ~/portfolio</span>
          <span className="startup-time">08:26</span>
        </div>
        <div className="startup-body">
          <p><b>genesis@ltbub:~$</b> ./start-portfolio.sh</p>
          <p className="startup-muted">Inicializando entorno creativo...</p>
          <div className="startup-progress"><span /></div>
          <p className="startup-muted startup-success">[ OK ] Portfolio ready</p>
          <p className="startup-prompt"><b>genesis@ltbub:~$</b> explore<span className="startup-caret">_</span></p>
        </div>
      </div>
    </div>
  );
}