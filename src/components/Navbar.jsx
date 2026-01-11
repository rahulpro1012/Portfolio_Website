import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaDownload, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  const resumeLink =
    "https://drive.google.com/file/d/1FCgxuala-05MWXUyxMSV-wzfve0iQurp/view?usp=sharing";

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
            <Logo className="h-10 w-10 stroke-accent group-hover:stroke-textMain transition-all duration-300" />
          </div>

          {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
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

          {/* --- DESKTOP RIGHT SIDE (Resume + Theme) --- */}
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

          {/* --- MOBILE HAMBURGER BUTTON (Visible only on Mobile) --- */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary border border-border text-accent"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-textMain focus:outline-none"
              aria-label="Open Menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-border shadow-2xl animate-fadeIn">
          <ul className="flex flex-col items-center py-6 space-y-6 text-textMain font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={closeMenu} // Close menu when clicked
                  className="text-lg hover:text-accent transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Resume Button */}
            <li className="pt-4">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-accent rounded-full hover:opacity-90 transition-all shadow-lg"
              >
                Resume <FaDownload size={12} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
