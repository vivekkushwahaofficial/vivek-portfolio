import { motion } from "motion/react";
import {
  Bot,
  Braces,
  Container,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

type NodeProps = {
  label: string;
  icon: React.ReactNode;
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: {
          delay: delay + 0.5,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="absolute z-20"
      style={{ left: x, top: y }}
    >
      <div
        className={`group flex min-w-[112px] items-center gap-2 rounded-xl border px-3 py-2.5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 ${
          primary
            ? "border-blue-400/40 bg-blue-500/[0.12] shadow-[0_0_30px_rgba(59,130,246,0.12)]"
            : "border-slate-700/80 bg-slate-900/80 hover:border-blue-400/30"
        }`}
      >
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${
            primary
              ? "bg-blue-400/10 text-blue-300"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          {icon}
        </span>

        <span className="text-xs font-medium text-slate-200">{label}</span>
      </div>
    </motion.div>
  );
}

function HeroNetwork() {
  return (
    <div
      className="relative aspect-square w-full"
      aria-label="Interactive technical architecture visualization"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]"
      />

      {/* Rotating architecture rings */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-800"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-800/70"
      />

      {/* SVG connections */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0" x2="1">
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

        {/* Animated data packets */}
        <motion.circle
          r="4"
          fill="#60a5fa"
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

        <motion.circle
          r="3"
          fill="#a78bfa"
          animate={{
            cx: [300, 300, 455],
            cy: [300, 510, 455],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Center node */}
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

      {/* Center */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 rgba(59,130,246,0)",
            "0 0 35px rgba(59,130,246,.16)",
            "0 0 0 rgba(59,130,246,0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-blue-400/30 bg-slate-950"
      >
        <div className="text-center">
          <Braces className="mx-auto text-blue-400" size={22} />
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            System
          </span>
        </div>
      </motion.div>

      {/* Nodes */}
      <NetworkNode
        label="Java"
        icon={<Braces size={15} />}
        x="12%"
        y="19%"
        delay={0.2}
        primary
      />

      <NetworkNode
        label="Spring Boot"
        icon={<Server size={15} />}
        x="60%"
        y="19%"
        delay={0.35}
        primary
      />

      <NetworkNode
        label="AI"
        icon={<Bot size={15} />}
        x="3%"
        y="72%"
        delay={0.5}
        primary
      />

      <NetworkNode
        label="PostgreSQL"
        icon={<Database size={15} />}
        x="57%"
        y="72%"
        delay={0.65}
      />

      <NetworkNode
        label="Docker"
        icon={<Container size={15} />}
        x="41%"
        y="0%"
        delay={0.8}
      />

      <NetworkNode
        label="GitHub"
        icon={<GitBranch size={15} />}
        x="41%"
        y="84%"
        delay={0.95}
      />

      {/* API label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute left-1/2 top-[18%] z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-slate-600"
      >
        API
      </motion.div>
    </div>
  );
}

export default HeroNetwork;
