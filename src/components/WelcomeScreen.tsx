import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Bot,
  Database,
  Server,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import profileImg from "../assets/profile.png";

interface WelcomeScreenProps {
  onEnter: () => void;
}

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  className?: string;
  delay: number;
  reducedMotion: boolean | null;
}

function WelcomeScreen({
  onEnter,
}: WelcomeScreenProps) {
  const reducedMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(true);

  /*
   * Detect short screens so the layout can
   * become more compact without scrolling.
   */
  const [isShortScreen, setIsShortScreen] =
    useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-height: 700px)",
    );

    const updateScreenHeight = () => {
      setIsShortScreen(mediaQuery.matches);
    };

    updateScreenHeight();

    mediaQuery.addEventListener(
      "change",
      updateScreenHeight,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateScreenHeight,
      );
    };
  }, []);

  const handleEnter = () => {
    if (reducedMotion) {
      setIsOpen(false);
      onEnter();
      return;
    }

    setIsOpen(false);

    window.setTimeout(() => {
      onEnter();
    }, 420);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          id="welcome"
          aria-label="Welcome to Vivek Kumar's portfolio"
          className="
            fixed
            inset-0
            z-[100]
            overflow-hidden
            bg-[#03070d]
            text-white
            overscroll-none
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.985,
          }}
          transition={{
            duration: reducedMotion ? 0.2 : 0.55,
            ease: "easeOut",
          }}
        >
          {/* =====================================================
              BACKGROUND GRID
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.11]
              [background-image:linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)]
              [background-size:64px_64px]
              sm:[background-size:72px_72px]
            "
          />

          {/* =====================================================
              CENTRAL AMBIENT GLOW
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-500/[0.025]
              blur-[100px]
              sm:h-[520px]
              sm:w-[520px]
              lg:h-[680px]
              lg:w-[680px]
              lg:bg-blue-500/[0.025]
              lg:blur-[150px]
            "
          />

          {/* =====================================================
              LEFT AMBIENT GLOW
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-40
              top-[25%]
              hidden
              h-[400px]
              w-[400px]
              rounded-full
              bg-cyan-400/[0.018]
              blur-[120px]
              sm:block
            "
          />

          {/* =====================================================
              RIGHT AMBIENT GLOW
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-40
              bottom-[-100px]
              hidden
              h-[400px]
              w-[400px]
              rounded-full
              bg-violet-500/[0.018]
              blur-[120px]
              sm:block
            "
          />

          {/* =====================================================
              PAGE INDICATOR
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
              lg:top-7
            "
          >
            <span className="text-cyan-500/70">
              01
            </span>

            <span>/</span>

            <span>Welcome</span>
          </div>

          {/* =====================================================
              MAIN
          ====================================================== */}

          <main
            className={`
              relative
              mx-auto
              flex
              h-[100dvh]
              min-h-0
              w-full
              max-w-[1440px]
              items-center
              px-5
              py-5
              sm:px-8
              sm:py-8
              md:px-10
              lg:px-14
              xl:px-20
              2xl:px-24
              ${isShortScreen
                ? "py-3 sm:py-6"
                : ""
              }
            `}
          >
            {/* =================================================
                RESPONSIVE GRID

                Mobile:
                intro
                ↓
                portrait

                Desktop:
                intro | portrait
            ================================================== */}

            <div
              className="
                grid
                w-full
                items-center
                gap-3
                sm:gap-6
                lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.86fr)]
                lg:gap-2
                xl:grid-cols-[minmax(0,1fr)_minmax(500px,0.9fr)]
                xl:gap-0
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <motion.div
                className="
                  relative
                  z-20
                  mx-auto
                  w-full
                  max-w-[560px]
                  text-center
                  lg:mx-0
                  lg:text-left
                "
                initial={{
                  opacity: 0,
                  x: reducedMotion ? 0 : -24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0.2 : 0.7,
                  delay: reducedMotion ? 0 : 0.08,
                  ease: "easeOut",
                }}
              >
                {/* =================================================
                    WELCOME LABEL
                ================================================== */}

                <motion.div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-center
                    gap-3
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    text-slate-500
                    sm:mb-6
                    sm:text-[9px]
                    sm:tracking-[0.45em]
                    lg:justify-start
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.16,
                  }}
                >
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span
                      className="
                        absolute
                        h-2
                        w-2
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_12px_rgba(34,211,238,0.9)]
                      "
                    />

                    {!reducedMotion && (
                      <span
                        className="
                          absolute
                          h-5
                          w-5
                          animate-ping
                          rounded-full
                          bg-cyan-400/10
                        "
                      />
                    )}
                  </span>

                  Welcome to my profile
                </motion.div>

                {/* =================================================
                    GREETING
                ================================================== */}

                <motion.p
                  className="
                    mb-1.5
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.38em]
                    text-slate-500
                    sm:text-[11px]
                    sm:tracking-[0.42em]
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.23,
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
                    leading-[0.86]
                    tracking-[-0.065em]
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.2 : 0.7,
                    delay: reducedMotion ? 0 : 0.3,
                    ease: "easeOut",
                  }}
                >
                  <span
                    className="
                      block
                      text-[clamp(3.2rem,13vw,5.8rem)]
                      sm:text-[clamp(4.5rem,11vw,6.4rem)]
                      md:text-[clamp(5rem,9vw,6.8rem)]
                      lg:text-[clamp(4.5rem,7vw,6.5rem)]
                      xl:text-[6.8rem]
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
                      text-[clamp(3.2rem,13vw,5.8rem)]
                      text-transparent
                      sm:text-[clamp(4.5rem,11vw,6.4rem)]
                      md:text-[clamp(5rem,9vw,6.8rem)]
                      lg:text-[clamp(4.5rem,7vw,6.5rem)]
                      xl:text-[6.8rem]
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
                    gap-x-2.5
                    gap-y-1.5
                    text-xs
                    sm:mt-6
                    sm:text-sm
                    md:text-base
                    lg:justify-start
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.44,
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

                <motion.p
                  className="
                    mx-auto
                    mt-3
                    max-w-[420px]
                    text-xs
                    leading-5
                    text-slate-500
                    sm:mt-3.5
                    sm:text-sm
                    sm:leading-6
                    md:text-[15px]
                    md:leading-7
                    lg:mx-0
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.53,
                  }}
                >
                  Welcome to my portfolio.
                  <br />
                  Explore the work, systems and ideas I build.
                </motion.p>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <motion.div
                  aria-hidden="true"
                  className="
                    mx-auto
                    mt-5
                    flex
                    h-px
                    w-full
                    max-w-[440px]
                    items-center
                    gap-3
                    lg:mx-0
                    sm:mt-6
                  "
                  initial={{
                    opacity: 0,
                    scaleX: reducedMotion ? 1 : 0,
                    transformOrigin: "left",
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: reducedMotion ? 0 : 0.61,
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
                      shadow-[0_0_11px_rgba(34,211,238,0.9)]
                    "
                  />

                  <span className="h-px w-10 bg-slate-800" />
                </motion.div>

                {/* =================================================
                    CTA
                ================================================== */}

                <motion.button
                  type="button"
                  onClick={handleEnter}
                  aria-label="Enter Vivek Kumar's portfolio"
                  className="
                    group
                    mt-5
                    inline-flex
                    min-h-[50px]
                    items-center
                    gap-6
                    rounded-full
                    border
                    border-slate-700
                    bg-[#050a12]
                    px-7
                    py-3.5
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-white
                    shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/60
                    hover:bg-cyan-400/[0.035]
                    hover:shadow-[0_14px_35px_rgba(34,211,238,0.08)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#03070d]
                    active:translate-y-0
                    sm:mt-6
                    sm:min-h-[52px]
                    sm:px-8
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.7,
                  }}
                  whileTap={
                    reducedMotion
                      ? undefined
                      : { scale: 0.97 }
                  }
                >
                  <span>Let's Go</span>

                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </motion.button>

                {/* =================================================
                    STACK
                ================================================== */}

                <motion.div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.32em]
                    text-slate-700
                    sm:mt-6
                    sm:text-[8px]
                    sm:tracking-[0.38em]
                    lg:justify-start
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.83,
                  }}
                >
                  <span>Java</span>
                  <span>•</span>
                  <span>Spring Boot</span>
                  <span>•</span>
                  <span>AI</span>
                </motion.div>
              </motion.div>

              {/* =================================================
                  RIGHT / PORTRAIT
              ================================================== */}

              <motion.div
                className={`
                  relative
                  mx-auto
                  flex
                  w-full
                  max-w-[480px]
                  items-center
                  justify-center

                  h-[clamp(230px,38dvh,300px)]
                  mt-0

                  sm:h-[340px]
                  sm:mt-0

                  md:h-[400px]

                  lg:h-[500px]
                  lg:max-w-[520px]
                  lg:-translate-x-5

                  xl:-translate-x-8

                  2xl:-translate-x-12

                  ${isShortScreen
                    ? "h-[220px] sm:h-[300px] lg:h-[440px]"
                    : ""
                  }
                `}
                initial={{
                  opacity: 0,
                  x: reducedMotion ? 0 : 24,
                  scale: reducedMotion ? 1 : 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: reducedMotion ? 0.2 : 0.75,
                  delay: reducedMotion ? 0 : 0.2,
                  ease: "easeOut",
                }}
              >
                {/* =================================================
                    OUTER ORBIT
                ================================================== */}

                <motion.div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[215px]
                    w-[215px]
                    rounded-full
                    border
                    border-blue-400/[0.08]
                    sm:h-[290px]
                    sm:w-[290px]
                    md:h-[320px]
                    md:w-[320px]
                    lg:h-[390px]
                    lg:w-[390px]
                  "
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                        rotate: 360,
                      }
                  }
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* =================================================
                    INNER ORBIT
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[200px]
                    w-[200px]
                    rounded-full
                    border
                    border-cyan-400/[0.09]
                    sm:h-[265px]
                    sm:w-[265px]
                    md:h-[295px]
                    md:w-[295px]
                    lg:h-[350px]
                    lg:w-[350px]
                  "
                />

                {/* =================================================
                    PHOTO GLOW
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    h-[200px]
                    w-[200px]
                    rounded-full
                    bg-blue-500/[0.055]
                    blur-[45px]
                    sm:h-[270px]
                    sm:w-[270px]
                    md:h-[300px]
                    md:w-[300px]
                    lg:h-[350px]
                    lg:w-[350px]
                  "
                />

                {/* =================================================
                    PHOTO
                ================================================== */}

                <motion.div
                  className="
                    relative
                    z-10
                    h-[175px]
                    w-[175px]
                    rounded-full
                    p-[3px]
                    sm:h-[235px]
                    sm:w-[235px]
                    md:h-[260px]
                    md:w-[260px]
                    lg:h-[315px]
                    lg:w-[315px]
                    lg:p-[4px]
                  "
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                        scale: 1.015,
                      }
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
                      shadow-[0_0_40px_rgba(37,99,235,0.15)]
                    "
                  />

                  {/* Image frame */}

                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-[#0b1220]
                      ring-2
                      ring-[#03070d]
                      sm:ring-[3px]
                    "
                  >
                    <img
                      src={profileImg}
                      alt="Portrait of Vivek Kumar"
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

                    {/* Subtle image overlay */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-gradient-to-t
                        from-blue-950/20
                        via-transparent
                        to-white/[0.025]
                      "
                    />

                    {/* Scan line */}

                    {!reducedMotion && (
                      <motion.div
                        aria-hidden="true"
                        className="
                          absolute
                          left-0
                          right-0
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-cyan-300/40
                          to-transparent
                        "
                        initial={{
                          top: "0%",
                          opacity: 0,
                        }}
                        animate={{
                          top: ["0%", "100%"],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>
                </motion.div>

                {/* =================================================
                    SOFTWARE ENGINEER LABEL
                ================================================== */}

                <motion.div
                  className="
                    absolute
                    bottom-[3%]
                    left-1/2
                    z-30
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-slate-700/80
                    bg-[#050a12]/90
                    px-5
                    py-2
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.32em]
                    text-slate-400
                    shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                    backdrop-blur-md
                    sm:px-6
                    sm:py-2.5
                    sm:text-[8px]
                  "
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : 0.85,
                  }}
                >
                  Software Engineer
                </motion.div>

                {/* =================================================
                    TECH BADGES
                ================================================== */}

                <TechBadge
                  icon={
                    <Server
                      size={14}
                      strokeWidth={1.6}
                    />
                  }
                  label="APIs"
                  className="
                    left-[0%]
                    top-[20%]
                    md:left-[3%]
                    lg:left-[1%]
                  "
                  delay={0.55}
                  reducedMotion={reducedMotion}
                />

                <TechBadge
                  icon={
                    <Database
                      size={14}
                      strokeWidth={1.6}
                    />
                  }
                  label="PostgreSQL"
                  className="
                    right-[0%]
                    top-[18%]
                    md:right-[2%]
                    lg:right-[0%]
                  "
                  delay={0.65}
                  reducedMotion={reducedMotion}
                />

                <TechBadge
                  icon={
                    <FaGithub
                      size={14}
                    />
                  }
                  label="GitHub"
                  className="
                    left-[3%]
                    bottom-[17%]
                    md:left-[7%]
                    lg:left-[4%]
                  "
                  delay={0.75}
                  reducedMotion={reducedMotion}
                />

                <TechBadge
                  icon={
                    <Bot
                      size={14}
                      strokeWidth={1.6}
                    />
                  }
                  label="AI"
                  className="
                    right-[3%]
                    bottom-[16%]
                    md:right-[7%]
                    lg:right-[5%]
                  "
                  delay={0.85}
                  reducedMotion={reducedMotion}
                />

                {/* =================================================
                    ORBIT DOTS
                ================================================== */}

                {!reducedMotion && (
                  <>
                    <motion.span
                      aria-hidden="true"
                      className="
                        absolute
                        left-[18%]
                        top-[16%]
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_12px_rgba(34,211,238,0.9)]
                      "
                      animate={{
                        opacity: [0.25, 1, 0.25],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.span
                      aria-hidden="true"
                      className="
                        absolute
                        right-[18%]
                        bottom-[23%]
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-violet-400
                        shadow-[0_0_12px_rgba(167,139,250,0.9)]
                      "
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </>
                )}
              </motion.div>
            </div>
          </main>

          {/* =====================================================
              BOTTOM LINE
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-32
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-cyan-400/30
              to-transparent
              sm:w-44
            "
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
}

/* ==============================================================
   TECH BADGE
================================================================ */

function TechBadge({
  icon,
  label,
  className = "",
  delay,
  reducedMotion,
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
        border-slate-700/80
        bg-[#07101a]/90
        px-3
        py-2
        font-mono
        text-[8px]
        text-slate-400
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        backdrop-blur-md
        sm:flex
        ${className}
      `}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: reducedMotion ? 0.15 : 0.4,
        delay: reducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      <span className="text-cyan-400">
        {icon}
      </span>

      <span className="whitespace-nowrap">
        {label}
      </span>

      {!reducedMotion && (
        <motion.span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            border
            border-cyan-400/0
          "
          animate={{
            borderColor: [
              "rgba(34,211,238,0)",
              "rgba(34,211,238,0.18)",
              "rgba(34,211,238,0)",
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

export default WelcomeScreen;