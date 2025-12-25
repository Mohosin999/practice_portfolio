"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          form.current.reset();
          setIsSuccess(true);
          setIsLoading(false);
          setTimeout(() => setIsSuccess(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.div
      {...fadeInUp}
      className="w-full px-4 md:px-8 py-8 md:py-14 max-w-md bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)] rounded-xl"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-gray-200 dark:bg-gray-700 p-3 outline-none border-b-2 border-gray-400 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-gray-200 dark:bg-gray-700 p-3 outline-none border-b-2 border-gray-400 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full bg-gray-200 dark:bg-gray-700 p-3 outline-none border-b-2 border-gray-400 rounded-md resize-none"
        ></textarea>

        <div className="relative">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#B73ACA] text-base text-white p-3 hover:opacity-90 transition-all ease-in-out duration-200 flex justify-center items-center active:scale-105 rounded-md"
          >
            Send
            {isLoading && (
              <span className="loader border-t-transparent border-4 border-white rounded-full w-4 h-4 animate-spin ml-2"></span>
            )}
          </button>

          {/* Success Message (fixed position, no layout shift) */}
          <div className="absolute left-0 right-0 -bottom-6 flex justify-center">
            <p
              className={`text-sm text-green-600 dark:text-green-400 transition-opacity duration-500 ${
                isSuccess ? "opacity-100" : "opacity-0"
              }`}
            >
              ✅ Message sent successfully!
            </p>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
