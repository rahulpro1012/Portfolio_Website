import { Link } from "react-scroll";

function Navbar() {
  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "aboutme", label: "ABOUT ME" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "email", label: "CONTACT ME" },
  ];

  return (
    // SEO Fix: Use <nav> instead of <div>
    <nav
      aria-label="Main Navigation"
      className="flex flex-row lg:justify-center justify-center items-center p-4 nav-bg w-full fixed top-0 left-0 z-50 shadow-md backdrop-blur-sm"
    >
      <ul className="flex flex-row flex-wrap gap-3 lg:gap-16 text-sm lg:text-lg md:text-lg text-white font-extralight justify-center font-asap-condensed">
        {navLinks.map((link) => (
          // SEO Fix: <li> must be the direct child of <ul>
          <li key={link.id}>
            <Link
              to={link.id}
              smooth={true}
              duration={500} // Increased slightly for smoother feel
              spy={true}
              activeClass="font-bold text-blue-400" // Visual cue for active section
              className="cursor-pointer hover:text-blue-300 transition-colors duration-300"
              href={`#${link.id}`} // SEO Fix: Explicit href tells Google where this goes
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
