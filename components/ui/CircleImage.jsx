// CircleImage.jsx
import React from "react";

const CircleImage = ({ image, alt = "profile image" }) => {
  return (
    <div className="flex items-center justify-center w-full lg:w-5/12">
      <div className="aspect-square w-full max-w-md bg-secondarycolor p-3 rounded-full border border-gray-600/[0.5] shadow-md">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default CircleImage;
