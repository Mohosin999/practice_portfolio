"use client";

import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SocialIconLink from "./ui/SocialIconLink";
import Counter from "./ui/counter";

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
              <Counter from={0} to={4} />+
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
              <Counter from={0} to={11} />+
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
          <SocialIconLink href="#" icon={FaGithub} />
          <SocialIconLink href="#" icon={FaTwitter} />
          <SocialIconLink href="#" icon={FaLinkedin} />
          <SocialIconLink href="#" icon={FaFacebook} />
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
