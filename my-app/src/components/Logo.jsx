import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg
        viewBox="0 0 512 512"
        className="w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="X Logo"
      >
        {/* Blue part - in the back */}
        <path
          d="M429 90 L292 256 L429 422 H367 L230 256 L367 90 Z"
          fill="#00A9E0"
        />
        {/* Yellow part - in the front */}
        <path
          d="M113 90 L250 256 L113 422 H175 L312 256 L175 90 Z"
          fill="#FEC501"
        />
      </svg>
    </div>
  );
};

export default Logo;