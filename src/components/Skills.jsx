import React from "react";
import SkillProgress from "./SkillProgress";

const skills = [
  { skill: "HTML", percentage: 100 },
  { skill: "CSS", percentage: 90 },
  { skill: "JavaScript", percentage: 90 },
  { skill: "Java", percentage: 95 },
  { skill: "SQL", percentage: 90 },
  { skill: "GO", percentage: 85 },
  { skill: "SpringBoot", percentage: 90 },
  { skill: "ReactJS", percentage: 90 },
  { skill: "Git | GitHub", percentage: 90 },
  { skill: "CI | CD", percentage: 90 },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div className="w-full p-8 font-poppins">
      <h1 className="text-3xl font-semibold text-center text-white mb-8 highlight-text">
        My Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillProgress
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
