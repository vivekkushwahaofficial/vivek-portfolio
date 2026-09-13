import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Download,
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
  install?: string;
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
  install,
  variant,
  flagship = false,
}: ProjectCaseStudyProps) {
  const reducedMotion = useReducedMotion();

  const isFlagship =
    variant === "flagship" || (variant === undefined && flagship);

  const articleSpacing = isFlagship
    ? "py-8 sm:py-11 lg:py-14"
    : "py-6 sm:py-8 lg:py-9";

  const titleSize = isFlagship
    ? "text-3xl sm:text-5xl lg:text-6xl"
    : "text-2xl sm:text-4xl lg:text-5xl";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : isFlagship ? 24 : 16,
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
        duration: reducedMotion ? 0 : isFlagship ? 0.6 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative border-t border-white/[0.07] ${articleSpacing} pl-5 md:pl-8`}
    >
      {/* =====================================================
          Flagship ambient glow
          ===================================================== */}

      {isFlagship && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-12 h-56 w-56 rounded-full bg-blue-500/[0.03] blur-3xl sm:-right-40 sm:top-16 sm:h-80 sm:w-80"
        />
      )}

      {/* =====================================================
          Project header
          ===================================================== */}

      <div
        className={
          isFlagship
            ? "relative grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14"
            : "relative grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"
        }
      >
        {/* Project title */}

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] tracking-[0.22em] text-slate-500 sm:gap-4 sm:text-xs sm:tracking-[0.28em]">
            <span className="font-mono text-blue-400">{number}</span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-blue-500/50 sm:w-10"
            />

            <span>{eyebrow}</span>
          </div>

          <h3
            className={`mt-3.5 max-w-xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:mt-4 ${titleSize}`}
          >
            {title}
          </h3>

          {isFlagship && (
            <div className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.05] px-2.5 py-1.5 text-[10px] text-blue-300 sm:mt-4 sm:px-3 sm:text-xs">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              />
              FLAGSHIP PROJECT
            </div>
          )}
        </div>

        {/* Description + technologies */}

        <div className="min-w-0 max-w-3xl">
          <p
            className={
              isFlagship
                ? "text-base leading-7 text-slate-300 sm:text-xl sm:leading-8"
                : "text-sm leading-6 text-slate-300 sm:text-lg sm:leading-7"
            }
          >
            {description}
          </p>

          <div
            className={`flex flex-wrap gap-1.5 sm:gap-2 ${
              isFlagship ? "mt-4 sm:mt-6" : "mt-3.5 sm:mt-4"
            }`}
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-slate-400 transition-colors duration-200 hover:border-blue-400/20 hover:text-slate-200 sm:px-3 sm:text-xs"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          Problem / Solution
          ===================================================== */}

      <div
        className={`relative mt-7 grid overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035] sm:mt-8 sm:rounded-2xl md:grid-cols-2 ${
          isFlagship ? "lg:mt-10" : "lg:mt-8"
        }`}
      >
        {/* Problem */}

        <div className="bg-[#080d18] p-4.5 sm:p-6 lg:p-7">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/[0.08] text-red-400 sm:h-9 sm:w-9">
              <Layers3 size={16} strokeWidth={1.6} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              Problem
            </span>
          </div>

          <p className="mt-3.5 max-w-xl text-sm leading-6 text-slate-300 sm:mt-4 sm:leading-7">
            {problem}
          </p>
        </div>

        {/* Solution */}

        <div className="border-t border-white/[0.07] bg-[#080d18] p-4.5 sm:p-6 md:border-l md:border-t-0 lg:p-7">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/[0.08] text-blue-400 sm:h-9 sm:w-9">
              <Check size={16} strokeWidth={1.8} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              Solution
            </span>
          </div>

          <p className="mt-3.5 max-w-xl text-sm leading-6 text-slate-300 sm:mt-4 sm:leading-7">
            {solution}
          </p>
        </div>
      </div>

      {/* =====================================================
          Engineering workflow
          ===================================================== */}

      <div
        className={`relative mt-6 overflow-hidden rounded-xl border border-white/[0.07] bg-[#060b15] sm:mt-7 sm:rounded-2xl ${
          isFlagship ? "p-4.5 sm:p-6 lg:p-7" : "p-4 sm:p-5"
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Workflow size={17} strokeWidth={1.5} className="text-blue-400" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
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
              ? "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-5"
              : "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-4"
          }
        >
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={`${step.label}-${index}`} className="relative min-w-0">
                <motion.div
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -3,
                          borderColor: "rgba(96,165,250,0.3)",
                        }
                  }
                  transition={{ duration: 0.2 }}
                  className={`h-full rounded-xl border border-white/[0.07] bg-white/[0.02] ${
                    isFlagship ? "p-3.5 sm:p-4" : "p-3 sm:p-3.5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/[0.08] text-blue-400 sm:h-9 sm:w-9">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-[9px] text-slate-600 sm:text-[10px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm font-medium leading-5 text-white sm:mt-4">
                    {step.label}
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:mt-1.5 sm:text-xs">
                    {step.description}
                  </p>
                </motion.div>

                {/* Desktop connector */}

                {index < workflow.length - 1 && (
                  <ArrowUpRight
                    aria-hidden="true"
                    size={14}
                    className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 rotate-45 text-blue-500/45 lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Animated data packet */}

        {!reducedMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[70px] hidden h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)] lg:block"
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

      {/* =====================================================
          Architecture — flagship only
          ===================================================== */}

      {isFlagship && (
        <div className="relative mt-6 overflow-hidden rounded-xl border border-white/[0.07] bg-[#060b15] p-4.5 sm:mt-7 sm:rounded-2xl sm:p-6 lg:p-7">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Server size={17} strokeWidth={1.5} className="text-blue-400" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              Architecture
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 sm:mt-5 sm:gap-x-2.5 sm:gap-y-2.5">
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
                className="flex min-w-0 items-center gap-2 sm:gap-2.5"
              >
                <span className="max-w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[11px] leading-5 text-slate-300 sm:px-3 sm:py-2 sm:text-sm">
                  {item}
                </span>

                {index < items.length - 1 && (
                  <span aria-hidden="true" className="text-blue-500/50">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================
    Project actions
    ===================================================== */}

      {(github || live || install) && (
        <div
          className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${
            isFlagship ? "mt-5 sm:mt-6" : "mt-4.5 sm:mt-5"
          }`}
        >
          {/* Action buttons */}

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-3.5 py-2.5 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm"
              >
                <GitBranch size={16} strokeWidth={1.7} />

                <span>GitHub</span>

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-3.5 py-2.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm"
              >
                <span>Live Demo</span>

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            )}

            {install && (
              <a
                href={install}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex min-h-10 items-center gap-2 rounded-xl border border-purple-400/25 bg-purple-500/[0.08] px-3.5 py-2.5 text-xs font-medium text-purple-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-purple-500/[0.14] hover:shadow-[0_8px_24px_rgba(168,85,247,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 sm:min-h-11 sm:px-5 sm:py-3 sm:text-sm"
              >
                <Download
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5"
                />

                <span>Install Extension</span>

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            )}
          </div>

          {/* Flagship metadata */}

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
