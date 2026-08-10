import { useState } from "react";
import { AnimatePresence } from "motion/react";

import IntroScreen from "./components/IntroScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certification from "./pages/Certification";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

type Screen = "intro" | "welcome" | "portfolio";

function App() {
  // Current stage of the portfolio entry experience.
  const [screen, setScreen] = useState<Screen>("intro");

  return (
    <>
      {/* =====================================================
          ENTRY EXPERIENCE
          Intro → Welcome → Portfolio
      ====================================================== */}

      <AnimatePresence mode="wait">
        {/* ===================================================
            1. INTRO SCREEN
        ==================================================== */}

        {screen === "intro" && (
          <IntroScreen
            key="intro"
            onComplete={() => {
              setScreen("welcome");
            }}
          />
        )}

        {/* ===================================================
            2. WELCOME SCREEN
        ==================================================== */}

        {screen === "welcome" && (
          <WelcomeScreen
            key="welcome"
            onEnter={() => {
              setScreen("portfolio");
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          3. ACTUAL PORTFOLIO
      ====================================================== */}

      {screen === "portfolio" && (
        <>
          {/* Fixed navigation */}
          <Navbar />

          {/* Main portfolio */}
          <main id="main-content">
            <Home />
            <About />
            <Skills />
            <Experience />
            <Certification />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;