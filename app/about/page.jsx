// import CircleImage from "@/components/ui/CircleImage";
// import PersonalInfo from "@/app/about/PersonalInfo";
// import Paragraph from "@/components/ui/Paragraph";
// import Education from "@/app/about/Education";
// import Skills from "@/app/about/Skills";

// const About = () => {
//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center">
//       <div className="w-full lg:w-[87%] h-full pt-6 lg:pt-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-3 md:px-6 lg:px-0">
//         {/* Content (left on desktop, below on mobile) */}
//         <div className="w-full lg:w-7/12 text-center lg:text-left">
//           <div className="text_container">
//             <h2 className="text-2xl lg:text-3xl font-bold">About Me</h2>

//             <Paragraph text="With over 3 years of experience in web development, I design and build responsive, SEO-friendly, and high-performance web applications. Now my focus is on creating modern, AI-featured web solutions." />

//             <Paragraph text="Recently, I’ve been building websites with AI-powered features integrated directly into the workflow, and I aim to incorporate AI in some way across all future projects. This approach ensures that the solutions I deliver stay modern, efficient, and ahead of the curve." />

//             <Paragraph text="I have contributed to a diverse range of projects, from custom web applications to full-stack solutions, leveraging technologies such as JavaScript, TypeScript, React, Next.js, Redux-Toolkit, Easy-Peasy, Express.js, Headless CMS (Strapi), Tailwind CSS, Styled-Components, and more." />

//             <Paragraph text="I am currently learning backend development and working with the MERN stack. Soon, I will start building all my upcoming projects using MERN technologies. This will allow me to create full-stack, scalable, and dynamic web applications end-to-end." />

//             <Paragraph text="I work closely with my client, maintaining transparent and consistent communication to understand their needs and adapt to evolving requirements. From initial discussions to final deployment, I translate ideas into polished, professional digital solutions, refining designs and features along the way to ensure the final product aligns with their vision and delivers complete satisfaction." />
//           </div>
//         </div>

//         {/* Image (right on desktop, top on mobile) */}
//         <CircleImage image="./img/profile.jpg" />
//       </div>

//       {/* ========================================================
//        *               Personal info & Social links
//        ======================================================== */}
//       <PersonalInfo />

//       {/* ========================================================
//        *                    Education and Skills
//        ======================================================== */}
//       <div className="w-full lg:w-[87%] grid grid-cols-1 lg:grid-cols-5 pt-14 gap-5 px-3 md:px-6 lg:px-0">
//         <Education />

//         <Skills />
//       </div>
//     </div>
//   );
// };

// export default About;

import CircleImage from "@/components/ui/CircleImage";
import PersonalInfo from "@/app/about/PersonalInfo";
import Paragraph from "@/components/ui/Paragraph";
import Education from "@/app/about/Education";
import Skills from "@/app/about/Skills";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full lg:w-[87%] h-full pt-6 lg:pt-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-3 md:px-6 lg:px-0">
        {/* Content (left on desktop, below on mobile) */}
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <div className="text_container">
            <h2 className="text-2xl lg:text-3xl font-bold">About Me</h2>

            <Paragraph text="With over 3 years of experience in front-end development, I’m an expert at creating high-performance, scalable web applications that maximize user experience and business success. My skills are JavaScript, TypeScript, React, and Next.js, and I have a deep understanding of building RESTful APIs using Node.js and Express. " />

            <Paragraph text="Recently, I’ve been building websites with AI-powered features integrated directly into the workflow. This approach ensures that the solutions I deliver stay modern, efficient, and ahead of the curve." />

            <Paragraph text="I worked with a client as a Frontend Developer, building a high-performance, SEO-optimized web app using Next.js that helped boost their company's sales. I consistently updated various sections based on client requests, and learned a lot while delivering impactful results." />

            <Paragraph text="I truly enjoy learning new things. Right now, I’m exploring backend development and working with the MERN stack to strengthen my full-stack skills. When I’m not coding, I love spending time in peaceful green environments. I also exercise regularly to stay physically and mentally healthy." />

            <Paragraph text="Aiming for remote opportunities worldwide, I’m excited to bring my expertise to forward-thinking teams and contribute to projects driven by creativity and excellence." />
          </div>
        </div>

        {/* Image (right on desktop, top on mobile) */}
        <CircleImage image="./img/profile.png" />
      </div>

      {/* ========================================================
       *               Personal info & Social links
       ======================================================== */}
      <PersonalInfo />

      {/* ========================================================
       *                    Education and Skills
       ======================================================== */}
      <div className="w-full lg:w-[87%] grid grid-cols-1 lg:grid-cols-5 pt-14 gap-5 px-3 md:px-6 lg:px-0">
        <Education />

        <Skills />
      </div>
    </div>
  );
};

export default About;
