import {
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiGooglegemini,
  SiTailwindcss,
  SiShadcnui,
  SiClerk,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

// =================== Overview ===================
export const overview = {
  title: "📝 Overview",
  text: `I developed a full-stack AI-powered Resume Builder using Next.js with
          built-in server-side capabilities. It enables users to create
          professional resumes effortlessly with professional formats and
          complete CRUD support. Integrated with Google Gemini AI, the app
          generates professional descriptions and intelligent skill suggestions
          based on the resume title. Designed to help users overcome formatting
          and layout challenges, it auto-structures resumes for a polished look.
          Users can instantly download their resumes as PDFs, ready for job
          applications.`,
};

// =================== Problem Statement ===================
export const problemStatement = {
  title: "❗ Problem Statement",
  text: `Many job seekers, especially newbies, struggle to create a resume that meets professional global standards. They often face challenges in formatting, prioritizing relevant sections, and presenting information clearly. As a result, the resume fails to effectively convey skills and experience.`,
};

// =================== Objective ===================
export const objective = {
  title: "🎯 Objective",
  text: `To develop a user-friendly AI-powered resume builder that enables users to create professional, well-structured resumes efficiently, with minimal manual effort and maximum customization.`,
};

// =================== Approach ===================
export const approach = {
  title: "🧩 Approach",
  parts: [
    {
      subtitle: "Research:",
      points: [
        `🔹 Studied existing resume standards and took advice from
              professionals.`,
        `🔹 Identified additional important sections (e.g., Achievements)
              but deferred implementation for future iterations.`,
      ],
    },
    {
      subtitle: "Design:",
      points: [
        `🔹 Built a user-centric interface with structured sections for
              dashboard, personal details, summary, experience, project,
              education, skills, and resume preview.`,
        `🔹 Followed UI/UX best practices to ensure accessibility,
              responsive layouts, and intuitive navigation across devices.`,
        `🔹 Developed an on-demand preview and print-ready mode — users can
              choose when to preview their resume instead of constant live
              preview, giving them more control.`,
        `🔹 Used Shadcn UI components for a consistent, professional design
              system with accessible, production-ready elements.`,
        `🔹 Applied global reusable styles with Tailwind’s @apply
              directive, ensuring consistency and reducing repetitive code.`,
        `🔹 Implemented reusable components across most features, making
              the system modular, maintainable, and scalable.`,
      ],
    },
    {
      subtitle: "AI Integration:",
      points: [
        `🔹 Integrated Google Gemini AI to generate professional summaries.`,
        `🔹 Created experience and project descriptions with AI assistance.`,
        `🔹 Generated tailored skill suggestions.`,
      ],
    },
  ],
};

// =================== Features ===================
export const features = {
  title: "✨ Features",
  parts: [
    {
      subtitle: "Customizable Resume Sections:",
      points: [
        `🔹 Users can add, edit, or delete any resume section.`,
        `🔹 Support for multiple entries within a section.`,
        `🔹 Edit or delete specific entries.`,
      ],
    },
    {
      subtitle: "AI Description Generation:",
      points: [
        `🔹 Generate professional resume summaries.`,
        `🔹 Generate a narrative of impactful work experiences that fit your role.`,
        `🔹 Generate a clear and concise project description highlighting your contributions.`,
      ],
    },
    {
      subtitle: "AI Skill Suggestions:",
      points: [
        `🔹 Provides intelligent skill suggestions based on the user’s resume title.`,
      ],
    },
    {
      subtitle: "Download as PDF:",
      points: [`🔹 Users can download their resume in a PDF format.`],
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
    { label: "TypeScript", icon: <SiTypescript /> },
    { label: "Next.js", icon: <RiNextjsFill /> },
    { label: "Prisma ORM", icon: <SiPrisma /> },
    { label: "PostgreSQL", icon: <SiPostgresql /> },
    { label: "Google Gemini AI", icon: <SiGooglegemini /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    { label: "shadcn/ui", icon: <SiShadcnui /> },
    { label: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { label: "Clerk", icon: <SiClerk /> },
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
