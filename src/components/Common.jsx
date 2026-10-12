// Small shared building blocks.

// Renders trusted text from profile.js that may contain <b>, <i>, <strong>.
export function Html({ as: Tag = "span", html, ...rest }) {
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function PageHead({ title, subtitle, group = "" }) {
  return (
    <div className={`page-head el ${group}`}>
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

export function ExternalLink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export function Timeline({ items }) {
  return (
    <ol className="tl">
      {items.map((it, i) => (
        <li key={i} className={it.current ? "now" : undefined}>
          <div className="when">{it.when}</div>
          <h3>{it.title}</h3>
          {it.org && <p className="org">{it.org}</p>}
          {it.where && <p className="org">{it.where}</p>}
          {it.thesis && (
            <p className="proj">
              Thesis: <em>{it.thesis}</em>
            </p>
          )}
          {it.project && (
            <p className="proj">
              <em>{it.project}</em>
              {it.supervisor && <> Supervisor: {it.supervisor}.</>}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Chips({ items, highlight = false }) {
  return (
    <ul className={`chips${highlight ? " hl" : ""}`}>
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}
