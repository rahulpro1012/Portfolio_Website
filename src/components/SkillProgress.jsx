import React from "react";

const SkillProgress = ({ skill, percentage }) => {
  return (
    <div className="w-full mb-4 font-poppins ">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{skill}</span>
        <span className="font-medium text-white">{percentage}%</span>
      </div>
      <div className="relative h-4 bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-4 rounded bg-blue-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
