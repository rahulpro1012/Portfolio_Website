import React from "react";

function AboutMe() {
  return (
    <div className="about-bg text-gray-700 w-full min-h-screen font-poppins py-16">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex flex-col lg:w-1/2 p-10">
          <h1 className=" px-14 py-5 text-3xl font-semibold mb-10 underline underline-offset-8">
            About Me
          </h1>
          <div className="px-14 flex flex-col gap-5">
            <p>
              As a Full-Stack Developer, I specialize in creating dynamic and
              robust web applications using a wide array of technologies,
              including
              <span className="font-semibold">
                {" "}
                Java, JavaScript, Go, SQL, Spring Boot, and React.js
              </span>
              . My role involves developing and maintaining applications that
              cater to various business needs, ensuring high performance and
              scalability.
            </p>
            <p>
              I graduated with a Bachelor of Technology degree in Computer
              Science and Engineering from Sathyabama Institute of Science and
              Technology in 2024. My academic background provided me with a
              strong foundation in software engineering, data structures,
              algorithms, databases, and web development. Beyond formal
              education, I've honed my problem-solving and coding skills by
              tackling questions on platforms like
              <span className="font-semibold">
                {" "}
                LeetCode, GeeksforGeeks, and Code 360
              </span>
              .
            </p>
            <p>
              I am passionate about exploring new technologies and continuously
              expanding my knowledge. Feel free to connect with me to discuss
              technology, coding, or collaboration opportunities!
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2 h-64 lg:h-auto lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 lg:opacity-75"
            style={{
              backgroundImage:
                "url(https://t3.ftcdn.net/jpg/06/88/80/98/240_F_688809823_w5me15D1SEuKLZR38E9SjPHxCJ28DVCH.jpg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
