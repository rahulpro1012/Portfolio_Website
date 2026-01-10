import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaSun, FaMoon } from "react-icons/fa";
import Logo from "./Logo"; // Import your new Logo

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const resumeLink =
    "https://drive.google.com/file/d/1OhfCkEokpVx4utiPbQ9IyieOaFIc_ofh/view?usp=sharing";

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "aboutme", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "email", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* --- BRAND LOGO --- */}
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* The SVG Logo scales perfectly here */}
            <Logo className="h-10 w-10 stroke-accent group-hover:stroke-textMain transition-all duration-300" />
          </div>

          {/* Links */}
          <div className="hidden md:block">
            <ul className="flex flex-row gap-8 text-sm font-medium text-textMuted">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    activeClass="text-accent font-semibold"
                    className="cursor-pointer hover:text-accent transition-colors duration-300 relative group"
                    href={`#${link.id}`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Resume + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary border border-border text-accent hover:scale-110 transition-transform shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-accent rounded hover:opacity-90 transition-all shadow-lg shadow-accent/20"
            >
              Resume <FaDownload size={10} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
