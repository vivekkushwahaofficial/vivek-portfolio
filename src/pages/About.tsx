import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const focusAreas = [
  "Software engineering",
  "Backend development",
  "AI-powered applications",
  "Problem solving",
  "Clean architecture",
  "Continuous learning",
];

const technologies = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
  "Python",
  "React",
];

const stats: Stat[] = [
  {
    value: 3,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 100,
    suffix: "+",
    label: "Coding Problems",
  },
];

function About() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0)
  );

  /*
   * Start the statistic animation only when the
   * statistics section enters the viewport.
   */
  useEffect(() => {
    const element = statsRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /*
   * Animate each statistic from 0 to its real value.
   */
  useEffect(() => {
    if (!started) {
      return;
    }

    const duration = 900;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <ScrollReveal>
      <section
        id="about"
        className="
          relative
          overflow-hidden
          px-6
          py-24
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-14 flex items-center gap-4">
            <span className="font-mono text-sm text-blue-400">
              01
            </span>

            <div className="h-px w-12 bg-blue-500/40" />

            <span className="text-sm uppercase tracking-[0.25em] text-gray-500">
              About
            </span>
          </div>

          {/* Main Content */}
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* Left — Focus Areas */}
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-gray-500">
                What I focus on
              </p>

              <div className="space-y-1">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      border-b
                      border-white/5
                      py-4
                      transition-colors
                      duration-300
                      hover:border-blue-400/30
                    "
                  >
                    <span className="font-mono text-xs text-gray-600">
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-lg
                        text-gray-300
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {area}
                    </span>

                    <span
                      className="
                        ml-auto
                        translate-x-[-8px]
                        text-blue-400
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Story */}
            <div>
              <p
                className="
                  max-w-3xl
                  text-2xl
                  font-medium
                  leading-relaxed
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                I build software by turning real problems
                into reliable, maintainable systems.
              </p>

              <div className="mt-8 space-y-6 text-base leading-8 text-gray-400 sm:text-lg">

                <p>
                  I focus on backend development with{" "}
                  <span className="text-blue-400">
                    Java and Spring Boot
                  </span>
                  , building REST APIs and backend services
                  with clean layered architecture.
                </p>

                <p>
                  During my{" "}
                  <span className="text-blue-400">
                    Infosys Springboard
                  </span>{" "}
                  internship, I worked on backend modules
                  involving PostgreSQL, JWT authentication,
                  validation, exception handling and API
                  integration.
                </p>

                <p>
                  I also work with{" "}
                  <span className="text-blue-400">
                    Docker, React, Python and AI
                  </span>
                  , while continuously improving my DSA,
                  system design and software engineering
                  fundamentals.
                </p>
              </div>

              {/* Technology Line */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      font-mono
                      text-xs
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-blue-400
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div
            ref={statsRef}
            className="
              mt-20
              border-y
              border-white/10
              py-10
            "
          >
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">

              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="
                    relative
                    px-4
                    sm:px-8
                    first:sm:pl-0
                  "
                >
                  {/* Vertical separator */}
                  {index > 0 && (
                    <div
                      className="
                        absolute
                        left-0
                        top-1/2
                        hidden
                        h-12
                        w-px
                        -translate-y-1/2
                        bg-white/10
                        sm:block
                      "
                    />
                  )}

                  <div
                    className="
                      font-mono
                      text-4xl
                      font-medium
                      tracking-tight
                      text-white
                      sm:text-5xl
                    "
                  >
                    {counts[index]}
                    <span className="text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}

              {/* Continuous learning */}
              <div className="relative px-4 sm:px-8">
                <div
                  className="
                    absolute
                    left-0
                    top-1/2
                    hidden
                    h-12
                    w-px
                    -translate-y-1/2
                    bg-white/10
                    sm:block
                  "
                />

                <div
                  className="
                    font-mono
                    text-4xl
                    font-medium
                    tracking-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  ∞
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Learning
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className="
              mt-14
              flex
              flex-col
              gap-5
              border
              border-white/10
              bg-white/[0.02]
              p-6
              transition-colors
              duration-300
              hover:border-blue-400/20
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-8
            "
          >
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                Education
              </p>

              <h3 className="text-lg font-medium text-white sm:text-xl">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Oriental Institute of Science and Technology
              </p>
            </div>

            <span
              className="
                w-fit
                border
                border-blue-400/20
                bg-blue-400/5
                px-3
                py-1.5
                font-mono
                text-xs
                text-blue-400
              "
            >
              2024 — 2027
            </span>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;