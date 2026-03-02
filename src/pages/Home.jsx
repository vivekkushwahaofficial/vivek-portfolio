import resume from "../assets/Vivek_Kumar.pdf";
import profile from "../assets/profile.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-white animate-fadeUp">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-400">Vivek Kumar</span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Java Backend Developer | Spring Boot | PostgreSQL | Docker | Cloud Deployment
          </p>

          <p className="mt-4 text-gray-400">
            I design and develop production-ready backend systems using
            Spring Boot and PostgreSQL. Experienced in layered architecture,
            JWT authentication, API integration, Docker containerization,
            and cloud deployment.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={resume}
              download
              className="px-6 py-3 bg-blue-500 rounded-lg
                 hover:bg-blue-600 transition"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Vivekkushwahaofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-400 rounded-lg
             hover:bg-blue-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-gray-500 rounded-lg
                 hover:border-blue-400 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Vivek Kumar"
            className="
              w-64 h-64 md:w-80 md:h-80
              rounded-full object-cover
              border-4 border-blue-400
              shadow-xl
              animate-float
              hover:scale-105 hover:shadow-blue-500/50
              transition duration-300
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
