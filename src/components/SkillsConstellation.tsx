import { useState } from "react";
import {
    motion,
    useReducedMotion,
    type Variants,
} from "framer-motion";
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

type SkillId =
    | "java"
    | "spring"
    | "docker"
    | "postgres"
    | "python"
    | "react"
    | "github"
    | "ai";

type SkillAccent = "blue" | "purple" | "slate";

interface SkillNode {
    id: SkillId;
    name: string;
    category: string;
    description: string;
    icon: LucideIcon;
    position: string;
    accent?: SkillAccent;
}

const skills: SkillNode[] = [
    {
        id: "java",
        name: "Java",
        category: "OOP",
        description:
            "Core backend programming, object-oriented design and application logic.",
        icon: Code2,
        position:
            "left-[4%] top-[25%] lg:left-[7%] lg:top-[23%]",
        accent: "blue",
    },
    {
        id: "spring",
        name: "Spring Boot",
        category: "REST",
        description:
            "Structured backend services, REST APIs, security and persistence.",
        icon: Server,
        position:
            "right-[4%] top-[25%] lg:right-[7%] lg:top-[23%]",
        accent: "blue",
    },
    {
        id: "docker",
        name: "Docker",
        category: "Containers",
        description:
            "Containerized development, reproducible environments and deployment.",
        icon: Box,
        position:
            "left-[6%] bottom-[14%] lg:left-[10%] lg:bottom-[12%]",
        accent: "blue",
    },
    {
        id: "postgres",
        name: "PostgreSQL",
        category: "SQL",
        description:
            "Relational persistence, schema design and structured application data.",
        icon: Database,
        position:
            "right-[6%] bottom-[14%] lg:right-[10%] lg:bottom-[12%]",
        accent: "slate",
    },
    {
        id: "python",
        name: "Python",
        category: "Automation",
        description:
            "Automation, scripting and experimentation with AI-powered workflows.",
        icon: Terminal,
        position:
            "left-[24%] bottom-[4%] lg:left-[32%] lg:bottom-[4%]",
        accent: "purple",
    },
    {
        id: "react",
        name: "React",
        category: "Components",
        description:
            "Component-based interfaces, application state and interactive UI.",
        icon: Code2,
        position:
            "right-[24%] bottom-[4%] lg:right-[32%] lg:bottom-[4%]",
        accent: "blue",
    },
    {
        id: "github",
        name: "GitHub",
        category: "Git",
        description:
            "Source control, collaboration, repository management and delivery.",
        icon: GitBranch,
        position:
            "left-[33%] top-[4%] lg:left-[37%] lg:top-[5%]",
        accent: "slate",
    },
    {
        id: "ai",
        name: "AI",
        category: "AI",
        description:
            "AI-assisted development, automation and intelligent application features.",
        icon: BrainCircuit,
        position:
            "right-[33%] top-[4%] lg:right-[37%] lg:top-[5%]",
        accent: "purple",
    },
];

const nodeVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 14,
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

function getAccentStyles(accent: SkillAccent = "blue") {
    switch (accent) {
        case "purple":
            return {
                border:
                    "border-purple-400/25 hover:border-purple-400/55 focus-visible:border-purple-400/55",
                background:
                    "bg-[#0d0a18] hover:bg-purple-500/[0.06]",
                icon:
                    "bg-purple-500/10 text-purple-400",
                glow:
                    "rgba(168,85,247,0.18)",
            };

        case "slate":
            return {
                border:
                    "border-white/[0.10] hover:border-white/25 focus-visible:border-white/25",
                background:
                    "bg-[#0b111d] hover:bg-white/[0.03]",
                icon:
                    "bg-slate-500/10 text-slate-300",
                glow:
                    "rgba(148,163,184,0.12)",
            };

        default:
            return {
                border:
                    "border-blue-400/20 hover:border-blue-400/55 focus-visible:border-blue-400/55",
                background:
                    "bg-[#0b1322] hover:bg-blue-500/[0.06]",
                icon:
                    "bg-blue-500/10 text-blue-400",
                glow:
                    "rgba(59,130,246,0.18)",
            };
    }
}

function SkillsConstellation() {
    const [activeSkill, setActiveSkill] =
        useState<SkillId | null>(null);

    const prefersReducedMotion = useReducedMotion();

    const selectedSkill = skills.find(
        (skill) => skill.id === activeSkill,
    );

    return (
        <div className="relative mt-16">
            {/* =====================================================
          DESKTOP CONSTELLATION
          ===================================================== */}
            <div
                className="
          relative
          hidden
          h-[480px]
          overflow-hidden
          rounded-3xl
          border
          border-white/[0.07]
          bg-[#080d18]
          md:block
          sm:h-[500px]
          lg:h-[520px]
        "
            >
                {/* Background grid */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.18]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* Subtle center glow */}
                <div
                    aria-hidden="true"
                    className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-80
            w-80
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.045]
            blur-3xl
          "
                />

                {/* =================================================
            CONNECTION SYSTEM
            ================================================= */}
                <svg
                    aria-hidden="true"
                    className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
          "
                    viewBox="0 0 1000 520"
                    preserveAspectRatio="none"
                >
                    {/* Outer orbit */}
                    <ellipse
                        cx="500"
                        cy="258"
                        rx="280"
                        ry="185"
                        fill="none"
                        stroke="rgba(59,130,246,0.10)"
                        strokeWidth="1"
                        strokeDasharray="2 7"
                    />

                    {/* Inner orbit */}
                    <ellipse
                        cx="500"
                        cy="258"
                        rx="195"
                        ry="125"
                        fill="none"
                        stroke="rgba(59,130,246,0.07)"
                        strokeWidth="1"
                    />

                    {/* Java → center */}
                    <line
                        x1="120"
                        y1="165"
                        x2="500"
                        y2="258"
                        stroke="rgba(59,130,246,0.22)"
                        strokeWidth="1"
                    />

                    {/* Spring Boot → center */}
                    <line
                        x1="880"
                        y1="165"
                        x2="500"
                        y2="258"
                        stroke="rgba(59,130,246,0.22)"
                        strokeWidth="1"
                    />

                    {/* Docker → center */}
                    <line
                        x1="145"
                        y1="410"
                        x2="500"
                        y2="258"
                        stroke="rgba(59,130,246,0.18)"
                        strokeWidth="1"
                    />

                    {/* PostgreSQL → center */}
                    <line
                        x1="855"
                        y1="410"
                        x2="500"
                        y2="258"
                        stroke="rgba(59,130,246,0.16)"
                        strokeWidth="1"
                    />

                    {/* GitHub → center */}
                    <line
                        x1="390"
                        y1="60"
                        x2="500"
                        y2="258"
                        stroke="rgba(148,163,184,0.16)"
                        strokeWidth="1"
                    />

                    {/* AI → center */}
                    <line
                        x1="610"
                        y1="60"
                        x2="500"
                        y2="258"
                        stroke="rgba(168,85,247,0.20)"
                        strokeWidth="1"
                    />

                    {/* Animated Java packet */}
                    {!prefersReducedMotion && (
                        <>
                            <motion.circle
                                cx="120"
                                cy="165"
                                r="2.5"
                                fill="#60a5fa"
                                animate={{
                                    cx: [120, 500],
                                    cy: [165, 258],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Spring Boot packet */}
                            <motion.circle
                                cx="880"
                                cy="165"
                                r="2.5"
                                fill="#60a5fa"
                                animate={{
                                    cx: [880, 500],
                                    cy: [165, 258],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3.4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 0.7,
                                }}
                            />

                            {/* AI packet */}
                            <motion.circle
                                cx="610"
                                cy="60"
                                r="2.5"
                                fill="#c084fc"
                                animate={{
                                    cx: [610, 500],
                                    cy: [60, 258],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 1.2,
                                }}
                            />
                        </>
                    )}
                </svg>

                {/* =================================================
            CENTER SYSTEM
            ================================================= */}
                <motion.div
                    className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-28
            w-28
            sm:h-32
            sm:w-32
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            justify-center
            rounded-[28px]
            border
            border-blue-400/30
            bg-[#050b16]
            shadow-[0_0_55px_rgba(37,99,235,0.10)]
          "
                    animate={
                        prefersReducedMotion
                            ? undefined
                            : {
                                boxShadow: [
                                    "0 0 45px rgba(37,99,235,0.07)",
                                    "0 0 70px rgba(37,99,235,0.15)",
                                    "0 0 45px rgba(37,99,235,0.07)",
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
                        size={28}
                        strokeWidth={1.5}
                        className="text-blue-400"
                    />

                    <span className="mt-3 text-[10px] tracking-[0.35em] text-slate-500">
                        ENGINEERING
                    </span>

                    <span className="mt-1 text-base font-medium tracking-wide text-white">
                        STACK
                    </span>
                </motion.div>

                {/* =================================================
            SKILL NODES
            ================================================= */}
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    const isActive = activeSkill === skill.id;
                    const styles = getAccentStyles(skill.accent);

                    return (
                        <motion.div
                            key={skill.id}
                            className={`
                absolute
                ${skill.position}
                z-30
                w-[140px]
                sm:w-[155px]
                lg:w-[165px]
              `}
                            custom={index}
                            variants={nodeVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                        >
                            <motion.button
                                type="button"
                                aria-label={`Show how Vivek uses ${skill.name}`}
                                aria-pressed={isActive}
                                onMouseEnter={() =>
                                    setActiveSkill(skill.id)
                                }
                                onMouseLeave={() =>
                                    setActiveSkill(null)
                                }
                                onFocus={() =>
                                    setActiveSkill(skill.id)
                                }
                                onBlur={() =>
                                    setActiveSkill(null)
                                }
                                onClick={() =>
                                    setActiveSkill((current) =>
                                        current === skill.id
                                            ? null
                                            : skill.id,
                                    )
                                }
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                            y: -5,
                                            scale: 1.025,
                                        }
                                }
                                whileTap={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                            scale: 0.98,
                                        }
                                }
                                transition={{
                                    duration: 0.2,
                                }}
                                className={`
                  group
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  px-3
                  py-2.5
                  text-left
                  shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                  outline-none
                  transition-colors
                  ${styles.border}
                  ${styles.background}
                  focus-visible:ring-2
                  focus-visible:ring-blue-400/60
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080d18]
                  ${isActive
                                        ? "ring-1 ring-blue-400/20"
                                        : ""
                                    }
                `}
                            >
                                {/* Icon */}
                                <span
                                    className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${styles.icon}
                  `}
                                >
                                    <Icon
                                        size={18}
                                        strokeWidth={1.7}
                                    />
                                </span>

                                {/* Text */}
                                <span className="min-w-0">
                                    <span className="block truncate text-[13px] font-medium text-white">
                                        {skill.name}
                                    </span>

                                    <span className="mt-0.5 block text-xs text-slate-500">
                                        {skill.category}
                                    </span>
                                </span>
                            </motion.button>

                            {/* Desktop tooltip */}
                            {isActive && (
                                <motion.div
                                    initial={
                                        prefersReducedMotion
                                            ? false
                                            : {
                                                opacity: 0,
                                                y: 5,
                                            }
                                    }
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-full
                    z-50
                    mt-3
                    hidden
                    w-64
                    -translate-x-1/2
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#0b111d]
                    p-3
                    shadow-2xl
                    lg:block
                  "
                                >
                                    <p className="text-xs leading-5 text-slate-400">
                                        {skill.description}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}

                {/* =================================================
            INFORMATION PANEL
            ================================================= */}
                <div className="absolute bottom-7 left-7 max-w-sm">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400">
                        {selectedSkill?.name ?? "Technology stack"}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        {selectedSkill?.description ??
                            "Hover or focus a technology to see how I use it in real projects."}
                    </p>
                </div>

                {/* Status */}
                <div className="absolute bottom-7 right-7 hidden items-center gap-2 text-xs text-slate-600 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    Interactive stack
                </div>

                {/* Orbit labels */}
                <span
                    aria-hidden="true"
                    className="
            absolute
            left-1/2
            top-[15%]
            -translate-x-1/2
            text-[9px]
            tracking-[0.35em]
            text-slate-700
          "
                >
                    SERVICES
                </span>

                <span
                    aria-hidden="true"
                    className="
            absolute
            bottom-[7%]
            left-1/2
            -translate-x-1/2
            text-[9px]
            tracking-[0.35em]
            text-slate-700
          "
                >
                    DELIVERY
                </span>
            </div>

            {/* =====================================================
          MOBILE VERSION
          ===================================================== */}
            <div className="grid gap-3 md:hidden">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    const isActive = activeSkill === skill.id;
                    const styles = getAccentStyles(skill.accent);

                    return (
                        <motion.button
                            key={skill.id}
                            type="button"
                            aria-label={`Show how Vivek uses ${skill.name}`}
                            aria-expanded={isActive}
                            onClick={() =>
                                setActiveSkill((current) =>
                                    current === skill.id
                                        ? null
                                        : skill.id,
                                )
                            }
                            initial={
                                prefersReducedMotion
                                    ? false
                                    : {
                                        opacity: 0,
                                        y: 10,
                                    }
                            }
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: prefersReducedMotion
                                    ? 0
                                    : index * 0.04,
                            }}
                            whileTap={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                        scale: 0.99,
                                    }
                            }
                            className={`
                flex
                items-start
                gap-4
                rounded-2xl
                border
                p-4
                text-left
                outline-none
                transition-colors
                ${styles.border}
                ${styles.background}
                focus-visible:ring-2
                focus-visible:ring-blue-400/60
              `}
                        >
                            <span
                                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${styles.icon}
                `}
                            >
                                <Icon size={20} />
                            </span>

                            <span className="min-w-0">
                                <span className="block font-medium text-white">
                                    {skill.name}
                                </span>

                                <span className="mt-1 block text-xs text-slate-500">
                                    {skill.category}
                                </span>

                                {isActive && (
                                    <motion.span
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto",
                                        }}
                                        className="mt-2 block text-xs leading-5 text-slate-400"
                                    >
                                        {skill.description}
                                    </motion.span>
                                )}
                            </span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillsConstellation;