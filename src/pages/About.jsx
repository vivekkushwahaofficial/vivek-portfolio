import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="bg-gray-800 py-20 text-gray-300"
      >
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="mb-4 leading-relaxed">
            I am a backend-focused software developer specializing in
            <span className="text-blue-400"> Java and Spring Boot</span>.
            I design and develop scalable RESTful APIs following
            clean layered architecture (Controller-Service-Repository).
          </p>

          <p className="mb-4 leading-relaxed">
            During my internship at
            <span className="text-blue-400"> Infosys Springboard</span>,
            I worked on real-world backend modules including
            database schema design, JWT authentication, validation,
            and API integration using PostgreSQL.
          </p>

          <p className="leading-relaxed">
            I actively practice Data Structures and Algorithms
            and have solved 100+ coding problems to strengthen
            my problem-solving and system design fundamentals.
          </p>

        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;