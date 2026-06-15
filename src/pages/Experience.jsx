import ScrollReveal from "../components/ScrollReveal";

function Experience() {
  return (
    <ScrollReveal>
      <section
        id="experience"
        className="bg-gray-800 py-20 sm:py-24 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Internship Experience
          </h2>

          <div className="bg-gray-900 rounded-xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition max-w-3xl border border-white/5">

            {/* Role & Company */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start md:items-center mb-4 gap-2">
              <h3 className="text-xl font-semibold text-blue-400">
                JAVA Tech Stack Intern – Infosys Springboard
              </h3>
              <span className="text-sm text-gray-400 shrink-0">
                Feb 2026 – Apr 2026
              </span>
            </div>

            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Java Full Stack | Spring Boot | PostgreSQL | GitHub
            </p>

            {/* Responsibilities */}
            <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base">
              <li>Developed production-ready RESTful APIs using Spring Boot.</li>
              <li>Implemented Controller-Service-Repository layered architecture.</li>
              <li>Designed relational database schemas using PostgreSQL.</li>
              <li>Implemented validation, exception handling, and JWT-based authentication.</li>
              <li>Integrated frontend applications with backend APIs using JSON.</li>
              <li>Tested and validated APIs using Postman and collaborated using Git.</li>
            </ul>

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Experience;