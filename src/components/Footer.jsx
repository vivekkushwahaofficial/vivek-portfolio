import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* 🔹 Toggle floating button visibility based on scroll depth */
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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

      {/* Floating Back To Top Button (Scroll-Aware) */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 z-40 bg-blue-500 text-white p-3.5 rounded-full shadow-xl hover:bg-blue-600 cursor-pointer flex items-center justify-center transition-all duration-300 ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;