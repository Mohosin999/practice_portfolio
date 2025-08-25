import React from "react";

const SocialIconLink = ({ href, icon: Icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className="w-10 lg:w-14 h-10 lg:h-14 rounded-full flex justify-center items-center bg-cardcolor border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
          <Icon className="w-5 lg:w-8 h-5 lg:h-8 text-white" />
        </button>
      </a>
    </li>
  );
};

export default SocialIconLink;
