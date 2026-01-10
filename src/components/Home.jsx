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
    "https://drive.google.com/file/d/1OhfCkEokpVx4utiPbQ9IyieOaFIc_ofh/view?usp=sharing";

  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-center font-sans py-20 min-h-screen"
    >
      <div className="absolute top-[-10%] right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20">
        {/* Status Badge */}
        <div className="flex items-center gap-3 mb-6 animate-fadeIn">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-mono text-sm tracking-wide bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
            Available for New Projects
          </span>
        </div>

        {/* --- ADJUSTED TYPOGRAPHY SECTION --- */}
        <div className="space-y-6 animate-fadeIn">
          <p className="text-sky-400 font-medium tracking-wider text-base md:text-lg">
            Hello, I&apos;m
          </p>

          {/* FIX: Reduced from 8xl -> 7xl for better laptop fit */}
          {/* Mobile: 4xl (36px) | Tablet: 6xl (60px) | Desktop: 7xl (72px) */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 pb-2">
            Rahul Mudaliar.
          </h1>

          {/* FIX: Reduced from 5xl -> 4xl */}
          <h2 className="text-2xl md:text-4xl font-bold text-slate-400 leading-tight">
            Architecting <span className="text-sky-400">Scalable Backends</span>{" "}
            <br className="hidden md:block" />&{" "}
            <span className="text-slate-200">Intuitive Frontends</span>.
          </h2>

          {/* FIX: Reduced from xl -> lg for cleaner reading width */}
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed mt-6 border-l-4 border-sky-500/50 pl-6">
            I bridge the gap between complex server-side logic and pixel-perfect
            user experiences. Whether optimizing{" "}
            <strong className="text-slate-200">high-load microservices</strong>{" "}
            or crafting{" "}
            <strong className="text-slate-200">interactive UIs</strong>, I
            deliver clean, production-ready code that scales.
          </p>

          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium pt-2">
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
            className="flex items-center gap-2 px-6 py-3 bg-sky-400 text-slate-900 font-bold rounded-lg shadow-lg shadow-blue-500/20 hover:bg-sky-300 hover:scale-105 transition-all"
          >
            {/* Swapped Download icon for Resume Document icon */}
            <FaFileAlt />
            View Resume
          </a>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 border border-sky-400 text-sky-400 font-medium rounded-lg hover:bg-sky-400/10 transition-all"
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

// Reusable Card (Same as before)
// Reusable Card (Subtle & Professional Version)
function SkillCard({ icons, title, skills, desc }) {
  return (
    <div
      className="
        group relative overflow-hidden p-6 rounded-xl
        bg-slate-800/50 backdrop-blur-sm border border-slate-700
        cursor-pointer
        /* Kept the smooth transition */
        transition-all duration-300 ease-out transform
        
        /* --- SUBTLE HOVER STATE --- */
        /* 1. Minimal Scale & Lift (was scale-105, -translate-y-2) */
        hover:!scale-[1.02]
        hover:!-translate-y-1
        
        /* 2. Standard Shadow instead of Neon Glow (was shadow-2xl shadow-sky-500/20) */
        hover:!shadow-lg
        
        /* 3. Subtle Border Highlight (was border-sky-400) */
        hover:!border-sky-400/60
        hover:!bg-slate-800/80
      "
    >
      {/* Subtle Background Spotlight */}
      <div
        className="
          absolute -top-24 -right-24 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl 
          transition-all duration-500 
          /* Reduced intensity on hover */
          group-hover:bg-sky-500/10 group-hover:scale-125
        "
      />

      {/* Icons Container - Reduced scale effect */}
      <div className="relative z-10 mb-4 opacity-90 transition-transform duration-300 group-hover:scale-105">
        {icons}
      </div>

      <div className="relative z-10">
        <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-sky-300 transition-colors">
          {title}
        </h3>
        {/* Thinner border on hover */}
        <p className="text-sky-400 text-xs font-mono mb-4 border-b border-slate-700 pb-4 group-hover:border-sky-500/30 transition-colors">
          {skills}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Home;
