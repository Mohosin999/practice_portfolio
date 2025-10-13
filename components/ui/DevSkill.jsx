import React from "react";

const DevSkill = ({ label, name, logo, className }) => {
  // Define color styles for each label
  const labelStyles = {
    frontend: "bg-sky-600 border-sky-600 text-white shadow-sm", // current style
    backend: "bg-orange-500 border-orange-500 text-white shadow-sm",
    design: "bg-green-600 border-green-600 text-white shadow-sm",
    tools:
      "bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-gray-800 text-white shadow-md",
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
