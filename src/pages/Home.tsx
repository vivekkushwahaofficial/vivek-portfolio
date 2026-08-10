import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Database,
  Server,
  Workflow,
} from "lucide-react";

import resume from "../assets/Vivek_Kushwaha.pdf";
import HeroNetwork from "../components/HeroNetwork";

const technologies = [
  "Java",
  "Spring Boot",
  "Python",
  "React",
  "PostgreSQL",
  "Docker",
  "AI",
];

function Home() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden bg-[#05070b]"
    >
      {/* =========================================================
          Background grid
          ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* =========================================================
          Ambient glow
          ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[35%] h-48 w-48 rounded-full bg-violet-500/[0.025] blur-[100px] sm:h-64 sm:w-64"
      />

      {/* =========================================================
          Hero content
          ========================================================= */}
      <div className="relative mx-auto flex max-w-7xl items-center px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:min-h-[calc(100svh-1rem)] lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">

          {/* =====================================================
              Left content
              ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.15,
                duration: reducedMotion ? 0 : 0.5,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-300 sm:mb-6 sm:px-3.5 sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"
                />

                <span
                  aria-hidden="true"
                  className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"
                />
              </span>

              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="hero-heading"
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.25,
                duration: reducedMotion ? 0 : 0.65,
              }}
              className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl"
            >
              Software Engineer

              <span className="mt-2 block bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                building software that scales.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.4,
                duration: reducedMotion ? 0 : 0.6,
              }}
              className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg"
            >
              Building scalable backend systems, developer tools and
              AI-powered applications with a focus on clean architecture,
              reliable APIs and practical engineering.
            </motion.p>

            {/* Technologies */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.55,
                duration: reducedMotion ? 0 : 0.6,
              }}
              className="mt-5 flex max-w-2xl flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-500 sm:mt-6 sm:gap-x-4 sm:gap-y-2 sm:text-sm"
            >
              {technologies.map((technology, index) => (
                <span
                  key={technology}
                  className="flex items-center gap-2"
                >
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-slate-700"
                    />
                  )}

                  {technology}
                </span>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: reducedMotion ? 0 : 0.65,
                duration: reducedMotion ? 0 : 0.6,
              }}
              className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3"
            >
              {/* Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:px-5 sm:py-3"
              >
                Explore projects

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Vivekkushwahaofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vivek's GitHub profile"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-4 py-2.5 text-sm font-medium text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:px-5 sm:py-3"
              >
                GitHub

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* Resume */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Vivek's resume"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 px-4 py-2.5 text-sm font-medium text-slate-400 transition duration-200 hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:px-5 sm:py-3"
              >
                Resume

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* =====================================================
              Right technical visualization
              ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: reducedMotion ? 1 : 0.94,
              x: reducedMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              delay: reducedMotion ? 0 : 0.35,
              duration: reducedMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[500px]"
          >
            {/* Technical network */}
            <HeroNetwork />
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          Desktop technical labels
          ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: reducedMotion ? 0 : 1,
          duration: reducedMotion ? 0 : 0.8,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-xs text-slate-600 lg:flex"
      >
        <span className="flex items-center gap-1.5">
          <Server size={13} aria-hidden="true" />
          Backend
        </span>

        <span
          aria-hidden="true"
          className="h-px w-8 bg-slate-800"
        />

        <span className="flex items-center gap-1.5">
          <Workflow size={13} aria-hidden="true" />
          APIs
        </span>

        <span
          aria-hidden="true"
          className="h-px w-8 bg-slate-800"
        />

        <span className="flex items-center gap-1.5">
          <Database size={13} aria-hidden="true" />
          Data
        </span>

        <span
          aria-hidden="true"
          className="h-px w-8 bg-slate-800"
        />

        <span className="flex items-center gap-1.5">
          <Bot size={13} aria-hidden="true" />
          AI
        </span>
      </motion.div>
    </section>
  );
}

export default Home;