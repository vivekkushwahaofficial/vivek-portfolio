import { motion, useReducedMotion } from "motion/react";
import {
  Bot,
  Braces,
  Container,
  Database,
  GitBranch,
  Server,
} from "lucide-react";
import type { ReactNode } from "react";

import profileImage from "../assets/profile.png";

type NodeProps = {
  label: string;
  icon: ReactNode;
  x: string;
  y: string;
  delay: number;
  primary?: boolean;
};

function NetworkNode({
  label,
  icon,
  x,
  y,
  delay,
  primary = false,
}: NodeProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: reducedMotion ? 1 : 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: reducedMotion ? 0 : [0, -5, 0],
      }}
      transition={{
        opacity: {
          delay: reducedMotion ? 0 : delay,
          duration: reducedMotion ? 0 : 0.5,
        },
        scale: {
          delay: reducedMotion ? 0 : delay,
          duration: reducedMotion ? 0 : 0.5,
        },
        y: reducedMotion
          ? { duration: 0 }
          : {
            delay: delay + 0.5,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
      }}
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: x,
        top: y,
      }}
    >
      <div
        className={[
          "group flex min-w-[112px] items-center gap-2 rounded-xl border",
          "px-3 py-2.5 backdrop-blur-sm transition duration-300",
          "hover:-translate-y-1",
          primary
            ? "border-blue-400/40 bg-blue-500/[0.12] shadow-[0_0_30px_rgba(59,130,246,0.12)]"
            : "border-slate-700/80 bg-slate-900/80 hover:border-blue-400/30",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
            primary
              ? "bg-blue-400/10 text-blue-300"
              : "bg-slate-800 text-slate-400",
          ].join(" ")}
        >
          {icon}
        </span>

        <span className="whitespace-nowrap text-xs font-medium text-slate-200">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function HeroNetwork() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[430px]
        sm:max-w-[450px]
        lg:max-w-[460px]
      "
      aria-label="Technical architecture visualization"
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[45%]
          w-[45%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-[65px]
        "
      />

      {/* =====================================================
          OUTER ARCHITECTURE RING
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={
          reducedMotion
            ? undefined
            : {
              rotate: 360,
            }
        }
        transition={
          reducedMotion
            ? undefined
            : {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }
        }
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[72%]
          w-[72%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-slate-800
        "
      />

      {/* =====================================================
          INNER ARCHITECTURE RING
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={
          reducedMotion
            ? undefined
            : {
              rotate: -360,
            }
        }
        transition={
          reducedMotion
            ? undefined
            : {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }
        }
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[52%]
          w-[52%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-slate-800/70
        "
      />

      {/* =====================================================
          SVG CONNECTIONS

          All coordinates use the same logical positions
          as the technology nodes.

          SVG coordinate system:
          600 × 600

          Java:
            120 / 150

          Spring Boot:
            480 / 150

          AI:
            120 / 450

          PostgreSQL:
            480 / 450

          Docker:
            300 / 60

          GitHub:
            300 / 540
      ===================================================== */}

      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          h-full
          w-full
        "
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#334155"
              stopOpacity="0.2"
            />

            <stop
              offset="50%"
              stopColor="#60a5fa"
              stopOpacity="0.7"
            />

            <stop
              offset="100%"
              stopColor="#334155"
              stopOpacity="0.2"
            />
          </linearGradient>

          <filter id="networkGlow">
            <feGaussianBlur
              stdDeviation="2.5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ===================================================
            CONNECTIONS
        =================================================== */}

        <g
          fill="none"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          filter="url(#networkGlow)"
        >
          {/* Java */}
          <path d="M300 300 L120 150" />

          {/* Spring Boot */}
          <path d="M300 300 L480 150" />

          {/* AI */}
          <path d="M300 300 L120 450" />

          {/* PostgreSQL */}
          <path d="M300 300 L480 450" />

          {/* Docker */}
          <path d="M300 300 L300 60" />

          {/* GitHub */}
          <path d="M300 300 L300 540" />
        </g>

        {/* ===================================================
            ANIMATED DATA PACKET — JAVA
        =================================================== */}

        <motion.circle
          cx="300"
          cy="300"
          r="4"
          fill="#60a5fa"
          initial={{
            cx: 300,
            cy: 300,
          }}
          animate={{
            cx: [300, 145, 300],
            cy: [300, 145, 300],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ===================================================
            ANIMATED DATA PACKET — GITHUB / POSTGRESQL
        =================================================== */}

        <motion.circle
          r="3"
          fill="#a78bfa"
          animate={
            reducedMotion
              ? undefined
              : {
                cx: [300, 300, 480],
                cy: [300, 540, 450],
              }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }
          }
        />

        {/* ===================================================
            CENTER ARCHITECTURAL GLOW
        =================================================== */}

        <circle
          cx="300"
          cy="300"
          r="76"
          fill="rgba(15,23,42,0.12)"
        />

        <circle
          cx="300"
          cy="300"
          r="70"
          fill="none"
          stroke="#3b82f6"
          strokeOpacity="0.1"
        />
      </svg>

      {/* =====================================================
          CENTRAL PROFILE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: reducedMotion ? 1 : 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: reducedMotion ? 0 : 0.55,
          duration: reducedMotion ? 0 : 0.65,
          ease: "easeOut",
        }}
        className="
  absolute
  left-1/2
  top-1/2
  z-40
  w-[112px]
  -translate-x-1/2
  -translate-y-1/2
  sm:w-[132px]
  lg:w-[140px]
"
      >
        <motion.div
          whileHover={
            reducedMotion
              ? undefined
              : {
                scale: 1.02,
              }
          }
          className="
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-blue-400/30
            bg-[#080f1d]/95
            p-2
            shadow-[0_0_30px_rgba(59,130,246,0.12)]
            backdrop-blur-md
          "
        >
          {/* Profile image */}

          <div
            className="
    relative
    mx-auto
    aspect-square
    w-[92%]
    overflow-hidden
    rounded-[13px]
    border
    border-white/[0.08]
    bg-slate-900
  "
          >
            <img
              src={profileImage}
              alt="Vivek Kumar"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
              loading="eager"
              decoding="async"
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/20
                via-transparent
                to-white/[0.03]
              "
            />

            {/* Status */}

            <motion.span
              aria-hidden="true"
              animate={
                reducedMotion
                  ? undefined
                  : {
                    boxShadow: [
                      "0 0 0 rgba(52,211,153,0)",
                      "0 0 9px rgba(52,211,153,0.65)",
                      "0 0 0 rgba(52,211,153,0)",
                    ],
                  }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                    duration: 2,
                    repeat: Infinity,
                  }
              }
              className="
                absolute
                bottom-2
                right-2
                h-3
                w-3
                rounded-full
                border-2
                border-[#080f1d]
                bg-emerald-400
              "
            />
          </div>

          {/* Profile information */}

          <div className="pt-2 text-center">
            <p className="text-[11px] font-semibold tracking-wide text-white sm:text-sm">              Vivek Kumar
            </p>

            <p className="mt-0.5 text-[8px] text-slate-500 sm:text-[10px]">              Software Engineer
            </p>

            <div className="mt-1.5 flex items-center justify-center gap-1.5">
              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_7px_rgba(52,211,153,0.65)]
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-slate-500
                "
              >
                Available
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          TECHNOLOGY NODES
      ===================================================== */}

      <NetworkNode
        label="Java"
        icon={<Braces size={15} aria-hidden="true" />}
        x="20%"
        y="25%"
        delay={0.2}
        primary
      />

      <NetworkNode
        label="Spring Boot"
        icon={<Server size={15} aria-hidden="true" />}
        x="80%"
        y="25%"
        delay={0.35}
        primary
      />

      <NetworkNode
        label="AI"
        icon={<Bot size={15} aria-hidden="true" />}
        x="20%"
        y="75%"
        delay={0.5}
        primary
      />

      <NetworkNode
        label="PostgreSQL"
        icon={<Database size={15} aria-hidden="true" />}
        x="80%"
        y="75%"
        delay={0.65}
      />

      <NetworkNode
        label="Docker"
        icon={<Container size={15} aria-hidden="true" />}
        x="50%"
        y="10%"
        delay={0.8}
      />

      <NetworkNode
        label="GitHub"
        icon={<GitBranch size={15} aria-hidden="true" />}
        x="50%"
        y="90%"
        delay={0.95}
      />

      {/* =====================================================
          API LABEL
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: reducedMotion ? 0 : 1.2,
        }}
        className="
          absolute
          left-1/2
          top-[18%]
          z-20
          -translate-x-1/2
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-slate-600
        "
      >
        API
      </motion.div>
    </div>
  );
}

export default HeroNetwork;