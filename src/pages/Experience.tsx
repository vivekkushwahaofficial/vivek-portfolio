import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  GitBranch,
  LockKeyhole,
  Server,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Experience() {
  const reducedMotion = useReducedMotion();

  const reveal = {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 24,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
  };

  return (
    <ScrollReveal>
      <section
        id="experience"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[18%] top-[15%] h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

          <div className="absolute bottom-[15%] right-[10%] h-72 w-72 rounded-full bg-violet-500/[0.02] blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          {/* Section header */}
          <motion.div
            {...reveal}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-16 flex items-center gap-4"
          >
            <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-blue-400">
              03
            </span>

            <span
              aria-hidden="true"
              className="h-px w-12 bg-blue-400/50"
            />

            <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Experience
            </span>
          </motion.div>

          {/* Heading */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div
              {...reveal}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: "easeOut",
              }}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-blue-400">
                Engineering in practice
              </p>

              <h2 className="max-w-xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Experience that
                <span className="block text-slate-500">
                  shaped how I build.
                </span>
              </h2>
            </motion.div>

            <motion.p
              {...reveal}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: "easeOut",
              }}
              className="max-w-2xl self-end text-base leading-8 text-slate-400 sm:text-lg"
            >
              My internship experience gave me practical exposure to backend
              engineering, API development, database integration,
              authentication, testing, and collaborative software development.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative mt-20 lg:mt-24">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-0 hidden w-px bg-gradient-to-b from-blue-400/60 via-white/[0.10] to-transparent sm:block"
            />

            {/* Timeline entry */}
            <motion.article
              variants={containerVariants}
              initial={reducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              className="relative sm:pl-12"
            >
              {/* Timeline node */}
              <motion.div
                variants={itemVariants}
                className="absolute left-0 top-1 hidden sm:block"
              >
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-blue-400/10" />

                  <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.7)]" />
                </div>
              </motion.div>

              {/* Date */}
              <motion.div
                variants={itemVariants}
                className="mb-6 flex items-center gap-3"
              >
                <span className="font-mono text-xs tracking-[0.18em] text-blue-400">
                  2026
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-white/[0.12]"
                />

                <span className="text-xs text-slate-600">
                  Feb — Apr
                </span>
              </motion.div>

              {/* Main experience */}
              <motion.div
                variants={itemVariants}
                className="border-y border-white/[0.08] py-8 sm:py-10 lg:py-12"
              >
                {/* Role header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-600">
                      Infosys Springboard · Virtual Internship 6.0
                    </p>

                    <h3 className="text-2xl font-medium tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                      Java Technology Stack Intern
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                      Backend development experience focused on building REST
                      APIs, integrating relational databases, implementing
                      authentication, and working within a collaborative
                      development workflow.
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                    Completed
                  </div>
                </div>

                {/* Project context */}
                <motion.div
                  variants={itemVariants}
                  className="mt-10 border border-white/[0.07] bg-white/[0.015] p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-blue-400">
                        Team Project
                      </p>

                      <h4 className="mt-2 text-lg font-medium text-white">
                        Legal Aid Matching Platform
                      </h4>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                        A team-based platform designed to connect users with
                        appropriate legal assistance while supporting case
                        management and role-based access.
                      </p>
                    </div>

                    <span className="flex shrink-0 items-center gap-2 text-xs text-slate-600">
                      <ArrowUpRight size={14} />
                      Backend contribution
                    </span>
                  </div>
                </motion.div>

                {/* Contributions */}
                <div className="mt-10">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-slate-600">
                    Engineering contributions
                  </p>

                  <motion.div
                    variants={containerVariants}
                    className="grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2"
                  >
                    {contributions.map((item) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          variants={itemVariants}
                          className="group bg-[#080b14] p-5 transition-colors duration-300 hover:bg-white/[0.025] sm:p-6"
                        >
                          <div className="flex gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.08] text-slate-500 transition-colors duration-300 group-hover:border-blue-400/30 group-hover:text-blue-300">
                              <Icon
                                size={16}
                                strokeWidth={1.5}
                              />
                            </div>

                            <div>
                              <h5 className="text-sm font-medium text-slate-200">
                                {item.title}
                              </h5>

                              <p className="mt-2 text-sm leading-6 text-slate-500">
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
                  variants={itemVariants}
                  className="mt-10"
                >
                  <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-slate-600">
                    Technology stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-2 border border-white/[0.08] px-3 py-2 text-xs text-slate-400 transition-colors duration-300 hover:border-blue-400/30 hover:text-slate-200"
                      >
                        <CheckCircle2
                          size={12}
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
          </div>

          {/* Bottom summary */}
          <motion.div
            {...reveal}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="mt-12 flex flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              Backend development · API engineering · Database integration
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Java Technology Stack
            </span>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Experience;