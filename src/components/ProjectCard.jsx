import { useEffect, useRef, useState } from "react";
import { img } from "../data.js";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  // Fade in once when the card scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`card reveal${shown ? " in" : ""}`}
      style={project.color ? { "--c": project.color } : undefined}
    >
      <img src={img(project.image)} alt={`${project.title} screenshot (placeholder)`} loading="lazy" />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View project</a>
      </div>
    </article>
  );
}
