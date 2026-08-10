import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

interface IntroScreenProps {
  onComplete: () => void;
}

const bootMessages = [
  "Initializing Portfolio Core...",
  "Loading Software Engineering Stack...",
  "Mapping Backend Architecture...",
  "Connecting Data Systems...",
  "Synchronizing Developer Tools...",
  "Activating AI Engineering Layer...",
];

const particles = [
  ["8%", "17%"],
  ["18%", "72%"],
  ["29%", "28%"],
  ["42%", "14%"],
  ["54%", "82%"],
  ["65%", "24%"],
  ["76%", "68%"],
  ["88%", "34%"],
  ["94%", "76%"],
  ["7%", "54%"],
  ["36%", "88%"],
  ["70%", "48%"],
];

function IntroScreen({
  onComplete,
}: IntroScreenProps) {
  const reducedMotion = useReducedMotion();

  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const completedRef = useRef(false);

  /* ===========================================================
     PROGRESS ENGINE
  =========================================================== */

  useEffect(() => {
    const duration = reducedMotion ? 1800 : 8000;

    const startTime = performance.now();

    let frameId = 0;

    const updateProgress = (time: number) => {
      const elapsed = time - startTime;

      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      );

      setProgress(Math.round(percentage));

      if (percentage < 100) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [reducedMotion]);

  /* ===========================================================
     EXIT SEQUENCE
  =========================================================== */

  useEffect(() => {
    if (
      progress < 100 ||
      completedRef.current
    ) {
      return;
    }

    completedRef.current = true;

    const exitDelay = reducedMotion ? 150 : 550;

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);

      const completeDelay = reducedMotion
        ? 250
        : 1250;

      window.setTimeout(() => {
        onComplete();
      }, completeDelay);
    }, exitDelay);

    return () => {
      window.clearTimeout(exitTimer);
    };
  }, [
    progress,
    onComplete,
    reducedMotion,
  ]);

  /* ===========================================================
     ACTIVE MESSAGE
  =========================================================== */

  const activeMessageIndex = Math.min(
    Math.floor(
      (progress / 100) *
      bootMessages.length
    ),
    bootMessages.length - 1
  );

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0 }
              : undefined
          }
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-[#02050b]
            text-white
          "
        >
          {/* =================================================
              BACKGROUND GRID
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-30
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(59,130,246,0.09) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(59,130,246,0.09) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "58px 58px",
            }}
          />

          {/* =================================================
              MOVING GRID
          ================================================= */}

          {!reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-20
              "
              animate={{
                backgroundPosition: [
                  "0px 0px",
                  "58px 58px",
                ],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(34,211,238,0.12) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(34,211,238,0.12) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: "58px 58px",
              }}
            />
          )}

          {/* =================================================
              CENTER GLOW
          ================================================= */}

          <motion.div
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
              blur-[100px]

              sm:h-[460px]
              sm:w-[460px]
            "
            animate={
              reducedMotion
                ? undefined
                : {
                  opacity: [
                    0.16,
                    0.28,
                    0.16,
                  ],
                  scale: [
                    0.95,
                    1.05,
                    0.95,
                  ],
                }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(14,165,233,0.25), transparent 68%)",
            }}
          />

          {/* =================================================
              SCAN LINE
          ================================================= */}

          {!reducedMotion && (
            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                z-[2]
                h-px
                bg-cyan-400/30
                shadow-[0_0_18px_rgba(34,211,238,0.45)]
              "
              initial={{
                top: "-5%",
              }}
              animate={{
                top: "105%",
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          {/* =================================================
              PARTICLES
          ================================================= */}

          {!reducedMotion && (
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
              "
            >
              {particles.map(
                ([left, top], index) => (
                  <motion.span
                    key={`${left}-${top}`}
                    className="
                      absolute
                      h-[3px]
                      w-[3px]
                      rounded-full
                      bg-cyan-300
                    "
                    style={{
                      left,
                      top,
                    }}
                    animate={{
                      opacity: [
                        0.1,
                        0.7,
                        0.1,
                      ],
                      scale: [
                        0.7,
                        1.3,
                        0.7,
                      ],
                      y: [
                        0,
                        -8,
                        0,
                      ],
                    }}
                    transition={{
                      duration:
                        2.5 +
                        index * 0.15,
                      delay:
                        index * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )
              )}
            </div>
          )}

          {/* =================================================
              VIGNETTE
          ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <main
            className="
              relative
              z-10
              flex
              min-h-screen
              items-center
              justify-center
              px-4
              py-6

              sm:px-6
              sm:py-8
            "
          >
            <div
              className="
                w-full
                max-w-3xl
              "
            >
              {/* =================================================
                  BRAND
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  mb-6
                  text-center

                  sm:mb-7
                "
              >
                <div className="relative inline-block">
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      -z-10
                      bg-cyan-400/10
                      blur-3xl
                    "
                  />

                  <h1
                    className="
                      text-4xl
                      font-bold
                      tracking-[0.16em]
                      text-white
                      drop-shadow-[0_0_22px_rgba(56,189,248,0.2)]

                      sm:text-6xl

                      lg:text-7xl
                    "
                  >
                    VIVEK
                  </h1>

                  <motion.div
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    animate={{
                      width: "58%",
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.55,
                      duration: 0.7,
                    }}
                    className="
                      mx-auto
                      mt-2
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400
                      to-transparent
                    "
                  />
                </div>

                <p
                  className="
                    mt-2
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-blue-400

                    sm:text-[9px]
                    sm:tracking-[0.45em]
                  "
                >
                  Software Engineering
                  {" — "}
                  Diagnostic Boot
                </p>
              </motion.div>

              {/* =================================================
                  DIAGNOSTIC PANEL
              ================================================= */}

              <motion.section
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  relative
                  overflow-hidden
                  border
                  border-blue-400/25
                  bg-[#050b15]/90
                  shadow-[0_0_70px_rgba(14,165,233,0.07)]
                  backdrop-blur-md

                  px-5
                  py-6

                  sm:px-7
                  sm:py-7

                  lg:px-8
                  lg:py-8
                "
              >
                {/* TOP LIGHT */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-px
                    w-1/2
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-400/70
                    to-transparent
                  "
                />

                {/* INNER GLOW */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.06),transparent_55%)]
                  "
                />

                {/* CORNERS */}

                <Corner position="left-top" />
                <Corner position="right-top" />
                <Corner position="left-bottom" />
                <Corner position="right-bottom" />

                {/* CONTENT */}

                <div className="relative z-10">

                  {/* HEADER */}

                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        text-blue-400

                        sm:text-[10px]
                      "
                    >
                      {progress >= 100
                        ? "SYSTEM_READY"
                        : "AI_ENGINE"}
                    </span>

                    <motion.span
                      className="
                        font-mono
                        text-3xl
                        font-bold
                        leading-none
                        text-cyan-400

                        sm:text-4xl

                        lg:text-5xl
                      "
                      animate={
                        reducedMotion
                          ? undefined
                          : {
                            textShadow: [
                              "0 0 8px rgba(34,211,238,0.15)",
                              "0 0 22px rgba(34,211,238,0.5)",
                              "0 0 8px rgba(34,211,238,0.15)",
                            ],
                          }
                      }
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                      }}
                    >
                      {progress}%
                    </motion.span>
                  </div>

                  {/* PROGRESS */}

                  <div
                    className="
                      relative
                      mt-4
                      h-1
                      overflow-hidden
                      bg-slate-800/80

                      sm:mt-5
                    "
                  >
                    <motion.div
                      className="
                        relative
                        h-full
                        bg-gradient-to-r
                        from-blue-500
                        via-cyan-400
                        to-purple-500
                      "
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.12,
                        ease: "linear",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          right-0
                          top-1/2
                          h-2
                          w-2
                          -translate-y-1/2
                          rounded-full
                          bg-white
                          shadow-[0_0_8px_white,0_0_18px_rgba(34,211,238,1)]
                        "
                      />
                    </motion.div>
                  </div>

                  {/* TERMINAL */}

                  <div
                    className="
                      mt-6
                      space-y-2.5
                      font-mono
                      text-[9px]

                      sm:mt-7
                      sm:space-y-3
                      sm:text-xs

                      lg:text-sm
                    "
                  >
                    {bootMessages.map(
                      (message, index) => {
                        const isActive =
                          index ===
                          activeMessageIndex;

                        const isDone =
                          progress >=
                          ((index + 1) /
                            bootMessages.length) *
                          100;

                        return (
                          <motion.div
                            key={message}
                            initial={{
                              opacity: 0,
                              x: -8,
                            }}
                            animate={{
                              opacity:
                                isDone ||
                                  isActive
                                  ? 1
                                  : 0.18,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="
                              flex
                              min-w-0
                              items-center
                              gap-2
                            "
                          >
                            <span className="shrink-0 text-blue-500">
                              [CORE]
                            </span>

                            <span
                              className={`
                                min-w-0
                                truncate
                                ${isActive
                                  ? "text-cyan-300"
                                  : isDone
                                    ? "text-slate-400"
                                    : "text-slate-600"
                                }
                              `}
                            >
                              {message}
                            </span>

                            {isActive &&
                              progress <
                              100 && (
                                <motion.span
                                  className="
                                    h-3
                                    w-1
                                    shrink-0
                                    bg-cyan-400
                                    shadow-[0_0_8px_rgba(34,211,238,0.8)]
                                  "
                                  animate={{
                                    opacity: [
                                      1,
                                      0,
                                      1,
                                    ],
                                  }}
                                  transition={{
                                    duration: 0.7,
                                    repeat:
                                      Infinity,
                                  }}
                                />
                              )}

                            {isDone &&
                              !isActive &&
                              progress <
                              100 && (
                                <span
                                  aria-hidden="true"
                                  className="
                                    ml-auto
                                    text-emerald-400/60
                                  "
                                >
                                  ✓
                                </span>
                              )}
                          </motion.div>
                        );
                      }
                    )}
                  </div>

                  {/* =================================================
                      IMPORTANT:
                      READY STATE REMOVED.
                      This keeps the panel height identical at 100%.
                  ================================================= */}
                </div>
              </motion.section>

              {/* =================================================
                  STATUS BADGES
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                }}
                className="
                  mt-4
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2

                  sm:mt-5
                  sm:gap-2.5
                "
              >
                <StatusBadge
                  color="cyan"
                  label="Backend"
                  value="ONLINE"
                />

                <StatusBadge
                  color="purple"
                  label="AI"
                  value="READY"
                />

                <StatusBadge
                  color="green"
                  label="GitHub"
                  value="SYNC"
                />
              </motion.div>

              {/* STACK */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.85,
                  duration: 0.5,
                }}
                className="
                  mt-2
                  text-center
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-slate-600

                  sm:text-[9px]
                  sm:tracking-[0.35em]
                "
              >
                Java · Spring Boot · AI ·
                Open Source
              </motion.p>
            </div>
          </main>

          {/* =====================================================
              EXIT WIPE
          ====================================================== */}

          {isExiting && !reducedMotion && (
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                fixed
                inset-0
                z-[10000]
                overflow-hidden
              "
            >
              {/* Dark curtain */}

              <motion.div
                initial={{
                  x: "-105%",
                }}
                animate={{
                  x: "105%",
                }}
                transition={{
                  duration: 1.15,
                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
                className="
                  absolute
                  inset-0
                  bg-[#02050b]
                "
              />

              {/* Cyan trail */}

              <motion.div
                initial={{
                  left: "-20%",
                }}
                animate={{
                  left: "110%",
                }}
                transition={{
                  duration: 1.15,
                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-32
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/25
                  to-transparent
                  blur-2xl
                "
              />

              {/* Blue trail */}

              <motion.div
                initial={{
                  left: "-15%",
                }}
                animate={{
                  left: "110%",
                }}
                transition={{
                  duration: 1.3,
                  delay: 0.04,
                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-20
                  bg-gradient-to-r
                  from-transparent
                  via-blue-500/25
                  to-transparent
                  blur-xl
                "
              />

              {/* Main beam */}

              <motion.div
                initial={{
                  left: "-5%",
                }}
                animate={{
                  left: "105%",
                }}
                transition={{
                  duration: 1.05,
                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-[2px]
                  bg-white
                "
                style={{
                  boxShadow: `
                    0 0 8px white,
                    0 0 22px rgba(34,211,238,1),
                    0 0 55px rgba(34,211,238,0.9),
                    0 0 100px rgba(59,130,246,0.7)
                  `,
                }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =============================================================
   CORNER
============================================================= */

function Corner({
  position,
}: {
  position:
  | "left-top"
  | "right-top"
  | "left-bottom"
  | "right-bottom";
}) {
  const classes = {
    "left-top":
      "left-0 top-0 border-l-2 border-t-2",

    "right-top":
      "right-0 top-0 border-r-2 border-t-2",

    "left-bottom":
      "bottom-0 left-0 border-b-2 border-l-2",

    "right-bottom":
      "bottom-0 right-0 border-b-2 border-r-2",
  };

  return (
    <motion.span
      aria-hidden="true"
      animate={{
        opacity: [0.55, 1, 0.55],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className={`
        absolute
        h-7
        w-7
        border-cyan-400
        ${classes[position]}
      `}
    />
  );
}

/* =============================================================
   STATUS BADGE
============================================================= */

interface StatusBadgeProps {
  color: "cyan" | "purple" | "green";
  label: string;
  value: string;
}

function StatusBadge({
  color,
  label,
  value,
}: StatusBadgeProps) {
  const colors = {
    cyan: {
      border:
        "border-cyan-400/20",
      dot: "bg-cyan-400",
      text: "text-cyan-300",
      glow:
        "rgba(34,211,238,0.5)",
    },

    purple: {
      border:
        "border-purple-400/20",
      dot: "bg-purple-400",
      text: "text-purple-300",
      glow:
        "rgba(168,85,247,0.5)",
    },

    green: {
      border:
        "border-emerald-400/20",
      dot: "bg-emerald-400",
      text: "text-emerald-300",
      glow:
        "rgba(52,211,153,0.5)",
    },
  };

  const theme = colors[color];

  return (
    <div
      className={`
        flex
        items-center
        gap-1.5
        border
        ${theme.border}
        bg-[#050b15]/70
        px-2.5
        py-1.5
        font-mono
        text-[8px]
        backdrop-blur-sm

        sm:gap-2
        sm:px-3
        sm:py-1.5
        sm:text-[9px]
      `}
    >
      <motion.span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${theme.dot}
        `}
        animate={{
          opacity: [
            0.4,
            1,
            0.4,
          ],
          scale: [
            0.8,
            1.15,
            0.8,
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        style={{
          boxShadow:
            `0 0 8px ${theme.glow}`,
        }}
      />

      <span className="text-slate-500">
        {label}:
      </span>

      <span className={theme.text}>
        {value}
      </span>
    </div>
  );
}

export default IntroScreen;