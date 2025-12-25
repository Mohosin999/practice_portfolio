import React from "react";

const FrontendSkill = ({ name, logo, className }) => {
  return (
    <span
      className={`px-3 py-1 text-white bg-[#B73ACA] text-base rounded-lg flex items-center justify-center gap-1 border border-[#B73ACA] shadow-sm ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default FrontendSkill;
