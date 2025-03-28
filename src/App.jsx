import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Upcoming from "./components/upcoming/Upcoming";
import Imppa from "./components/imppa/Imppa";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Upcoming">
        <Parallax type="upcoming" />
      </section>
      <section>
        <Upcoming />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <About />
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="Imppa">
        <Imppa />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
