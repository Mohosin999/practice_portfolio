"use client";

import { motion } from "framer-motion";
import { FaJs, FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiJest,
  SiTestinglibrary,
  SiExpress,
  SiStrapi,
  SiTypescript,
  SiSwagger,
  SiMongoose,
  SiShadcnui,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { fadeInVisiable } from "@/utils/animation";
import FrontendSkill from "../../components/ui/FrontendSkill";
import DevTools from "../../components/ui/DevTools";

const Skills = () => {
  return (
    <motion.div
      {...fadeInVisiable}
      className="col-span-5 lg:col-span-3 rounded-xl p-4 lg:p-6 bg-white dark:bg-[#101016] shadow-[0_0_10px_rgba(0,0,0,0.2)] order-1 lg:order-2"
    >
      <h2 className="text-xl font-semibold mb-6">Skills</h2>

      {/* ======================================================================
       *                            Frontend Skills
      ====================================================================== */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          <FrontendSkill
            name={"JavaScript"}
            logo={<FaJs className="text-white" />}
          />
          <FrontendSkill
            name={"TypeScript"}
            logo={<SiTypescript className="text-white" />}
          />
          <FrontendSkill
            name={"React"}
            logo={<FaReact className="text-white" />}
          />
          <FrontendSkill
            name={"Next.js"}
            logo={<SiNextdotjs className="text-white" />}
          />
          <FrontendSkill
            name={"Redux Toolkit"}
            logo={<SiRedux className="text-white" />}
          />
          <FrontendSkill
            name={"Styled Components"}
            logo={<SiStyledcomponents className="text-white" />}
          />
          <FrontendSkill
            name={"Tailwind CSS"}
            logo={<RiTailwindCssFill className="text-white" />}
          />
          <FrontendSkill
            name={"shadcn/ui"}
            logo={<SiShadcnui className="text-white" />}
          />
          <FrontendSkill
            name={"Framer Motion"}
            logo={<TbBrandFramerMotion className="text-white" />}
          />
          <FrontendSkill
            name={"Express.js"}
            logo={<SiExpress className="text-white" />}
          />
          <FrontendSkill
            name={"Mongoose"}
            logo={<SiMongoose className="text-white" />}
          />

          <FrontendSkill
            name={"Strapi"}
            logo={<SiStrapi className="text-white" />}
          />
        </div>
      </div>

      {/* ======================================================================
       *                            Backend Skills
      ====================================================================== */}
      <div className="">
        <div className="flex flex-wrap gap-2">
          <DevTools name={"Git"} logo={<FaGitAlt className="text-white" />} />
          <DevTools name={"Jest"} logo={<SiJest className="text-white" />} />
          <DevTools
            name={"React Testing Library"}
            logo={<SiTestinglibrary className="text-white" />}
          />
          <DevTools
            name={"Swagger"}
            logo={<SiSwagger className="text-white" />}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
