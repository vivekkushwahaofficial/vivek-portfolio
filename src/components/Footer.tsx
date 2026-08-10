import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Heart, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import profileImg from "../assets/profile.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Vivekkushwahaofficial",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivekkushwahaofficial/",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:vivek39101@gmail.com",
    icon: Mail,
  },
];

function LinkedInIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46Z" />
    </svg>
  );
}

function Footer() {
  const reducedMotion = useReducedMotion();

  const handleInternalNavigation = (
    event: React.MouseEvent,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070b]">
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main footer area */}
        <div className="grid min-w-0 gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-16">
          {/* Brand / closing statement */}
          <div className="min-w-0">
            <a
              href="#home"
              onClick={(event) =>
                handleInternalNavigation(event, "#home")
              }
              className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              aria-label="Back to home"
            >
              {/* Profile image */}
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.035]">
                <img
                  src={profileImg}
                  alt="Vivek"
                  className="h-full w-full object-cover"
                />

                <span
                  aria-hidden="true"
                  className="absolute bottom-1.5 left-2 right-2 h-px bg-blue-400/70 transition-transform duration-300 group-hover:scale-x-125"
                />
              </span>

              <span className="text-sm font-semibold tracking-[0.16em] text-white">
                VIVEK
              </span>
            </a>

            <p className="mt-6 max-w-xl text-2xl font-medium leading-tight tracking-[-0.025em] text-white sm:mt-7 sm:text-3xl">
              Building software with{" "}
              <span className="text-slate-500">
                purpose.
              </span>
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:mt-5 sm:leading-7">
              Java · Spring Boot · AI · Open Source
            </p>
          </div>

          {/* Navigation + socials */}
          <div className="grid min-w-0 gap-9 sm:grid-cols-2 sm:gap-10 lg:max-w-[430px] lg:justify-self-end lg:min-w-0">
            <div className="min-w-0">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
                Navigate
              </p>

              <nav aria-label="Footer navigation">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-x-5">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(event) =>
                          handleInternalNavigation(
                            event,
                            link.href
                          )
                        }
                        className="group inline-flex items-center gap-1.5 py-1 text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                      >
                        <span>{link.label}</span>

                        <ArrowUpRight
                          size={12}
                          className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="min-w-0">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
                Connect
              </p>

              <ul className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("mailto:")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          link.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="group inline-flex min-h-10 max-w-full items-center gap-2.5 text-sm text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:min-h-9"
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.6}
                          className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                        />

                        <span className="truncate">
                          {link.label}
                        </span>

                        <ArrowUpRight
                          size={12}
                          className="shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="flex min-w-0 flex-col gap-4 border-t border-white/[0.07] py-5 text-[10px] leading-5 text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-xs">
          <p className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1">
            <span>Designed &amp; built by Vivek</span>

            <span aria-hidden="true">·</span>

            <span>© 2026</span>
          </p>

          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Heart
                size={11}
                strokeWidth={1.5}
                className="shrink-0 text-slate-700"
              />

              Software engineering
            </span>

            <span className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
              />

              System operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;