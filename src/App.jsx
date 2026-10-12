import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Publications from "./pages/Publications.jsx";
import {
  Education, Experience, Research, Patents, Highlights,
  Conferences, Gallery, Media, Contact,
} from "./pages/Sections.jsx";
import { profile } from "./data/profile.js";

// Menu order. To rename or reorder a menu item, edit this list.
const PAGES = [
  { id: "home", label: "Home", component: Home },
  { id: "education", label: "Education", component: Education },
  { id: "experience", label: "Experience", component: Experience },
  { id: "research", label: "Research", component: Research },
  { id: "publications", label: "Publications", component: Publications },
  { id: "patents", label: "Patents & Chapters", component: Patents },
  { id: "highlights", label: "Highlights", component: Highlights },
  { id: "conferences", label: "Conferences", component: Conferences },
  { id: "gallery", label: "Gallery", component: Gallery },
  { id: "media", label: "Media", component: Media },
  { id: "contact", label: "Contact", component: Contact },
];

// Simple hash routing (#home, #publications, ...) so the site works on
// any static host, including GitHub Pages, without server configuration.
function pageFromHash() {
  const id = window.location.hash.slice(1);
  return PAGES.some((p) => p.id === id) ? id : "home";
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme"); } catch { return null; }
  });
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Follow the computer's light/dark setting until the visitor picks one.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setSystemDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }, [theme]);

  const isDark = theme ? theme === "dark" : systemDark;

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
  };

  return { isDark, toggle };
}

export default function App() {
  const [current, setCurrent] = useState(pageFromHash);
  const { isDark, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onHash = () => {
      setCurrent(pageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const page = PAGES.find((p) => p.id === current);
  const Page = page.component;

  useEffect(() => {
    document.title = (current === "home" ? "" : page.label + " | ") + profile.name;
  }, [current, page.label]);

  return (
    <>
      <Header pages={PAGES} current={current} isDark={isDark} onToggleTheme={toggleTheme} />
      <main id="main">
        <section className="page on" key={current}>
          <Page />
        </section>
      </main>
    </>
  );
}
