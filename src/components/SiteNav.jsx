import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function SiteNav() {
  return (
    <nav className="sitenav">
      <div className="wrap">
        <Link to="/" className="brand">
          Génesis Valdebenito
        </Link>
        <div className="navlinks">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Portafolio
          </NavLink>
          <NavLink to="/cv" className={({ isActive }) => (isActive ? "active" : "")}>
            CV
          </NavLink>
          <NavLink to="/sobre-mi" className={({ isActive }) => (isActive ? "active" : "")}>
            Sobre mí
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}   
