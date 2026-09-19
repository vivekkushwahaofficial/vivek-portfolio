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
import Publication from "./pages/Publication";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GitHub from "./pages/GitHub";

type Screen = "intro" | "welcome" | "portfolio";

function App() {
  const [screen, setScreen] = useState("intro");

  return (
    <>
      <AnimatePresence mode="wait">
        {screen === "intro" && (
          <IntroScreen
            key="intro"
            onComplete={() => {
              setScreen("welcome");
            }}
          />
        )}

        {screen === "welcome" && (
          <WelcomeScreen
            key="welcome"
            onEnter={() => {
              setScreen("portfolio");
            }}
          />
        )}
      </AnimatePresence>

      {screen === "portfolio" && (
        <>
          <Navbar />

          <main id="main-content">
            <Home />
            <About />
            <Skills />
            <Experience />
            <Certification />
            <Publication />
            <Projects />
            <GitHub />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
