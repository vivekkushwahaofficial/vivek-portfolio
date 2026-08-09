import ScrollReveal from "../components/ScrollReveal";
import SkillsConstellation from "../components/SkillsConstellation";

function Skills() {
  return (
    <ScrollReveal>
      <section
        id="skills"
        className="relative overflow-hidden bg-[#05080f] px-6 py-28 text-white sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="text-xs font-medium tracking-[0.28em] text-blue-400">
                  03
                </span>

                <span className="h-px w-12 bg-blue-500/60" />

                <span className="text-xs tracking-[0.28em] text-slate-500">
                  ENGINEERING STACK
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Technologies I use to{" "}
                <span className="text-slate-500">
                  build real systems.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              A practical stack built around backend engineering,
              databases, developer tooling and AI-powered applications.
            </p>
          </div>

          <SkillsConstellation />

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">
            <div className="bg-[#080d18] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Backend
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Java, Spring Boot, JPA, Hibernate and REST APIs.
              </p>
            </div>

            <div className="bg-[#080d18] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Data
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                PostgreSQL, MySQL, MongoDB and relational schema design.
              </p>
            </div>

            <div className="bg-[#080d18] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Delivery
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                GitHub, Maven, Docker, Postman and cloud deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Skills;
