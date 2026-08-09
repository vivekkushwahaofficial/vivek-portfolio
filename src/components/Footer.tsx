import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { SiGithub } from "react-icons/si";


const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

const sectionIds = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling and update navbar appearance.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect the currently visible section.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Close mobile menu.
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
        aria-label="Primary navigation"
      >
        <div
          className={[
            "mx-auto flex max-w-6xl items-center justify-between",
            "rounded-2xl border px-4 py-3 transition-all duration-500",
            scrolled
              ? "border-white/[0.10] bg-[#080808]/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          ].join(" ")}
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3 rounded-lg px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Vivek Kumar home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <span className="text-sm font-bold tracking-tight text-white">
                V
              </span>

              <span className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 transition-transform duration-300 group-hover:scale-x-125" />
            </span>

            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              VIVEK
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className="relative rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {section.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-cyan-400"
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            {/* GitHub */}
            <a
              href="https://github.com/Vivekkushwahaofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Vivek's GitHub"
              className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <SiGithub
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              <span>GitHub</span>
            </a>

            {/* Resume */}
            <a
              href="/src/assets/Vivek_Kushwaha.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FileText
                size={15}
                strokeWidth={1.8}
              />

              <span>Resume</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setOpen((previous) => !previous)
            }
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    rotate: -45,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 45,
                    opacity: 0,
                  }}
                >
                  <X size={21} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    rotate: 45,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -45,
                    opacity: 0,
                  }}
                >
                  <Menu size={21} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/[0.10] bg-[#080808]/95 backdrop-blur-xl md:hidden"
            >
              <div className="p-3">
                {/* Availability */}
                <div className="mb-3 flex items-center gap-2 px-3 py-2 text-xs text-zinc-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  Available for opportunities
                </div>

                {/* Navigation Links */}
                {sections.map((section, index) => {
                  const isActive =
                    active === section.id;

                  return (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                      className={[
                        "flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors",
                        isActive
                          ? "bg-white/[0.05] text-white"
                          : "text-zinc-400 hover:bg-white/[0.03] hover:text-white",
                      ].join(" ")}
                    >
                      <span>{section.label}</span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      )}
                    </motion.a>
                  );
                })}

                <div className="my-2 h-px bg-white/[0.06]" />

                {/* Mobile GitHub */}
                <a
                  href="https://github.com/Vivekkushwahaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/[0.03] hover:text-white"
                >
                  <SiGithub size={17} />

                  <span>GitHub</span>

                  <ArrowUpRight
                    className="ml-auto"
                    size={15}
                  />
                </a>

                {/* Mobile Resume */}
                <a
                  href="/src/assets/Vivek_Kushwaha.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-1 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-medium text-white"
                >
                  <FileText size={17} />

                  <span>View Resume</span>

                  <ArrowUpRight
                    className="ml-auto"
                    size={15}
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