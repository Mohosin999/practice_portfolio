import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiNpm,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiSwagger,
} from "react-icons/si";
import { RiGeminiFill, RiTailwindCssFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";

// =================== Overview ===================
export const overview = {
  title: "📝 Overview",
  text: `SmartGPT is a full-stack AI chatbot and image generation platform built with the MERN stack. It integrates OpenAI, Google Gemini, and ImageKit to provide intelligent, context-aware responses. Users can securely generate and store AI-powered chats and images, with authentication handled via JWT and bcrypt. The frontend uses React and TailwindCSS for a modern UI, while the backend leverages Node.js, Express, and MongoDB for scalability. The platform also offers a well-documented RESTful API with Swagger for easy integration.`,
};

// =================== Approach ===================
export const approach = {
  title: "🧩 Approach",
  parts: [
    {
      subtitle: "Technology Selection",
      points: [
        `🔹 Choose the MERN stack, OpenAI & Google Gemini, and ImageKit for secure storage and AI integration.`,
      ],
    },
    {
      subtitle: "System Architecture Design",
      points: [
        `🔹 Plan frontend, backend, database, and API structure for scalability and maintainability.`,
      ],
    },
    {
      subtitle: "Implementation",
      points: [
        `🔹 Build authentication, AI chat, image generation, chat management, and API endpoints.`,
      ],
    },
    {
      subtitle: "Documentation & Deployment",
      points: [
        `🔹 Provide Swagger API docs, live demo, and proper environment setup.`,
      ],
    },
  ],
};

// =================== Features ===================
export const features = {
  title: "✨ Features",
  parts: [
    {
      subtitle: "Secure Authentication",
      points: [
        `🔹 Register and log in using email and password.`,
        `🔹 Passwords are encrypted with bcrypt for security.`,
        `🔹 JSON Web Token (JWT) is used for authentication.`,
        `🔹 Without login, no user can access any feature.`,
      ],
    },
    {
      subtitle: "AI Chatbot",
      points: [
        `🔹 Generate AI-powered responses for any text prompt.`,
        `🔹 Works like ChatGPT, giving intelligent answers instead of simple messaging.`,
        `🔹 Each conversation is saved securely in the user’s account.`,
      ],
    },
    {
      subtitle: "AI Image Generation",
      points: [
        `🔹 Generate unique images from your own prompts.`,
        `🔹 Images are uploaded and stored using ImageKit.`,
      ],
    },
    {
      subtitle: "Chat Management",
      points: [
        `🔹 Search Chats – Find specific conversations quickly.`,
        `🔹 Delete Chats – Remove unwanted chats individually.`,
        `🔹 Chat History – Access your past prompts and responses anytime.`,
      ],
    },
    {
      subtitle: "Backend API with Swagger",
      points: [
        `🔹 RESTful API designed using Express.js and MongoDB.`,
        `🔹 Fully documented with Swagger UI.`,
        `🔹 Organized structure for scalability and easy integration.`,
      ],
    },
  ],
};

// =================== SKILLS ===================
export const techStack = {
  title: "🛠️ Tech Stack",
  skills: [
    { label: "JavaScript", icon: <IoLogoJavascript /> },
    { label: "React", icon: <FaReact /> },
    { label: "Redux Toolkit", icon: <SiRedux /> },
    { label: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { label: "shadcn/ui", icon: <SiShadcnui /> },
    { label: "React Router DOM", icon: <SiNpm /> },
    { label: "Express.js", icon: <SiExpress /> },
    { label: "MongoDB", icon: <SiMongodb /> },
    { label: "JWT", icon: <SiNpm /> },
    { label: "Swagger UI", icon: <SiSwagger /> },
    { label: "OpenAI", icon: <AiFillOpenAI /> },
    { label: "Google Gemini AI", icon: <RiGeminiFill /> },
    { label: "ImageKit", icon: <SiNpm /> },
    { label: "React Markdown", icon: <SiNpm /> },
    { label: "PrismJS", icon: <SiNpm /> },
    { label: "React Hot Toast", icon: <SiNpm /> },
    { label: "React Icons", icon: <SiNpm /> },
    { label: "Axios", icon: <SiNpm /> },
    { label: "Prop-Types", icon: <SiNpm /> },
  ],
};

// =================== Challenges & Solutions ===================
export const challengesAndSolutions = {
  title: "⚡ Challenges & Solutions",
  parts: [
    {
      issueName: "Issue 01: Next.js 15 Typed Routes Bug",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "While upgrading my full-stack AI Resume Builder to Next.js 15 (App Router), I encountered a critical TypeScript issue during production builds. Despite correctly typing dynamic route parameters and trying recommended fixes—like adjusting typed routes, using generateStaticParams, and refactoring async/await—the build kept failing. The root cause was Next.js 15’s experimental typed routes feature, which enforced overly strict type checking and mistakenly treated parameters as Promises, leading to persistent build failures.",
      solutionDescription:
        "To resolve the issue, I downgraded from Next.js 15 to 14.2.x for better stability and made a few minor adjustments in the configuration, including updates to next.config.js and font imports. After these changes, the production builds finally ran without errors, and the application now works flawlessly.",
    },
    {
      issueName:
        "Issue 02: Mobile Print Styles Showing Instead of Desktop Styles",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "After making the resume responsive for mobile, printing the resume caused it to use mobile-optimized styles (stacked layouts, centered text) instead of the cleaner desktop layout. This resulted in unprofessional print output, as desktop styles (side-by-side sections, proper alignment) are much better for printed resumes.",
      solutionDescription:
        "Leveraged Tailwind CSS’s print: modifier to enforce desktop-specific styles during printing.",
    },
    {
      issueName: "Issue 03: Managing Reusable Styles in Tailwind CSS",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription:
        "While building the app’s design, I felt exhausted from repeatedly writing the same Tailwind utility classes across multiple components. This repetition made the JSX messy and harder to maintain.",
      solutionDescription:
        "Implemented a global reusable style system using Tailwind’s @apply directive.",
    },
  ],
};

// =================== Test Code Journey ===================
export const testCodeJourney = {
  title: "🧪 Test Code Journey",
  lists: [
    "🔹 Initially, I attempted to set up a test environment twice but quit due to recurring errors.",
    "🔹 Every fix seemed to trigger a new error, leading to frustration.",
    "🔹 trying a third time, I revised my test knowledge, re-learned testing classes, and analyzed error patterns.",
    "🔹 On my third attempt, I successfully configured the test environment, wrote meaningful test cases, and understood the purpose of each test.",
    "🔹 This experience taught me the importance of perseverance, structured learning, and error analysis when working with testing frameworks.",
  ],
};

// =================== Lessons Learned ===================
export const lessons = {
  title: "📖 Lessons Learned",
  lists: [
    "🔹 Centralized global styles improved consistency and maintainability.",
    "🔹 AI integration requires patience and iterative tuning.",
    "🔹 Reusable components simplified development and maintenance.",
    "🔹 Performance optimization improved UX (lazy loading, optimized rendering).",
    "🔹 Debugging mindset is critical for solving complex framework issues.",
  ],
};
