import { useEffect, useState } from "react";
import { GITHUB_USER } from "../data.js";

export default function Repos() {
  const [repos, setRepos] = useState(null); // null = loading
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`)
      .then((res) => { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(setRepos)
      .catch(() => setFailed(true));
  }, []);

  let content;
  if (failed) {
    content = (
      <p className="muted">
        Could not load repositories. See them on{" "}
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    );
  } else if (!repos) {
    content = <p className="muted">Loading repositories...</p>;
  } else if (!repos.length) {
    content = <p className="muted">No public repositories yet.</p>;
  } else {
    content = repos.map((r) => (
      <a key={r.id} className="repo" href={r.html_url} target="_blank" rel="noopener noreferrer">
        <strong>{r.name}</strong>
        <span>{[r.language, r.description].filter(Boolean).join(" - ") || "No description"}</span>
      </a>
    ));
  }

  return <div className="repos" aria-live="polite">{content}</div>;
}
