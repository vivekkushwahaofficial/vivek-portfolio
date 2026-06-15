import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

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

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "frontend", name: "Frontend" },
    { id: "tools", name: "DevOps & Tools" }
  ];

  return (
    <ScrollReveal>
      <section
        id="skills"
        className="bg-gray-900 py-20 sm:py-24 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Skills
          </h2>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
                  activeCategory === cat.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20 scale-105"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-white/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Backend */}
            {(activeCategory === "all" || activeCategory === "backend") && (
              <div className="bg-gray-800 p-6 rounded-xl border border-transparent hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300 animate-fadeUp">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Backend Engineering
                </h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-900 rounded-full text-sm hover:text-blue-400 hover:bg-gray-800 border border-white/5 transition duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Database */}
            {(activeCategory === "all" || activeCategory === "database") && (
              <div className="bg-gray-800 p-6 rounded-xl border border-transparent hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300 animate-fadeUp">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Database & Persistence
                </h3>
                <div className="flex flex-wrap gap-3">
                  {databaseSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-900 rounded-full text-sm hover:text-blue-400 hover:bg-gray-800 border border-white/5 transition duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Frontend */}
            {(activeCategory === "all" || activeCategory === "frontend") && (
              <div className="bg-gray-800 p-6 rounded-xl border border-transparent hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300 animate-fadeUp">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Frontend (Supporting)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-900 rounded-full text-sm hover:text-blue-400 hover:bg-gray-800 border border-white/5 transition duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* DevOps */}
            {(activeCategory === "all" || activeCategory === "tools") && (
              <div className="bg-gray-800 p-6 rounded-xl border border-transparent hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300 animate-fadeUp">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {toolsSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-900 rounded-full text-sm hover:text-blue-400 hover:bg-gray-800 border border-white/5 transition duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

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