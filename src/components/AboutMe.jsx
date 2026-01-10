import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="relative w-full py-20 bg-primary font-sans overflow-hidden"
    >
      {/* Decorative Background Element (Subtle "01" Watermark) */}
      <div className="absolute top-10 left-0 text-[20rem] font-bold text-slate-800/30 leading-none -z-10 select-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid Layout: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- COLUMN 1: THE IMAGE CARD --- */}
          <div className="relative group animate-fadeIn">
            {/* The Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-sky-500/50">
              <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay z-10"></div>
              <img
                src="/images/my_animated_image.png"
                alt="Rahul Mudaliar"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating Stats Badge (Improved Visibility) */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-sky-500/30 shadow-2xl flex items-center gap-3 z-20 animate-bounce-slow">
              <div className="bg-sky-500/20 p-3 rounded-lg text-sky-400">
                <FaCode size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-mono uppercase tracking-wide">
                  Problem Solving
                </p>
                <p className="text-white font-bold text-sm">DSA Enthusiast</p>
              </div>
            </div>
            {/* Decorative Dots behind image */}
            <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-2 -z-10 opacity-50">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-slate-600"
                ></div>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: THE STORY --- */}
          <div
            className="space-y-8 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-mono mb-2">
                <span className="text-xl">#</span>
                <span className="tracking-wide uppercase text-sm">
                  Who I Am
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
                Behind the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Code
                </span>
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="text-slate-400 text-base leading-relaxed space-y-4">
              <p>
                As a Full-Stack Developer, I don&apos;t just write code; I
                engineer solutions. My expertise lies in building dynamic,
                scalable applications using
                <strong className="text-slate-200">
                  {" "}
                  Java Spring Boot, Go, and React
                </strong>
                . I thrive on the challenge of optimizing performance and
                ensuring seamless user experiences.
              </p>
              <p>
                Beyond app development, I am deeply committed to sharpening my
                problem-solving skills. I regularly tackle complex algorithmic
                challenges on platforms like LeetCode and Code 360, believing
                that a strong foundation in{" "}
                <strong className="text-slate-200">
                  Data Structures & Algorithms
                </strong>{" "}
                is the key to writing efficient software.
              </p>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-lg bg-slate-800/50 border-l-4 border-sky-500 flex items-start gap-4">
              <div className="mt-1">
                <FaGraduationCap className="text-sky-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-slate-200 font-bold text-lg">
                  Bachelor of Technology (CSE)
                </h3>
                <p className="text-slate-400 text-sm">
                  Sathyabama Institute of Science and Technology
                </p>
                <p className="text-slate-500 text-xs mt-1 font-mono">
                  Class of 2024
                </p>
              </div>
            </div>

            {/* Coding Profiles (Clickable Links) */}
            <div>
              <p className="text-slate-200 font-bold mb-4 flex items-center gap-2">
                <FaLaptopCode className="text-sky-400" />
                Coding Profiles
              </p>
              <div className="flex flex-wrap gap-4">
                <ProfileBadge
                  icon={<SiLeetcode />}
                  name="LeetCode"
                  link="https://leetcode.com/" // Replace with your actual profile link
                />
                <ProfileBadge
                  icon={<SiGeeksforgeeks />}
                  name="GeeksforGeeks"
                  link="https://auth.geeksforgeeks.org/"
                />
                <ProfileBadge icon={<FaCode />} name="Code 360" link="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper Component for the Profile Badges
function ProfileBadge({ icon, name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-sky-500 hover:bg-sky-500/10 transition-all text-sm font-medium"
    >
      {icon}
      <span>{name}</span>
    </a>
  );
}

export default AboutMe;
