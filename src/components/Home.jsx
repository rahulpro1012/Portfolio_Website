import { Link } from "react-scroll";
import {
  FaFileAlt,
  FaJava,
  FaReact,
  FaDocker,
  FaJs,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiSpringboot, SiGo, SiPostgresql, SiRedis } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

function Home() {
  const resumeLink =
    "https://drive.google.com/file/d/1P-VMFXPujYLB8-M-ObRlybmwLV3gIZPJ/view?usp=sharing";

  return (
    <section
      id="home"
      // Changed: bg-primary text-textMain
      className="relative w-full flex flex-col justify-center font-sans py-20 min-h-screen bg-primary text-textMain transition-colors duration-300"
    >
      {/* Background Decor: Uses bg-accent now */}
      <div className="absolute top-[-10%] right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20">
        {/* Status Badge (Kept Emerald as it signifies 'Go/Active' universally) */}
        <div className="flex items-center gap-3 mb-6 animate-fadeIn">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-500 font-mono text-sm tracking-wide bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Available for New Projects
          </span>
        </div>

        {/* --- TYPOGRAPHY SECTION --- */}
        <div className="space-y-6 animate-fadeIn">
          {/* Changed: text-accent */}
          <p className="text-accent font-medium tracking-wider text-base md:text-lg">
            Hello, I&apos;m
          </p>

          {/* Gradient Name: Adapts to theme variables */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-textMain via-textMuted to-textMuted pb-2">
            Rahul Mudaliar.
          </h1>

          {/* Changed: text-textMuted, text-accent, text-textMain */}
          <h2 className="text-2xl md:text-4xl font-bold text-textMuted leading-tight">
            Architecting <span className="text-accent">Scalable Backends</span>{" "}
            <br className="hidden md:block" />&{" "}
            <span className="text-textMain">Intuitive Frontends</span>.
          </h2>

          {/* Changed: text-textMuted, border-accent */}
          <p className="text-textMuted text-sm md:text-lg max-w-2xl leading-relaxed mt-6 border-l-4 border-accent/50 pl-6">
            I bridge the gap between complex server-side logic and pixel-perfect
            user experiences. Whether optimizing{" "}
            <strong className="text-textMain">high-load microservices</strong>{" "}
            or crafting{" "}
            <strong className="text-textMain">interactive UIs</strong>, I
            deliver clean, production-ready code that scales.
          </p>

          <div className="flex items-center gap-2 text-textMuted text-sm font-medium pt-2">
            <FaMapMarkerAlt /> Based in India • Shipping Globally
          </div>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-5 mt-10 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            // Changed: bg-accent, text-white (for contrast)
            className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-lg shadow-accent/20 hover:opacity-90 hover:scale-105 transition-all"
          >
            <FaFileAlt />
            View Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            // Changed: border-accent, text-accent
            className="cursor-pointer flex items-center gap-2 px-6 py-3 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-all"
          >
            View Projects
          </Link>
        </div>

        {/* Skills Grid */}
        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <SkillCard
            title="Backend Engineering"
            icons={
              <div className="flex gap-3 text-2xl mb-4">
                <FaJava className="text-orange-500" title="Java" />
                <SiSpringboot className="text-green-500" title="Spring Boot" />
                <SiGo className="text-cyan-500" title="Go" />
              </div>
            }
            skills="Java, Spring Boot, Go, RPC APIs, gRPC, JUnit"
            desc="Building robust, secure, and testable microservices that handle heavy loads."
          />

          <SkillCard
            title="Modern Frontend"
            icons={
              <div className="flex gap-3 text-2xl mb-4">
                <FaReact className="text-blue-400" title="React" />
                <FaJs className="text-yellow-400" title="JavaScript" />
              </div>
            }
            skills="ReactJS, Tailwind CSS, GraphQL, HTML/CSS"
            desc="Crafting responsive, pixel-perfect user interfaces with clean component architecture."
          />

          <SkillCard
            title="Cloud & Data"
            icons={
              <div className="flex gap-3 text-2xl mb-4">
                <FaDocker className="text-blue-500" title="Docker" />
                <VscAzure className="text-blue-600" title="Azure" />
                <SiPostgresql className="text-blue-300" title="PostgreSQL" />
                <SiRedis className="text-red-500" title="Redis" />
              </div>
            }
            skills="Docker, Azure, PostgreSQL, MySQL, Redis"
            desc="Optimizing deployment pipelines and managing high-availability data layers."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Card (Updated for Theme Variables)
function SkillCard({ icons, title, skills, desc }) {
  return (
    <div
      className="
        group relative overflow-hidden p-6 rounded-xl
        /* Changed: bg-secondary, border-border */
        bg-secondary/50 backdrop-blur-sm border border-border
        cursor-pointer
        transition-all duration-300 ease-out transform
        
        /* HOVER STATES */
        hover:!scale-[1.02]
        hover:!-translate-y-1
        hover:!shadow-lg
        
        /* Changed: border-accent, bg-secondary */
        hover:!border-accent/60
        hover:!bg-secondary
      "
    >
      {/* Background Spotlight: Uses bg-accent */}
      <div
        className="
          absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl 
          transition-all duration-500 
          group-hover:bg-accent/10 group-hover:scale-125
        "
      />

      <div className="relative z-10 mb-4 opacity-90 transition-transform duration-300 group-hover:scale-105">
        {icons}
      </div>

      <div className="relative z-10">
        {/* Changed: text-textMain */}
        <h3 className="text-lg font-bold text-textMain mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        {/* Changed: text-accent, border-border */}
        <p className="text-accent text-xs font-mono mb-4 border-b border-border pb-4 group-hover:border-accent/30 transition-colors">
          {skills}
        </p>
        {/* Changed: text-textMuted */}
        <p className="text-textMuted text-sm leading-relaxed group-hover:text-textMain transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Home;
