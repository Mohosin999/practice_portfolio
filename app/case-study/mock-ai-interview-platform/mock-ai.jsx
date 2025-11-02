import {
  SiTypescript,
  SiFirebase,
  SiGooglegemini,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";

// =================== Overview ===================
export const overview = {
  title: "📝 Overview",
  text: `MockAI is an intelligent web application that helps users prepare for real interviews using AI-driven mock sessions, personalized feedback, and smart question recommendations. The platform provides a realistic interview experience powered by VAPI, allowing users to talk directly with the AI interviewer. It uses secure Firebase Authentication to protect user data, feedback history, and interview performance. Built with Next.js, TypeScript, Firebase, VAPI, and Google Gemini AI, MockAI offers a modern, fast, and secure environment for practicing and improving your interview skills.`,
};

// =================== Objective ===================
export const objective = {
  title: "🎯 Objective",
  text: `To develop an AI-powered mock interview platform that helps users effectively prepare for real job interviews by allowing them to read selected interview questions, practice interactive mock sessions, get instant feedback, and improve their communication for better performance in real interviews.`,
};

// =================== Approach ===================
export const approach = {
  title: "🧩 Approach",
  parts: [
    {
      subtitle: "",
      points: [
        `🔹 Used Firebase Authentication to ensure secure user registration, login, and data protection.`,
        `🔹 Stored user data, interview sessions, and AI feedback in Firebase  Firestore.`,
        `🔹 Managed user sessions securely using cookies.`,
        `🔹 Integrated VAPI for voice-based mock interviews, enabling real-time interaction.`,
        `🔹 Processed conversation data from VAPI and sent it to Google Gemini AI for intelligent feedback generation.`,
        `🔹 Saved AI-generated feedback to Firebase and dynamically displayed it on the frontend.`,
        `🔹 Followed a design system approach to make UI components reusable and consistent.`,
      ],
    },
  ],
};

// =================== Features ===================
export const features = {
  title: "✨ Features",
  parts: [
    {
      subtitle: "Secure Authentication:",
      points: [
        `🔹 Fully protected authentication using Firebase Authentication.`,
        `🔹 Only authenticated users can access the app.`,
        `🔹 User sessions and data are securely stored in Firebase Firestore.`,
      ],
    },
    {
      subtitle: "AI-Guided Navigation:",
      points: [
        `🔹 Talk to the AI directly from the Home Page to decide your next step.`,
        `🔹 The AI can redirect you to the Mock Interview or Interview Question Bank automatically, without using the navbar.`,
      ],
    },
    {
      subtitle: "AI-Guided Mock Interview:",
      points: [
        `🔹 Conduct full mock interviews with the AI acting as your interviewer.`,
        `🔹 The AI asks questions, listens to your responses, and provides instant feedback.`,
      ],
    },
    {
      subtitle: "Feedback History:",
      points: [
        `🔹 Every mock interview attempt and feedback is stored securely in Firebase.`,
        `🔹 View your performance history, delete old sessions, or retake interviews anytime.`,
      ],
    },
  ],
};

// =================== SKILLS ===================
export const techStack = {
  title: "🛠️ Tech Stack",
  skills: [
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "Next.js", icon: <RiNextjsFill /> },
    { label: "VAPI", icon: <FaRobot /> },
    { label: "Google Gemini AI", icon: <SiGooglegemini /> },
    { label: "Firebase", icon: <SiFirebase /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    { label: "shadcn/ui", icon: <SiShadcnui /> },
  ],
};

// =================== Challenges & Solutions ===================
export const challengesAndSolutions = {
  title: "⚡ Challenges & Solutions",
  parts: [
    {
      issueName: "Issue: Vapi Update Compatibility",
      challenge: "Challenge",
      solution: "Solution",
      challengeDescription: `While integrating VAPI into my MockAI app, I initially followed a YouTube tutorial project to learn usage. However, the new version of VAPI had significant changes, and my implementation failed. Previously, it was necessary to link ‘Workflows’ with ‘Assistants’ in VAPI’s older version, but in the updated version (VAPI 2.0) this linkage is no longer supported.`,
      solutionDescription:
        "To overcome this, I explored the new VAPI version independently, studying its updated features. I adapted my implementation to focus solely on 'assistances', bypassing workflows entirely. By experimenting and learning from the new version, I successfully integrated VAPI into my app without relying on workflow functionality.",
    },
  ],
};

// =================== Lessons Learned ===================
export const lessons = {
  title: "📖 Lessons Learned",
  lists: [
    "🔹  Adapted quickly to VAPI 2.0 and explored its new features independently.",
    "🔹 Integrated AI services (VAPI, Google Gemini AI) for real-time mock interviews.",
  ],
};
