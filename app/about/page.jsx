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

            <Paragraph text="Hi, I’m Mohosin Hasan Akash from Bangladesh, a passionate Frontend Web Developer with over 3 years of experience. I design and build responsive, SEO-friendly, scalable, and high-performance web applications." />

            <Paragraph text="I have worked with a client as a Frontend Developer, creating SEO-friendly, high-performance web apps with smooth animations and engaging user experiences. I provided custom solutions, frequently updated multiple sections based on client requests, and learned a lot while delivering impactful results." />

            <Paragraph text="I mainly work with JavaScript, TypeScript, React, Next.js, Redux-Toolkit, Node.js, Express.js, Headless CMS (Strapi), Tailwind CSS, Styled-Components, Framer Motion, and more." />

            <Paragraph text="Recently, I’ve been building websites with AI-powered features integrated directly into the workflow. This approach ensures that the solutions I deliver stay modern, efficient, and ahead of the curve." />

            <Paragraph text="I am currently learning backend development and working with the MERN stack. I can already build advanced APIs, and soon I will start creating all my upcoming projects using MERN technologies." />

            <Paragraph text="When I’m not coding, I love spending time in peaceful green environments. I also exercise regularly to stay physically and mentally healthy." />
          </div>
        </div>

        {/* Image (right on desktop, top on mobile) */}
        <CircleImage image="./img/profile.jpg" />
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
