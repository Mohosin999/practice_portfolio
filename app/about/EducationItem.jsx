import React from "react";

const EducationItem = ({ degree, university, period }) => {
  return (
    <div className="flex items-start mb-4 lg:mb-8">
      <span className="block w-4 h-4 bg-sky-600 rounded-full mt-1.5"></span>
      <div className="ml-4">
        <h3 className="text-lg text-gray-800 dark:text-gray-200 font-medium">
          {degree}
        </h3>
        <p className="text-base text-gray-700 dark:text-gray-300">{period}</p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          {university}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
