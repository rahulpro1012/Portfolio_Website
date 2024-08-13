import React from "react";
import { Link } from "react-scroll";

function Home() {
  function viewResume() {
    window.open(
      "https://drive.google.com/file/d/1VkB-yq8pzAGFsMxqr7GOxKu52pVG39oE/view?usp=sharing"
    );
  }

  return (
    <div className="h-full w-full py-8 ">
      <div className="text-gray-50 px-8 md:px-16 lg:px-56 font-poppins">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Hi, my name is</h1>
          <h1 className="highlight-text text-4xl md:text-6xl font-semibold">
            Rahul Mudaliar
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Full Stack Web Developer 🚀 Transforming ideas into impactful
            digital experiences. With a blend of creativity and technical
            expertise, I specialize in crafting responsive, user-centric web
            applications that drive engagement and deliver results.
          </p>

          <div className="flex justify-center">
            <button
              onClick={viewResume}
              className="bg-light text-black font-poppins w-32 rounded-md shadow-lg font-[600] hover:bg-blue-200 transition-colors duration-300 h-11"
            >
              View Resume
            </button>
          </div>

          <h1>🌟 What I Do:</h1>
          <ul className="text-gray-400 list-disc pl-6">
            <li className="mb-2">
              <span className="text-gray-400">
                Innovative Solutions: From concept to deployment, I bring your
                vision to life with modern technologies and best practices.
              </span>
            </li>
            <li className="mb-2">
              <span className="text-gray-400">
                Seamless Integration: Ensuring flawless interaction between
                front-end and back-end, providing a smooth user experience.
              </span>
            </li>
            <li className="mb-2">
              <span className="text-gray-400">
                Scalable Architectures: Designing robust and scalable systems
                that grow with your business.
              </span>
            </li>
          </ul>
          <h1>💡 Why Choose Me:</h1>
          <ul className="text-gray-400 list-disc pl-6">
            <li className="mb-2">
              <span className="text-gray-400">
                Passion for Excellence: Driven by a love for coding and a
                commitment to delivering exceptional quality.
              </span>
            </li>
            <li className="mb-2">
              <span className="text-gray-400">
                Continuous Learning: Always exploring new tools and technologies
                to stay ahead of the curve.
              </span>
            </li>
            <li className="mb-2">
              <span className="text-gray-400">
                Client-Centric Approach: Your goals are my priority. I work
                closely with you to understand your needs and exceed your
                expectations.
              </span>
            </li>
          </ul>
          <h1 className="text-xl">
            📈 Let’s build something great together! Dive into my{" "}
            <span className="highlight-text">
              <Link
                to="projects"
                smooth={true}
                duration={100}
                className="navbar cursor-pointer"
                activeClass="active"
                spy={true}
              >
                Projects
              </Link>
            </span>{" "}
            to see the magic in action.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
