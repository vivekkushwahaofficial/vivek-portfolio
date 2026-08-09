import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Container,
  Database,
  GitBranch,
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
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0a0f1c] text-white"    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-1rem)] max-w-7xl items-center px-6 pb-6 pt-20 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-sm text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              Software Engineer
              <span className="mt-2 block bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                building software that scales.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              Building scalable backend systems, developer tools and
              AI-powered applications with a focus on clean architecture,
              reliable APIs and practical engineering.
            </motion.p>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-7 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500"
            >
              {technologies.map((technology, index) => (
                <span key={technology} className="flex items-center gap-2">
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Explore projects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://github.com/Vivekkushwahaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 px-5 py-3 text-sm font-medium text-slate-400 transition duration-200 hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Resume
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Technical visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>

      {/* Bottom technical labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-xs text-slate-600 lg:flex"
      >
        <span className="flex items-center gap-1.5">
          <Server size={13} />
          Backend
        </span>

        <span className="h-px w-8 bg-slate-800" />

        <span className="flex items-center gap-1.5">
          <Workflow size={13} />
          APIs
        </span>

        <span className="h-px w-8 bg-slate-800" />

        <span className="flex items-center gap-1.5">
          <Database size={13} />
          Data
        </span>

        <span className="h-px w-8 bg-slate-800" />

        <span className="flex items-center gap-1.5">
          <Bot size={13} />
          AI
        </span>
      </motion.div>
    </section>
  );
}

export default Home;
