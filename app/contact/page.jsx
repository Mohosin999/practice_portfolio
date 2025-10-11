import ContactForm from "@/app/contact/ContactForm";

const Contact = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-10 flex items-center justify-center">
      <div className="w-full lg:w-[87%] h-full flex flex-col lg:flex-row items-center justify-between gap-10 px-3 md:px-6 lg:px-0">
        {/* Left Side - Heading & Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
          <h3 className="font-bold text-2xl lg:text-3xl">Get in Touch</h3>
          <p className="text-base text-left md:text-center lg:text-left text-gray-700 dark:text-gray-300 leading-relaxed">
            I’d love to hear from you! Whether you have a question, project
            idea, or just want to say hello, feel free to reach out. Fill out
            the form and click the send button. This will send your message to
            my Gmail, and I will get back to you as soon as possible.
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
