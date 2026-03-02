import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-400 py-10 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">

        {/* Left */}
        <p className="text-sm text-center md:text-left">
          © {year} Vivek Kumar. All rights reserved.
        </p>

        {/* Center */}
        <ul className="flex justify-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Right */}
        <div className="flex justify-center md:justify-end gap-6 text-xl">
          <a
            href="https://github.com/Vivekkushwahaofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transform hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-kr-mehta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:vivek39101@gmail.com"
            className="hover:text-blue-400 transform hover:scale-125 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Back To Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition duration-300"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;