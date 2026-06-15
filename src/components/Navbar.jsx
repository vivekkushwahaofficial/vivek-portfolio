import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

const sections = ["home", "about", "skills", "experience", "projects", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* 🔹 Detect Active Section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Fallback: If at the very bottom, force active state to "contact"
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
        if (isAtBottom) {
          setActive("contact");
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* 🔹 Shrink Navbar On Scroll & Handle scroll spy bottom updates */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-black/90 py-2 shadow-lg"
          : "bg-black/70 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-lg p-1">
          <img
            src={profile}
            alt="Vivek Kumar"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 
                       group-hover:scale-110 transition duration-300"
          />
          <span className="text-white font-semibold text-lg hidden sm:block 
                           group-hover:text-blue-400 transition">
            Vivek Kumar
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded px-2 py-1 ${
                  active === item
                    ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl p-3 -mr-3 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-lg cursor-pointer transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 py-6 space-y-4 text-center max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block capitalize text-lg transition focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded py-2 ${
                active === item
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;