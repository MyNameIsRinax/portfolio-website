import { img } from "../data.js";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Rinax Antonio</h1>
        <p className="role">IT student, indie game developer, web developer</p>
        <p className="bio">
          I'm an IT student at La Salle University in Ozamiz City. I make games solo under
          Rinexus Games and build websites for clients. I've taught GDevelop workshops, shown
          games at expos, and had one featured on the GDevelop blog.
        </p>
        <div className="actions">
          <a className="btn primary" href="#projects">See my projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="hero-art">
        <svg className="collage" viewBox="0 0 400 400" aria-hidden="true">
          <defs>
            <pattern id="stripes" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#D79922" />
              <rect width="5" height="12" fill="#EFE2BA" />
            </pattern>
          </defs>
          <rect x="40" y="20" width="120" height="120" fill="#C5CBE3" transform="rotate(-12 100 80)" />
          <polygon points="0,400 0,170 230,400" fill="#4056A1" />
          <circle cx="318" cy="92" r="66" fill="#D79922" />
          <polygon points="400,150 400,330 250,330" fill="#F13C20" />
          <rect x="205" y="338" width="170" height="46" fill="url(#stripes)" transform="rotate(-6 290 360)" />
          <path d="M20 372 l16 -22 l16 22 l16 -22 l16 22" fill="none" stroke="#F13C20" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="52" cy="205" r="10" fill="#F13C20" />
        </svg>
        <img className="avatar" src={img("profile.png")} alt="Photo of Rinax Antonio (placeholder)" width="286" height="357" />
      </div>
    </section>
  );
}
