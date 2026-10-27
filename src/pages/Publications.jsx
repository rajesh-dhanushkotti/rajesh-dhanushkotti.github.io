import { useState } from "react";
import { publications, metrics, coverFeature, myNames, profile } from "../data/profile.js";
import { Html, PageHead, ExternalLink } from "../components/Common.jsx";
import Lightbox from "../components/Lightbox.jsx";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "first", label: "First author" },
  { id: "wip", label: "Under revision & in preparation" },
];

// A paper's images as a list ("abstract" may be one file or a list of files).
const imagesOf = (p) => (p.abstract ? [].concat(p.abstract) : []);

// True when you share first authorship (your name is in the "equal" list).
const isCoFirst = (p) => Boolean(p.equal && p.equal.some((n) => myNames.includes(n)));

function Authors({ list, equal = [] }) {
  const names = list.split(", ");
  return names.map((n, i) => (
    <span key={i}>
      {myNames.includes(n) ? <strong>{n}</strong> : n}
      {equal.includes(n) && <sup className="eq-mark">†</sup>}
      {i < names.length - 1 ? ", " : ""}
    </span>
  ));
}

export default function Publications() {
  const [filter, setFilter] = useState("all");
  const [openAbstract, setOpenAbstract] = useState(null);
  const [coverOpen, setCoverOpen] = useState(false);
  const scholar = profile.links.find((l) => l.label === "Google Scholar");

  const shown = publications.filter((p) =>
    filter === "all" ? true : filter === "first" ? p.first || isCoFirst(p) : Boolean(p.wip)
  );

  // Graphical abstracts of the papers currently shown, for the full-size viewer.
  const abstracts = shown.flatMap((p) =>
    imagesOf(p).map((image, i) => ({
      image,
      caption: p.title,
      sub: i === 0 ? "Graphical abstract" : "Additional figure",
      key: p.title,
    }))
  );

  return (
    <>
      <PageHead title="Publications" subtitle="Peer-reviewed articles and manuscripts in progress." group="research" />

      <div className="metrics">
        <span><b>{metrics.citations}</b>citations</span>
        <span><b>{metrics.hIndex}</b>h-index</span>
        <span><b>{metrics.i10Index}</b>i10-index</span>
        {scholar && (
          <span><ExternalLink href={scholar.url}>View on Google Scholar</ExternalLink></span>
        )}
      </div>

      <div className={`cover${coverFeature.image ? " has-img" : ""}`}>
        {coverFeature.image && (
          <button
            type="button"
            className="cover-img"
            onClick={() => setCoverOpen(true)}
            aria-label={`View larger: ${coverFeature.label}`}
          >
            <img src={coverFeature.image} alt={coverFeature.label} />
          </button>
        )}
        <div>
          <p className="k">{coverFeature.label}</p>
          <p className="t">
            <ExternalLink href={`https://doi.org/${coverFeature.doi}`}>{coverFeature.title}</ExternalLink>
          </p>
          <p className="muted">{coverFeature.note}</p>
        </div>
      </div>

      <div className="filters" role="group" aria-label="Filter publications">
        {FILTERS.map((f) => (
          <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <ol className="pubs" aria-live="polite">
        {shown.map((p) => (
          <li className={`pub${p.abstract ? " has-ga" : ""}`} key={p.title}>
            <div className="yr">{p.year}</div>
            <div>
              <p className="t">
                {p.doi ? <ExternalLink href={`https://doi.org/${p.doi}`}>{p.title}</ExternalLink> : p.title}
              </p>
              <p className="au"><Authors list={p.authors} equal={p.equal} /></p>
              <p className="ven">
                <Html html={p.venue} />
                <span className="tags">
                  {p.first && <span className="tag">First author</span>}
                  {!p.first && isCoFirst(p) && <span className="tag">Co-first author</span>}
                  {p.tags.map(([label, kind]) => (
                    <span key={label} className={`tag${kind ? " " + kind : ""}`}>{label}</span>
                  ))}
                </span>
              </p>
              {p.equal && <p className="eq-note">† These authors contributed equally.</p>}
            </div>
            {p.abstract && (
              <button
                type="button"
                className="ga"
                onClick={() => setOpenAbstract(abstracts.findIndex((a) => a.key === p.title))}
                aria-label={`View graphical abstract: ${p.title}`}
              >
                <img src={imagesOf(p)[0]} alt="" loading="lazy" />
                <span>
                  Graphical abstract
                  {imagesOf(p).length > 1 && <em className="ga-count">{imagesOf(p).length} images</em>}
                </span>
              </button>
            )}
          </li>
        ))}
      </ol>

      {coverOpen && (
        <Lightbox
          items={[{ image: coverFeature.image, caption: coverFeature.label, sub: coverFeature.note }]}
          index={0}
          onMove={() => {}}
          onClose={() => setCoverOpen(false)}
        />
      )}

      {openAbstract !== null && (
        <Lightbox
          items={abstracts}
          index={openAbstract}
          onMove={setOpenAbstract}
          onClose={() => setOpenAbstract(null)}
        />
      )}
    </>
  );
}
