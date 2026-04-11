import React from "react";

const FrontendSkill = ({ name, logo, className }) => {
  return (
    <span
      className={`px-3 py-1 text-white bg-[#32961C] text-base rounded-lg flex items-center justify-center gap-1 border border-[#32961C] shadow-sm ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default FrontendSkill;
