import React, { useEffect, Suspense } from "react";
// Keep Navbar and Home eager (load immediately)
import Navbar from "./Navbar";
import Home from "./Home";

// Lazy load the rest to speed up initial site load
const AboutMe = React.lazy(() => import("./AboutMe"));
const Projects = React.lazy(() => import("./Projects"));
const Skills = React.lazy(() => import("./Skills"));
const Experience = React.lazy(() => import("./Experience"));
const Email = React.lazy(() => import("./Email"));

// A simple loading spinner/skeleton for lazy sections
const SectionLoader = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
    <div className="animate-pulse text-gray-500">Loading section...</div>
  </div>
);

function Page() {
  useEffect(() => {
    // Keep your existing intersection observer logic
    // It's good for the "fade in" effect!
    const sections = document.querySelectorAll("section"); // Changed from .section class to semantic tag

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            // Optional: Stop observing once faded in to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-ubuntu min-w-full bg-slate-900 text-gray-50 min-h-screen">
      <Navbar />

      {/* Semantic Main Tag for SEO */}
      <main className="pt-16">
        {/* HOME: Load immediately, crucial for First Contentful Paint */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <Home />
        </section>

        {/* Suspense wrapper handles loading states for other sections */}
        <Suspense fallback={<SectionLoader />}>
          <section
            id="aboutme"
            className="min-h-screen flex items-center justify-center px-4 opacity-0 transition-opacity duration-1000"
          >
            <AboutMe />
          </section>

          <section
            id="projects"
            className="min-h-screen flex items-center justify-center px-4 opacity-0 transition-opacity duration-1000"
          >
            <Projects />
          </section>

          <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-4 opacity-0 transition-opacity duration-1000"
          >
            <Skills />
          </section>

          <section
            id="experience"
            className="min-h-screen flex items-center justify-center px-4 opacity-0 transition-opacity duration-1000"
          >
            <Experience />
          </section>

          <section
            id="email"
            className="min-h-screen flex items-center justify-center px-4 opacity-0 transition-opacity duration-1000"
          >
            <Email />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default Page;
