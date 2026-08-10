import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Bot,
  Database,
  Server,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

import profileImage from "../assets/profile.png";

interface WelcomeScreenProps {
  onEnter: () => void;
}

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  className: string;
  delay: number;
}

function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  /*
   * Respect the user's reduced-motion preference.
   * This is important for accessibility and production use.
   */
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener(
      "change",
      updatePreference,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePreference,
      );
    };
  }, []);

  const motionDuration = prefersReducedMotion ? 0.01 : 0.65;

  const handleEnter = () => {
    if (prefersReducedMotion) {
      onEnter();
      return;
    }

    setIsVisible(false);

    /*
     * Give the exit animation enough time to complete.
     */
    window.setTimeout(() => {
      onEnter();
    }, 420);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.main
          id="welcome"
          aria-label="Welcome to Vivek Kumar's portfolio"
          className="
            fixed
            inset-0
            z-[999]
            min-h-[100dvh]
            overflow-hidden
            bg-[#03070d]
            text-white
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 0.985,
          }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.45,
            ease: "easeInOut",
          }}
        >
          {/* =====================================================
              BACKGROUND
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_72%_45%,rgba(14,165,233,0.045),transparent_28%),radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.025),transparent_32%)]
            "
          />

          {/* Fine technical grid */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.055]
              [background-image:linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.35)_1px,transparent_1px)]
              [background-size:72px_72px]
              sm:[background-size:64px_64px]
            "
          />

          {/* Very subtle center glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[72%]
              top-1/2
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400/[0.025]
              blur-[100px]
              sm:h-[460px]
              sm:w-[460px]
              lg:h-[560px]
              lg:w-[560px]
            "
          />

          {/* =====================================================
              TOP INDEX
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              right-5
              top-5
              hidden
              items-center
              gap-2
              font-mono
              text-[7px]
              uppercase
              tracking-[0.38em]
              text-slate-700
              sm:flex
              lg:right-8
              lg:top-8
            "
          >
            <span className="text-cyan-400/70">
              01
            </span>

            <span>/</span>

            <span>Welcome</span>
          </div>

          {/* =====================================================
              MAIN CONTAINER
          ====================================================== */}

          <div
            className="
              relative
              mx-auto
              flex
              min-h-[100dvh]
              w-full
              max-w-[1440px]
              items-center
              px-6
              py-10
              sm:px-10
              md:px-12
              lg:px-16
              xl:px-20
              2xl:px-24
            "
          >
            <div
              className="
                grid
                w-full
                items-center
                gap-10
                md:gap-12
                lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.82fr)]
                lg:gap-0
                xl:grid-cols-[minmax(0,1fr)_minmax(500px,0.88fr)]
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <motion.section
                className="
                  relative
                  z-20
                  mx-auto
                  w-full
                  max-w-[570px]
                  text-center
                  lg:mx-0
                  lg:text-left
                "
                initial={{
                  opacity: 0,
                  x: prefersReducedMotion ? 0 : -25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: motionDuration,
                  delay: prefersReducedMotion ? 0 : 0.05,
                  ease: "easeOut",
                }}
              >
                {/* =================================================
                    WELCOME LABEL
                ================================================== */}

                <motion.div
                  className="
                    mb-6
                    flex
                    items-center
                    justify-center
                    gap-3
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.38em]
                    text-slate-400
                    sm:mb-7
                    sm:text-[10px]
                    sm:tracking-[0.46em]
                    lg:justify-start
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.15,
                  }}
                >
                  <span
                    className="
                      relative
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_14px_rgba(34,211,238,0.85)]
                    "
                  />

                  Welcome to my profile
                </motion.div>

                {/* =================================================
                    GREETING
                ================================================== */}

                <motion.p
                  className="
                    mb-2
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.38em]
                    text-slate-500
                    sm:text-xs
                    sm:tracking-[0.44em]
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.22,
                  }}
                >
                  Hi, I'm
                </motion.p>

                {/* =================================================
                    NAME
                ================================================== */}

                <motion.h1
                  className="
                    font-semibold
                    leading-[0.87]
                    tracking-[-0.065em]
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: motionDuration,
                    delay: prefersReducedMotion ? 0 : 0.28,
                    ease: "easeOut",
                  }}
                >
                  <span
                    className="
                      block
                      text-[clamp(4rem,10vw,7.2rem)]
                      lg:text-[clamp(4.5rem,7vw,6.7rem)]
                      xl:text-[clamp(5rem,6.5vw,7rem)]
                    "
                  >
                    Vivek
                  </span>

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-blue-400
                      via-cyan-300
                      to-violet-400
                      bg-clip-text
                      text-[clamp(4rem,10vw,7.2rem)]
                      text-transparent
                      lg:text-[clamp(4.5rem,7vw,6.7rem)]
                      xl:text-[clamp(5rem,6.5vw,7rem)]
                    "
                  >
                    Kumar.
                  </span>
                </motion.h1>

                {/* =================================================
                    ROLE
                ================================================== */}

                <motion.div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-2.5
                    text-xs
                    sm:mt-6
                    sm:text-base
                    lg:justify-start
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.42,
                  }}
                >
                  <span className="font-medium text-slate-200">
                    Software Engineer
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-slate-700"
                  >
                    /
                  </span>

                  <span className="text-cyan-400">
                    Backend Developer
                  </span>
                </motion.div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.div
                  className="
                    mt-3
                    space-y-1
                    text-xs
                    leading-5
                    text-slate-500
                    sm:mt-4
                    sm:text-[15px]
                    sm:leading-7
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.5,
                  }}
                >
                  <p>Welcome to my portfolio.</p>

                  <p>
                    Explore the work, systems and ideas I build.
                  </p>
                </motion.div>

                {/* =================================================
                    TECHNICAL DIVIDER
                ================================================== */}

                <motion.div
                  aria-hidden="true"
                  className="
                    mx-auto
                    mt-6
                    flex
                    h-px
                    w-full
                    max-w-[500px]
                    items-center
                    gap-3
                    lg:mx-0
                  "
                  initial={{
                    opacity: 0,
                    scaleX: prefersReducedMotion ? 1 : 0,
                    transformOrigin: "left",
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: prefersReducedMotion ? 0 : 0.58,
                  }}
                >
                  <span
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-cyan-400/60
                      via-cyan-400/30
                      to-slate-800
                    "
                  />

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_12px_rgba(34,211,238,0.9)]
                    "
                  />

                  <span className="h-px w-12 bg-slate-800" />
                </motion.div>

                {/* =================================================
                    CTA
                ================================================== */}

                <motion.button
                  type="button"
                  onClick={handleEnter}
                  aria-label="Enter portfolio"
                  className="
                    group
                    mt-6
                    inline-flex
                    min-h-[52px]
                    items-center
                    gap-7
                    rounded-full
                    border
                    border-slate-700
                    bg-[#050a11]
                    px-8
                    py-3
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.32em]
                    text-slate-100
                    shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/60
                    hover:bg-cyan-400/[0.035]
                    hover:shadow-[0_14px_40px_rgba(34,211,238,0.08)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#03070d]
                    active:translate-y-0
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.66,
                  }}
                  whileTap={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 0.97 }
                  }
                >
                  <span>Let's Go</span>

                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </motion.button>

                {/* =================================================
                    TECH SIGNATURE
                ================================================== */}

                <motion.div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.34em]
                    text-slate-700
                    sm:text-[8px]
                    lg:justify-start
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: prefersReducedMotion ? 0 : 0.76,
                  }}
                >
                  <span>Java</span>

                  <span>•</span>

                  <span>Spring Boot</span>

                  <span>•</span>

                  <span>AI</span>
                </motion.div>
              </motion.section>

              {/* =================================================
                  RIGHT PROFILE
              ================================================== */}

              <motion.section
                aria-label="Vivek Kumar profile"
                className="
                  relative
                  mx-auto
                  flex
                  h-[300px]
                  w-full
                  max-w-[420px]
                  items-center
                  justify-center
                  sm:h-[390px]
                  sm:max-w-[500px]
                  md:h-[440px]
                  lg:h-[480px]
                  lg:max-w-[520px]
                  lg:-translate-x-8
                  xl:-translate-x-12
                  2xl:-translate-x-16
                "
                initial={{
                  opacity: 0,
                  x: prefersReducedMotion ? 0 : 22,
                  scale: prefersReducedMotion ? 1 : 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: motionDuration,
                  delay: prefersReducedMotion ? 0 : 0.16,
                  ease: "easeOut",
                }}
              >
                {/* =================================================
                    OUTER RING
                ================================================== */}

                <motion.div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[250px]
                    w-[250px]
                    rounded-full
                    border
                    border-blue-500/[0.07]
                    sm:h-[330px]
                    sm:w-[330px]
                    md:h-[370px]
                    md:w-[370px]
                    lg:h-[400px]
                    lg:w-[400px]
                  "
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { rotate: 360 }
                  }
                  transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* =================================================
                    SECOND RING
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[225px]
                    w-[225px]
                    rounded-full
                    border
                    border-cyan-400/[0.055]
                    sm:h-[300px]
                    sm:w-[300px]
                    md:h-[340px]
                    md:w-[340px]
                    lg:h-[370px]
                    lg:w-[370px]
                  "
                />

                {/* =================================================
                    CENTER GLOW
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[210px]
                    w-[210px]
                    rounded-full
                    bg-cyan-400/[0.025]
                    blur-[60px]
                    sm:h-[290px]
                    sm:w-[290px]
                    lg:h-[340px]
                    lg:w-[340px]
                  "
                />

                {/* =================================================
                    PROFILE PHOTO
                ================================================== */}

                <motion.div
                  className="
                    relative
                    z-10
                    h-[190px]
                    w-[190px]
                    shrink-0
                    rounded-full
                    p-[3px]
                    sm:h-[255px]
                    sm:w-[255px]
                    md:h-[285px]
                    md:w-[285px]
                    lg:h-[310px]
                    lg:w-[310px]
                    lg:p-[4px]
                  "
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 1.015 }
                  }
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {/* Gradient border */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-br
                      from-blue-400
                      via-cyan-400
                      to-violet-500
                      shadow-[0_0_40px_rgba(14,165,233,0.09)]
                    "
                  />

                  {/* Photo frame */}

                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-[#0a111d]
                      ring-2
                      ring-[#03070d]
                    "
                  >
                    <img
                      src={profileImage}
                      alt="Vivek Kumar"
                      width={700}
                      height={700}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                      "
                    />

                    {/* Subtle cinematic overlay */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-gradient-to-b
                        from-white/[0.025]
                        via-transparent
                        to-blue-950/15
                      "
                    />

                    {/* Scan line */}

                    {!prefersReducedMotion && (
                      <motion.div
                        aria-hidden="true"
                        className="
                          absolute
                          left-0
                          right-0
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-cyan-300/30
                          to-transparent
                        "
                        initial={{
                          top: "0%",
                          opacity: 0,
                        }}
                        animate={{
                          top: ["0%", "100%"],
                          opacity: [0, 0.25, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>
                </motion.div>

                {/* =================================================
                    TECH BADGES
                ================================================== */}

                <TechBadge
                  icon={
                    <Server
                      size={14}
                      strokeWidth={1.7}
                    />
                  }
                  label="APIs"
                  className="
                    left-[4%]
                    top-[23%]
                    sm:left-[4%]
                    lg:left-[3%]
                  "
                  delay={0.5}
                />

                <TechBadge
                  icon={
                    <Database
                      size={14}
                      strokeWidth={1.7}
                    />
                  }
                  label="PostgreSQL"
                  className="
                    right-[4%]
                    top-[20%]
                    sm:right-[4%]
                    lg:right-[3%]
                  "
                  delay={0.6}
                />

                <TechBadge
                  icon={
                    <FaGithub
                      size={14}
                    />
                  }
                  label="GitHub"
                  className="
                    bottom-[17%]
                    left-[6%]
                    sm:left-[5%]
                    lg:left-[4%]
                  "
                  delay={0.7}
                />

                <TechBadge
                  icon={
                    <Bot
                      size={14}
                      strokeWidth={1.7}
                    />
                  }
                  label="AI"
                  className="
                    bottom-[16%]
                    right-[6%]
                    sm:right-[5%]
                    lg:right-[4%]
                  "
                  delay={0.8}
                />

                {/* =================================================
                    SOFTWARE ENGINEER LABEL
                ================================================== */}

                <motion.div
                  className="
                    absolute
                    bottom-[2%]
                    left-1/2
                    z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-slate-700/70
                    bg-[#050b14]/90
                    px-6
                    py-2.5
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.36em]
                    text-slate-400
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    backdrop-blur-sm
                    sm:px-7
                    sm:py-3
                    sm:text-[8px]
                  "
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.85,
                  }}
                >
                  Software Engineer
                </motion.div>
              </motion.section>
            </div>
          </div>

          {/* =====================================================
              BOTTOM ACCENT
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-28
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/25
              to-transparent
              sm:w-44
            "
          />
        </motion.main>
      )}
    </AnimatePresence>
  );
}

/* ==============================================================
   TECH BADGE COMPONENT
================================================================ */

function TechBadge({
  icon,
  label,
  className,
  delay,
}: TechBadgeProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`
        absolute
        z-20
        hidden
        items-center
        gap-2
        rounded-full
        border
        border-slate-700/70
        bg-[#07101a]/85
        px-3
        py-2
        font-mono
        text-[8px]
        text-slate-500
        shadow-[0_10px_30px_rgba(0,0,0,0.2)]
        backdrop-blur-sm
        md:flex
        ${className}
      `}
      initial={{
        opacity: 0,
        scale: 0.94,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
    >
      <span className="text-cyan-400">
        {icon}
      </span>

      <span>{label}</span>
    </motion.div>
  );
}

export default WelcomeScreen;