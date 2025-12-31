import React from "react";

const Paragraph = ({ text, className = "" }) => {
  return (
    <p
      className={`pt-4 text-base text text-left md:text-center lg:text-left ${className}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
