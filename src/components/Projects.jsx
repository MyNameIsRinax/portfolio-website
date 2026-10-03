import { projects } from "../data.js";
import ProjectCard from "./ProjectCard.jsx";
import Repos from "./Repos.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
      <h3 className="sub">Latest on GitHub</h3>
      <Repos />
    </section>
  );
}
