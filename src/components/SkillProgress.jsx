import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "./useOnScreen";

const SkillProgress = ({ skill, percentage }) => {
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if animation has run
  const progressRef = useRef(null);
  const isVisible = useOnScreen(progressRef);

  useEffect(() => {
    if (progressRef.current && isVisible && !hasAnimated) {
      progressRef.current.style.setProperty(
        "--progress-width",
        `${percentage}%`
      );
      progressRef.current.classList.add("fill-progress");
      setHasAnimated(true); // Mark animation as triggered
    }
  }, [isVisible, percentage, hasAnimated]);

  return (
    <div className="w-full mb-4 font-poppins">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-white">{skill}</span>
        <span className="font-medium text-white">{percentage}%</span>
      </div>
      <div className="relative h-4 bg-gray-200 rounded">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-4 rounded lemon-yellow-bg"
          style={{
            width: "0%", // Initial width set to 0
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
