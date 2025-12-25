// import React from "react";
// import { fadeInUp } from "@/utils/animation";
// import { motion } from "framer-motion";

// const ServiceComponent = ({ icon, title, params }) => {
//   return (
//     <motion.div {...fadeInUp} className="w-full">
//       <div className="rounded-xl p-4 lg:p-6 h-full flex flex-col bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-2">
//         <div className="flex flex-col items-center gap-3">
//           <div>{icon}</div>
//           <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
//         </div>

//         {/* Description */}
//         <div className="w-full py-3 mt-1 lg:mt-2 flex-1 min-w-0">
//           <p className="text-sm lg:text-base text-left md:text-center lg:text-left text-gray-700 dark:text-gray-300">
//             {params}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceComponent;

import React from "react";
import { motion } from "framer-motion";

const ServiceComponent = ({ icon, title, params, animation }) => {
  return (
      <motion.div {...animation} className="w-full">
        <div className="rounded-xl p-4 lg:p-6 h-full flex flex-col bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-2">
          <div className="flex flex-col items-center gap-3">
            <div>{icon}</div>
            <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
          </div>

          {/* Description */}
          <div className="w-full py-3 mt-1 lg:mt-2 flex-1 min-w-0">
            <p className="text-sm lg:text-base text-left md:text-center lg:text-left text-gray-700 dark:text-gray-300">
              {params}
            </p>
          </div>
        </div>
      </motion.div>
  );
};

export default ServiceComponent;
