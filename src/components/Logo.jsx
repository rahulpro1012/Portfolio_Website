const Logo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* 1. The Hexagon Frame */}
      <path
        d="M50 5 L90 27 V73 L50 95 L10 73 V27 L50 5 Z"
        className="text-accent transition-colors duration-300"
      />

      {/* 2. The Letter 'R' */}
      <path
        d="M35 35 V65 M35 35 H55 C62 35 62 50 55 50 H35 M45 50 L60 65"
        className="text-textMain transition-colors duration-300"
        strokeWidth="5"
      />
    </svg>
  );
};

export default Logo;
