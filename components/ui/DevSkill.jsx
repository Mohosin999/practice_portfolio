import React from "react";

const DevSkill = ({ label, name, logo, className }) => {
  // Define color styles for each label
  const labelStyles = {
    frontend: "bg-sky-600 border-sky-600 text-white shadow-sm", // current style
    backend: "bg-[#00aaa0] border-[#00aaa0] text-white shadow-sm",
    design: "bg-[#5e63b6] border-[#5e63b6] text-white shadow-sm",
    tools: "bg-[#d65a31] border-[#d65a31] text-white shadow-sm",
  };

  // fallback if no label matched
  const style = labelStyles[label] || "bg-gray-500 border-gray-500 text-white";

  return (
    <span
      className={`px-3 py-1 text-base rounded-lg flex items-center justify-center gap-1 ${style} ${className}`}
    >
      {logo} {name}
    </span>
  );
};

export default DevSkill;
