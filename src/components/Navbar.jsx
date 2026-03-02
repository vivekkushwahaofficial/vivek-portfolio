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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* 🔹 Shrink Navbar On Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        <a href="#home" className="flex items-center gap-3 group">
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
                className={`capitalize transition duration-200 cursor-pointer ${
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
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 py-6 space-y-4 text-center">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block capitalize text-lg transition ${
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