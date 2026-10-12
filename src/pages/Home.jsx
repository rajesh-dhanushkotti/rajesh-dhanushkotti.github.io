import { profile, stats, news } from "../data/profile.js";
import { Html, ExternalLink } from "../components/Common.jsx";

export default function Home() {
  return (
    <>
      <div className="intro">
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="245" height="283" />
        <div>
          <h1>{profile.name}</h1>
          <p className="title">
            <b>{profile.position}</b>, {profile.affiliation}
          </p>
          <p className="tagline">{profile.tagline}</p>
          <ul className="links">
            {profile.links.map((l) => (
              <li key={l.label}>
                <ExternalLink href={l.url}>{l.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="sub" style={{ marginTop: 0 }}>At a glance</h2>
      <ul className="stats">
        {stats.map((s) => (
          <li key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>

      <h2 className="sub">About me</h2>
      <div className="prose about">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h2 className="sub">Latest news</h2>
      <ul className="news">
        {news.map((n, i) => (
          <li key={i}>
            <span className="d">{n.date}</span>
            <Html as="p" className="x" html={n.text} />
          </li>
        ))}
      </ul>
    </>
  );
}
