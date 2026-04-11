import { IoLogoJavascript } from "react-icons/io5";
import { SiNpm } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbCricket } from "react-icons/tb";

// =================== Overview ===================
export const overview = {
  title: "📝 Overview",
  text: `I developed a Live Cricket Score App using Next.js and the Cricbuzz API via RapidAPI. It delivers real-time updates, including live matches, results, upcoming fixtures, and cricket articles, with a clean, responsive UI. A scorecard section is also implemented to show detailed match score information.`,
};

// =================== Objective ===================
export const objective = {
  title: "🎯 Objective",
  text: `I built this Live Cricket app from scratch using Next.js to practice my skills and test if I could develop a project independently. It provides real-time scores, match results, upcoming fixtures, and detailed scorecards, while optimizing API usage. ChatGPT and my own learning guided me throughout this journey.`,
};

// =================== Approach ===================
export const approach = {
  title: "🧩 Approach",
  parts: [
    {
      subtitle: "Technology Selection:",
      points: [
        `🔹 Chose Next.js for the frontend and Cricbuzz API via RapidAPI for real-time cricket data.`,
      ],
    },
    {
      subtitle: "Project Planning & Design:",
      points: [
        `🔹 Searched guidance on ChatGPT, planned the project structure, API usage, and UI layout for clean and responsive design.`,
      ],
    },
    {
      subtitle: "Implementation:",
      points: [
        `🔹 Developed live score updates, match results, upcoming fixtures, and detailed scorecards while optimizing API calls.`,
      ],
    },
  ],
};

// =================== Features ===================
export const features = {
  title: "✨ Features",
  parts: [
    {
      subtitle: "Live Matches:",
      points: [
        `🔹 Displays real-time cricket scores for ongoing matches.`,
        `🔹 Includes international cricket coverage.`,
      ],
    },
    {
      subtitle: "Recent Matches:",
      points: [`🔹 View recently finished matches with results.`],
    },
    {
      subtitle: "Upcoming Matches:",
      points: [`🔹 Stay updated on upcoming fixtures.`],
    },
    {
      subtitle: "Scorecard Section:",
      points: [`🔹 Provides detailed score breakdown for selected matches.`],
    },
    {
      subtitle: "Dark / Light Mode:",
      points: [`🔹 Switch seamlessly between dark and light themes.`],
    },
  ],
};

// =================== SKILLS ===================
export const techStack = {
  title: "🛠️ Tech Stack",
  skills: [
    { label: "JavaScript", icon: <IoLogoJavascript /> },
    { label: "Next.js", icon: <RiNextjsFill /> },
    { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { label: "Cricbuzz API", icon: <TbCricket /> },
    { label: "React Icons", icon: <SiNpm /> },
    { label: "Axios", icon: <SiNpm /> },
  ],
};

// =================== Challenges & Solutions ===================
export const challengesAndSolutions = {
  title: "⚡ Challenges & Solutions",
  parts: [
    {
      issueName: "Issue 01: Choosing and Using the Cricbuzz API",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "I wasn’t sure how to use the Cricbuzz API or which source to get it from. Searching on ChatGPT gave me many options, which made it confusing to decide the best approach.",
      solutionDescription: `After checking and comparing multiple options suggested by ChatGPT, I chose the Cricbuzz API via RapidAPI. I applied for access and planned the project to optimize API usage, allowing me to implement live scores, match results, and fixtures efficiently.`,
    },
  ],
};

// =================== Lessons Learned ===================
export const lessons = {
  title: "📖 Lessons Learned",
  lists: [
    "🔹 Learned how to plan and build a project independently from scratch using Next.js.",
    "🔹 Gained experience in integrating third-party APIs efficiently.",
    "🔹 Understood the value of ChatGPT as a guide for research, problem-solving, and project planning.",
    "🔹 Improved skills in responsive UI design using Tailwind CSS.",
  ],
};
