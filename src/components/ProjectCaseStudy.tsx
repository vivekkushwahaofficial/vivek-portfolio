import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  GitBranch,
  Layers3,
  LockKeyhole,
  Server,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type WorkflowStep = {
  label: string;
  description: string;
  icon: LucideIcon;
};

type ProjectCaseStudyProps = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  workflow: WorkflowStep[];
  github?: string;
  live?: string;
  variant?: "flagship" | "compact";
  flagship?: boolean;
};

function ProjectCaseStudy({
  number,
  title,
  eyebrow,
  description,
  problem,
  solution,
  technologies,
  workflow,
  github,
  live,
  variant,
  flagship = false,
}: ProjectCaseStudyProps) {
  const reducedMotion = useReducedMotion();

  const isFlagship =
    variant === "flagship" || (variant === undefined && flagship);

  const articleSpacing = isFlagship
    ? "py-14 sm:py-16 lg:py-20"
    : "py-8 sm:py-10 lg:py-12";

  const titleSize = isFlagship
    ? "text-4xl sm:text-5xl lg:text-6xl"
    : "text-3xl sm:text-4xl lg:text-5xl";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : isFlagship ? 28 : 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: isFlagship ? 0.65 : 0.5,
        ease: "easeOut",
      }}
      className={`group relative border-t border-white/[0.07] ${articleSpacing}`}
    >
      {/* ============================================================
          FLAGSHIP AMBIENT GLOW
      ============================================================ */}

      {isFlagship && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.045] blur-3xl"
        />
      )}

      {/* ============================================================
          PROJECT HEADER
      ============================================================ */}

      <div
        className={
          isFlagship
            ? "relative grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16"
            : "relative grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
        }
      >
        {/* Left */}

        <div>
          <div className="flex items-center gap-4 text-xs tracking-[0.28em] text-slate-500">
            <span className="font-mono text-blue-400">
              {number}
            </span>

            <span className="h-px w-10 bg-blue-500/50" />

            <span>{eyebrow}</span>
          </div>

          <h3
            className={`mt-5 max-w-xl font-semibold tracking-tight text-white ${titleSize}`}
          >
            {title}
          </h3>

          {isFlagship && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.05] px-3 py-1.5 text-xs text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              FLAGSHIP PROJECT
            </div>
          )}
        </div>

        {/* Right */}

        <div className="max-w-3xl">
          <p
            className={
              isFlagship
                ? "text-lg leading-8 text-slate-300 sm:text-xl"
                : "text-base leading-7 text-slate-300 sm:text-lg"
            }
          >
            {description}
          </p>

          <div
            className={`flex flex-wrap gap-2 ${isFlagship ? "mt-7" : "mt-5"
              }`}
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-slate-400 transition-colors duration-200 hover:border-blue-400/20 hover:text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          PROBLEM / SOLUTION
      ============================================================ */}

      <div
        className={`relative mt-10 grid overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.035] md:grid-cols-2 ${isFlagship ? "lg:mt-12" : "lg:mt-9"
          }`}
      >
        {/* Problem */}

        <div className="bg-[#080d18] p-6 sm:p-7 lg:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/[0.08] text-red-400">
              <Layers3 size={17} strokeWidth={1.6} />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Problem
            </span>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            {problem}
          </p>
        </div>

        {/* Solution */}

        <div className="bg-[#080d18] p-6 sm:p-7 lg:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/[0.08] text-blue-400">
              <Check size={17} strokeWidth={1.8} />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Solution
            </span>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            {solution}
          </p>
        </div>
      </div>

      {/* ============================================================
          WORKFLOW
      ============================================================ */}

      <div
        className={`relative mt-9 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#060b15] ${isFlagship ? "p-6 sm:p-7 lg:p-8" : "p-5 sm:p-6"
          }`}
      >
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Workflow
              size={18}
              strokeWidth={1.5}
              className="text-blue-400"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Engineering workflow
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:block">
            SYSTEM FLOW
          </span>
        </div>

        <div
          className={
            isFlagship
              ? "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
              : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={`${step.label}-${index}`}
                className="relative min-w-0"
              >
                <motion.div
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                        y: -3,
                        borderColor:
                          "rgba(96,165,250,0.3)",
                      }
                  }
                  transition={{ duration: 0.2 }}
                  className={`h-full rounded-xl border border-white/[0.07] bg-white/[0.02] ${isFlagship ? "p-5" : "p-4"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/[0.08] text-blue-400">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-[10px] text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mt-5 text-sm font-medium text-white">
                    {step.label}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>
                </motion.div>

                {index < workflow.length - 1 && (
                  <ArrowUpRight
                    aria-hidden="true"
                    size={15}
                    className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 rotate-45 text-blue-500/50 lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>

        {!reducedMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[83px] hidden h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)] lg:block"
            animate={{
              left: ["6%", "94%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: isFlagship ? 4 : 3.2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
          />
        )}
      </div>

      {/* ============================================================
          ARCHITECTURE — FLAGSHIP ONLY
      ============================================================ */}

      {isFlagship && (
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#060b15] p-6 sm:p-7 lg:p-8">
          <div className="flex items-center gap-3">
            <Server
              size={18}
              strokeWidth={1.5}
              className="text-blue-400"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Architecture
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 text-sm">
            {[
              "Coding Platforms",
              "Browser Extension",
              "Detection",
              "Extraction",
              "Spring Boot",
              "GitHub API",
              "Repository",
            ].map((item, index, items) => (
              <div
                key={item}
                className="flex items-center gap-2.5"
              >
                <span className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-slate-300">
                  {item}
                </span>

                {index < items.length - 1 && (
                  <span className="text-blue-500/50">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          ACTIONS
      ============================================================ */}

      {(github || live) && (
        <div
          className={`flex flex-wrap items-center gap-3 ${isFlagship ? "mt-7" : "mt-6"
            }`}
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
              <GitBranch size={17} strokeWidth={1.7} />

              GitHub

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
              Live Demo

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}

          {isFlagship && (
            <span className="ml-auto hidden items-center gap-2 text-xs text-slate-600 sm:flex">
              <LockKeyhole size={13} />
              OAuth-secured integration
            </span>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default ProjectCaseStudy;