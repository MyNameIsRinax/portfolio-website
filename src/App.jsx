import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Rinax Antonio (Rinexus Games)</p>
      </footer>
    </>
  );
}
