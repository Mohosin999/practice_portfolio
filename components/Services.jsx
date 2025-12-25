// "use client";

// import { FaReact } from "react-icons/fa";
// import { RiNextjsLine } from "react-icons/ri";
// import { IoCodeSlashOutline } from "react-icons/io5";
// import ServiceComponent from "./ServiceComponent";

// const Services = () => {
//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center">
//       <div className="w-full lg:w-[87%] h-full pt-14 flex flex-col items-center justify-center gap-4 px-3 md:px-6 lg:px-0">
//         {/* Heading */}
//         <h2 className="text-2xl lg:text-3xl font-bold pb-4 lg:pb-6 flex items-center gap-2">
//           My Services
//         </h2>
//         <div className="w-full gap-5 flex flex-col items-center justify-center">
//           {/* ========================================================
//            *                      Service 01
//            ======================================================== */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-full">
//             <ServiceComponent
//               icon={<FaReact className="w-32 h-32 text-blue-500" />}
//               title={"Web Development (React)"}
//               params={`I build dynamic, responsive web applications with React.js, following clean code and DRY principles while integrating RESTful APIs. I deliver smooth user experiences using efficient state management with Redux Toolkit.`}
//             />

//             <ServiceComponent
//               icon={
//                 <RiNextjsLine className="w-32 h-32 text-gray-700 dark:text-gray-200" />
//               }
//               title={"Web Development (Next.js)"}
//               params={`I build scalable, SEO-friendly web applications with Next.js, leveraging server-side rendering, dynamic routing, and API integrations. I deliver robust, production-ready solutions with fast performance and maintainable code.`}
//             />

//             <ServiceComponent
//               icon={
//                 <IoCodeSlashOutline className="w-32 h-32 text-orange-600" />
//               }
//               title={"Full-Stack Web Development"}
//               params={`I build complete full-stack applications using React or Next.js for the frontend and Express or Strapi for the backend, efficiently connecting with REST APIs. I focus on scalability, clean architecture, and maintainable, high-performance solutions.`}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

"use client";

import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoCodeSlashOutline } from "react-icons/io5";
import ServiceComponent from "./ServiceComponent";
import { fadeInVisiable, fadeInUp } from "@/utils/animation";

const Services = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[87%] h-full pt-14 flex flex-col items-center justify-center gap-4 px-3 md:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold pb-4 lg:pb-6 flex items-center gap-2">
          My Services
        </h2>
        <div className="w-full gap-5 flex flex-col items-center justify-center">
          {/* ========================================================
           *                      Service 01
           ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-full">
            <ServiceComponent
              icon={<FaReact className="w-32 h-32 text-blue-500" />}
              title={"Web Development (React)"}
              params={`I build dynamic, responsive web applications with React.js, following clean code and DRY principles while integrating RESTful APIs. I deliver smooth user experiences using efficient state management with Redux Toolkit.`}
              animation={fadeInVisiable}
            />

            <ServiceComponent
              icon={
                <RiNextjsLine className="w-32 h-32 text-gray-700 dark:text-gray-200" />
              }
              title={"Web Development (Next.js)"}
              params={`I build scalable, SEO-friendly web applications with Next.js, leveraging server-side rendering, dynamic routing, and API integrations. I deliver robust, production-ready solutions with fast performance and maintainable code.`}
              animation={fadeInUp}
            />

            <ServiceComponent
              icon={
                <IoCodeSlashOutline className="w-32 h-32 text-orange-600" />
              }
              title={"Full-Stack Web Development"}
              params={`I build complete full-stack applications using React or Next.js for the frontend and Express or Strapi for the backend, efficiently connecting with REST APIs. I focus on scalability, clean architecture, and maintainable, high-performance solutions.`}
              animation={fadeInVisiable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
