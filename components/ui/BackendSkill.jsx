import React from "react";

const BackendSkill = ({ name, logo, className }) => {
  return (
    <span
      className={`px-3 py-1 text-white bg-violet-600 text-base lg:text-lg rounded-lg flex items-center justify-center gap-1 border border-violet-600 shadow-sm ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default BackendSkill;
