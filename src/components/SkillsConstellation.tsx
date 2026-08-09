import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    position: string;
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
        position:
            "left-[3%] top-[25%] sm:left-[5%] sm:top-[24%] lg:left-[5%]",
    },
    {
        id: "spring",
        name: "Spring Boot",
        category: "REST",
        description:
            "REST APIs, dependency injection, security and backend architecture.",
        icon: Server,
        position:
            "right-[3%] top-[25%] sm:right-[5%] sm:top-[24%] lg:right-[5%]",
    },
    {
        id: "docker",
        name: "Docker",
        category: "Containers",
        description:
            "Containerizing applications and creating consistent development environments.",
        icon: Box,
        position:
            "left-[5%] bottom-[15%] sm:left-[8%] sm:bottom-[13%] lg:left-[8%]",
    },
    {
        id: "postgres",
        name: "PostgreSQL",
        category: "SQL",
        description:
            "Relational persistence, schema design and application data management.",
        icon: Database,
        position:
            "right-[5%] bottom-[15%] sm:right-[8%] sm:bottom-[13%] lg:right-[8%]",
        accent: "slate",
    },
    {
        id: "python",
        name: "Python",
        category: "Automation",
        description:
            "Automation, scripting and AI-oriented application development.",
        icon: Terminal,
        position:
            "left-[50%] bottom-[2%] -translate-x-[105%] sm:bottom-[3%]",
        accent: "purple",
    },
    {
        id: "react",
        name: "React",
        category: "Components",
        description:
            "Component-based frontend development for modern web applications.",
        icon: Code2,
        position:
            "left-[50%] bottom-[2%] translate-x-[5%] sm:bottom-[3%]",
    },
    {
        id: "github",
        name: "GitHub",
        category: "Git",
        description:
            "Version control, collaboration, repository management and integrations.",
        icon: GitBranch,
        position:
            "left-[50%] top-[3%] -translate-x-[105%] sm:top-[4%]",
        accent: "slate",
    },
    {
        id: "ai",
        name: "AI",
        category: "AI",
        description:
            "AI-assisted development and practical AI-powered applications.",
        icon: BrainCircuit,
        position:
            "left-[50%] top-[3%] translate-x-[5%] sm:top-[4%]",
        accent: "purple",
    },
];

function getAccentClasses(accent: SkillAccent = "blue") {
    switch (accent) {
        case "purple":
            return {
                border: "border-purple-400/25 hover:border-purple-400/50",
                icon: "bg-purple-500/10 text-purple-400",
                glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.10)]",
            };

        case "slate":
            return {
                border: "border-slate-400/15 hover:border-slate-300/30",
                icon: "bg-slate-400/10 text-slate-300",
                glow: "group-hover:shadow-[0_0_30px_rgba(148,163,184,0.08)]",
            };

        default:
            return {
                border: "border-blue-400/20 hover:border-blue-400/50",
                icon: "bg-blue-500/10 text-blue-400",
                glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.10)]",
            };
    }
}

function SkillsConstellation() {
    const prefersReducedMotion = useReducedMotion();
    const gradientId = useId();

    return (
        <div
            className="
                relative
                isolate
                h-[500px]
                overflow-hidden
                rounded-[28px]
                border border-white/[0.07]
                bg-[#060b15]
                sm:h-[520px]
            "
            aria-label="Interactive engineering technology stack"
        >
            {/* =========================================================
                BACKGROUND GRID
            ========================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute inset-0
                    opacity-50
                    [background-image:linear-gradient(rgba(96,165,250,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.045)_1px,transparent_1px)]
                    [background-size:48px_48px]
                "
            />

            {/* =========================================================
                AMBIENT GLOW
            ========================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute left-1/2 top-1/2
                    h-64 w-64
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/[0.055]
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute left-[65%] top-[20%]
                    h-40 w-40
                    rounded-full
                    bg-purple-500/[0.035]
                    blur-3xl
                "
            />

            {/* =========================================================
                CONNECTION SYSTEM
            ========================================================= */}

            <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 1000 520"
                preserveAspectRatio="none"
            >
                <defs>
                    <radialGradient
                        id={gradientId}
                        cx="50%"
                        cy="50%"
                        r="50%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#3b82f6"
                            stopOpacity="0.12"
                        />

                        <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>

                {/* Center atmosphere */}
                <ellipse
                    cx="500"
                    cy="260"
                    rx="250"
                    ry="170"
                    fill={`url(#${gradientId})`}
                />

                {/* Outer orbit */}
                <ellipse
                    cx="500"
                    cy="260"
                    rx="285"
                    ry="185"
                    fill="none"
                    stroke="rgba(59,130,246,0.10)"
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
                    stroke="rgba(59,130,246,0.08)"
                    strokeWidth="1"
                />

                {/* Java */}
                <line
                    x1="120"
                    y1="165"
                    x2="500"
                    y2="260"
                    stroke="rgba(59,130,246,0.24)"
                    strokeWidth="1"
                />

                {/* Spring Boot */}
                <line
                    x1="880"
                    y1="165"
                    x2="500"
                    y2="260"
                    stroke="rgba(59,130,246,0.24)"
                    strokeWidth="1"
                />

                {/* Docker */}
                <line
                    x1="150"
                    y1="445"
                    x2="500"
                    y2="260"
                    stroke="rgba(59,130,246,0.18)"
                    strokeWidth="1"
                />

                {/* PostgreSQL */}
                <line
                    x1="850"
                    y1="445"
                    x2="500"
                    y2="260"
                    stroke="rgba(59,130,246,0.18)"
                    strokeWidth="1"
                />

                {/* GitHub */}
                <line
                    x1="390"
                    y1="60"
                    x2="500"
                    y2="260"
                    stroke="rgba(148,163,184,0.18)"
                    strokeWidth="1"
                />

                {/* AI */}
                <line
                    x1="610"
                    y1="60"
                    x2="500"
                    y2="260"
                    stroke="rgba(168,85,247,0.22)"
                    strokeWidth="1"
                />

                {/* Python */}
                <line
                    x1="350"
                    y1="455"
                    x2="500"
                    y2="260"
                    stroke="rgba(168,85,247,0.16)"
                    strokeWidth="1"
                />

                {/* React */}
                <line
                    x1="650"
                    y1="455"
                    x2="500"
                    y2="260"
                    stroke="rgba(59,130,246,0.16)"
                    strokeWidth="1"
                />

                {/* =====================================================
                    NATIVE SVG DATA PACKETS

                    Important:
                    Do NOT use motion.circle for cx/cy.
                    Native SVG animation prevents the undefined
                    cx/cy console errors previously seen.
                ===================================================== */}

                {!prefersReducedMotion && (
                    <>
                        {/* Java packet */}
                        <circle
                            cx="120"
                            cy="165"
                            r="2.5"
                            fill="#60a5fa"
                        >
                            <animate
                                attributeName="cx"
                                values="120;500"
                                dur="3s"
                                repeatCount="indefinite"
                            />

                            <animate
                                attributeName="cy"
                                values="165;260"
                                dur="3s"
                                repeatCount="indefinite"
                            />

                            <animate
                                attributeName="opacity"
                                values="0;1;0"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </circle>

                        {/* Spring Boot packet */}
                        <circle
                            cx="880"
                            cy="165"
                            r="2.5"
                            fill="#60a5fa"
                        >
                            <animate
                                attributeName="cx"
                                values="880;500"
                                dur="3.4s"
                                begin="0.7s"
                                repeatCount="indefinite"
                            />

                            <animate
                                attributeName="cy"
                                values="165;260"
                                dur="3.4s"
                                begin="0.7s"
                                repeatCount="indefinite"
                            />

                            <animate
                                attributeName="opacity"
                                values="0;1;0"
                                dur="3.4s"
                                begin="0.7s"
                                repeatCount="indefinite"
                            />
                        </circle>

                        {/* AI packet */}
                        <circle
                            cx="610"
                            cy="60"
                            r="2.5"
                            fill="#c084fc"
                        >
                            <animate
                                attributeName="cx"
                                values="610;500"
                                dur="3.2s"
                                begin="1.2s"
                                repeatCount="indefinite"
                            />

                            <animate
                                attributeName="cy"
                                values="60;260"
                                dur="3.2s"
                                begin="1.2s"
                                repeatCount="indefinite"
                            />

                            <animate
                                attributeName="opacity"
                                values="0;1;0"
                                dur="3.2s"
                                begin="1.2s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </>
                )}
            </svg>

            {/* =========================================================
                CENTER SYSTEM
            ========================================================= */}

            <motion.div
                className="
                    absolute left-1/2 top-1/2
                    z-20
                    flex
                    h-28 w-28
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                    rounded-[24px]
                    border border-blue-400/25
                    bg-[#050a13]
                    shadow-[0_0_55px_rgba(37,99,235,0.10)]
                    sm:h-32 sm:w-32
                "
                animate={
                    prefersReducedMotion
                        ? undefined
                        : {
                            boxShadow: [
                                "0 0 40px rgba(37,99,235,0.06)",
                                "0 0 65px rgba(37,99,235,0.14)",
                                "0 0 40px rgba(37,99,235,0.06)",
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
                    className="text-blue-400 sm:size-30"
                />

                <span className="mt-2 text-[9px] tracking-[0.34em] text-slate-500">
                    ENGINEERING
                </span>

                <span className="mt-1 text-sm font-medium tracking-wide text-white sm:text-base">
                    STACK
                </span>
            </motion.div>

            {/* =========================================================
                SKILL NODES
            ========================================================= */}

            {skills.map((skill, index) => {
                const Icon = skill.icon;
                const accent = getAccentClasses(skill.accent);

                return (
                    <motion.div
                        key={skill.id}
                        className={`absolute ${skill.position} z-30 w-[145px] sm:w-[155px] lg:w-[165px]`}
                        initial={
                            prefersReducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: 10 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 1, y: 0 }
                        }
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.45,
                            delay: prefersReducedMotion
                                ? 0
                                : index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div
                            className={`
                                group relative
                                rounded-2xl
                                border
                                ${accent.border}
                                ${accent.glow}
                                bg-[#0a1220]/95
                                px-3 py-2.5
                                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                                backdrop-blur-sm
                                transition-all
                                duration-200
                                hover:-translate-y-1
                                focus-within:-translate-y-1
                            `}
                        >
                            <div className="flex items-center gap-3">
                                {/* Icon */}
                                <div
                                    className={`
                                        flex
                                        h-9 w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        ${accent.icon}
                                    `}
                                >
                                    <Icon
                                        size={18}
                                        strokeWidth={1.7}
                                    />
                                </div>

                                {/* Text */}
                                <div className="min-w-0">
                                    <p className="truncate text-[13px] font-medium text-white">
                                        {skill.name}
                                    </p>

                                    <p className="mt-0.5 text-[11px] text-slate-500">
                                        {skill.category}
                                    </p>
                                </div>
                            </div>

                            {/* Accessible / hover tooltip */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    left-1/2
                                    top-full
                                    z-50
                                    mt-3
                                    w-52
                                    -translate-x-1/2
                                    rounded-xl
                                    border border-white/[0.08]
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
                                    group-focus-within:opacity-100
                                "
                            >
                                {skill.description}
                            </div>
                        </div>
                    </motion.div>
                );
            })}

            {/* =========================================================
                ORBIT LABELS
            ========================================================= */}

            <span
                aria-hidden="true"
                className="
                    absolute
                    left-1/2
                    top-[17%]
                    -translate-x-1/2
                    text-[8px]
                    tracking-[0.34em]
                    text-slate-700
                "
            >
                SERVICES
            </span>

            <span
                aria-hidden="true"
                className="
                    absolute
                    bottom-[8%]
                    left-1/2
                    -translate-x-1/2
                    text-[8px]
                    tracking-[0.34em]
                    text-slate-700
                "
            >
                DELIVERY
            </span>

            {/* =========================================================
                STATUS
            ========================================================= */}

            <div
                className="
                    absolute
                    bottom-4
                    right-4
                    z-40
                    hidden
                    items-center
                    gap-2
                    text-[10px]
                    text-slate-600
                    sm:flex
                "
            >
                <span
                    aria-hidden="true"
                    className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_10px_rgba(52,211,153,0.8)]
                    "
                />

                Interactive stack
            </div>
        </div>
    );
}

export default SkillsConstellation;