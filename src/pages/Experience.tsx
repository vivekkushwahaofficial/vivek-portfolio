import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  GitBranch,
  LockKeyhole,
  Server,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";
import SectionRail from "../components/SectionRail";

const contributions = [
  {
    icon: Server,
    title: "REST API Development",
    description:
      "Developed RESTful backend APIs using Spring Boot for application features and data operations.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designed and integrated relational data models using PostgreSQL and Spring Data JPA.",
  },
  {
    icon: LockKeyhole,
    title: "Authentication & Security",
    description:
      "Implemented validation, exception handling, and JWT-based authentication.",
  },
  {
    icon: GitBranch,
    title: "Development Workflow",
    description:
      "Tested APIs with Postman and collaborated through Git-based development workflows.",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "PostgreSQL",
  "JWT",
  "REST APIs",
  "Postman",
  "Git",
];

function Experience() {
  const reducedMotion = useReducedMotion();

  const revealTransition = {
    duration: reducedMotion ? 0 : 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <ScrollReveal>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
      >
        <SectionRail />

        {/* =====================================================
            Ambient background
        ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[18%] top-[15%] h-44 w-44 rounded-full bg-blue-500/[0.018] blur-3xl sm:h-56 sm:w-56" />

          <div className="absolute bottom-[12%] right-[10%] h-48 w-48 rounded-full bg-violet-500/[0.015] blur-3xl sm:h-64 sm:w-64" />

          <div
            className="absolute inset-0 opacity-[0.014]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* =====================================================
            Main container
        ===================================================== */}

        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-16">
          {/* =====================================================
              Section marker
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={revealTransition}
            className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <span className="font-mono text-[10px] font-medium tracking-[0.28em] text-blue-400 sm:text-[11px]">
              03
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-blue-400/50 sm:w-12"
            />

            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:text-[11px] sm:tracking-[0.28em]">
              Experience
            </span>
          </motion.div>

          {/* =====================================================
              Header
          ===================================================== */}

          <div className="grid gap-5 sm:gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={revealTransition}
            >
              <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-blue-400 sm:mb-4 sm:text-xs">
                Engineering in practice
              </p>

              <h2
                id="experience-heading"
                className="max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Experience that
                <span className="block text-slate-500">
                  shaped how I build.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                ...revealTransition,
                delay: reducedMotion ? 0 : 0.06,
              }}
              className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7 lg:self-end lg:text-lg"
            >
              Practical experience across backend engineering, API
              development, open source contribution, database integration,
              authentication, and collaborative software development.
            </motion.p>
          </div>

          {/* =====================================================
              Timeline
          ===================================================== */}

          <div className="relative mt-8 sm:mt-10 lg:mt-12">
            {/* Timeline line */}

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-gradient-to-b from-blue-400/60 via-white/[0.10] to-transparent sm:block"
            />

            {/* ===================================================
                INFOSYS SPRINGBOARD
            ==================================================== */}

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.08,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reducedMotion ? 0 : 0.05,
                  },
                },
              }}
              className="relative sm:pl-12"
            >
              {/* Timeline node */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.8,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
                className="absolute left-0 top-1 hidden sm:block"
              >
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-blue-400/10" />

                  <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.7)]" />
                </div>
              </motion.div>

              {/* Date */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: reducedMotion ? 0 : 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="mb-4 flex items-center gap-3 sm:mb-5"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-blue-400 sm:text-xs">
                  2026
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-white/[0.12] sm:w-8"
                />

                <span className="text-[10px] text-slate-600 sm:text-xs">
                  Feb — Apr
                </span>
              </motion.div>

              {/* Main internship */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: reducedMotion ? 0 : 14,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="border-y border-white/[0.08] py-5 sm:py-7 lg:py-8"
              >
                {/* Role header */}

                <div className="flex flex-col gap-3.5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                  <div className="min-w-0">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-slate-600 sm:mb-2.5 sm:text-xs">
                      Infosys Springboard · Virtual Internship 6.0
                    </p>

                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                      Java Technology Stack Intern
                    </h3>

                    <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-400 sm:mt-3 sm:text-base sm:leading-7">
                      Backend development experience focused on building REST
                      APIs, integrating relational databases, implementing
                      authentication, and working within a collaborative
                      development workflow.
                    </p>
                  </div>

                  <div className="flex w-fit shrink-0 items-center gap-2 text-[10px] text-slate-500 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                    Completed
                  </div>
                </div>

                {/* Project context */}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: reducedMotion ? 0 : 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="mt-5 border border-white/[0.07] bg-white/[0.015] p-4 sm:mt-7 sm:p-5 lg:p-6"
                >
                  <div className="flex flex-col gap-3.5 sm:gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-blue-400">
                        Team Project
                      </p>

                      <h4 className="mt-1.5 text-base font-medium text-white sm:text-lg">
                        Legal Aid Matching Platform
                      </h4>

                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
                        A team-based platform designed to connect users with
                        appropriate legal assistance while supporting case
                        management and role-based access.
                      </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-2 text-[10px] text-slate-600 sm:text-xs">
                      <ArrowUpRight size={13} />
                      Backend contribution
                    </span>
                  </div>
                </motion.div>

                {/* Contributions */}

                <div className="mt-6 sm:mt-8">
                  <p className="mb-3.5 text-[10px] uppercase tracking-[0.24em] text-slate-600 sm:mb-4">
                    Engineering contributions
                  </p>

                  <motion.div
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: reducedMotion ? 0 : 0.05,
                        },
                      },
                    }}
                    className="grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2"
                  >
                    {contributions.map((item) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          variants={{
                            hidden: {
                              opacity: 0,
                              y: reducedMotion ? 0 : 8,
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                            },
                          }}
                          className="group bg-[#080b14] p-4 transition-colors duration-300 hover:bg-white/[0.025] sm:p-5 lg:p-5"
                        >
                          <div className="flex gap-3 sm:gap-3.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/[0.08] text-slate-500 transition-colors duration-300 group-hover:border-blue-400/30 group-hover:text-blue-300 sm:h-9 sm:w-9">
                              <Icon size={15} strokeWidth={1.5} />
                            </div>

                            <div className="min-w-0">
                              <h5 className="text-sm font-medium text-slate-200">
                                {item.title}
                              </h5>

                              <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Technology stack */}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: reducedMotion ? 0 : 8,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="mt-6 sm:mt-8"
                >
                  <p className="mb-3.5 text-[10px] uppercase tracking-[0.24em] text-slate-600 sm:mb-4">
                    Technology stack
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-1.5 border border-white/[0.08] px-2.5 py-1.5 text-[10px] text-slate-400 transition-colors duration-300 hover:border-blue-400/30 hover:text-slate-200 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs"
                      >
                        <CheckCircle2
                          size={11}
                          strokeWidth={1.5}
                          className="text-slate-600"
                        />

                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.article>

            {/* ===================================================
                GSSoC — COMPACT OPEN SOURCE EXPERIENCE
            ==================================================== */}

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reducedMotion ? 0 : 0.06,
                  },
                },
              }}
              className="relative mt-10 sm:mt-12 sm:pl-12"
            >
              {/* Timeline node */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.8,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
                className="absolute left-0 top-1 hidden sm:block"
              >
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-violet-400/10" />

                  <span className="relative h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.65)]" />
                </div>
              </motion.div>

              {/* Date */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: reducedMotion ? 0 : 8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="mb-4 flex items-center gap-3 sm:mb-5"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-violet-400 sm:text-xs">
                  2026
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-white/[0.12] sm:w-8"
                />

                <span className="text-[10px] text-slate-600 sm:text-xs">
                  May — Aug
                </span>
              </motion.div>

              {/* Compact experience row */}

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: reducedMotion ? 0 : 12,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="border-y border-white/[0.08] py-5 sm:py-6 lg:py-7"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                  {/* Main information */}

                  <div className="min-w-0">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-slate-600 sm:text-xs">
                      GSSoC 2026 · Open Source
                    </p>

                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                      Open Source Contributor
                    </h3>

                    <p className="mt-2.5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                      Contributed to an open-source project through GSSoC 2026
                      with a merged pull request for dsaTracker.
                    </p>
                  </div>

                  {/* Verified contribution */}

                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <span className="border border-violet-400/20 bg-violet-400/[0.04] px-3 py-1.5 text-[10px] text-violet-300 sm:text-xs">
                      AI / Agents Track
                    </span>

                    <span className="border border-white/[0.08] px-3 py-1.5 text-[10px] text-slate-400 sm:text-xs">
                      1 PR Merged
                    </span>

                    <span className="border border-white/[0.08] px-3 py-1.5 text-[10px] text-slate-400 sm:text-xs">
                      Top 10%
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          </div>

          {/* =====================================================
              Bottom summary
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.45,
            }}
            className="mt-5 flex flex-col gap-2 text-[10px] leading-5 text-slate-600 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:text-xs"
          >
            <span>
              Backend engineering · Open source · API development
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Software Engineering
            </span>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Experience;