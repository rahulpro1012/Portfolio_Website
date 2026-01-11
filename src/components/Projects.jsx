import { FaGithub, FaLaptopCode, FaServer } from "react-icons/fa";

const projects = [
  {
    title: "Boardify",
    description:
      "Scalable, event-driven project management platform featuring real-time updates and automated workflows via Apache Kafka.",
    image: "/images/BoardView.png",
    githubFrontend: "https://github.com/rahulpro1012/Boardify_Frontend",
    githubBackend: "https://github.com/rahulpro1012/Boardify",
    technologies: [
      "Spring Boot",
      "React",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "JobListing Web-App",
    description:
      "A smart platform connecting employers and job seekers with detailed job postings and skill matching.",
    image: "/images/sample-job.png",
    githubFrontend: "https://github.com/rahulpro1012/JobListing",
    githubBackend: "https://github.com/rahulpro1012/joblisting-backend",
    technologies: ["Spring Boot", "MongoDB", "ReactJs", "Material UI"],
  },
  {
    title: "Employee Management",
    description:
      "Full-stack CRUD application for managing employee records with a robust backend.",
    image: "/images/home-page-employee.png",
    githubFrontend:
      "https://github.com/rahulpro1012/Rahul_Final_Project/tree/master",
    githubBackend:
      "https://github.com/rahulpro1012/Rahul_FInal_Project_backend/tree/master",
    technologies: ["Spring Boot", "MySQL", "ReactJs", "Tailwind CSS"],
  },
  {
    title: "TrailerTalk",
    description:
      "Movie discovery platform where users can watch trailers and read community reviews.",
    image: "/images/Home-movie.png",
    githubFrontend: "https://github.com/rahulpro1012/react-ui-movie",
    githubBackend: "https://github.com/rahulpro1012/movie-backend",
    technologies: ["Spring Boot", "MongoDB", "ReactJs"],
  },
  {
    title: "BookShelf Insights",
    description:
      "High-performance Go app with session-based auth and Redis caching to reduce DB load.",
    image: "/images/BookShelf.png",
    // Single Repo (Backend Focused)
    github: "https://github.com/rahulpro1012/BookStore_Mangement",
    technologies: ["Go", "Redis", "Docker", "GORM"],
  },
  {
    title: "HealthCare System",
    description:
      "Console-based Java application to efficiently manage patients, doctors, and appointments.",
    image: "/images/screenshot.png",
    // Single Repo (Console App)
    github: "https://github.com/rahulpro1012/Healthcare_Management_System",
    technologies: ["Java", "MySQL JDBC", "OOP"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-20 bg-primary font-sans text-textMain transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 animate-fadeIn">
          <div className="flex items-center gap-2 text-accent font-mono mb-2">
            <span className="text-xl">02.</span>
            <span className="tracking-wide uppercase text-sm">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-textMain">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  // Determine if this project has split repos
  const hasSplitRepos = project.githubFrontend || project.githubBackend;

  return (
    <div
      className="
        group relative flex flex-col rounded-xl overflow-hidden 
        bg-secondary/40 border border-border
        transition-all duration-300 
        hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10
      "
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* 1. IMAGE THUMBNAIL */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 filter brightness-75 group-hover:brightness-100"
        />

        {/* Overlay with Buttons */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {/* LOGIC: Show Split Buttons OR Single Button */}
          {hasSplitRepos ? (
            <>
              {/* Frontend Button */}
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full text-accent hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg flex flex-col items-center group/btn relative"
                  title="Frontend Code"
                >
                  <FaLaptopCode size={20} />
                  <span className="absolute -bottom-8 text-[10px] font-bold opacity-0 group-hover/btn:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap">
                    Frontend
                  </span>
                </a>
              )}

              {/* Backend Button */}
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full text-accent hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg flex flex-col items-center group/btn relative"
                  title="Backend Code"
                >
                  <FaServer size={20} />
                  <span className="absolute -bottom-8 text-[10px] font-bold opacity-0 group-hover/btn:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white whitespace-nowrap">
                    Backend
                  </span>
                </a>
              )}
            </>
          ) : (
            /* Fallback: Single GitHub Button */
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-accent hover:bg-accent hover:text-white transition-all transform hover:scale-110 shadow-lg"
                title="View Code"
              >
                <FaGithub size={20} />
              </a>
            )
          )}
        </div>
      </div>

      {/* 2. CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-textMuted text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 3. TECH TAGS */}
        <div className="mt-auto flex flex-wrap gap-2">
          {/* Only show first 4 tags to keep card clean */}
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
