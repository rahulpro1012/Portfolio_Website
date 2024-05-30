import React from "react";

function AboutMe() {
  return (
    <div className="about-bg text-gray-700 w-full h-full font-poppins">
      <h1 className="text-2xl font-semibold text-center py-6 underline underline-offset-8">
        About Me
      </h1>
      <div className="px-14 flex flex-col gap-5 ">
        <p>
          As a Full-Stack Developer, I specialize in creating dynamic and robust
          web applications using a wide array of technologies, including Java,
          JavaScript, Go, SQL, Spring Boot, and React.js. My role involves
          developing and maintaining applications that cater to various business
          needs, ensuring high performance and scalability.
        </p>
        <p>
          I graduated with a Bachelor of Technology degree in Information
          Technology from Sathyabama Institute of Science and Technology in
          2024. My academic background provided me with a strong foundation in
          software engineering, data structures, algorithms, databases, and web
          development. Beyond formal education, I've honed my problem-solving
          and coding skills by tackling questions on platforms like LeetCode,
          GeeksforGeeks, and Code 360.
        </p>
        <p>
          I am passionate about exploring new technologies and continuously
          expanding my knowledge. Feel free to connect with me to discuss
          technology, coding, or collaboration opportunities!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
