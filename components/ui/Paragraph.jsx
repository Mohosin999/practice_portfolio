import React from "react";

const Paragraph = ({ text, className = "" }) => {
  return (
    <p className={`py-4 text-sm lg:text-base text-gray-400 ${className}`}>
      {text}
    </p>
  );
};

export default Paragraph;
