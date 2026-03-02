import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

function Projects() {
  return (
    <ScrollReveal>
      <section
        id="projects"
        className="bg-gray-900 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 – Legal Aid Platform */}
            <Card
              title="Legal Aid Matching Platform"
              description="Team-based internship project where I contributed as a Backend Developer in a collaborative Git workflow. Designed and implemented REST APIs, integrated JWT-based authentication, structured PostgreSQL schema design, and followed layered architecture. Managed feature branches, pull requests, and resolved merge conflicts during development."
              tech="Java, Spring Boot, PostgreSQL, JWT, REST APIs, Git"
              github="#"
            />

            {/* Project 2 – Backend CRUD System */}
            <Card
              title="Employee Management REST API"
              description="Spring Boot application implementing layered architecture with complete CRUD operations, validation, exception handling, database integration, and Docker-based deployment."
              tech="Java 17, Spring Boot, Spring Data JPA, Hibernate, MySQL, Docker, Render"
              github="https://github.com/Vivekkushwahaofficial/employee-management-system"
              live="https://employee-management-system-w4lh.onrender.com"
            />

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;