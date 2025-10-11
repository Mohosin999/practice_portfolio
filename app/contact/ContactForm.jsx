"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

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
          setIsLoading(false); // Stop loading
          setTimeout(() => setIsSuccess(false), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false); // Stop loading
        }
      );
  };

  return (
    <motion.div
      {...fadeInUp}
      className={`w-full px-4 md:px-8 py-8 md:py-14 ${
        isSuccess ? "pt-14 pb-0" : ""
      } max-w-md bg-white dark:bg-gray-800 shadow-[0_0_7px_rgba(0,0,0,0.2)]`}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full h-full flex flex-col gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-gray-200 dark:bg-gray-700 p-3 outline-none border-b-2 border-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full bg-gray-200 dark:bg-gray-700 p-3 outline-none border-b-2 border-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full bg-gray-200 dark:bg-gray-700 p-3 outline-none border-b-2 border-gray-400"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-sky-600 text-base text-white p-3 hover:opacity-85 transition-all ease-in-out duration-200 flex justify-center items-center active:scale-105"
          disabled={isLoading} // Disable button while loading
        >
          Send
          {isLoading && (
            <span className="loader border-t-transparent border-4 border-white rounded-full w-4 h-4 animate-spin ml-2"></span>
          )}
        </button>
      </form>

      {/* Success Message */}
      {isSuccess && (
        <h4 className="text-base text-gray-700 dark:text-gray-300 pt-4 pb-5 text-center">
          Your Message Successfully Sent!
        </h4>
      )}
    </motion.div>
  );
};

export default ContactForm;
