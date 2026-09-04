import { useState } from "react";
import type { ElementType, ChangeEvent, FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import SectionRail from "../components/SectionRail";

import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Send,
} from "lucide-react";
import { SiGithub, SiGitlab, SiX } from "react-icons/si";

const EMAIL = "vivekkushwaha.tech@zohomail.in";

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const PROFILE_LINKS: { label: string; value: string; href: string; icon: ElementType }[] = [
  {
    label: "GitHub",
    value: "vivekkushwahaofficial",
    href: "https://github.com/vivekkushwahaofficial",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    value: "vivekkushwahaofficial",
    href: "https://www.linkedin.com/in/vivekkushwahaofficial/",
    icon: LinkedInIcon,
  },
  {
    label: "GitLab",
    value: "vivekkushwahaofficial",
    href: "https://gitlab.com/vivekkushwahaofficial",
    icon: SiGitlab,
  },
  {
    label: "X",
    value: "@iamvivek_tech",
    href: "https://x.com/iamvivek_tech",
    icon: SiX,
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
];

function LinkedInIcon({ size = 16 }: { size?: number }) {
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

function ContactIcon({ icon: Icon }: { icon: ElementType }) {
  return <Icon size={16} strokeWidth={1.5} />;
}

function Contact() {
  const reducedMotion = useReducedMotion();

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reveal = {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 16,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.12,
    },
  };

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

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitError(
        "Contact form is temporarily unavailable. Please email me directly.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const formPayload = new FormData(event.currentTarget);

      formPayload.set("name", name);
      formPayload.set("email", email);
      formPayload.set("message", message);

      formPayload.set(
        "access_key",
        WEB3FORMS_ACCESS_KEY,
      );

      formPayload.set(
        "subject",
        `Portfolio Contact — ${name}`,
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formPayload,
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message.",
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      window.setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(
        "Web3Forms submission error:",
        error,
      );

      setSubmitError(
        "Something went wrong. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#080b14]"
    >
      <SectionRail />
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[5%] top-[15%] h-32 w-32 rounded-full bg-blue-500/[0.025] blur-3xl sm:h-56 sm:w-56" />

        <div className="absolute bottom-[5%] right-[5%] h-36 w-36 rounded-full bg-violet-500/[0.02] blur-3xl sm:h-64 sm:w-64" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-12
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        {/* Section label */}
        <motion.div
          {...reveal}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            ease: "easeOut",
          }}
          className="mb-8 flex items-center gap-3 sm:mb-10"
        >
          <span className="font-mono text-[10px] tracking-[0.28em] text-blue-400">
            06
          </span>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-blue-400/50 sm:w-12"
          />

          <span className="text-[10px] uppercase tracking-[0.26em] text-slate-500">
            Contact
          </span>
        </motion.div>

        {/* Main content */}
        <div
          className="
            grid
            items-start
            gap-10
            sm:gap-12
            lg:grid-cols-[1fr_0.7fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* Left */}
          <div className="min-w-0">
            <motion.h2
              id="contact-heading"
              {...reveal}
              transition={{
                duration: reducedMotion ? 0 : 0.65,
                delay: reducedMotion ? 0 : 0.04,
                ease: "easeOut",
              }}
              className="
                max-w-3xl
                text-[clamp(2.45rem,9vw,4.75rem)]
                font-medium
                leading-[0.94]
                tracking-[-0.05em]
                text-white
                sm:text-[clamp(2.8rem,5vw,4.75rem)]
              "
            >
              Let's build something{" "}
              <span className="text-slate-500">
                meaningful.
              </span>
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                delay: reducedMotion ? 0 : 0.1,
                ease: "easeOut",
              }}
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-6
                text-slate-400
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              Open to software engineering opportunities,
              backend systems, developer tools and AI-powered
              applications.
            </motion.p>

            {/* Email */}
            <motion.div
              {...reveal}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                delay: reducedMotion ? 0 : 0.15,
                ease: "easeOut",
              }}
              className="
                mt-7
                max-w-2xl
                border-y
                border-white/[0.08]
                py-5
                sm:mt-8
                sm:py-6
              "
            >
              <p className="mb-2.5 text-[10px] uppercase tracking-[0.24em] text-slate-600">
                Prefer email?
              </p>

              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="
                    group
                    flex
                    min-w-0
                    flex-1
                    items-center
                    gap-2
                    text-sm
                    text-slate-200
                    transition-colors
                    duration-300
                    hover:text-white
                    sm:gap-2.5
                    sm:text-base
                  "
                  aria-label={`Send an email to ${EMAIL}`}
                >
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="min-w-0 truncate">
                    {EMAIL}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      shrink-0
                      text-slate-600
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-white
                    "
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
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.09]
                    text-slate-500
                    transition-colors
                    duration-300
                    hover:border-blue-400/40
                    hover:bg-blue-400/[0.05]
                    hover:text-blue-300
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400/50
                    sm:h-9
                    sm:w-9
                  "
                >
                  {copied ? (
                    <Check size={14} />
                  ) : (
                    <Copy size={14} />
                  )}
                </motion.button>
              </div>

              <p
                aria-live="polite"
                className={`mt-2 text-[11px] text-blue-400 transition-opacity duration-300 ${copied
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
                  }`}
              >
                Email copied to clipboard
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              {...reveal}
              transition={{
                duration: reducedMotion ? 0 : 0.5,
                delay: reducedMotion ? 0 : 0.2,
                ease: "easeOut",
              }}
              className="
                mt-5
                flex
                items-start
                gap-2.5
                text-[11px]
                leading-5
                text-slate-600
                sm:items-center
              "
            >
              <span
                aria-hidden="true"
                className="
                  mt-1.5
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_8px_rgba(52,211,153,0.5)]
                  sm:mt-0
                "
              />

              <span>
                Available for software engineering opportunities
              </span>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            {...reveal}
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              delay: reducedMotion ? 0 : 0.1,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            <form
              onSubmit={handleSubmit}
              className="
                relative
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0a0f1b]/90
                p-4
                shadow-[0_18px_50px_rgba(0,0,0,0.16)]
                transition-colors
                duration-300
                hover:border-white/[0.12]
                sm:p-6
                lg:p-7
              "
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-4
                  right-4
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400/60
                  to-transparent
                  sm:left-6
                  sm:right-6
                "
              />

              {/* Header */}
              <div className="mb-5 sm:mb-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400">
                  Start a conversation
                </p>

                <h3 className="mt-2.5 text-lg font-medium tracking-tight text-white sm:text-xl">
                  Send me a message.
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                  Tell me what you're building or how we can
                  work together.
                </p>
              </div>

              {/* Fields */}
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-medium text-slate-400"
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
                    className="
                      min-h-11
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070b14]
                      px-4
                      py-2.5
                      text-sm
                      text-white
                      placeholder:text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      hover:border-white/[0.14]
                      focus:border-blue-400/50
                      focus:ring-2
                      focus:ring-blue-400/[0.08]
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-medium text-slate-400"
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
                    className="
                      min-h-11
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070b14]
                      px-4
                      py-2.5
                      text-sm
                      text-white
                      placeholder:text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      hover:border-white/[0.14]
                      focus:border-blue-400/50
                      focus:ring-2
                      focus:ring-blue-400/[0.08]
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-medium text-slate-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={4}
                    required
                    className="
                      min-h-[105px]
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-[#070b14]
                      px-4
                      py-2.5
                      text-sm
                      leading-6
                      text-white
                      placeholder:text-slate-700
                      outline-none
                      transition-all
                      duration-300
                      hover:border-white/[0.14]
                      focus:border-blue-400/50
                      focus:ring-2
                      focus:ring-blue-400/[0.08]
                    "
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -1 }
                  }
                  whileTap={
                    reducedMotion
                      ? undefined
                      : { scale: 0.985 }
                  }
                  className="
                    group
                    flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-slate-950
                    transition-all
                    duration-300
                    hover:bg-slate-200
                    hover:shadow-[0_8px_24px_rgba(255,255,255,0.07)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400/60
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <span className="truncate">
                    {isSubmitting
                      ? "Sending..."
                      : submitted
                        ? "Message Sent!"
                        : "Send Message"}
                  </span>

                  <Send
                    size={15}
                    strokeWidth={1.8}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </motion.button>

                <p
                  aria-live="polite"
                  className={`text-center text-[10px] leading-4 transition-colors duration-300 ${submitError
                    ? "text-red-400"
                    : "text-slate-600"
                    }`}
                >
                  {submitError ||
                    "Your message will be sent securely."}
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          {...reveal}
          transition={{
            duration: reducedMotion ? 0 : 0.55,
            delay: reducedMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className="mt-8 border-t border-white/[0.08]"
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {PROFILE_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`
                  group
                  flex
                  min-h-20
                  min-w-0
                  items-center
                  justify-between
                  gap-3
                  border-b
                  border-white/[0.08]
                  px-1
                  py-4
                  transition-colors
                  duration-300
                  hover:bg-white/[0.018]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-blue-400/50
                  sm:px-4
                  lg:min-h-24
                  ${index < PROFILE_LINKS.length - 1
                    ? "lg:border-r"
                    : ""
                  }
                `}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      text-slate-500
                      transition-colors
                      duration-300
                      group-hover:border-blue-400/30
                      group-hover:text-blue-300
                    "
                  >
                    <ContactIcon icon={link.icon} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                      {link.label}
                    </p>

                    <p className="mt-0.5 max-w-[calc(100vw-105px)] truncate text-xs text-slate-400 transition-colors group-hover:text-white sm:max-w-[170px]">
                      {link.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={14}
                  className="
                    shrink-0
                    text-slate-600
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-blue-300
                  "
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom status */}
        <motion.div
          {...reveal}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            delay: reducedMotion ? 0 : 0.24,
            ease: "easeOut",
          }}
          className="
            mt-5
            flex
            flex-col
            gap-2
            text-[10px]
            text-slate-600
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            Java · Spring Boot · AI · Open Source
          </span>

          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-400
                shadow-[0_0_8px_rgba(52,211,153,0.5)]
              "
            />

            System operational
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;