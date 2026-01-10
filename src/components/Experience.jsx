import { FaBriefcase, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    period: "Jan 2024 - Present",
    description:
      "Leading the migration of legacy monoliths to microservices using Spring Boot and Docker. Improved API response times by 40% and mentored junior developers.",
    skills: ["Java", "Spring Boot", "Microservices", "AWS"],
    highlight: true,
  },
  {
    role: "Full Stack Developer Intern",
    company: "StartUp Hub",
    period: "June 2023 - Dec 2023",
    description:
      "Collaborated with senior engineers to build a React-based dashboard. Implemented secure authentication flows and optimized SQL queries for the reporting module.",
    skills: ["React.js", "MySQL", "Redux", "REST APIs"],
    highlight: false,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      // Changed: bg-primary, text-textMain
      className="relative w-full py-20 bg-primary font-sans text-textMain transition-colors duration-300"
    >
      {/* Background Glow: Uses bg-accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 animate-fadeIn">
          {/* Changed: text-accent */}
          <div className="flex items-center gap-2 text-accent font-mono mb-2">
            <span className="text-xl">03.</span>
            <span className="tracking-wide uppercase text-sm">Career Path</span>
          </div>
          {/* Changed: text-textMain */}
          <h2 className="text-3xl md:text-5xl font-bold text-textMain">
            Professional <span className="text-accent">Experience</span>
          </h2>
        </div>

        {/* Timeline Container: Uses border-border */}
        <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12">
          {experiences.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ data, index }) {
  return (
    <div
      className="relative pl-8 md:pl-12 group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* 1. Timeline Dot */}
      {/* Changed: border-primary, bg-primary (matches page bg in both modes) */}
      <div
        className={`
        absolute -left-[11px] top-0 
        w-6 h-6 rounded-full border-4 border-primary 
        flex items-center justify-center bg-primary
        transition-all duration-300 group-hover:scale-125 group-hover:border-accent
      `}
      >
        {/* Inner Dot: Emerald for highlight, Accent for normal */}
        <div
          className={`w-2 h-2 rounded-full ${
            data.highlight ? "bg-emerald-400 animate-ping" : "bg-accent"
          }`}
        ></div>
      </div>

      {/* 2. Content Card */}
      <div
        className={`
        p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
        ${
          data.highlight
            ? // Highlighted: bg-secondary, border-accent
              "bg-secondary border-accent/30 shadow-lg shadow-accent/10"
            : // Normal: bg-secondary/40, border-border
              "bg-secondary/40 border-border hover:border-accent/30 hover:bg-secondary"
        }
      `}
      >
        {/* Header: Role & Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
          <div>
            {/* Changed: text-textMain */}
            <h3 className="text-xl font-bold text-textMain flex items-center gap-2">
              <FaBriefcase className="text-accent text-sm" />
              {data.role}
            </h3>
            {/* Changed: text-accent */}
            <p className="text-accent font-medium text-sm mt-1 flex items-center gap-2">
              {data.company}
              {/* Highlight Badge (Kept Emerald for "Active" status) */}
              {data.highlight && (
                <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Current
                </span>
              )}
            </p>
          </div>

          {/* Date Badge: bg-primary, text-textMuted, border-border */}
          <div className="flex items-center gap-2 text-textMuted text-xs font-mono bg-primary/50 px-3 py-1 rounded-full border border-border">
            <FaCalendarAlt />
            {data.period}
          </div>
        </div>

        {/* Description: text-textMuted */}
        <p className="text-textMuted text-sm leading-relaxed mb-4 max-w-3xl">
          {data.description}
        </p>

        {/* Skills Used */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
          {data.skills.map((skill, idx) => (
            <span
              key={idx}
              // Changed: text-accent, bg-accent/10
              className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
