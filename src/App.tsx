import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certification from "./pages/Certification";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* Fixed site navigation */}
      <Navbar />

      {/* Main portfolio content */}
      <main id="main-content">
        <Home />

        <About />

        <Skills />

        <Experience />

        <Certification />

        <Projects />

        <Contact />
      </main>

      {/* Site footer */}
      <Footer />
    </>
  );
}

export default App;