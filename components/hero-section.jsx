// import { FaDownload } from "react-icons/fa6";
// import Services from "./services";
// import PersonalInfo from "./personal-info";
// import CircleImage from "./ui/circle-image";

// const HeroSection = () => {
//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center z-20">
//       <div className="w-11/12 h-full pt-28 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
//         {/* Left side hero text (on mobile it comes below the image) */}
//         <div className="w-full lg:w-7/12 text-center lg:text-left">
//           <div className="text_container">
//             <h5 className="text-gray-400 text-base">Hey there!</h5>
//             <h2 className="text-3xl lg:text-6xl font-bold">
//               I'm <span className="text-primarycolor">Mohosin Hasan</span>{" "}
//               <br /> a Frontend Developer
//             </h2>

//             {/* Paragraph */}
//             <p className="py-4 text-sm lg:text-base text-gray-400">
//               Hi, I'm Mohosin Hasan Akash, a frontend web developer from
//               Bangladesh. I specialize in building web applications using React
//               and Express. My passion is crafting user-friendly and visually
//               appealing digital experiences.
//             </p>

//             {/* Download resume button */}
//             <a
//               href="./resume.pdf"
//               target="_blank"
//               className="flex w-fit mx-auto lg:mx-0"
//             >
//               <button className="flex items-center justify-center gap-3 text-primarycolor px-5 py-2 my-3 text-sm border-2 border-primarycolor transition-all ease-in-out duration-200 hover:bg-primarycolor hover:text-white">
//                 <FaDownload /> Download Resume
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* Right side hero image (on mobile it shows on top) */}
//         <CircleImage image="./img/profile.jpg" />
//       </div>

//       {/* ========================================================
//        *                      services
//        ======================================================== */}
//       <Services />

//       {/* ========================================================
//        *                Personal info & Social links
//        ======================================================== */}
//       <PersonalInfo email={true} />
//     </div>
//   );
// };

// export default HeroSection;

"use client";

import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import Services from "./services";
import PersonalInfo from "./personal-info";
import CircleImage from "./ui/circle-image";

const HeroSection = () => {
  const animatedText = "Frontend Developer";

  // Container for stagger animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between letters
      },
    },
  };

  // Each letter animation (only fade in, no movement)
  const letter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-28 flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
        {/* Left side hero text (on mobile it comes below the image) */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <div className="text_container">
            <h5 className="text-gray-400 text-base">Hey there!</h5>

            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold">
              I'm <span className="text-primarycolor">Mohosin Hasan</span>
              <br />a{" "}
              <motion.span
                className="inline-block"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {animatedText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letter}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h2>

            {/* Paragraph */}
            <p className="py-4 text-sm lg:text-base text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences.
            </p>

            {/* Download resume button */}
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="flex w-fit mx-auto lg:mx-0"
            >
              <button className="flex items-center justify-center gap-3 text-primarycolor px-5 py-2 my-3 text-sm border-2 border-primarycolor transition-all ease-in-out duration-200 hover:bg-primarycolor hover:text-white">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right side hero image (on mobile it shows on top) */}
        <CircleImage image="./img/profile.jpg" />
      </div>

      {/* ========================================================
       *                      services
       ======================================================== */}
      <Services />

      {/* ========================================================
       *                Personal info & Social links
       ======================================================== */}
      <PersonalInfo email={true} />
    </div>
  );
};

export default HeroSection;
