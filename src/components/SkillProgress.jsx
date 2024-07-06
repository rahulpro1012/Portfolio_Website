import React, { useEffect, useRef } from "react";
import useOnScreen from "./useOnScreen";

const SkillProgress = ({ skill, percentage }) => {
  const progressRef = useRef(null);
  const isVisible = useOnScreen(progressRef);

  useEffect(() => {
    if (progressRef.current && isVisible) {
      progressRef.current.style.setProperty(
        "--progress-width",
        `${percentage}%`
      );
      progressRef.current.classList.add("fill-progress");
    }
  }, [isVisible, percentage]);

  return (
    <div className="w-full mb-4 font-poppins">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{skill}</span>
        <span className="font-medium text-white">{percentage}%</span>
      </div>
      <div className="relative h-4 bg-gray-200 rounded">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-4 rounded bg-blue-600"
          style={{
            animation: `fillProgress 2s ease-out forwards`,
            width: 0, // Initial width set to 0
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
