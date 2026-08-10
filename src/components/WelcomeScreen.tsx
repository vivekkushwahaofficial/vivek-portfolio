import type { ReactNode } from "react";

import {
  ArrowRight,
  Bot,
  Database,
  Server,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

import profileImg from "../assets/profile.png";

interface WelcomeScreenProps {
  onEnter: () => void;
}

interface TechBadgeProps {
  icon: ReactNode;
  label: string;
  className: string;
  delay: number;
  reducedMotion: boolean | null;
}

function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="
        fixed
        inset-0
        z-[100]
        overflow-hidden
        bg-[#03070d]
        text-white
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
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
          opacity-[0.14]
          [background-image:linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Main ambient glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.025]
          blur-[150px]
        "
      />

      {/* Left subtle glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.018]
          blur-[130px]
        "
      />

      {/* Right subtle glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-500/[0.018]
          blur-[130px]
        "
      />

      {/* =====================================================
          PAGE INDICATOR
      ====================================================== */}

      <div
        className="
          absolute
          right-7
          top-6
          hidden
          items-center
          gap-2
          font-mono
          text-[8px]
          uppercase
          tracking-[0.38em]
          text-slate-700
          sm:flex
        "
      >
        <span className="text-cyan-500/70">
          01
        </span>

        <span>/</span>

        <span>
          Welcome
        </span>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1120px]
          items-center
          px-6
          py-10
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-8
          "
        >
          {/* =================================================
              LEFT — INTRODUCTION
          ================================================== */}

          <motion.div
            className="
              relative
              z-20
              max-w-[530px]
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
              duration: 0.75,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            {/* =================================================
                TOP LABEL
            ================================================== */}

            <motion.div
              className="
                mb-7
                flex
                items-center
                gap-3
                font-mono
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-slate-500
                sm:text-[10px]
              "
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.2,
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
                mb-2
                font-mono
                text-[11px]
                uppercase
                tracking-[0.4em]
                text-slate-500
                sm:text-xs
              "
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.3,
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
                tracking-[-0.07em]
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.38,
                ease: "easeOut",
              }}
            >
              <span
                className="
                  block
                  text-[clamp(4rem,7vw,6.8rem)]
                  text-white
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
                  text-[clamp(4rem,7vw,6.8rem)]
                  text-transparent
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
                mt-6
                flex
                flex-wrap
                items-center
                gap-3
                text-sm
                sm:text-base
              "
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.52,
              }}
            >
              <span className="font-medium text-slate-200">
                Software Engineer
              </span>

              <span className="text-slate-700">
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
                mt-4
                max-w-[430px]
                text-sm
                leading-6
                text-slate-500
                sm:text-[15px]
                sm:leading-7
              "
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.62,
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
              className="
                mt-6
                flex
                max-w-[440px]
                items-center
                gap-3
              "
              initial={{
                opacity: 0,
                scaleX: 0,
                transformOrigin: "left",
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.65,
                delay: 0.7,
              }}
            >
              <span
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-cyan-400/60
                  to-slate-800
                "
              />

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_10px_rgba(34,211,238,0.9)]
                "
              />

              <span
                className="
                  h-px
                  w-12
                  bg-slate-800
                "
              />
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.button
              type="button"
              onClick={onEnter}
              aria-label="Enter portfolio"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-7
                rounded-full
                border
                border-slate-700
                bg-[#050a12]
                px-8
                py-4
                text-[11px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-white
                transition-all
                duration-300
                hover:border-cyan-400/60
                hover:bg-cyan-400/[0.035]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400/70
              "
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                    y: -2,
                  }
              }
              whileTap={{
                scale: 0.97,
              }}
            >
              <span>
                Let's Go
              </span>

              <ArrowRight
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
                mt-7
                flex
                items-center
                gap-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.38em]
                text-slate-700
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.95,
              }}
            >
              <span>
                Java
              </span>

              <span>
                •
              </span>

              <span>
                Spring Boot
              </span>

              <span>
                •
              </span>

              <span>
                AI
              </span>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — PORTRAIT
          ================================================== */}

          <motion.div
            className="
              relative
              mx-auto
              mt-10
              flex
              h-[380px]
              w-full
              max-w-[470px]
              items-center
              justify-center
              lg:mt-0
              lg:h-[500px]
            "
            initial={{
              opacity: 0,
              x: reducedMotion ? 0 : 24,
              scale: reducedMotion ? 1 : 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            {/* =================================================
                LARGE SUBTLE ORBIT
            ================================================== */}

            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                border
                border-blue-400/[0.08]
                sm:h-[350px]
                sm:w-[350px]
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
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* =================================================
                INNER RING
            ================================================== */}

            <div
              aria-hidden="true"
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-cyan-400/[0.10]
                sm:h-[315px]
                sm:w-[315px]
                lg:h-[350px]
                lg:w-[350px]
              "
            />

            {/* =================================================
                PORTRAIT GLOW
            ================================================== */}

            <div
              aria-hidden="true"
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                bg-blue-500/[0.055]
                blur-[65px]
                sm:h-[315px]
                sm:w-[315px]
                lg:h-[350px]
                lg:w-[350px]
              "
            />

            {/* =================================================
                CIRCULAR PHOTO
            ================================================== */}

            <motion.div
              className="
                relative
                z-10
                h-[250px]
                w-[250px]
                rounded-full
                p-[4px]
                sm:h-[295px]
                sm:w-[295px]
                lg:h-[325px]
                lg:w-[325px]
              "
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                    scale: 1.015,
                  }
              }
              transition={{
                duration: 0.35,
              }}
            >
              {/* Gradient border */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-br
                  from-blue-400
                  via-cyan-400
                  to-violet-500
                  shadow-[0_0_45px_rgba(37,99,235,0.16)]
                "
              />

              {/* Image container */}

              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-[#0b1220]
                  ring-4
                  ring-[#03070d]
                "
              >
                <img
                  src={profileImg}
                  alt="Vivek Kumar"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                {/* Image shading */}

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

                {/* Scan effect */}

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
                      via-cyan-300/50
                      to-transparent
                    "
                    initial={{
                      top: "0%",
                      opacity: 0,
                    }}
                    animate={{
                      top: ["0%", "100%"],
                      opacity: [0, 0.45, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            </motion.div>

            {/* =================================================
                CENTER NAME PLATE
            ================================================== */}

            <motion.div
              className="
                absolute
                bottom-[5%]
                left-1/2
                z-30
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                border
                border-slate-700/80
                bg-[#050a12]/90
                px-5
                py-2.5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-slate-400
                shadow-[0_10px_35px_rgba(0,0,0,0.35)]
                backdrop-blur-md
              "
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
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
                  size={15}
                  strokeWidth={1.6}
                />
              }
              label="APIs"
              className="
                left-[2%]
                top-[24%]
                sm:left-[4%]
                lg:left-[3%]
              "
              delay={0.65}
              reducedMotion={reducedMotion}
            />

            <TechBadge
              icon={
                <Database
                  size={15}
                  strokeWidth={1.6}
                />
              }
              label="PostgreSQL"
              className="
                right-[0%]
                top-[22%]
                sm:right-[2%]
                lg:right-[1%]
              "
              delay={0.75}
              reducedMotion={reducedMotion}
            />

            <TechBadge
              icon={
                <FaGithub
                  size={15}
                />
              }
              label="GitHub"
              className="
                left-[6%]
                bottom-[20%]
                sm:left-[8%]
                lg:left-[7%]
              "
              delay={0.85}
              reducedMotion={reducedMotion}
            />

            <TechBadge
              icon={
                <Bot
                  size={15}
                  strokeWidth={1.6}
                />
              }
              label="AI"
              className="
                right-[5%]
                bottom-[19%]
                sm:right-[7%]
                lg:right-[6%]
              "
              delay={0.95}
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
                    left-[19%]
                    top-[19%]
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
                    bottom-[25%]
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
          w-[180px]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
        "
      />

      {/* =====================================================
          MOBILE FOOTER
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          font-mono
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-slate-700
          sm:hidden
        "
      >
        Java · Spring Boot · AI
      </div>
    </motion.section>
  );
}

/* ============================================================
   TECH BADGE
============================================================ */

function TechBadge({
  icon,
  label,
  className,
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
        gap-2.5
        rounded-full
        border
        border-slate-700/80
        bg-[#07101a]/90
        px-3.5
        py-2.5
        text-[9px]
        text-slate-400
        shadow-[0_12px_35px_rgba(0,0,0,0.28)]
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
        duration: 0.45,
        delay,
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
              "rgba(34,211,238,0.2)",
              "rgba(34,211,238,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

export default WelcomeScreen;