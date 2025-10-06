import React from "react";

const FrontendSkill = ({ name, logo, className }) => {
  return (
    <span
      className={`px-3 py-1 text-white bg-sky-600 text-sm lg:text-base rounded-lg flex items-center justify-center gap-1 border border-sky-600 shadow-sm ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default FrontendSkill;
