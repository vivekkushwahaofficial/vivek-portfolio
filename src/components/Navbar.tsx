import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

import resume from "../assets/Vivek_Kushwaha.pdf";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "certifications",
  "projects",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const reducedMotion = useReducedMotion();

  /* =========================================================
     Scroll state
     ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     Active section
     ========================================================= */

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const updateActiveSection = () => {
      const navbarOffset = 120;

      let currentSection = "home";

      for (const section of elements) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarOffset) {
          currentSection = section.id;
        }
      }

      setActive(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /* =========================================================
     Lock body while mobile menu is open
     ========================================================= */

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /* =========================================================
     Escape key
     ========================================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  /* =========================================================
     Close mobile menu
     ========================================================= */

  const closeMenu = () => {
    setOpen(false);
  };

  /* =========================================================
     Navigation
     ========================================================= */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    setOpen(false);
    setActive(id);

    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      {/* =====================================================
          Primary navbar
          ===================================================== */}

      <motion.nav
        initial={{
          opacity: reducedMotion ? 1 : 0,
          y: reducedMotion ? 0 : -14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
        aria-label="Primary navigation"
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between",
            "rounded-xl border px-3 py-2",
            "transition-all duration-300",
            "sm:rounded-2xl sm:px-4 sm:py-2.5",
            scrolled
              ? "border-white/[0.10] bg-[#080808]/85 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          ].join(" ")}
        >
          {/* =================================================
              Brand
              ================================================= */}

          <a
            href="#home"
            onClick={(event) =>
              handleNavigation(event, "home")
            }
            className="group flex shrink-0 items-center gap-2 rounded-lg px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:gap-3"
            aria-label="Vivek Kumar — Home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <span className="text-sm font-bold tracking-tight text-white">
                V
              </span>

              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 transition-transform duration-300 group-hover:scale-x-125"
              />
            </span>

            <span className="hidden text-sm font-semibold tracking-[0.14em] text-white sm:block">
              VIVEK
            </span>
          </a>

          {/* =================================================
              Desktop navigation
              ================================================= */}

          <div className="hidden items-center gap-0.5 lg:flex">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(event) =>
                    handleNavigation(event, section.id)
                  }
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={[
                    "relative rounded-lg px-2.5 py-2",
                    "text-[13px] transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white",
                  ].join(" ")}
                >
                  {section.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      aria-hidden="true"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-cyan-400"
                      transition={{
                        duration: reducedMotion ? 0 : 0.2,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* =================================================
              Desktop actions
              ================================================= */}

          <div className="hidden items-center gap-1.5 lg:flex">
            <a
              href="https://github.com/Vivekkushwahaofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Vivek's GitHub profile"
              className="group inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <SiGithub
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              <span>GitHub</span>
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Vivek's resume"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FileText
                size={15}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>Resume</span>

              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* =================================================
              Mobile menu button
              ================================================= */}

          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:h-10 sm:w-10 lg:hidden"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: reducedMotion ? 0 : -35,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: reducedMotion ? 0 : 35,
                  }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: reducedMotion ? 0 : 35,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: reducedMotion ? 0 : -35,
                  }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* =====================================================
            Mobile navigation
            ===================================================== */}

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
                y: reducedMotion ? 0 : -6,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: reducedMotion ? 0 : -6,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-xl border border-white/[0.10] bg-[#080808]/95 shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-2xl lg:hidden"
            >
              <div className="p-2.5 sm:p-3">
                {/* Availability */}

                <div className="mb-2 flex items-center gap-2 px-3 py-1.5 text-[11px] text-zinc-500 sm:mb-3 sm:py-2 sm:text-xs">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  Available for opportunities
                </div>

                {/* Navigation */}

                {sections.map((section, index) => {
                  const isActive = active === section.id;

                  return (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(event) =>
                        handleNavigation(event, section.id)
                      }
                      initial={{
                        opacity: 0,
                        x: reducedMotion ? 0 : -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.2,
                        delay: reducedMotion
                          ? 0
                          : index * 0.025,
                      }}
                      className={[
                        "flex min-h-10 items-center justify-between rounded-xl px-3 py-2 text-sm",
                        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                        isActive
                          ? "bg-white/[0.05] text-white"
                          : "text-zinc-400 hover:bg-white/[0.03] hover:text-white",
                      ].join(" ")}
                    >
                      <span>{section.label}</span>

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        />
                      )}
                    </motion.a>
                  );
                })}

                <div
                  aria-hidden="true"
                  className="my-2 h-px bg-white/[0.06]"
                />

                {/* GitHub */}

                <a
                  href="https://github.com/Vivekkushwahaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex min-h-10 items-center gap-3 rounded-xl px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <SiGithub
                    size={17}
                    aria-hidden="true"
                  />

                  <span>GitHub</span>

                  <ArrowUpRight
                    className="ml-auto"
                    size={15}
                    aria-hidden="true"
                  />
                </a>

                {/* Resume */}

                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-1 flex min-h-10 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white transition-colors hover:border-cyan-400/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <FileText
                    size={17}
                    aria-hidden="true"
                  />

                  <span>View Resume</span>

                  <ArrowUpRight
                    className="ml-auto"
                    size={15}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;