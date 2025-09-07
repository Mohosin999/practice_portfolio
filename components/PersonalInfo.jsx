"use client";

import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialIconLink from "./ui/SocialIconLink";
import Counter from "./ui/Counter";

const PersonalInfo = ({ email = false }) => {
  return (
    <div className="w-11/12 h-fit pb-10 pt-14 flex flex-col lg:flex-row items-center justify-center gap-5">
      {/* ========================================================
       *                      Left Section
       ======================================================== */}
      {email ? (
        <div className="w-full lg:w-7/12 py-7 flex items-center justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-md overflow-x-hidden">
          {/* Time of experience */}
          <div className="flex items-center justify-center ">
            <div className="font-bold text-base lg:text-3xl text-primarycolor flex items-center justify-center">
              mohosin.hasan.akash@gmail.com
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-7/12 py-6 flex flex-col lg:flex-row  items-center justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-md">
          {/* Time of experience */}
          <div className="flex items-center justify-center gap-3 lg:border-r-2 lg:border-gray-400 w-full mb-3 lg:mb-0">
            <div className="font-bold text-4xl lg:text-5xl text-primarycolor flex items-center justify-center">
              <Counter from={0} to={3} />+
            </div>
            <div>
              <h4 className="text-sm">
                Years of <br /> Experience
              </h4>
            </div>
          </div>
          {/* Number of completed projects */}
          <div className="flex items-center justify-center w-full gap-3">
            <div className="font-bold text-4xl lg:text-5xl text-primarycolor flex items-center justify-center">
              <Counter from={0} to={9} />+
            </div>
            <div>
              <h4 className="text-sm">
                Projects <br /> Completed
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
       *                      Right Section
       ======================================================== */}
      <div className="w-full lg:w-5/12 py-5 flex items-center justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-md overflow-x-hidden">
        <ul className="flex items-center justify-center gap-6">
          <SocialIconLink
            href="https://www.linkedin.com/in/mohosinh99/"
            icon={FaLinkedin}
          />
          <SocialIconLink href="https://x.com/mohosinh99" icon={FaXTwitter} />
          <SocialIconLink
            href="https://github.com/Mohosin999"
            icon={FaGithub}
          />
          <SocialIconLink
            href="https://www.facebook.com/mohosinh99"
            icon={FaFacebook}
          />
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
