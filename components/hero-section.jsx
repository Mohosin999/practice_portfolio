// import { FaDownload } from "react-icons/fa6";
// import Services from "../services";
// import PersonalInfo from "./PersonalInfo";
// import CircleImage from "../circle-image";

// const Hero = () => {
//   return (
//     <div className="w-full h-full bg-secondarycolor flex flex-col items-center justify-center z-20">
//       <div className="w-11/12 h-full pt-[52.4rem] flex items-center justify-center gap-4">
//         {/* Right side hero section */}
//         <div className="w-7/12">
//           <div className="text_container">
//             <h5 className="text-gray-400 text-base">Hey there!</h5>
//             <h2 className="text-6xl font-bold">
//               I'm <span className="text-primarycolor">Mohosin Hasan</span>{" "}
//               <br /> a Frontend Developer
//             </h2>
//             {/* Paragraph */}
//             <p className="py-4 text-sm lg:text-base text-gray-400">
//               Hi, I'm Mohosin Hasan Akash, a frontend web developer from
//               Bangladesh. I specialize in building web applications using React
//               and Express. My passion is crafting user-friendly and visually
//               appealing digital experiences. I'm Mohosin Hasan Akash, a frontend
//               web developer from Bangladesh. I specialize in building web
//               applications using React and Express. My passion is crafting
//               user-friendly and visually appealing digital experiences.
//             </p>
//             {/* Download resume button */}
//             <a href="./resume.pdf" target="_blank" className="flex w-fit">
//               <button className="flex items-center justify-center gap-3 text-primarycolor px-5 py-2 my-3 text-sm border-2 border-primarycolor transition-all ease-in-out duration-200 hover:bg-primarycolor hover:text-white">
//                 <FaDownload /> Download Resume
//               </button>
//             </a>
//           </div>
//         </div>

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

// export default Hero;

import { FaDownload } from "react-icons/fa6";
import Services from "./services";
import PersonalInfo from "./personal-info";
import CircleImage from "./ui/circle-image";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-28 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        {/* Left side hero text (on mobile it comes below the image) */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <div className="text_container">
            <h5 className="text-gray-400 text-base">Hey there!</h5>
            <h2 className="text-3xl lg:text-6xl font-bold">
              I'm <span className="text-primarycolor">Mohosin Hasan</span>{" "}
              <br /> a Frontend Developer
            </h2>

            {/* Paragraph */}
            <p className="py-4 text-sm md:text-base text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences.
            </p>

            {/* Download resume button */}
            <a
              href="./resume.pdf"
              target="_blank"
              className="flex w-fit mx-auto md:mx-0"
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
