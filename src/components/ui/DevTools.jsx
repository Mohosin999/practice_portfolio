import React from "react";

const DevTools = ({ name, logo, className }) => {
  return (
    <span
      className={`px-3 py-1 text-white bg-[#04927f] text-base rounded-lg flex items-center justify-center gap-1 border border-[#04927f] shadow-sm ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default DevTools;
