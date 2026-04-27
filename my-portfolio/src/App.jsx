import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Experience/>
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App