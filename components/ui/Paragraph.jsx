import React from "react";

const Paragraph = ({ text, className = "" }) => {
  return (
    <p
      className={`pt-4 text-base lg:text-lg text-gray-800 dark:text-gray-300 ${className}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
