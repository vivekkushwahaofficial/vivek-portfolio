import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <ScrollReveal>
      <section id="about" className="bg-gray-800 py-24 text-gray-300">
        <div className="max-w-4xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>

          {/* Paragraph 1 */}
          <p className="mb-6 leading-relaxed text-lg">
            I am a backend developer specializing in
            <span className="text-blue-400 font-medium"> Java</span> and
            <span className="text-blue-400 font-medium"> Spring Boot</span>.
            I design and build scalable, secure
            <span className="text-blue-400 font-medium"> RESTful APIs </span>
            using clean layered architecture (Controller–Service–Repository)
            and industry best practices.
          </p>

          {/* Paragraph 2 */}
          <p className="mb-6 leading-relaxed text-lg">
            During my internship at
            <span className="text-blue-400 font-medium"> Infosys Springboard</span>,
            I developed production-ready backend modules including
            PostgreSQL database schema design,
            <span className="text-blue-400 font-medium"> JWT authentication</span>,
            validation, global exception handling, and REST API integration.
            I also containerized applications using
            <span className="text-blue-400 font-medium"> Docker</span>
            and deployed them on cloud platforms.
          </p>

          {/* Paragraph 3 */}
          <p className="leading-relaxed text-lg">
            I actively practice Data Structures and Algorithms and have solved
            <span className="text-blue-400 font-medium"> 100+ coding problems</span>
            to strengthen my problem-solving skills and system design understanding.
          </p>

          {/* Education Card */}
<div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-lg hover:border-blue-400/30 transition duration-300">

  <div className="flex justify-between items-start flex-wrap gap-2">

    {/* Degree */}
    <div>
      <h4 className="text-white font-semibold text-lg">
        B.Tech in Computer Science & Engineering
      </h4>
      <p className="text-gray-400 text-sm mt-1">
        Oriental Institute of Science and Technology
      </p>
    </div>

    {/* Year Badge */}
    <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
      2024 – 2027
    </span>

  </div>

</div>

        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;