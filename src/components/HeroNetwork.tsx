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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: shouldReduceMotion ? 0 : [0, -5, 0],
      }}
      transition={{
        opacity: {
          delay: shouldReduceMotion ? 0 : delay,
          duration: shouldReduceMotion ? 0 : 0.5,
        },
        scale: {
          delay: shouldReduceMotion ? 0 : delay,
          duration: shouldReduceMotion ? 0 : 0.5,
        },
        y: shouldReduceMotion
          ? { duration: 0 }
          : {
            delay: delay + 0.5,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
      }}
      className="absolute z-20"
      style={{
        left: x,
        top: y,
      }}
    >
      <div
        className={[
          "group flex items-center gap-1.5 rounded-lg border",
          "px-2 py-1.5 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5",
          "backdrop-blur-sm transition duration-300",
          "hover:-translate-y-1",
          primary
            ? "border-blue-400/40 bg-blue-500/[0.12] shadow-[0_0_30px_rgba(59,130,246,0.12)]"
            : "border-slate-700/80 bg-slate-900/80 hover:border-blue-400/30",
        ].join(" ")}
      >
        <span
          className={[
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-md",
            "sm:h-7 sm:w-7 sm:rounded-lg",
            primary
              ? "bg-blue-400/10 text-blue-300"
              : "bg-slate-800 text-slate-400",
          ].join(" ")}
        >
          {icon}
        </span>

        <span className="whitespace-nowrap text-[10px] font-medium text-slate-200 sm:text-xs">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function HeroNetwork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative aspect-square w-full overflow-visible"
      aria-label="Technical architecture showing Java, Spring Boot, AI, PostgreSQL, Docker and GitHub connected through a central system"
      role="img"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[60px] sm:blur-[90px]"
      />

      {/* Outer architecture ring */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }
        }
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-800"
      />

      {/* Inner architecture ring */}
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: -360 }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }
        }
        className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/70"
      />

      {/* SVG connections */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop offset="0%" stopColor="#334155" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.2" />
          </linearGradient>

          <filter id="networkGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        <g
          fill="none"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          filter="url(#networkGlow)"
        >
          <path d="M300 300 L145 145" />
          <path d="M300 300 L455 145" />
          <path d="M300 300 L145 455" />
          <path d="M300 300 L455 455" />
          <path d="M300 300 L300 90" />
          <path d="M300 300 L300 510" />
        </g>

        {/* Animated data packet 1 */}
        <motion.circle
          r="4"
          fill="#60a5fa"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                cx: [300, 145, 300],
                cy: [300, 145, 300],
              }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }
          }
        />

        {/* Animated data packet 2 */}
        <motion.circle
          r="3"
          fill="#a78bfa"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                cx: [300, 300, 455],
                cy: [300, 510, 455],
              }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }
          }
        />

        {/* Center system node */}
        <circle
          cx="300"
          cy="300"
          r="48"
          fill="#0f172a"
          stroke="#3b82f6"
          strokeOpacity="0.45"
        />

        <circle
          cx="300"
          cy="300"
          r="36"
          fill="#111827"
          stroke="#60a5fa"
          strokeOpacity="0.2"
        />
      </svg>

      {/* Center system */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              boxShadow: [
                "0 0 0 rgba(59,130,246,0)",
                "0 0 35px rgba(59,130,246,.16)",
                "0 0 0 rgba(59,130,246,0)",
              ],
            }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
              duration: 3,
              repeat: Infinity,
            }
        }
        className="absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-400/30 bg-slate-950 sm:h-20 sm:w-20 sm:rounded-2xl"
      >
        <div className="text-center">
          <Braces
            aria-hidden="true"
            className="mx-auto text-blue-400"
            size={20}
          />

          <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[9px] sm:tracking-[0.18em]">
            System
          </span>
        </div>
      </motion.div>

      {/* Java */}
      <NetworkNode
        label="Java"
        icon={<Braces size={14} aria-hidden="true" />}
        x="12%"
        y="19%"
        delay={0.2}
        primary
      />

      {/* Spring Boot */}
      <NetworkNode
        label="Spring Boot"
        icon={<Server size={14} aria-hidden="true" />}
        x="60%"
        y="19%"
        delay={0.35}
        primary
      />

      {/* AI */}
      <NetworkNode
        label="AI"
        icon={<Bot size={14} aria-hidden="true" />}
        x="3%"
        y="72%"
        delay={0.5}
        primary
      />

      {/* PostgreSQL */}
      <NetworkNode
        label="PostgreSQL"
        icon={<Database size={14} aria-hidden="true" />}
        x="57%"
        y="72%"
        delay={0.65}
      />

      {/* Docker */}
      <NetworkNode
        label="Docker"
        icon={<Container size={14} aria-hidden="true" />}
        x="41%"
        y="0%"
        delay={0.8}
      />

      {/* GitHub */}
      <NetworkNode
        label="GitHub"
        icon={<GitBranch size={14} aria-hidden="true" />}
        x="41%"
        y="84%"
        delay={0.95}
      />

      {/* API label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1.2,
        }}
        className="absolute left-1/2 top-[18%] z-10 -translate-x-1/2 text-[8px] uppercase tracking-[0.2em] text-slate-600 sm:text-[10px] sm:tracking-[0.25em]"
      >
        API
      </motion.div>
    </div>
  );
}

export default HeroNetwork;