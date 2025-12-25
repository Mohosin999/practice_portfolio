"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialIconLink from "../../components/ui/SocialIconLink";
import Counter from "../../components/ui/Counter";

const PersonalInfo = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[87%] h-fit pt-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 px-3 md:px-6 lg:px-0">
        {/* ========================================================
         *                      Left Section
         ======================================================== */}
        <div className="w-full lg:w-7/12 min-h-[120px] bg-[#B73ACA] px-14 py-4 rounded-3xl border border-gray-600/[0.5] shadow-md flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
          {/* Counter 1 */}
          <div className="flex-1 flex items-center justify-center lg:justify-start gap-3">
            <div className="font-bold text-3xl lg:text-5xl text-white flex items-center">
              <Counter from={0} to={3} />+
            </div>
            <div>
              <h4 className="text-sm lg:text-base text-white">
                Years of Experience
              </h4>
            </div>
          </div>

          {/* Vertical divider (only on lg and up) */}
          <div className="hidden lg:block h-12 border-r-2 border-white" />

          {/* Counter 2 */}
          <div className="flex-1 flex items-center justify-center gap-3">
            <div className="font-bold text-3xl lg:text-5xl text-white flex items-center">
              <Counter from={0} to={11} />
            </div>
            <div>
              <h4 className="text-sm lg:text-base text-white">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>

        {/* ========================================================
         *                      Right Section
         ======================================================== */}
        <div className="w-full lg:w-5/12 lg:min-h-[120px] bg-[#B73ACA] px-14 py-4 rounded-3xl border border-gray-600/[0.5] shadow-md flex items-center justify-center">
          <ul className="flex items-center justify-center gap-6">
            <SocialIconLink
              href="https://www.linkedin.com/in/mohosinh99/"
              icon={FaLinkedin}
            />
            <SocialIconLink
              href="https://github.com/Mohosin999"
              icon={FaGithub}
            />
            <SocialIconLink
              href="https://www.facebook.com/mohosinh99"
              icon={FaFacebook}
            />
            <SocialIconLink href="https://x.com/mohosinh99" icon={FaXTwitter} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
