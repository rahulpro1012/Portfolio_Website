import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

function Notfound() {
  return (
    <div className="relative min-h-screen w-full bg-primary flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* 1. Background Decor (Consistent with your site) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* 2. The 404 Graphic */}
      <div className="relative animate-fadeIn">
        <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-accent to-primary opacity-20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaExclamationTriangle className="text-6xl text-accent animate-bounce" />
        </div>
      </div>

      {/* 3. Text Content */}
      <h2 className="text-3xl md:text-5xl font-bold text-textMain mt-[-40px] z-10">
        Page Not Found
      </h2>
      <p className="text-textMuted mt-4 max-w-md text-lg">
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* 4. "Back to Home" Button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-full bg-accent text-white font-bold text-lg shadow-lg shadow-accent/20 hover:scale-105 hover:shadow-accent/40 transition-all duration-300 flex items-center gap-2"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
}

export default Notfound;
