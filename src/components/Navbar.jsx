import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa"; // Import download icon

function Navbar() {
  const resumeLink =
    "https://drive.google.com/file/d/1OhfCkEokpVx4utiPbQ9IyieOaFIc_ofh/view?usp=sharing";

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "aboutme", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "email", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 1. LOGO (Optional but looks professional) */}
          {/* If you don't have a logo, your initials in a customized font work great */}
          <div
            className="flex-shrink-0 cursor-pointer text-sky-400 font-bold text-xl tracking-tighter"
            onClick={() => window.scrollTo(0, 0)}
          >
            RM<span className="text-slate-100">.</span>
          </div>

          {/* 2. NAVIGATION LINKS (Centered) */}
          <div className="hidden md:block">
            <ul className="flex flex-row gap-8 text-sm font-medium text-slate-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    activeClass="text-sky-400 font-semibold"
                    className="cursor-pointer hover:text-sky-300 transition-colors duration-300 relative group"
                    href={`#${link.id}`}
                  >
                    {link.label}
                    {/* Hover Underline Animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. RESUME BUTTON (Right Aligned) */}
          <div className="hidden md:block">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-sky-900 bg-sky-400 rounded hover:bg-sky-300 transition-all shadow-[0_0_10px_rgba(56,189,248,0.3)]"
            >
              Resume <FaDownload size={10} />
            </a>
          </div>

          {/* Mobile Menu Icon would go here (We can add this later if needed) */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
