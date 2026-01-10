import React, { useEffect, Suspense } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

// Lazy load other sections
const AboutMe = React.lazy(() => import("./AboutMe"));
const Projects = React.lazy(() => import("./Projects"));
const Skills = React.lazy(() => import("./Skills"));
const Experience = React.lazy(() => import("./Experience"));
const Email = React.lazy(() => import("./Email"));

const SectionLoader = () => (
  <div className="flex items-center justify-center w-full min-h-[50vh] text-slate-500">
    Loading...
  </div>
);

function Page() {
  // Your existing Fade-in logic
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
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
    <div className="font-sans min-w-full bg-primary text-slate-200 min-h-screen selection:bg-sky-400/30">
      <Navbar />

      {/* CRITICAL FIX: 
         Removed <Element> wrappers. 
         The IDs are now inside the components themselves.
      */}
      <main>
        <Home />

        <Suspense fallback={<SectionLoader />}>
          <AboutMe />
          <Projects />
          <Skills />
          <Experience />
          <Email />
        </Suspense>
      </main>
    </div>
  );
}

export default Page;
