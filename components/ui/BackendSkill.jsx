import React from "react";

const BackendSkill = ({ name, logo, className }) => {
  return (
    <span
      className={`px-3 py-1 text-white bg-orange-600 text-base rounded-lg flex items-center justify-center gap-1 border border-orange-600 shadow-sm ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default BackendSkill;
