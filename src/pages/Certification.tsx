import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

import javaCert from "../assets/certificates/java_certification.pdf";
import programmingJavaCert from "../assets/certificates/Programming in Java.pdf";
import fullStackCert from "../assets/certificates/fullstack_certification.pdf";

interface CertificationItem {
  number: string;
  title: string;
  provider: string;
  date: string;
  description: string;
  certificate: string;
  type: string;
  score?: string;
}

const certifications: CertificationItem[] = [
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
    certificate: programmingJavaCert,
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

function Certification() {
  const reducedMotion = useReducedMotion();

  const revealTransition = {
    duration: reducedMotion ? 0 : 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <ScrollReveal>
      <section
        id="certifications"
        aria-labelledby="certifications-heading"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
      >
        {/* =====================================================
            Ambient background
            ===================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute right-[12%] top-[18%] h-48 w-48 rounded-full bg-blue-500/[0.02] blur-3xl sm:h-64 sm:w-64" />

          <div className="absolute bottom-[10%] left-[8%] h-44 w-44 rounded-full bg-violet-500/[0.016] blur-3xl sm:h-56 sm:w-56" />

          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* =====================================================
            Container
            ===================================================== */}

        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-16">
          {/* =====================================================
              Section marker
              ===================================================== */}

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
            className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4"
          >
            <span className="font-mono text-[10px] font-medium tracking-[0.28em] text-blue-400 sm:text-[11px]">
              04
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-blue-400/50 sm:w-12"
            />

            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:text-[11px] sm:tracking-[0.28em]">
              Certifications
            </span>
          </motion.div>

          {/* =====================================================
              Heading
              ===================================================== */}

          <div className="grid gap-5 sm:gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 16,
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
                Verified learning
              </p>

              <h2
                id="certifications-heading"
                className="max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Proof of
                <span className="block text-slate-500">
                  continuous learning.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 16,
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
                delay: reducedMotion ? 0 : 0.08,
              }}
              className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7 lg:self-end lg:text-lg"
            >
              Certifications that support my work across Java,
              backend engineering, and full-stack application
              development.
            </motion.p>
          </div>

          {/* =====================================================
              Certification list
              ===================================================== */}

          <div className="mt-8 border-t border-white/[0.08] sm:mt-10 lg:mt-12">
            {certifications.map((certification, index) => (
              <motion.article
                key={certification.number}
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
                  amount: 0.08,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-b border-white/[0.08]"
              >
                <div className="grid gap-4 py-5 sm:gap-6 sm:py-6 lg:grid-cols-[56px_minmax(0,1fr)_auto] lg:items-center lg:gap-7 lg:py-7">
                  {/* Number */}

                  <div className="hidden lg:block">
                    <span className="font-mono text-xs tracking-[0.18em] text-slate-600 transition-colors duration-300 group-hover:text-blue-400">
                      {certification.number}
                    </span>
                  </div>

                  {/* Certification information */}

                  <div className="min-w-0">
                    {/* Provider + date */}

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
                        {certification.provider}
                      </span>

                      <span
                        aria-hidden="true"
                        className="hidden h-px w-5 bg-white/[0.12] sm:block"
                      />

                      <span className="text-[10px] text-slate-600 sm:text-xs">
                        {certification.date}
                      </span>
                    </div>

                    {/* Title + description */}

                    <div className="mt-2.5 flex items-start gap-3 sm:gap-4">
                      <div className="mt-1 hidden h-8 w-8 shrink-0 items-center justify-center border border-white/[0.08] text-slate-500 sm:flex">
                        <Award
                          size={15}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-medium leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-blue-100 sm:text-xl lg:text-2xl">
                          {certification.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                          {certification.description}
                        </p>

                        {/* Tags */}

                        <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
                          <span className="inline-flex items-center gap-1.5 border border-white/[0.08] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.14em] text-slate-500 sm:px-3 sm:text-[10px]">
                            <CheckCircle2
                              size={11}
                              strokeWidth={1.5}
                              className="text-emerald-400/70"
                            />

                            {certification.type}
                          </span>

                          {certification.score && (
                            <span className="border border-blue-400/15 bg-blue-400/[0.03] px-2.5 py-1.5 text-[9px] uppercase tracking-[0.14em] text-blue-300 sm:px-3 sm:text-[10px]">
                              Score {certification.score}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate action */}

                  <div className="flex items-center justify-between gap-4 pt-1 sm:justify-end lg:pt-0">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-slate-700 sm:text-[10px]">
                      Certificate
                    </span>

                    <a
                      href={certification.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certification.title} certificate`}
                      className="group/action inline-flex min-h-10 items-center gap-2 border border-white/[0.09] px-3.5 py-2.5 text-[11px] font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-blue-400/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:gap-2.5 sm:px-4 sm:text-xs"
                    >
                      <ExternalLink
                        size={13}
                        strokeWidth={1.5}
                      />

                      <span>View</span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>

                {/* Hover indicator */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-20 sm:group-hover:w-24"
                />
              </motion.article>
            ))}
          </div>

          {/* =====================================================
              Bottom verification note
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
            transition={{
              duration: reducedMotion ? 0 : 0.5,
            }}
            className="mt-5 flex flex-col gap-2 text-[10px] leading-5 text-slate-600 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:text-xs"
          >
            <span>
              Java · Full Stack · Backend Engineering
            </span>

            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]"
              />

              Certificates available for verification
            </span>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Certification;