import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cognizant (Pune)",
    period: "Sept 2024 - Present",
    // Combined your bullets into a strong SDE narrative
    description:
      "Engineered scalable enterprise modules using Apex (OOP) and Lightning Web Components, adhering to strict MVC patterns and modern web standards. Designed and implemented REST API integrations to synchronize real-time data between external systems (DocuSign, Workday) and optimized asynchronous backend processes (Batch Jobs) to handle large data volumes.",
    // Key SDE skills extracted from your text
    skills: [
      "Java (Apex)",
      "JavaScript",
      "REST APIs",
      "System Design",
      "Async Processing",
    ],
    highlight: true,
  },
  {
    role: "CSD Intern",
    company: "Cognizant (Coimbatore)",
    period: "July 2024 - Sept 2024",
    description:
      "Completed intensive training in Full Stack principles including Java, SQL, and JavaScript within an Agile environment. Acquired foundational skills in enterprise development lifecycles, CI/CD pipelines, and component-based architecture.",
    skills: ["Java", "SQL", "JavaScript", "CI/CD", "Agile"],
    highlight: false,
  },
  {
    role: "Software Developer Intern",
    company: "Paytabs Global (Chennai)",
    period: "Jan 2024 - July 2024",
    description:
      "Developed enterprise-grade backend services using Java and Spring Boot, implementing secure RESTful endpoints for global payment processing. Built a high-performance automated reporting system using Go (Golang) and SQL, reducing report generation time by approx. 40% to enhance operational efficiency.",
    skills: ["Java", "Spring Boot", "Go (Golang)", "SQL", "Microservices"],
    highlight: false,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      // Uses Theme Variables: bg-primary, text-textMain
      className="relative w-full py-20 bg-primary font-sans text-textMain transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 animate-fadeIn">
          <div className="flex items-center gap-2 text-accent font-mono mb-2">
            <span className="text-xl">03.</span>
            <span className="tracking-wide uppercase text-sm">Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-textMain">
            Professional <span className="text-accent">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12 max-w-4xl">
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
      <div
        className={`
        absolute -left-[11px] top-0 
        w-6 h-6 rounded-full border-4 border-primary 
        flex items-center justify-center bg-primary
        transition-all duration-300 group-hover:scale-125 group-hover:border-accent
      `}
      >
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
            ? "bg-secondary border-accent/30 shadow-lg shadow-accent/10"
            : "bg-secondary/40 border-border hover:border-accent/30 hover:bg-secondary"
        }
      `}
      >
        {/* Header: Role & Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-textMain flex items-center gap-2">
              <FaBriefcase className="text-accent text-sm" />
              {data.role}
            </h3>
            <p className="text-accent font-medium text-sm mt-1 flex items-center gap-2">
              {data.company}
              {data.highlight && (
                <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Current
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 text-textMuted text-xs font-mono bg-primary/50 px-3 py-1 rounded-full border border-border">
            <FaCalendarAlt />
            {data.period}
          </div>
        </div>

        {/* Description */}
        <p className="text-textMuted text-sm leading-relaxed mb-4">
          {data.description}
        </p>

        {/* Skills Used */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
          {data.skills.map((skill, idx) => (
            <span
              key={idx}
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
