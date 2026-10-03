import useTheme from "../hooks/useTheme.js";
import { img } from "../data.js";

const Sun = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export default function Nav() {
  const [theme, toggle] = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <header className="nav">
      <a className="brand" href="#home" aria-label="Rinax Antonio, home">
        <img src={img("icon.png")} alt="" width="64" height="64" />
      </a>
      <nav aria-label="Main">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button id="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${next} mode`}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
