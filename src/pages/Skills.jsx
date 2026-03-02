import ScrollReveal from "../components/ScrollReveal";

function Skills() {

  const backendSkills = [
    "Java (Core + OOP)",
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate (JPA)",
    "RESTful APIs",
    "JWT Authentication",
    "Layered Architecture",
  ];

  const databaseSkills = [
    "PostgreSQL",
    "MySQL",
    "MongoDB (Basic)",
    "Database Schema Design",
  ];

  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  const toolsSkills = [
    "Git & GitHub",
    "Maven",
    "Postman",
    "Docker",
    "Render Deployment",
    "IntelliJ IDEA",
  ];

  return (
    <ScrollReveal>
      <section
        id="skills"
        className="bg-gray-800 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Backend */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Backend Engineering
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Database & Persistence
              </h3>
              <div className="flex flex-wrap gap-3">
                {databaseSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Frontend (Supporting)
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolsSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 max-w-2xl mx-auto">
              Strong focus on building scalable backend systems,
              writing clean and maintainable code, and following
              industry-standard software development practices.
            </p>
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
}

export default Skills;