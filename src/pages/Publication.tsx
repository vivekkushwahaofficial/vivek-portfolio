import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

function Research() {
  const reducedMotion = useReducedMotion();

  const revealTransition = {
    duration: reducedMotion ? 0 : 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const technologies = [
    "MERN Stack",
    "QR Technology",
    "Google Maps API",
    "Peer-to-Peer",
    "Micro-Mobility",
  ];

  return (
    <ScrollReveal>
      <section
        id="publications"
        aria-labelledby="publications-heading"
        className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
      >
        {/* =====================================================
            Ambient background
        ====================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[12%] top-[20%] h-48 w-48 rounded-full bg-cyan-500/[0.015] blur-3xl sm:h-64 sm:w-64" />

          <div className="absolute bottom-[10%] right-[12%] h-48 w-48 rounded-full bg-blue-500/[0.015] blur-3xl sm:h-64 sm:w-64" />

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
        ====================================================== */}

        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16 xl:px-16">
          {/* ===================================================
              Section marker
          ==================================================== */}

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
            <span className="font-mono text-[10px] font-medium tracking-[0.28em] text-cyan-400 sm:text-[11px]">
              04
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-cyan-400/50 sm:w-12"
            />

            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:text-[11px] sm:tracking-[0.28em]">
              Publications
            </span>
          </motion.div>

          {/* ===================================================
              Header
          ==================================================== */}

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
              <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-cyan-400 sm:mb-4 sm:text-xs">
                Academic work
              </p>

              <h2
                id="publications-heading"
                className="max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                Publications.
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
              Co-authored publication on a peer-to-peer bike rental platform
              using web technologies, QR technology, and location services.
            </motion.p>
          </div>

          {/* ===================================================
              Publication
          ==================================================== */}

          <motion.article
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
              amount: 0.12,
            }}
            transition={{
              ...revealTransition,
              delay: reducedMotion ? 0 : 0.1,
            }}
            className="mt-8 border-y border-white/[0.08] py-6 sm:mt-10 sm:py-8 lg:mt-12 lg:py-10"
          >
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
              {/* =================================================
                  Publication information
              ================================================== */}

              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-400/20 bg-cyan-400/[0.03] text-cyan-300">
                    <BookOpen size={16} strokeWidth={1.5} />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                    Co-authored Publication
                  </span>
                </div>

                <h3 className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                  Q-R powered website for fast bike rental and earn by renting
                  bikes (RideOn)
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  Co-authored research on a peer-to-peer bike rental platform
                  using the MERN stack, QR-code technology, and Google Maps API
                  for location-based services.
                </p>

                {/* =================================================
                    Publication metadata
                ================================================== */}

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-slate-500 sm:text-xs">
                  <span>IJAESTR</span>

                  <span
                    aria-hidden="true"
                    className="text-slate-700"
                  >
                    ·
                  </span>

                  <span>Vol. 11 · Issue 4</span>

                  <span
                    aria-hidden="true"
                    className="text-slate-700"
                  >
                    ·
                  </span>

                  <span>Oct–Dec 2025</span>

                  <span
                    aria-hidden="true"
                    className="text-slate-700"
                  >
                    ·
                  </span>

                  <span>pp. 15–18</span>
                </div>
              </div>

              {/* =================================================
                  Publication link
              ================================================== */}

              <div className="lg:pt-1">
                <a
                  href="https://ijaestr.org/online.aspx?IssueID=116&vid=13"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View RideOn publication"
                  className="group inline-flex w-full items-center justify-between gap-4 border border-white/[0.10] px-4 py-3 text-xs text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:w-auto sm:px-5 sm:py-3.5"
                >
                  <span>View Publication</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                Technical focus
            ================================================== */}

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
                amount: 0.12,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.45,
              }}
              className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/[0.08] px-3 py-1.5 text-[10px] text-slate-500 transition-colors duration-300 hover:border-cyan-400/25 hover:text-slate-300 sm:text-xs"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </motion.article>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Research;