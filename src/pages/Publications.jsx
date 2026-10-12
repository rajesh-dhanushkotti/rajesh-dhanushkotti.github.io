import { useState } from "react";
import { publications, metrics, coverFeature, myNames, profile } from "../data/profile.js";
import { Html, PageHead, ExternalLink } from "../components/Common.jsx";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "first", label: "First author" },
  { id: "wip", label: "Under revision & in preparation" },
];

function Authors({ list }) {
  const names = list.split(", ");
  return names.map((n, i) => (
    <span key={i}>
      {myNames.includes(n) ? <strong>{n}</strong> : n}
      {i < names.length - 1 ? ", " : ""}
    </span>
  ));
}

export default function Publications() {
  const [filter, setFilter] = useState("all");
  const scholar = profile.links.find((l) => l.label === "Google Scholar");

  const shown = publications.filter((p) =>
    filter === "all" ? true : filter === "first" ? p.first : Boolean(p.wip)
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

      <div className="cover">
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
          <li className="pub" key={p.title}>
            <div className="yr">{p.year}</div>
            <div>
              <p className="t">
                {p.doi ? <ExternalLink href={`https://doi.org/${p.doi}`}>{p.title}</ExternalLink> : p.title}
              </p>
              <p className="au"><Authors list={p.authors} /></p>
              <p className="ven">
                <Html html={p.venue} />
                <span className="tags">
                  {p.first && <span className="tag">First author</span>}
                  {p.tags.map(([label, kind]) => (
                    <span key={label} className={`tag${kind ? " " + kind : ""}`}>{label}</span>
                  ))}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
