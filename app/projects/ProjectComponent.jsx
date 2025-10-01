// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { fadeInUp } from "@/utils/animation";

// const ProjectComponent = () => {
//   const projectsData = [
//     {
//       id: "123321",
//       image: "./img/resume-builder.png",
//       name: "AI-Powered Resume Builder App",
//       description:
//         "AI Resume Builder is a Next.js full-stack app for creating professional resumes with polished formats and smart layouts. Powered by Google Gemini AI, it offers tailored descriptions, skill suggestions, and full CRUD. Users can quickly build, customize, and download resumes as job-ready PDFs.",
//       liveUrl: "https://full-stack-ai-resume-builder-app-ne-one.vercel.app/",
//       sourceUrl:
//         "https://github.com/Mohosin999/FullStack-AI-Powered-Resume-Builder-App-Next.js",
//       caseStudyUrl:
//         "https://github.com/Mohosin999/Case-Study/tree/main/FullStack%20AI-Based%20Resume%20Builder%20Application%20-%20Next.js#title-ai-powered-resume-builder---enhancing-job-seekers-efficiency-and-professionalism",
//     },
//     {
//       id: "456654",
//       image: "./img/clean-youtube.png",
//       name: "Clean YouTube App",
//       description:
//         "Clean YouTube is a React-based web application designed to enhance your YouTube video-watching experience by providing a clean, ad-free, and distraction-free interface. Users can efficiently manage playlists, track recent activities, and save their favorite playlists for a seamless and enjoyable experience.",
//       liveUrl: "https://clean-youtube-application.onrender.com/",
//       sourceUrl: "https://github.com/Mohosin999/Clean-YouTube-Application",
//       caseStudyUrl:
//         "https://github.com/Mohosin999/Case-Study/blob/main/Clean%20YouTube%20Application/README.md#title-clean-youtube--minimalist--ad-free-viewing-experience",
//     },
//     {
//       id: "789987",
//       image: "./img/live-cricket.png",
//       name: "Live Cricket Score App",
//       description:
//         "Live Cricket Score App is a Next.js application powered by the Cricbuzz API, offering real-time cricket updates with a clean and responsive UI. It keeps users engaged with live scores, recent results, upcoming fixtures, and cricket articles. A detailed scorecard section provides in-depth match insights for a complete experience.",
//       liveUrl: "https://cricket-live-application-z7ba-nxas4d6u0.vercel.app/",
//       sourceUrl: "https://github.com/Mohosin999/Live-Cricket-Score-App-Next.js",
//     },
//   ];

//   return (
//     <div className="w-full h-full pt-28 flex items-center justify-center">
//       <div className="w-11/12 h-full flex flex-col items-center justify-center gap-4">
//         {/* Heading */}
//         <div className="w-full">
//           <h3 className="font-bold text-center text-2xl">Works & Projects</h3>
//         </div>

//         {/* Projects Information */}
//         <div className="w-full pb-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
//           {projectsData.map((project) => (
//             <div key={project.id}>
//               <motion.div
//                 {...fadeInUp}
//                 className="w-full bg-cardcolor border border-gray-600/[0.5] p-4 rounded-xl"
//               >
//                 {/* Image */}
//                 <div className="w-full rounded-xl overflow-hidden">
//                   <Link href={project.liveUrl} target="_blank">
//                     <img
//                       src={project.image}
//                       alt={project.name}
//                       className="w-full h-full object-cover hover:scale-105 transition-all duration-200 ease-in-out"
//                     />
//                   </Link>
//                 </div>

//                 {/* Project's description */}
//                 <div className="w-full pt-3 flex flex-col justify-center">
//                   {/* Name */}
//                   <h3 className="font-bold text-xl pb-2">{project.name}</h3>

//                   <p className="text-sm text-gray-400">{project.description}</p>

//                   {/* Links */}
//                   <div className="flex items-center gap-3 lg:gap-4 pt-3">
//                     {/* Live link */}
//                     <Link
//                       href={project.liveUrl}
//                       target="_blank"
//                       className="button_link"
//                     >
//                       Live Link
//                     </Link>
//                     {/* Source Code link */}
//                     <Link
//                       href={project.sourceUrl}
//                       target="_blank"
//                       className="button_link"
//                     >
//                       Source Code
//                     </Link>
//                     {/* Case-study link */}
//                     {project.caseStudyUrl && (
//                       <Link
//                         href={project.caseStudyUrl}
//                         target="_blank"
//                         className="button_link"
//                       >
//                         Case Study
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectComponent;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const ProjectComponent = () => {
  const projectsData = [
    {
      id: "123321",
      image: "./img/resume-builder.png",
      name: "AI-Powered Resume Builder App",
      description:
        "AI Resume Builder is a Next.js full-stack app for creating professional resumes with polished formats and smart layouts. Powered by Google Gemini AI, it offers tailored descriptions, skill suggestions, and full CRUD. Users can quickly build, customize, and download resumes as job-ready PDFs.",
      liveUrl: "https://full-stack-ai-resume-builder-app-ne-one.vercel.app/",
      sourceUrl:
        "https://github.com/Mohosin999/FullStack-AI-Powered-Resume-Builder-App-Next.js",
      caseStudyUrl: "http://localhost:3000/case-study/resume-builder",
    },
    {
      id: "456654",
      image: "./img/clean-youtube.png",
      name: "Clean YouTube App",
      description:
        "Clean YouTube is a React-based web application designed to enhance your YouTube video-watching experience by providing a clean, ad-free, and distraction-free interface. Users can efficiently manage playlists, track recent activities, and save their favorite playlists for a seamless and enjoyable experience.",
      liveUrl: "https://clean-youtube-application.onrender.com/",
      sourceUrl: "https://github.com/Mohosin999/Clean-YouTube-Application",
      caseStudyUrl:
        "https://github.com/Mohosin999/Case-Study/blob/main/Clean%20YouTube%20Application/README.md#title-clean-youtube--minimalist--ad-free-viewing-experience",
    },
    {
      id: "789987",
      image: "./img/live-cricket.png",
      name: "Live Cricket Score App",
      description:
        "Live Cricket Score App is a Next.js application powered by the Cricbuzz API, offering real-time cricket updates with a clean and responsive UI. It keeps users engaged with live scores, recent results, upcoming fixtures, and cricket articles. A detailed scorecard section provides in-depth match insights for a complete experience.",
      liveUrl: "https://cricket-live-application-z7ba-nxas4d6u0.vercel.app/",
      sourceUrl: "https://github.com/Mohosin999/Live-Cricket-Score-App-Next.js",
    },
  ];

  return (
    <div className="w-full h-full pt-28 flex items-center justify-center">
      <div className="w-11/12 h-full flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <div className="w-full">
          <h3 className="font-bold text-center text-2xl">Works & Projects</h3>
        </div>

        {/* Projects Information */}
        <div className="w-full pb-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projectsData.map((project) => (
            <div key={project.id}>
              <motion.div
                {...fadeInUp}
                className="w-full bg-cardcolor border border-gray-600/[0.5] p-4 rounded-xl"
              >
                {/* Image */}
                <div className="w-full rounded-xl overflow-hidden">
                  <Link href={project.liveUrl} target="_blank">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-200 ease-in-out"
                    />
                  </Link>
                </div>

                {/* Project's description */}
                <div className="w-full pt-3 flex flex-col justify-center">
                  {/* Name */}
                  <h3 className="font-bold text-xl pb-2">{project.name}</h3>

                  <p className="text-sm text-gray-400">{project.description}</p>

                  {/* Links */}
                  <div className="flex items-center gap-3 lg:gap-4 pt-3">
                    {/* Live link */}
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="button_link"
                    >
                      Live Link
                    </Link>
                    {/* Source Code link */}
                    <Link
                      href={project.sourceUrl}
                      target="_blank"
                      className="button_link"
                    >
                      Source Code
                    </Link>
                    {/* Case-study link */}
                    {project.caseStudyUrl && (
                      <Link
                        href={project.caseStudyUrl}
                        // target="_blank"
                        className="button_link"
                      >
                        Case Study
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
