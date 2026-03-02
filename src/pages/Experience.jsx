import ScrollReveal from "../components/ScrollReveal";

function Experience() {
  return (
    <ScrollReveal>
      <section
        id="experience"
        className="bg-gray-800 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-white mb-10">
            Internship Experience
          </h2>

          <div className="bg-gray-900 rounded-xl p-8 shadow-lg
                          hover:shadow-xl transition max-w-3xl">

            {/* Role & Company */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-400">
                JAVA Teck Stack Intern – Infosys Springboard
              </h3>
              <span className="text-sm text-gray-400 mt-2 md:mt-0">
                Feb 2026 – Present
              </span>
            </div>

            <p className="text-gray-400 mb-4">
              Java Full Stack | Spring Boot | PostgreSQL | Github
            </p>

            {/* Responsibilities */}
            <ul className="list-disc list-inside space-y-2">
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