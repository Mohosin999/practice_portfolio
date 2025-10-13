// "use client";

// import { motion } from "framer-motion";
// import { FaJs, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiRedux,
//   SiStyledcomponents,
//   SiJest,
//   SiTestinglibrary,
//   SiExpress,
//   SiStrapi,
//   SiTypescript,
//   SiPrisma,
//   SiSwagger,
//   SiMongoose,
// } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandFramerMotion } from "react-icons/tb";
// import { fadeInVisiable } from "@/utils/animation";
// import FrontendSkill from "../../components/ui/FrontendSkill";
// import BackendSkill from "../../components/ui/BackendSkill";

// const Skills = () => {
//   return (
//     <motion.div
//       {...fadeInVisiable}
//       className="col-span-5 lg:col-span-3 rounded-xl p-4 lg:p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)] order-1 lg:order-2"
//     >
//       <h2 className="text-xl font-semibold mb-6">Skills</h2>

//       {/* ======================================================================
//        *                            Frontend Skills
//       ====================================================================== */}
//       <div className="mb-5">
//         <div className="flex flex-wrap gap-2">
//           <FrontendSkill
//             name={"JavaScript"}
//             logo={<FaJs className="text-white" />}
//           />
//           <FrontendSkill
//             name={"TypeScript"}
//             logo={<SiTypescript className="text-white" />}
//           />
//           <FrontendSkill
//             name={"React"}
//             logo={<FaReact className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Next.js"}
//             logo={<SiNextdotjs className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Redux Toolkit"}
//             logo={<SiRedux className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Tailwind CSS"}
//             logo={<RiTailwindCssFill className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Styled Components"}
//             logo={<SiStyledcomponents className="text-white" />}
//           />
//           {/* <FrontendSkill
//             name={"Sass"}
//             logo={<FaSass className="text-white" />}
//           /> */}
//           <FrontendSkill
//             name={"Framer Motion"}
//             logo={<TbBrandFramerMotion className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Jest"}
//             logo={<SiJest className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Testing Library"}
//             logo={<SiTestinglibrary className="text-white" />}
//           />
//           <FrontendSkill
//             name={"Git"}
//             logo={<FaGitAlt className="text-white" />}
//           />
//         </div>
//       </div>

//       {/* ======================================================================
//        *                            Backend Skills
//       ====================================================================== */}
//       <div className="">
//         <div className="flex flex-wrap gap-2">
//           <BackendSkill
//             name={"Express.js"}
//             logo={<SiExpress className="text-white" />}
//           />
//           <BackendSkill
//             name={"Mongoose"}
//             logo={<SiMongoose className="text-white" />}
//           />
//           <BackendSkill
//             name={"Swagger"}
//             logo={<SiSwagger className="text-white" />}
//           />
//           <BackendSkill
//             name={"Strapi"}
//             logo={<SiStrapi className="text-white" />}
//           />
//           <BackendSkill
//             name={"Prisma ORM"}
//             logo={<SiPrisma className="text-white" />}
//           />

//           {/* <Skill
//             name={"Node.js"}
//             logo={<SiNodedotjs className="text-green-500" />}
//           />
//           <Skill
//             name={"MongoDB"}
//             logo={<SiMongodb className="text-green-600" />}
//           /> */}
//           {/* <Skill
//             name={"REST API"}
//             logo={<SiApachesolr className="text-yellow-500" />}
//           />
//           <Skill
//             name={"GraphQL"}
//             logo={<SiGraphql className="text-pink-500" />}
//           />
//           <Skill name={"Socket.io"} logo={<SiSocketdotio />} /> */}
//           {/* <Skill name={"Docker"} logo={<SiDocker className="text-blue-500" />} /> */}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Skills;

"use client";

import { motion } from "framer-motion";
import { FaJs, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiShadcnui,
  SiJest,
  SiTestinglibrary,
  SiExpress,
  SiStrapi,
  SiTypescript,
  SiPrisma,
  SiSwagger,
  SiMongoose,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { fadeInVisiable } from "@/utils/animation";
import DevSkill from "@/components/ui/DevSkill";

const Skills = () => {
  return (
    <motion.div
      {...fadeInVisiable}
      className="col-span-5 lg:col-span-3 rounded-xl p-4 lg:p-6 bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.2)] order-1 lg:order-2"
    >
      <h2 className="text-xl font-semibold mb-6">Skills (Key Technologies)</h2>

      {/* ======================================================================
       *                              Frontend
      ====================================================================== */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          <DevSkill label="frontend" name="JavaScript" logo={<FaJs />} />
          <DevSkill
            label="frontend"
            name="TypeScript"
            logo={<SiTypescript />}
          />
          <DevSkill label="frontend" name="React" logo={<FaReact />} />
          <DevSkill label="frontend" name="Next.js" logo={<SiNextdotjs />} />
          <DevSkill label="frontend" name="Redux-Toolkit" logo={<SiRedux />} />
        </div>
      </div>

      {/* ======================================================================
       *                                Design
      ====================================================================== */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          <DevSkill
            label="design"
            name="Tailwind CSS"
            logo={<RiTailwindCssFill />}
          />
          <DevSkill label="design" name="shadcn/ui" logo={<SiShadcnui />} />
          <DevSkill
            label="design"
            name="Framer Motion"
            logo={<TbBrandFramerMotion />}
          />
        </div>
      </div>

      {/* ======================================================================
       *                            Backend Skills
      ====================================================================== */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          <DevSkill
            label="backend"
            name={"Express.js"}
            logo={<SiExpress className="text-white" />}
          />
          <DevSkill
            label="backend"
            name={"Mongoose"}
            logo={<SiMongoose className="text-white" />}
          />
          <DevSkill
            label="backend"
            name={"Strapi"}
            logo={<SiStrapi className="text-white" />}
          />
        </div>
      </div>

      {/* ======================================================================
       *                                Tools
      ====================================================================== */}
      <div>
        <div className="flex flex-wrap gap-2">
          <DevSkill label="tools" name="Git" logo={<FaGitAlt />} />
          <DevSkill label="tools" name="Jest" logo={<SiJest />} />
          <DevSkill
            label="tools"
            name="React Testing Library"
            logo={<SiTestinglibrary />}
          />
          <DevSkill
            label="tools"
            name={"Swagger"}
            logo={<SiSwagger className="text-white" />}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
