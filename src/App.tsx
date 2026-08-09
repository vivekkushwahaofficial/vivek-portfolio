import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certification from "./pages/Certification";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Certification />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;