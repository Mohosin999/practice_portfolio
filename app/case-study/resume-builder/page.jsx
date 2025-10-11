"use client";

import FrontendSkill from "@/components/ui/FrontendSkill";
import {
  approach,
  challengesAndSolutions,
  features,
  lessons,
  objective,
  overview,
  problemStatement,
  techStack,
  testCodeJourney,
} from "@/app/case-study/resume-builder/resume-builder";

const CaseStudyResumeBuilder = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[60%] space-y-8 pt-6 lg:pt-10 px-3 md:px-6 lg:px-0">
        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold">
          AI-Powered Resume Builder - Enhancing Job Seekers’ Efficiency and
          Professionalism
        </h1>

        {/* Overview */}
        {/* ===================================================================
         *                          Overview
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {overview.title}
          </h2>
          <p className="text-base text-gray-800 dark:text-gray-300">
            {overview.text}
          </p>
        </section>

        {/* ===================================================================
         *                          Problem Statement
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {problemStatement.title}
          </h2>
          <p className="text-base text-gray-800 dark:text-gray-300">
            {problemStatement.text}
          </p>
        </section>

        {/* ===================================================================
         *                          Objective
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {objective.title}
          </h2>
          <p className="text-base text-gray-800 dark:text-gray-300">
            {objective.text}
          </p>
        </section>

        {/* ===================================================================
         *                          Approach
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {approach.title}
          </h2>

          {approach.parts.map((part, index) => (
            <div
              key={index}
              className={`space-y-1 ${index !== 0 ? "pt-1.5" : ""}`}
            >
              <h3 className="text-base font-semibold">{part.subtitle}</h3>
              {part.points.map((point, index) => (
                <ul
                  key={index}
                  className="pl-3 lg:pl-5 space-y-1 text-base text-gray-800 dark:text-gray-300"
                >
                  <li>{point}</li>
                </ul>
              ))}
            </div>
          ))}
        </section>

        {/* ===================================================================
         *                          Features
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {features.title}
          </h2>

          {features.parts.map((part, index) => (
            <div
              key={index}
              className={`space-y-1 ${index !== 0 ? "pt-1.5" : ""}`}
            >
              <h3 className="text-base font-semibold">{part.subtitle}</h3>
              {part.points.map((point, index) => (
                <ul
                  key={index}
                  className="pl-3 lg:pl-5 space-y-1 text-base text-gray-800 dark:text-gray-300"
                >
                  <li>{point}</li>
                </ul>
              ))}
            </div>
          ))}
        </section>

        {/* ===================================================================
         *                          Tech Stack
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-start gap-2">
            {techStack.title}
          </h2>

          {techStack.skills.map((skill, index) => (
            <div key={index} className="inline-block">
              <FrontendSkill
                name={skill.label}
                logo={skill.icon}
                className="mr-2"
              />
            </div>
          ))}
        </section>

        {/* ===================================================================
         *                         Challenges & Solutions
        =====================================================================*/}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {challengesAndSolutions.title}
          </h2>

          {challengesAndSolutions.parts.map((part, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-lg shadow-[0_0_7px_rgba(0,0,0,0.2)] space-y-2"
            >
              <h3 className="text-base font-semibold">{part.issueName}</h3>

              {/* Challenge */}
              <p className="text-base text-gray-800 dark:text-gray-300">
                <span className="px-2 py-1 bg-red-300 dark:text-gray-800">
                  {part.challenge}:
                </span>
                <span className="ml-2">{part.challengeDescription}</span>
              </p>

              {/* Solution */}
              <p className="text-base text-gray-800 dark:text-gray-300 pt-2">
                <span className="px-2 py-1 bg-green-300 dark:text-gray-800">
                  {part.solution}:
                </span>
                <span className="ml-2">{part.solutionDescription}</span>
              </p>
            </div>
          ))}
        </section>

        {/* ===================================================================
         *                          Test Code Journey
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {testCodeJourney.title}
          </h2>

          {testCodeJourney.lists.map((list, index) => (
            <ul
              key={index}
              className="text-base pl-3 lg:pl-5 space-y-1 text-gray-800 dark:text-gray-300"
            >
              <li>{list}</li>
            </ul>
          ))}
        </section>

        {/* ===================================================================
         *                           Lessons Learned
        =====================================================================*/}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            {lessons.title}
          </h2>

          {lessons.lists.map((list, index) => (
            <ul
              key={index}
              className="text-base pl-3 lg:pl-5 space-y-1 text-gray-800 dark:text-gray-300"
            >
              <li>{list}</li>
            </ul>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CaseStudyResumeBuilder;
