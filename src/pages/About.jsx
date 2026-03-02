import ScrollReveal from "../components/ScrollReveal";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaServer,
  FaGitAlt,
  FaVial
} from "react-icons/fa";

function About() {
  return (
    <ScrollReveal>
      <section id="about" className="bg-gray-900 py-24 text-gray-300">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT SIDE CONTENT */}
            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                Backend Engineer in Progress
              </h3>

              <p className="mb-6 text-gray-400 leading-relaxed">
                I am a Computer Science undergraduate (2024–2027) focused on backend
                development using Java and Spring Boot. I build secure, scalable RESTful APIs
                following clean layered architecture (Controller–Service–Repository).
              </p>

              <p className="mb-6 text-gray-400 leading-relaxed">
                During my internship at Infosys Springboard, I worked on PostgreSQL schema
                design, JWT authentication, validation, exception handling, and API integration.
                I also containerized applications using Docker and deployed them to the cloud.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Alongside development, I actively practice Data Structures and Algorithms
                to strengthen problem-solving and system design skills.
              </p>

              {/* Education Card */}
              <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-blue-400 font-medium">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  Oriental Institute of Science and Technology
                </p>
                <p className="text-sm text-gray-500">
                  2024 – 2027
                </p>
              </div>

            </div>

            {/* RIGHT SIDE SKILL CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Java & Spring */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl 
              hover:-translate-y-2 hover:scale-105 hover:shadow-blue-500/20 
              transition-all duration-300 ease-in-out">
                <FaCode className="text-blue-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold">Java & Spring Boot</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Spring Boot, JPA, Hibernate, Maven
                </p>
              </div>

              {/* Databases */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl 
              hover:-translate-y-2 hover:scale-105 hover:shadow-purple-500/20 
              transition-all duration-300 ease-in-out">
                <FaDatabase className="text-purple-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold">Database Management</h4>
                <p className="text-sm text-gray-400 mt-2">
                  PostgreSQL, MySQL, MongoDB
                </p>
              </div>

              {/* REST APIs */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl 
              hover:-translate-y-2 hover:scale-105 hover:shadow-green-500/20 
              transition-all duration-300 ease-in-out">
                <FaServer className="text-green-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold">RESTful API Design</h4>
                <p className="text-sm text-gray-400 mt-2">
                  JWT Authentication, Validation, Exception Handling
                </p>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl 
              hover:-translate-y-2 hover:scale-105 hover:shadow-yellow-500/20 
              transition-all duration-300 ease-in-out">
                <FaCloud className="text-yellow-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold">Cloud & Deployment</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Docker, Render Deployment, Production Configuration
                </p>
              </div>

              {/* Version Control */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl 
              hover:-translate-y-2 hover:scale-105 hover:shadow-orange-500/20 
              transition-all duration-300 ease-in-out">
                <FaGitAlt className="text-orange-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold">Version Control</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Git, GitHub, Branching Strategy, PR Workflow
                </p>
              </div>

              {/* Testing */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl 
              hover:-translate-y-2 hover:scale-105 hover:shadow-pink-500/20 
              transition-all duration-300 ease-in-out">
                <FaVial className="text-pink-400 text-2xl mb-3" />
                <h4 className="text-white font-semibold">API Testing</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Postman, Debugging, Error Handling
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default About;