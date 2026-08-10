import { motion, useReducedMotion } from "motion/react";
import {
  BrainCircuit,
  Box,
  Code2,
  Database,
  GitBranch,
  Server,
  Terminal,
  type LucideIcon,
} from "lucide-react";

type SkillAccent = "blue" | "purple" | "slate";

type SkillNode = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  accent?: SkillAccent;
};

const skills: SkillNode[] = [
  {
    id: "java",
    name: "Java",
    category: "OOP",
    description:
      "Core Java, OOP, collections and backend application development.",
    icon: Code2,
  },
  {
    id: "spring",
    name: "Spring Boot",
    category: "REST",
    description:
      "REST APIs, dependency injection, security and backend architecture.",
    icon: Server,
  },
  {
    id: "docker",
    name: "Docker",
    category: "Containers",
    description:
      "Containerizing applications and creating consistent development environments.",
    icon: Box,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "SQL",
    description:
      "Relational persistence, schema design and application data management.",
    icon: Database,
    accent: "slate",
  },
  {
    id: "python",
    name: "Python",
    category: "Automation",
    description:
      "Automation, scripting and AI-oriented application development.",
    icon: Terminal,
    accent: "purple",
  },
  {
    id: "react",
    name: "React",
    category: "Components",
    description:
      "Component-based frontend development for modern web applications.",
    icon: Code2,
  },
  {
    id: "github",
    name: "GitHub",
    category: "Git",
    description:
      "Version control, collaboration, repository management and integrations.",
    icon: GitBranch,
    accent: "slate",
  },
  {
    id: "ai",
    name: "AI",
    category: "AI",
    description:
      "AI-assisted development and practical AI-powered applications.",
    icon: BrainCircuit,
    accent: "purple",
  },
];

function getAccentClasses(accent: SkillAccent = "blue") {
  switch (accent) {
    case "purple":
      return {
        border:
          "border-purple-400/25 hover:border-purple-400/50",
        icon: "bg-purple-500/10 text-purple-400",
        glow:
          "group-hover:shadow-[0_0_28px_rgba(168,85,247,0.09)]",
      };

    case "slate":
      return {
        border:
          "border-slate-400/15 hover:border-slate-300/30",
        icon: "bg-slate-400/10 text-slate-300",
        glow:
          "group-hover:shadow-[0_0_28px_rgba(148,163,184,0.07)]",
      };

    default:
      return {
        border:
          "border-blue-400/20 hover:border-blue-400/50",
        icon: "bg-blue-500/10 text-blue-400",
        glow:
          "group-hover:shadow-[0_0_28px_rgba(59,130,246,0.09)]",
      };
  }
}

interface SkillCardProps {
  skill: SkillNode;
  index: number;
  reducedMotion: boolean | null;
  showTooltip?: boolean;
}

function SkillCard({
  skill,
  index,
  reducedMotion,
  showTooltip = true,
}: SkillCardProps) {
  const Icon = skill.icon;
  const accent = getAccentClasses(skill.accent);

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 10 }
      }
      whileInView={
        reducedMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.4,
        delay: reducedMotion ? 0 : index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-w-0"
    >
      <div
        className={`
          relative
          rounded-xl
          border
          ${accent.border}
          ${accent.glow}
          bg-[#0a1220]/95
          px-2.5
          py-2
          shadow-[0_8px_24px_rgba(0,0,0,0.14)]
          transition-all
          duration-200
          hover:-translate-y-0.5
          sm:rounded-2xl
          sm:px-3
          sm:py-2.5
        `}
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div
            className={`
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              ${accent.icon}
              sm:h-9
              sm:w-9
              sm:rounded-xl
            `}
          >
            <Icon
              size={16}
              strokeWidth={1.7}
              className="sm:h-[18px] sm:w-[18px]"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[11px] font-medium text-white sm:text-[13px]">
              {skill.name}
            </p>

            <p className="mt-0.5 text-[9px] text-slate-500 sm:text-[11px]">
              {skill.category}
            </p>
          </div>
        </div>

        {/* Desktop tooltip */}
        {showTooltip && (
          <div
            role="tooltip"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-full
              z-50
              mt-2.5
              hidden
              w-52
              -translate-x-1/2
              rounded-xl
              border
              border-white/[0.08]
              bg-[#080d18]
              px-3
              py-2.5
              text-xs
              leading-5
              text-slate-400
              opacity-0
              shadow-2xl
              transition-opacity
              duration-200
              group-hover:opacity-100
              lg:block
            "
          >
            {skill.description}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SkillsConstellation() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      role="group"
      aria-label="Engineering technology stack"
      className="
        relative
        isolate
        rounded-2xl
        border
        border-white/[0.07]
        bg-[#060b15]
        p-3.5
        sm:rounded-[24px]
        sm:p-5
        lg:rounded-[28px]
        lg:p-6
      "
    >
      {/* =====================================================
          Background grid
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-[inherit]
          opacity-40
          [background-image:linear-gradient(rgba(96,165,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.04)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* =====================================================
          Ambient glow
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.045]
          blur-3xl
          sm:h-56
          sm:w-56
        "
      />

      {/* =====================================================
          MOBILE / TABLET
          ===================================================== */}

      <div className="relative z-10 lg:hidden">
        {/* Center node */}

        <div className="mx-auto flex h-20 w-20 flex-col items-center justify-center rounded-[18px] border border-blue-400/25 bg-[#050a13] shadow-[0_0_35px_rgba(37,99,235,0.07)] sm:h-24 sm:w-24 sm:rounded-[20px]">
          <Code2
            size={21}
            strokeWidth={1.5}
            className="text-blue-400 sm:h-6 sm:w-6"
          />

          <span className="mt-1 text-[7px] tracking-[0.24em] text-slate-500 sm:text-[8px]">
            ENGINEERING
          </span>

          <span className="mt-0.5 text-[11px] font-medium tracking-wide text-white sm:text-xs">
            STACK
          </span>
        </div>

        {/* Technology grid */}

        <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:grid-cols-4 sm:gap-2.5">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              reducedMotion={reducedMotion}
              showTooltip={false}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-[8px] uppercase tracking-[0.22em] text-slate-600 sm:mt-5 sm:text-[9px]">
          <span className="h-px w-5 bg-slate-800 sm:w-6" />

          Engineering stack

          <span className="h-px w-5 bg-slate-800 sm:w-6" />
        </div>
      </div>

      {/* =====================================================
          DESKTOP CONSTELLATION
          ===================================================== */}

      <div className="relative hidden h-[350px] xl:h-[370px] lg:block">
        {/* Connection system */}

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
        >
          {/* Outer orbit */}

          <ellipse
            cx="500"
            cy="260"
            rx="285"
            ry="185"
            fill="none"
            stroke="rgba(59,130,246,0.09)"
            strokeWidth="1"
            strokeDasharray="2 7"
          />

          {/* Inner orbit */}

          <ellipse
            cx="500"
            cy="260"
            rx="195"
            ry="125"
            fill="none"
            stroke="rgba(59,130,246,0.07)"
            strokeWidth="1"
          />

          {/* Connections */}

          {[
            [120, 165],
            [880, 165],
            [150, 445],
            [850, 445],
            [390, 60],
            [610, 60],
            [350, 455],
            [650, 455],
          ].map(([x, y], index) => (
            <line
              key={`${x}-${y}-${index}`}
              x1={x}
              y1={y}
              x2="500"
              y2="260"
              stroke={
                index === 5 || index === 6
                  ? "rgba(168,85,247,0.16)"
                  : "rgba(59,130,246,0.16)"
              }
              strokeWidth="1"
            />
          ))}

          {/* Animated packets */}

          {!reducedMotion && (
            <>
              <circle
                cx="120"
                cy="165"
                r="2.5"
                fill="#60a5fa"
              >
                <animate
                  attributeName="cx"
                  values="120;500"
                  dur="3.2s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="cy"
                  values="165;260"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="880"
                cy="165"
                r="2.5"
                fill="#60a5fa"
              >
                <animate
                  attributeName="cx"
                  values="880;500"
                  dur="3.5s"
                  begin="0.7s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="cy"
                  values="165;260"
                  dur="3.5s"
                  begin="0.7s"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="610"
                cy="60"
                r="2.5"
                fill="#c084fc"
              >
                <animate
                  attributeName="cx"
                  values="610;500"
                  dur="3.3s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="cy"
                  values="60;260"
                  dur="3.3s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}
        </svg>

        {/* ===================================================
            Center node
            =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-28
            w-28
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            justify-center
            rounded-[20px]
            border
            border-blue-400/25
            bg-[#050a13]
            shadow-[0_0_40px_rgba(37,99,235,0.07)]
            xl:h-30
            xl:w-30
          "
          animate={
            reducedMotion
              ? undefined
              : {
                boxShadow: [
                  "0 0 35px rgba(37,99,235,0.05)",
                  "0 0 55px rgba(37,99,235,0.12)",
                  "0 0 35px rgba(37,99,235,0.05)",
                ],
              }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code2
            size={26}
            strokeWidth={1.5}
            className="text-blue-400"
          />

          <span className="mt-1.5 text-[8px] tracking-[0.26em] text-slate-500">
            ENGINEERING
          </span>

          <span className="mt-0.5 text-sm font-medium tracking-wide text-white">
            STACK
          </span>
        </motion.div>

        {/* ===================================================
            Desktop skill nodes
            =================================================== */}

        <div className="absolute left-[4%] top-[18%] w-[155px]">
          <SkillCard
            skill={skills[0]}
            index={0}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute right-[4%] top-[18%] w-[155px]">
          <SkillCard
            skill={skills[1]}
            index={1}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute bottom-[8%] left-[7%] w-[155px]">
          <SkillCard
            skill={skills[2]}
            index={2}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute bottom-[8%] right-[7%] w-[155px]">
          <SkillCard
            skill={skills[3]}
            index={3}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute left-1/2 top-[2%] w-[155px] -translate-x-[108%]">
          <SkillCard
            skill={skills[6]}
            index={4}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute left-1/2 top-[2%] w-[155px] translate-x-[8%]">
          <SkillCard
            skill={skills[7]}
            index={5}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute bottom-[1%] left-1/2 w-[155px] -translate-x-[108%]">
          <SkillCard
            skill={skills[4]}
            index={6}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="absolute bottom-[1%] left-1/2 w-[155px] translate-x-[8%]">
          <SkillCard
            skill={skills[5]}
            index={7}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Labels */}

        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[13%] -translate-x-1/2 text-[8px] tracking-[0.3em] text-slate-700"
        >
          SERVICES
        </span>

        <span
          aria-hidden="true"
          className="absolute bottom-[4%] left-1/2 -translate-x-1/2 text-[8px] tracking-[0.3em] text-slate-700"
        >
          DELIVERY
        </span>

        {/* Status */}

        <div className="absolute bottom-1.5 right-1.5 z-40 hidden items-center gap-1.5 text-[9px] text-slate-600 xl:flex">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
          />

          Interactive stack
        </div>
      </div>
    </div>
  );
}

export default SkillsConstellation;