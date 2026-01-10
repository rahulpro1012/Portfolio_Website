import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function AboutMe() {
  return (
    <section
      id="aboutme"
      // Changed: bg-primary text-textMain
      className="relative w-full py-20 bg-primary font-sans overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Background Element (Watermark) */}
      {/* Changed: text-textMain/5 (Subtle in both modes) */}
      <div className="absolute top-10 left-0 text-[20rem] font-bold text-textMain/5 leading-none -z-10 select-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- COLUMN 1: THE IMAGE CARD --- */}
          <div className="relative group animate-fadeIn">
            {/* The Image Frame */}
            {/* Changed: border-border, group-hover:border-accent/50 */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-accent/50">
              {/* Changed: bg-accent/10 */}
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
              <img
                src="/images/my_animated_image.png"
                alt="Rahul Mudaliar"
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating Stats Badge */}
            {/* Changed: bg-secondary/90 (White in Light mode, Dark Slate in Dark mode), border-accent/30 */}
            <div className="absolute -bottom-6 -right-6 bg-secondary/90 backdrop-blur-xl p-4 rounded-xl border border-accent/30 shadow-2xl flex items-center gap-3 z-20 animate-bounce-slow">
              {/* Changed: bg-accent/20 text-accent */}
              <div className="bg-accent/20 p-3 rounded-lg text-accent">
                <FaCode size={20} />
              </div>
              <div>
                {/* Changed: text-textMuted */}
                <p className="text-textMuted text-xs font-mono uppercase tracking-wide">
                  Problem Solving
                </p>
                {/* Changed: text-textMain (Crucial: keeps text visible in Light Mode) */}
                <p className="text-textMain font-bold text-sm">
                  DSA Enthusiast
                </p>
              </div>
            </div>

            {/* Decorative Dots */}
            {/* Changed: bg-textMuted/30 */}
            <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-2 -z-10 opacity-50">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-textMuted/30"
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
              {/* Changed: text-accent */}
              <div className="flex items-center gap-2 text-accent font-mono mb-2">
                <span className="text-xl">#</span>
                <span className="tracking-wide uppercase text-sm">
                  Who I Am
                </span>
              </div>
              {/* Changed: text-textMain, gradient from-accent */}
              <h2 className="text-3xl md:text-5xl font-bold text-textMain mb-6">
                Behind the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                  Code
                </span>
              </h2>
            </div>

            {/* Bio Paragraphs */}
            {/* Changed: text-textMuted */}
            <div className="text-textMuted text-base leading-relaxed space-y-4">
              <p>
                As a Full-Stack Developer, I don&apos;t just write code; I
                engineer solutions. My expertise lies in building dynamic,
                scalable applications using
                {/* Changed: text-textMain */}
                <strong className="text-textMain">
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
                that a strong foundation in {/* Changed: text-textMain */}
                <strong className="text-textMain">
                  Data Structures & Algorithms
                </strong>{" "}
                is the key to writing efficient software.
              </p>
            </div>

            {/* Education Card */}
            {/* Changed: bg-secondary/50 border-accent */}
            <div className="p-5 rounded-lg bg-secondary/50 border-l-4 border-accent flex items-start gap-4">
              <div className="mt-1">
                {/* Changed: text-accent */}
                <FaGraduationCap className="text-accent text-2xl" />
              </div>
              <div>
                {/* Changed: text-textMain */}
                <h3 className="text-textMain font-bold text-lg">
                  Bachelor of Technology (CSE)
                </h3>
                {/* Changed: text-textMuted */}
                <p className="text-textMuted text-sm">
                  Sathyabama Institute of Science and Technology
                </p>
                <p className="text-textMuted text-xs mt-1 font-mono">
                  Class of 2024
                </p>
              </div>
            </div>

            {/* Coding Profiles */}
            <div>
              {/* Changed: text-textMain */}
              <p className="text-textMain font-bold mb-4 flex items-center gap-2">
                <FaLaptopCode className="text-accent" />
                Coding Profiles
              </p>
              <div className="flex flex-wrap gap-4">
                <ProfileBadge
                  icon={<SiLeetcode />}
                  name="LeetCode"
                  link="https://leetcode.com/u/M_rahul1012/"
                />
                <ProfileBadge
                  icon={<SiGeeksforgeeks />}
                  name="GeeksforGeeks"
                  link="https://www.geeksforgeeks.org/profile/krishnaru5it"
                />
                <ProfileBadge
                  icon={<FaCode />}
                  name="Code 360"
                  link="https://www.naukri.com/code360/profile/69ae987f-7346-4dc8-9bc9-47060d06565f"
                />
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
      // Changed: bg-secondary, border-border, text-textMuted
      // Hover: text-textMain (or accent), border-accent, bg-accent/10
      className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full text-textMuted hover:text-textMain hover:border-accent hover:bg-accent/10 transition-all text-sm font-medium"
    >
      {icon}
      <span>{name}</span>
    </a>
  );
}

export default AboutMe;
