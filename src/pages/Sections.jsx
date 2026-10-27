import { useState } from "react";
import Lightbox from "../components/Lightbox.jsx";
import {
  profile, education, experience, skills, researchThemes, researchTopics,
  patentsAndChapters, highlights, conferences, gallery, media,
} from "../data/profile.js";
import { Html, PageHead, ExternalLink, Timeline, Chips } from "../components/Common.jsx";

const groupColor = (g) =>
  ({ research: "var(--g-research)", recog: "var(--g-recog)", contact: "var(--g-contact)" }[g] ||
  "var(--g-about)");

export function Education() {
  return (
    <>
      <PageHead title="Education" subtitle="" />
      <Timeline items={education} />
    </>
  );
}

export function Experience() {
  return (
    <>
      <PageHead title="Experience" subtitle="Three research positions across India, the UAE and Canada." />
      <Timeline items={experience} />
      <h2 className="sub">Skills &amp; instruments</h2>
      <div className="two">
        <div><h3>Techniques</h3><Chips items={skills.techniques} /></div>
        <div><h3>Instruments</h3><Chips items={skills.instruments} /></div>
      </div>
    </>
  );
}

export function Research() {
  return (
    <>
      <PageHead title="Research interests" subtitle="Porous frameworks whose chemistry decides where ions go, and how fast." group="research" />
      <div className="themes">
        {researchThemes.map((t) => (
          <div key={t.title} className={`theme el ${t.group === "about" ? "" : t.group}`}>
            <span className="period">{t.period}</span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
      <h2 className="sub">Topics</h2>
      <Chips items={researchTopics} highlight />
    </>
  );
}

function ItemCards({ items }) {
  return (
    <ul className="items">
      {items.map((it, i) => (
        <li key={i} style={{ "--c": groupColor(it.group || "recog") }}>
          <p className="k">{it.kicker}</p>
          <p className="t">
            {it.url ? <ExternalLink href={it.url}><Html html={it.title} /></ExternalLink> : <Html html={it.title} />}
          </p>
          <Html as="p" className="m" html={it.meta || it.text} />
        </li>
      ))}
    </ul>
  );
}

export function Patents() {
  return (
    <>
      <PageHead title="Patents & book chapters" subtitle="Intellectual property and contributed chapters." group="research" />
      <ItemCards items={patentsAndChapters} />
    </>
  );
}

export function Highlights() {
  return (
    <>
      <PageHead title="Highlights & service" subtitle="Recognition, peer review and outreach." group="recog" />
      <ItemCards items={highlights} />
    </>
  );
}

export function Conferences() {
  return (
    <>
      <PageHead title="Conferences" subtitle="Posters, presentations and outreach." group="research" />
      <Timeline items={conferences} />
    </>
  );
}

function HexPattern({ id }) {
  return (
    <svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={id} width="24" height="41.57" patternUnits="userSpaceOnUse" patternTransform="scale(0.7)">
          <path d="M12 0 L24 6.93 L24 20.78 L12 27.71 L0 20.78 L0 6.93 Z M12 27.71 L12 41.57" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="120" height="90" fill={`url(#${id})`} />
    </svg>
  );
}

export function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const photos = gallery.filter((g) => g.image); // only real photos open in the viewer

  return (
    <>
      <PageHead title="Gallery" subtitle="Moments from labs, conferences and outreach." group="recog" />
      <div className="gallery">
        {gallery.map((g, i) => (
          <figure key={i} className={`shot el ${g.group === "about" ? "" : g.group}`}>
            <div className="ph">
              {g.image ? (
                <button
                  type="button"
                  className="ph-open"
                  onClick={() => setOpenIndex(photos.indexOf(g))}
                  aria-label={`View larger: ${g.caption}`}
                >
                  <img src={g.image} alt={g.caption} loading="lazy" />
                </button>
              ) : (
                <>
                  <HexPattern id={`hx${i}`} />
                  <span className="soon">Photo coming soon</span>
                </>
              )}
            </div>
            <figcaption>
              {g.caption}
              <span>{g.sub}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={photos}
          index={openIndex}
          onMove={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}

export function Media() {
  return (
    <>
      <PageHead title="Media" subtitle="Covers, events and public engagement." group="recog" />
      <div className="media">
        {media.map((m, i) => (
          <article key={i} className={`mcard el ${m.group === "about" ? "" : m.group}`}>
            <div className="band">
              <span className="s">{m.category}</span>
              <span className="y">{m.year}</span>
            </div>
            <div className="body">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              {m.url && <ExternalLink className="go" href={m.url}>{m.linkLabel || "Read more"}</ExternalLink>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <PageHead title="Contact" subtitle="Open to collaborations on framework materials and lithium technologies." group="contact" />
      <div className="contact-grid">
        <div className="card">
          <h3>University email</h3>
          <a className="big" href={`mailto:${profile.emails.university}`}>{profile.emails.university}</a>
        </div>
        <div className="card">
          <h3>Personal email</h3>
          <a className="big" href={`mailto:${profile.emails.personal}`}>{profile.emails.personal}</a>
        </div>
        <div className="card">
          <h3>Address</h3>
          <p style={{ margin: 0 }}>
            {profile.address.map((line, i) => (
              <span key={i}>{line}{i < profile.address.length - 1 && <br />}</span>
            ))}
          </p>
        </div>
        <div className="card">
          <h3>Profiles</h3>
          <ul className="links">
            {profile.links.map((l) => (
              <li key={l.label}><ExternalLink href={l.url}>{l.label}</ExternalLink></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
