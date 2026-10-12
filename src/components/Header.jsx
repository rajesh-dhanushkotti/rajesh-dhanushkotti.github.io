import { useState, useEffect } from "react";
import { profile } from "../data/profile.js";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header({ pages, current, isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the page changes.
  useEffect(() => setOpen(false), [current]);

  return (
    <header className="site">
      <div className="bar">
        <a className="brand" href="#home">
          <strong>{profile.name}</strong>
          <span>{profile.shortTitle}</span>
        </a>
        <div className="tools">
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <nav id="nav" className={open ? "open" : undefined} aria-label="Pages">
        <ul>
          {pages.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} aria-current={p.id === current ? "page" : undefined}>
                {p.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
