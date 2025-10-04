import React from "react";

const SocialIconLink = ({ href, icon: Icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className="w-10 lg:w-14 h-10 lg:h-14 hover:scale-105 duration-300">
          <Icon className="w-6 lg:w-10 h-6 lg:h-10 text-white" />
        </button>
      </a>
    </li>
  );
};

export default SocialIconLink;
