import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Send,
} from "lucide-react";
import { SiGithub, SiGitlab } from "react-icons/si";
import { useState } from "react";

const EMAIL = "vivek39101@gmail.com";

const PROFILE_LINKS = [
  {
    label: "GitHub",
    value: "vivekkushwa​haofficial",
    href: "https://github.com/vivekkushwa​haofficial",
    icon: SiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "vivekkushwa​haofficial",
    href: "https://www.linkedin.com/in/vivekkushwa​haofficial/",
    icon: "linkedin",
    external: true,
  },
  {
    label: "GitLab",
    value: "vivekkushwa​haofficial",
    href: "https://gitlab.com/vivekkushwa​haofficial",
    icon: SiGitlab,
    external: true,
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    external: false,
  },
];

/* ================================================================
   LinkedIn Icon
================================================================ */

function LinkedInIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46Z" />
    </svg>
  );
}

/* ================================================================
   Profile Icon
================================================================ */

function ContactIcon({ icon: Icon }) {
  if (Icon === "linkedin") {
    return <LinkedInIcon size={17} />;
  }

  return <Icon size={17} strokeWidth={1.5} />;
}

/* ================================================================
   Contact
================================================================ */

function Contact() {
  const reducedMotion = useReducedMotion();

  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* ==============================================================
     Animation
  ============================================================== */

  const reveal = {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 28,
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

  /* ==============================================================
     Copy Email
  ============================================================== */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  /* ==============================================================
     Form Change
  ============================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  /* ==============================================================
     Form Submit
  ============================================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact — ${name}`
    );

    const body = encodeURIComponent(
      `Hello Vivek,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from your portfolio website.`
    );

    const mailtoUrl = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);

    window.location.href = mailtoUrl;
  };

  return (
    <main
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[8%] top-[16%] h-72 w-72 rounded-full bg-blue-500/[0.035] blur-3xl" />

        <div className="absolute bottom-[8%] right-[6%] h-80 w-80 rounded-full bg-violet-500/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* ==========================================================
            SECTION MARKER
        ========================================================== */}

        <motion.div
          {...reveal}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mb-14 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-blue-400">
            05
          </span>

          <span
            aria-hidden="true"
            className="h-px w-12 bg-blue-400/50"
          />

          <span className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
            Contact
          </span>
        </motion.div>

        {/* ==========================================================
            HERO + FORM
        ========================================================== */}

        <div className="grid gap-16 lg:grid-cols-[1fr_0.72fr] lg:gap-24">

          {/* ========================================================
              LEFT
          ======================================================== */}

          <div>
            <motion.h2
              id="contact-heading"
              {...reveal}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="max-w-4xl text-[clamp(3.2rem,7vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em] text-white"
            >
              Let&apos;s build something{" "}
              <span className="text-slate-500">
                meaningful.
              </span>
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: "easeOut",
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              Open to software engineering opportunities,
              backend systems, developer tools and
              AI-powered applications.
            </motion.p>

            {/* Direct email */}

            <motion.div
              {...reveal}
              transition={{
                duration: 0.7,
                delay: 0.26,
                ease: "easeOut",
              }}
              className="mt-12 border-y border-white/[0.08] py-6"
            >
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-slate-600">
                Prefer email?
              </p>

              <div className="flex flex-wrap items-center gap-3">

                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex min-w-0 items-center gap-3 text-lg text-slate-200 transition-colors duration-300 hover:text-white sm:text-xl"
                  aria-label={`Send an email to ${EMAIL}`}
                >
                  <Mail
                    size={19}
                    strokeWidth={1.5}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="truncate">
                    {EMAIL}
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 text-slate-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </a>

                <motion.button
                  type="button"
                  onClick={copyEmail}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { scale: 1.05 }
                  }
                  whileTap={
                    reducedMotion
                      ? undefined
                      : { scale: 0.95 }
                  }
                  aria-label={
                    copied
                      ? "Email copied"
                      : "Copy email address"
                  }
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.09] text-slate-500 transition-colors duration-300 hover:border-blue-400/40 hover:bg-blue-400/[0.06] hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  {copied ? (
                    <Check
                      size={15}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <Copy
                      size={15}
                      strokeWidth={1.8}
                    />
                  )}
                </motion.button>
              </div>

              <p
                className={`mt-3 text-xs transition-opacity duration-300 ${copied
                    ? "text-blue-400 opacity-100"
                    : "pointer-events-none opacity-0"
                  }`}
                aria-live="polite"
              >
                Email copied to clipboard
              </p>
            </motion.div>
          </div>

          {/* ========================================================
              CONTACT FORM
          ======================================================== */}

          <motion.div
            {...reveal}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0a0f1b]/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)] sm:p-8"
            >
              {/* subtle top accent */}

              <div
                aria-hidden="true"
                className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
              />

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400">
                  Start a conversation
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-tight text-white">
                  Send me a message.
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tell me what you&apos;re building, what you&apos;re
                  looking for, or how we can work together.
                </p>
              </div>

              <div className="space-y-5">

                {/* Name */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-slate-400"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-[#070b14] px-4 py-3.5 text-sm text-white placeholder:text-slate-700 outline-none transition-all duration-300 hover:border-white/[0.14] focus:border-blue-400/40 focus:bg-[#090f1b] focus:ring-2 focus:ring-blue-400/[0.08]"
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-slate-400"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-[#070b14] px-4 py-3.5 text-sm text-white placeholder:text-slate-700 outline-none transition-all duration-300 hover:border-white/[0.14] focus:border-blue-400/40 focus:bg-[#090f1b] focus:ring-2 focus:ring-blue-400/[0.08]"
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium text-slate-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#070b14] px-4 py-3.5 text-sm leading-6 text-white placeholder:text-slate-700 outline-none transition-all duration-300 hover:border-white/[0.14] focus:border-blue-400/40 focus:bg-[#090f1b] focus:ring-2 focus:ring-blue-400/[0.08]"
                  />
                </div>

                {/* Submit */}

                <motion.button
                  type="submit"
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                        y: -2,
                      }
                  }
                  whileTap={
                    reducedMotion
                      ? undefined
                      : {
                        scale: 0.98,
                      }
                  }
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-slate-950 transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                >
                  {submitted
                    ? "Opening email client..."
                    : "Send Message"}

                  <Send
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-center text-[11px] leading-5 text-slate-600">
                  Submitting opens your default email client.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ==========================================================
            PROFESSIONAL LINKS
        ========================================================== */}

        <motion.div
          {...reveal}
          transition={{
            duration: 0.7,
            delay: 0.34,
            ease: "easeOut",
          }}
          className="mt-20 border-t border-white/[0.08]"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {PROFILE_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.external ? "_blank" : undefined
                }
                rel={
                  link.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group relative flex min-h-32 items-center justify-between border-b border-white/[0.08] py-7 transition-colors duration-300 hover:bg-white/[0.018] focus:outline-none focus-visible:bg-white/[0.025] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400/50 sm:px-5 lg:min-h-36 ${index < PROFILE_LINKS.length - 1
                    ? "lg:border-r lg:border-white/[0.08]"
                    : ""
                  }`}
                aria-label={`${link.label}: ${link.value}${link.external
                    ? " (opens in a new tab)"
                    : ""
                  }`}
              >
                <div className="flex min-w-0 items-center gap-4">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-slate-500 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/[0.04] group-hover:text-blue-300">
                    <ContactIcon icon={link.icon} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-600">
                      {link.label}
                    </p>

                    <p className="mt-1 max-w-[190px] truncate text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      {link.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="ml-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ==========================================================
            FOOTER STATUS
        ========================================================== */}

        <motion.div
          {...reveal}
          transition={{
            duration: 0.7,
            delay: 0.42,
            ease: "easeOut",
          }}
          className="mt-14 flex flex-col gap-4 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            Java · Spring Boot · AI · Open Source
          </span>

          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
            />

            Available for opportunities
          </span>
        </motion.div>
      </div>
    </main>
  );
}

export default Contact;