"use client";

import useTheme from "@/hook/useTheme";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="relative group p-2">
      {theme === "dark" ? (
        <BsLightbulb className="w-5 h-5 text-white hover:text-[#007A3F] font-semibold" />
      ) : (
        <BsLightbulbOff className="w-5 h-5 hover:text-[#007A3F] font-semibold" />
      )}

      {/* Tooltip */}
      <span className="absolute left-1/2 -translate-x-1/2 top-10 scale-0 rounded bg-[#007A3F] px-3 py-1 text-sm text-white whitespace-nowrap group-hover:scale-100 transition-all min-w-[80px] text-center shadow-lg">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
