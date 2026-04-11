"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { FaLanguage } from "react-icons/fa";

const languages = [
  {
    name: "English",
    proficiency: "Professional Working Proficiency",
    level: 30,
    flag: "🇬🇧",
  },
  {
    name: "Bengali",
    proficiency: "Native",
    level: 100,
    flag: "🇧🇩",
  },
];

const Languages = () => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full lg:w-[87%] px-3 md:px-6 lg:px-0 pt-10"
    >
      <div className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <FaLanguage className="text-[#32961C]" />
          Languages
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#32961C] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{lang.flag}</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {lang.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {lang.proficiency}
                  </p>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-[#32961C] to-[#267a15] rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Languages;
