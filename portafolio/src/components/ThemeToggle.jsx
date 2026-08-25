import { useEffect, useState } from "react";

const themes = [
  { id: "light", label: "Claro" },
  { id: "dark", label: "Oscuro" },
  { id: "neutral", label: "Neutro" },
];

function getInitialTheme() {
  return localStorage.getItem("ltbub-theme") || "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ltbub-theme", theme);
  }, [theme]);

  return (
    <div className="theme-toggle" aria-label="Seleccionar tema">
      {themes.map(({ id, label }) => (
        <button
          aria-pressed={theme === id}
          className={theme === id ? "active" : ""}
          key={id}
          onClick={() => setTheme(id)}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
