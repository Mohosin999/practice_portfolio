import React from "react";

const EducationItem = ({ degree, university, period }) => {
  return (
    <div className="flex items-start mb-8">
      <span className="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
      <div className="ml-4">
        <h3 className="font-medium">{degree}</h3>
        <p className="text-sm text-gray-400">{period}</p>
        <p className="text-sm text-gray-300">{university}</p>
      </div>
    </div>
  );
};

export default EducationItem;
