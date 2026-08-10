import ScrollReveal from "../components/ScrollReveal";
import SkillsConstellation from "../components/SkillsConstellation";

interface EngineeringArea {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
}

const engineeringAreas: EngineeringArea[] = [
  {
    number: "01",
    category: "BACKEND ENGINEERING",
    title: "APIs & application services",
    description:
      "Building structured backend services with clean separation of concerns, validation, authentication and maintainable API design.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JPA",
      "Hibernate",
    ],
  },
  {
    number: "02",
    category: "DATA & PERSISTENCE",
    title: "Reliable data layers",
    description:
      "Designing relational data models and integrating applications with databases through ORM and repository-based persistence.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
      "Spring Data JPA",
    ],
  },
  {
    number: "03",
    category: "FRONTEND & INTEGRATION",
    title: "Connecting systems",
    description:
      "Building responsive interfaces and connecting frontend applications with backend services through typed API contracts.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Axios",
      "REST",
    ],
  },
  {
    number: "04",
    category: "DELIVERY & TOOLING",
    title: "Developer workflow",
    description:
      "Using modern development tools to test, package, version and ship software consistently.",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Maven",
      "Postman",
      "CI/CD",
    ],
  },
  {
    number: "05",
    category: "AI & AUTOMATION",
    title: "AI-powered applications",
    description:
      "Exploring practical AI integrations and automation while combining AI tools with traditional software engineering.",
    technologies: [
      "Python",
      "AI APIs",
      "AI-assisted Development",
      "Automation",
    ],
  },
];

function Skills() {
  return (
    <ScrollReveal>
      <section
        id="skills"
        aria-labelledby="skills-heading"
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
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="flex flex-col gap-7 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <div className="mb-7 flex items-center gap-3 sm:mb-9 sm:gap-4">
                <span className="font-mono text-xs text-blue-400 sm:text-sm">
                  02
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-blue-500/50 sm:w-12"
                />

                <span className="text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:text-[11px] sm:tracking-[0.28em]">
                  Engineering Stack
                </span>
              </div>

              <h2
                id="skills-heading"
                className="
                  max-w-4xl
                  text-4xl
                  font-medium
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                  sm:leading-[0.98]
                  lg:text-6xl
                "
              >
                Technologies I use to{" "}
                <span className="text-slate-500">
                  build real systems.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500 sm:leading-7 lg:justify-self-end">
              A practical stack focused on backend engineering,
              data, developer tooling, modern interfaces and
              AI-powered applications.
            </p>
          </div>

          {/* Technology constellation */}
          <div className="mt-10 sm:mt-12 lg:mt-16">
            <SkillsConstellation />
          </div>

          {/* Engineering areas */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-white/[0.08] pb-4 sm:mb-8 sm:gap-6 sm:pb-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
                  How I use the stack
                </p>

                <h3 className="mt-2 text-lg font-medium tracking-tight text-white sm:text-2xl">
                  Engineering capabilities
                </h3>
              </div>

              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:block">
                05 areas
              </span>
            </div>

            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {engineeringAreas.map((area) => (
                <article
                  key={area.number}
                  className="
                    group
                    grid
                    gap-5
                    py-6
                    transition-colors
                    duration-300
                    hover:bg-white/[0.015]
                    sm:grid-cols-[56px_0.8fr_1.2fr]
                    sm:gap-7
                    sm:px-5
                    sm:py-8
                    lg:grid-cols-[72px_0.75fr_1.25fr]
                    lg:gap-8
                    lg:py-10
                  "
                >
                  {/* Number */}
                  <div className="font-mono text-xs text-slate-600 transition-colors duration-300 group-hover:text-blue-400">
                    {area.number}
                  </div>

                  {/* Category */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400/80">
                      {area.category}
                    </p>

                    <h4 className="mt-1.5 text-base font-medium tracking-tight text-white sm:mt-2 sm:text-xl">
                      {area.title}
                    </h4>
                  </div>

                  {/* Description + technologies */}
                  <div>
                    <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:leading-7">
                      {area.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                      {area.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            border
                            border-white/[0.08]
                            bg-white/[0.02]
                            px-2
                            py-1.5
                            font-mono
                            text-[9px]
                            text-slate-400
                            transition-colors
                            duration-300
                            group-hover:border-white/[0.12]
                            group-hover:text-slate-300
                            sm:px-2.5
                            sm:text-[10px]
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Engineering principles */}
          <div className="mt-10 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:mt-14 sm:grid-cols-3">
            <div className="bg-[#080d18] p-5 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Architecture
              </p>

              <p className="mt-2.5 text-sm leading-6 text-slate-300 sm:mt-3">
                Prefer clear boundaries, layered design and
                maintainable components.
              </p>
            </div>

            <div className="bg-[#080d18] p-5 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Engineering
              </p>

              <p className="mt-2.5 text-sm leading-6 text-slate-300 sm:mt-3">
                Focus on reliable APIs, validation, security,
                persistence and testable code.
              </p>
            </div>

            <div className="bg-[#080d18] p-5 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Learning
              </p>

              <p className="mt-2.5 text-sm leading-6 text-slate-300 sm:mt-3">
                Continuously improving DSA, system design,
                cloud-native development and AI engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Skills;