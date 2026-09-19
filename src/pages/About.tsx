import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import SectionRail from "../components/SectionRail";

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
    value: 5,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 250,
    suffix: "+",
    label: "Coding Problems",
  },
];

function About() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() =>
    stats.map(() => 0)
  );

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

  useEffect(() => {
    if (!started) {
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started]);

  return (
    <ScrollReveal>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="
    relative
    overflow-hidden
    px-5
    py-16
    sm:px-6
    sm:py-20
    lg:px-10
    lg:py-28
    xl:px-16
  "
      >
        <SectionRail />
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4">
            <span className="font-mono text-xs text-blue-400 sm:text-sm">
              01
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-blue-500/40 sm:w-12"
            />

            <h2
              id="about-heading"
              className="text-xs uppercase tracking-[0.22em] text-gray-500 sm:text-sm sm:tracking-[0.25em]"
            >
              About
            </h2>
          </div>

          {/* Main content */}
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            {/* Focus areas */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500 sm:mb-6 sm:text-sm">
                What I focus on
              </p>

              <div>
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      border-b
                      border-white/5
                      py-3
                      transition-colors
                      duration-300
                      hover:border-blue-400/30
                      sm:gap-4
                      sm:py-4
                    "
                  >
                    <span className="shrink-0 font-mono text-[10px] text-gray-600 sm:text-xs">
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-sm
                        text-gray-300
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-lg
                      "
                    >
                      {area}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        ml-auto
                        translate-x-[-6px]
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

            {/* Story */}
            <div>
              <p
                className="
                  max-w-3xl
                  text-xl
                  font-medium
                  leading-[1.4]
                  tracking-tight
                  text-white
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                I build software by turning real problems
                into reliable, maintainable systems.
              </p>

              <div className="mt-6 space-y-4 text-sm leading-7 text-gray-400 sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8 lg:text-lg">
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

              {/* Technology line */}
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 sm:mt-9 sm:gap-x-6 sm:gap-y-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      font-mono
                      text-[10px]
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-blue-400
                      sm:text-xs
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
              mt-12
              border-y
              border-white/10
              py-7
              sm:mt-16
              sm:py-9
              lg:mt-20
              lg:py-10
            "
          >
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="
                    relative
                    px-3
                    py-2
                    sm:px-6
                    sm:py-0
                    lg:px-8
                    lg:first:pl-0
                  "
                >
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        left-12
                        top-1/2
                        hidden
                        h-10
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
                      text-3xl
                      font-medium
                      tracking-tight
                      text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {counts[index]}
                    <span className="text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}

              {/* Continuous learning */}
              <div
                className="
                  relative
                  px-3
                  py-2
                  sm:px-6
                  sm:py-0
                  lg:px-8
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-1/2
                    hidden
                    h-10
                    w-px
                    -translate-y-1/2
                    bg-white/10
                    sm:block
                  "
                />

                <div
                  className="
                    font-mono
                    text-3xl
                    font-medium
                    tracking-tight
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  ∞
                </div>

                <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                  Learning
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              border
              border-white/10
              bg-white/[0.02]
              p-5
              transition-colors
              duration-300
              hover:border-blue-400/20
              sm:mt-12
              sm:gap-5
              sm:p-6
              lg:mt-14
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:p-8
            "
          >
            <div>
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:mb-2 sm:text-xs">
                Education
              </p>

              <h3 className="text-base font-medium text-white sm:text-lg lg:text-xl">
                B.Tech in Computer Science &amp; Engineering
              </h3>

              <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
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
                text-[10px]
                text-blue-400
                sm:text-xs
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