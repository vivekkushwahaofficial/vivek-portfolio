import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

function Projects() {
  return (
    <ScrollReveal>
      <section
        id="projects"
        className="bg-gray-800 py-20 sm:py-24 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Internship Project – Legal Aid Matching Platform */}
            <Card
              title="Legal Aid Matching Platform (Internship Project)"
              description="Worked as a Backend Developer in a team-based internship project using Agile development practices. Contributed to REST API development, JWT authentication, PostgreSQL database design, and Spring Boot backend modules. Collaborated through Git workflows, feature branches, pull requests, and code reviews in a multi-developer environment."
              tech="Java, Spring Boot, PostgreSQL, JWT, REST APIs, Git, Agile"
              github=""
            />

            {/* Project 2 – PeerNexus (Collaborative Learning & Messaging Platform) */}
            <Card
              title="PeerNexus (Collaborative Learning & Messaging Platform)"
              description="Full-stack student collaborative learning and messaging platform built using Spring Boot and React. Features real-time chat, typing indicators, and user presence tracking powered by WebSockets. Relational database schema designed with PostgreSQL, secured with JWT-based authentication, and containerized using Docker with Cloudinary integrated for media uploads."
              tech="Java, Spring Boot, React, PostgreSQL, WebSockets, JWT, Docker, Cloudinary"
              github="https://github.com/vivekkushwahaofficial/peernexus"
              live="https://peernexus.vercel.app/"
            />

            {/* Project 3 – Employee Management System */}
            <Card
              title="Employee Management System"
              description="Full-stack Employee Management System built using React and Spring Boot. Developed RESTful backend APIs implementing layered architecture (Controller, Service, Repository) with comprehensive CRUD operations. Integrated PostgreSQL with Spring Data JPA for database persistence, and deployed the live application using Render and Vercel."
              tech="Java, Spring Boot, React, PostgreSQL, Spring Data JPA, Render, Vercel"
              github="https://github.com/Vivekkushwahaofficial/employee-management-system"
              live="https://employee-management-system-wnla.vercel.app/"
            />

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;