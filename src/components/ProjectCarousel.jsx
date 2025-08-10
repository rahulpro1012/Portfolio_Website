import React from "react";
import Slider from "react-slick";

const projects = [
  {
    title: "JobListing Web-App",
    description:
      "JobListing is a smart platform where employers can post detailed job openings and job seekers can easily find opportunities that match their skills—all in one place.",
    image: "/images/sample-job.png",
    github: "https://github.com/rahulpro1012/joblisting-backend",
    technologies: [
      "Spring Boot",
      "Mongo DB",
      "REST API",
      "Material UI",
      "ReactJs",
    ],
  },
  {
    title: "Employee Management System",
    description:
      "A simple Employee Management application that demonstrates CRUD operations to add, view, update, and delete employee records.",
    image: "/images/home-page-employee.png",
    github:
      "https://github.com/rahulpro1012/Rahul_FInal_Project_backend/tree/master",
    technologies: [
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "TailWind CSS",
      "ReactJs",
    ],
  },
  {
    title: "BookShelf-Insights Web-App",
    description:
      "Go application that performs CRUD operations, integrates caching to reduce database load, and has session-based authentication.",
    image: "/images/ecommerce.png",
    github: "https://github.com/rahulpro1012/BookStore_Mangement",
    technologies: [
      "Go",
      "Gorilla/mux",
      "Redis",
      "GORM",
      "Docker",
      "Middleware Session Management",
    ],
  },
  {
    title: "TrailerTalk",
    description:
      "Discover the latest movie trailers and honest reviews—all in one place.",
    image: "/images/Home-movie.png",
    github: "https://github.com/rahulpro1012/movie-backend",
    technologies: ["Spring Boot", "ReactJs", "MongoDB", "Material UI"],
  },
  {
    title: "HealthCare Management System",
    description:
      "Console-based Java application to manage patients, doctors, and appointments.",
    image: "/images/screenshot.png",
    github: "https://github.com/rahulpro1012/Healthcare_Management_System",
    technologies: ["Java", "Collections", "OOP", "Console App", "MySQL JDBC"],
  },
];

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full py-12 px-4 md:px-20 bg-[#0a192f] text-white font-poppins">
      <h1 className="text-4xl font-bold text-center mb-10 highlight-text">
        My Projects
      </h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="relative h-[300px] md:h-[400px] rounded-xl shadow-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-sm brightness-50"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <div className="bg-black bg-opacity-60 p-4 rounded-lg">
                  <h2 className="text-2xl font-semibold text-lemon-yellow">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mt-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 font-semibold transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
