import { Suspense, lazy } from "react";
import { ScrollRestoration } from "react-router-dom";

// 1. Eager Load (Critical for First Paint)
import Navbar from "./Navbar";
import Home from "./Home";

// 2. Lazy Load (Load these chunks only when needed)
const AboutMe = lazy(() => import("./AboutMe"));
const Projects = lazy(() => import("./Projects"));
const Experience = lazy(() => import("./Experience"));
const Email = lazy(() => import("./Email"));

// 3. Sleek Loading Spinner (Shown while sections load)
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-primary">
    <div className="flex flex-col items-center gap-4">
      {/* Spinning Circle */}
      <div className="w-12 h-12 border-4 border-secondary border-t-accent rounded-full animate-spin"></div>
      <p className="text-textMuted text-sm font-mono animate-pulse">
        Loading content...
      </p>
    </div>
  </div>
);

function Page() {
  return (
    <div className="font-sans antialiased text-textMain bg-primary transition-colors duration-300 selection:bg-accent selection:text-white">
      <ScrollRestoration />
      <Navbar />

      <main className="flex flex-col w-full overflow-hidden">
        {/* Render Home Immediately */}
        <Home />

        {/* Wrap the rest in Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <AboutMe />
          <Projects />
          <Experience />
          <Email />
        </Suspense>
      </main>
    </div>
  );
}

export default Page;
