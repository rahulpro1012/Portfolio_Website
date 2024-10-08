import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="flex flex-row lg:justify-center justify-center items-center p-4 nav-bg w-full fixed top-0 left-0 z-50">
      <ul className="flex flex-row flex-wrap gap-3 lg:gap-16 text-sm lg:text-lg md:text-lg text-white font-extralight justify-center font-asap-condensed">
        <Link
          to="home"
          smooth={true}
          duration={100}
          className="navbar cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <li>HOME</li>
        </Link>
        <Link
          to="aboutme"
          smooth={true}
          duration={100}
          className="navbar cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <li>ABOUT ME</li>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={100}
          className="navbar cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <li>PROJECTS</li>
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={100}
          className="navbar cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <li>SKILLS</li>
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={100}
          className="navbar cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <li>EXPERIENCE</li>
        </Link>
        <Link
          to="email"
          smooth={true}
          duration={100}
          className="navbar cursor-pointer"
          activeClass="active"
          spy={true}
        >
          <li>CONTACT ME</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
