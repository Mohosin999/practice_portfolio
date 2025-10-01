"use client";

import { Code } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudyResumeBuilder = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center max-w-5xl mx-auto p-6 space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        AI-Powered Resume Builder - Enhancing Job Seekers’ Efficiency and
        Professionalism
      </h1>

      {/* Overview */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          📄 Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          I developed a full-stack AI-powered Resume Builder using Next.js with
          built-in server-side capabilities. It enables users to create
          professional resumes effortlessly with professional formats and
          complete CRUD support. Integrated with Google Gemini AI, the app
          generates professional descriptions and intelligent skill suggestions
          based on the resume title. Designed to help users overcome formatting
          and layout challenges, it auto-structures resumes for a polished look.
          Users can instantly download their resumes as PDFs, ready for job
          applications.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          ❗ Problem Statement
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Many job seekers, especially newbies, struggle to create a resume that
          meets professional global standards. They often face challenges in
          formatting, prioritizing relevant sections, and presenting information
          clearly. As a result, the resume fails to effectively convey skills
          and experience.
        </p>
      </section>

      {/* Objective */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🎯 Objective
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          To develop a user-friendly AI-powered resume builder that enables
          users to create professional, well-structured resumes efficiently,
          with minimal manual effort and maximum customization.
        </p>
      </section>

      {/* Approach */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🛠️ Approach
        </h2>

        <h3 className="text-xl font-semibold">Research</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>
            Studied existing resume standards and took advice from
            professionals.
          </li>
          <li>
            Identified additional important sections (e.g., Achievements) for
            future iterations.
          </li>
        </ul>

        <h3 className="text-xl font-semibold">Design</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>
            User-centric interface with structured sections: dashboard, personal
            details, summary, experience, project, education, skills, and resume
            preview.
          </li>
          <li>
            UI/UX best practices: responsive layouts, accessibility, intuitive
            navigation.
          </li>
          <li>On-demand preview and print-ready mode for user control.</li>
          <li>Shadcn UI components for consistent professional design.</li>
          <li>
            Global reusable styles with Tailwind’s <code>@apply</code>{" "}
            directive.
          </li>
          <li>
            Reusable components for modular, maintainable, scalable
            architecture.
          </li>
        </ul>

        <h3 className="text-xl font-semibold">AI Integration</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li>Integrated Google Gemini AI to generate professional content.</li>
          <li>
            Summaries based on job titles, experience/project bullet points, and
            intelligent skill suggestions.
          </li>
          <li>Full manual editing allowed for customization.</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          💻 Tech Stack
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Frontend: Next.js 14, TypeScript, Tailwind CSS, Shadcn UI, Framer
            Motion, React Icons
          </li>
          <li>
            Backend: Next.js API Routes, Prisma ORM, PostgreSQL (Neon Database)
          </li>
          <li>AI Integration: Google Gemini AI</li>
          <li>Authentication & Others: Clerk, React Toastify</li>
        </ul>
      </section>

      {/* Features */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🔑 Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <strong>Customizable Resume Sections:</strong> Users can add, edit,
            or delete any resume section. Multiple entries supported.
          </li>
          <li>
            <strong>AI Description Generation:</strong> Generate professional
            resume descriptions using Google Gemini AI.
          </li>
          <li>
            <strong>AI Skill Suggestions:</strong> Intelligent skill suggestions
            based on the resume title.
          </li>
          <li>
            <strong>Download as PDF:</strong> Resumes can be instantly
            downloaded as PDFs.
          </li>
        </ul>
      </section>

      {/* Challenges & Solutions */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          ⚡ Challenges & Solutions
        </h2>

        {/* Challenge 1 */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow space-y-2">
          <h3 className="text-xl font-semibold">
            Issue 01: Next.js 15 Typed Routes Bug
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Challenge:</strong> TypeScript error during production
            builds due to experimental typed routes.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Solution:</strong> Downgraded to Next.js 14.2.x, adjusted
            configs. Production builds succeeded.
          </p>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-sm overflow-x-auto">
            <code>
              {`Type '{ params: { id: string } }' does not satisfy the constraint 'PageProps'.
Type '{ id: string }' is missing properties from 'Promise<any>'...`}
            </code>
          </pre>
        </div>

        {/* Challenge 2 */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow space-y-2">
          <h3 className="text-xl font-semibold">
            Issue 02: Mobile Print Styles
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Challenge:</strong> Printing used mobile styles instead of
            desktop layout.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Solution:</strong> Applied <code>print:!flex-row</code>{" "}
            modifier in Tailwind for desktop print styles.
          </p>
        </div>

        {/* Challenge 3 */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow space-y-2">
          <h3 className="text-xl font-semibold">
            Issue 03: Reusable Styles in Tailwind CSS
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Challenge:</strong> Repetition of utility classes across
            components.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Solution:</strong> Used <code>@apply</code> in globals.css
            to create reusable classes like <code>.card</code>.
          </p>
        </div>

        {/* Challenge 4 */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow space-y-2">
          <h3 className="text-xl font-semibold">
            Issue 04: Slow & Unreliable AI Description Generation
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Challenge:</strong> AI response slow and sometimes empty.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Solution:</strong> Switched to faster Gemini AI model,
            simplified config, and added safe text access with fallbacks. Now
            generates in 1–2 seconds reliably.
          </p>
        </div>
      </section>

      {/* Test Code Journey */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🧪 Test Code Journey
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          After multiple failed attempts, I successfully configured the test
          environment, wrote meaningful test cases, and learned the importance
          of perseverance and structured error analysis.
        </p>
      </section>

      {/* Lessons Learned */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          📖 Lessons Learned
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            Centralized global styles improved consistency and maintainability.
          </li>
          <li>AI integration requires patience and iterative tuning.</li>
          <li>Reusable components simplified development and maintenance.</li>
          <li>
            Performance optimization improved UX (lazy loading, optimized
            rendering).
          </li>
          <li>
            Debugging mindset is critical for solving complex framework issues.
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default CaseStudyResumeBuilder;
