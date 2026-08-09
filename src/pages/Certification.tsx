import {
  motion,
  useReducedMotion,
  type Variants,
}
  from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

import javaCert from "../assets/certificates/java_certification.pdf";
import fullStackCert from "../assets/certificates/fullstack_certification.pdf";

const certifications = [
  {
    number: "01",
    title: "Java Foundation Certification",
    provider: "Infosys Springboard",
    date: "Dec 2025",
    description:
      "Completed Java Foundation Certification covering Core Java, object-oriented programming, and backend development fundamentals.",
    certificate: javaCert,
    type: "Foundation",
  },
  {
    number: "02",
    title: "Programming in Java",
    provider: "NPTEL",
    date: "Jan – Apr 2026",
    description:
      "Completed a 12-week Programming in Java course covering Core Java, object-oriented programming, exception handling, collections, and backend fundamentals.",
    certificate: javaCert,
    type: "12 Week Course",
    score: "80%",
  },
  {
    number: "03",
    title: "Building Full-Stack Apps with React and Spring",
    provider: "LinkedIn Learning",
    date: "Feb 2026",
    description:
      "Completed training focused on building end-to-end full-stack applications using React and Spring.",
    certificate: fullStackCert,
    type: "Learning",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Certification() {
  const reducedMotion = useReducedMotion();

  return (
    <ScrollReveal>
      <section
        id="certifications"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-blue-500/[0.025] blur-3xl" />

          <div className="absolute bottom-[10%] left-[8%] h-64 w-64 rounded-full bg-violet-500/[0.018] blur-3xl" />

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
          {/* Section marker */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-16 flex items-center gap-4"
          >
            <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-blue-400">
              04
            </span>

            <span
              aria-hidden="true"
              className="h-px w-12 bg-blue-400/50"
            />

            <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Certifications
            </span>
          </motion.div>

          {/* Heading */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 24,
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
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-blue-400">
                Verified learning
              </p>

              <h2 className="max-w-xl text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Proof of
                <span className="block text-slate-500">
                  continuous learning.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 24,
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
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-2xl self-end text-base leading-8 text-slate-400 sm:text-lg"
            >
              Certifications that support my work across Java, backend
              engineering, and full-stack application development.
            </motion.p>
          </div>

          {/* Certification list */}
          <motion.div
            variants={containerVariants}
            initial={reducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-20 border-t border-white/[0.08]"
          >
            {certifications.map((certification) => (
              <motion.article
                key={certification.number}
                variants={itemVariants}
                className="group relative border-b border-white/[0.08]"
              >
                <div className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[72px_minmax(0,1fr)_auto] lg:items-center lg:gap-10">
                  {/* Number */}
                  <div className="hidden lg:block">
                    <span className="font-mono text-xs tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:text-blue-400">
                      {certification.number}
                    </span>
                  </div>

                  {/* Main information */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
                        {certification.provider}
                      </span>

                      <span
                        aria-hidden="true"
                        className="hidden h-px w-5 bg-white/[0.12] sm:block"
                      />

                      <span className="text-xs text-slate-600">
                        {certification.date}
                      </span>
                    </div>

                    <div className="mt-3 flex items-start gap-4">
                      <div className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center border border-white/[0.08] text-slate-500 sm:flex">
                        <Award
                          size={17}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-blue-100 sm:text-2xl">
                          {certification.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                          {certification.description}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-2 border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                            <CheckCircle2
                              size={12}
                              strokeWidth={1.5}
                              className="text-emerald-400/70"
                            />
                            {certification.type}
                          </span>

                          {certification.score && (
                            <span className="border border-blue-400/15 bg-blue-400/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-blue-300">
                              Score {certification.score}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate action */}
                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-700">
                      Certificate
                    </span>

                    <a
                      href={certification.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="group/action inline-flex items-center gap-3 border border-white/[0.09] px-4 py-3 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-blue-400/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                      aria-label={`View ${certification.title} certificate`}
                    >
                      <ExternalLink
                        size={14}
                        strokeWidth={1.5}
                      />

                      <span>View</span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>

                {/* Hover indicator */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-24"
                />
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-10 flex flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              Java · Full Stack · Backend Engineering
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]" />
              Certificates available for verification
            </span>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Certification;