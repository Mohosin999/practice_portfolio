import ContactForm from "@/app/contact/ContactForm";

const Contact = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-10 flex items-center justify-center">
      <div className="w-full lg:w-[87%] h-full flex flex-col lg:flex-row items-center justify-between gap-10 px-3 md:px-6 lg:px-0">
        {/* Left Side - Heading & Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
          <h3 className="font-bold text-2xl lg:text-3xl">Get in Touch</h3>
          <p className="text-base text-left md:text-center lg:text-left text leading-relaxed">
            I’d love to hear from you! Whether you have a question, project
            idea, or want to hire me, feel free to reach out. Fill out the form
            and click the send button. This will send your message to my Gmail,
            and I will get back to you as soon as possible.
          </p>

          <p className="text-base font-semibold text-left md:text-center lg:text-left text leading-relaxed">
            Want a faster response? Reach out to me directly via{" "}
            <a
              href="https://www.linkedin.com/in/mohosinh99/"
              target="_blank"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/8801932612133"
              target="_blank"
              className="text-green-600 dark:text-green-500 hover:underline"
            >
              WhatsApp
            </a>{" "}
            .
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
