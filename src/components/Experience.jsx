import React from "react";

const experienceData = [
  {
    title: "Software Engineer",
    company: "Cognizant",
    url: "https://www.cognizant.com",
    duration: "Sep 2024 – Present",
    description:
      "Gained and Skilled in Salesforce Administration, Apex programming, Lightning Web Components (LWC), and Vlocity for industry-specific solutions.",
  },
  {
    title: "Project Intern",
    company: "Cognizant",
    url: "https://www.cognizant.com",
    duration: "Jul 2024 – Sep 2024",
    description:
      "Skilled in Java, JavaScript, SQL and Gained experience in Salesforce Administration, Apex programming, Lightning Web Components (LWC), and Vlocity for industry-specific solutions.",
  },
  {
    title: "Software Developer Intern",
    company: "PayTabs",
    url: "https://www.paytabs.com",
    duration: "Jan 2024 – Jul 2024",
    description:
      "Worked as a Full Stack Developer using Java, Spring Boot, MySQL, and React.js on enterprise-grade solutions.",
  },
];

function Experience() {
  return (
    <div className="min-h-screen w-full font-poppins px-4 md:px-12 py-12 text-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Professional <br /> Experience
      </h1>
      <div className="relative border-l-4 lemon-yellow-border  ml-6 md:ml-20">
        {experienceData.map((item, index) => (
          <div key={index} className="mb-12 ml-6 relative">
            <div className="absolute w-5 h-5 highlight-bg rounded-full -left-9 border-2 border-white shadow-lg"></div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-text text-sm underline hover:text-yellow-300  transition-all duration-200"
            >
              {item.company}
            </a>
            <p className="text-sm text-gray-400">{item.duration}</p>
            <p className="text-md mt-2 text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
