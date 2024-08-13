import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Email from "./Email";

function Page() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="font-ubuntu min-w-full text-gray-50 min-h-screen ">
      <Navbar />
      <div className="pt-16">
        <Element
          name="home"
          className="section min-h-screen flex items-center justify-center"
        >
          <Home />
        </Element>
        <Element
          name="aboutme"
          className="section min-h-screen flex items-center justify-center"
        >
          <AboutMe />
        </Element>
        <Element
          name="projects"
          className="section min-h-screen flex items-center justify-center"
        >
          <Projects />
        </Element>
        <Element
          name="skills"
          className="section min-h-screen flex items-center justify-center"
        >
          <Skills />
        </Element>
        <Element
          name="experience"
          className="section min-h-screen flex items-center justify-center"
        >
          <Experience />
        </Element>
        <Element
          name="email"
          className="section min-h-screen flex items-center justify-center"
        >
          <Email />
        </Element>
      </div>
    </div>
  );
}

export default Page;
