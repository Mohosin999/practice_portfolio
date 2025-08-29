import CircleImage from "@/components/ui/CircleImage";
import PersonalInfo from "@/components/PersonalInfo";
import Paragraph from "@/components/ui/Paragraph";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-28 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        {/* Content (left on desktop, below on mobile) */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <div className="text_container">
            <h2 className="text-4xl font-bold">About Me</h2>

            <Paragraph text="With over 4 years of experience in web development, I design and build responsive, SEO-friendly, and high-performance web applications. My focus is on blending modern, user-centered design with scalable architecture to create digital products that not only look great but also perform seamlessly." />

            <Paragraph text="Recently, I’ve been building websites with AI-powered features integrated directly into the workflow, and I aim to incorporate AI in some way across all future projects. This approach ensures that the solutions I deliver stay modern, efficient, and ahead of the curve." />

            <Paragraph text="I have contributed to a diverse range of projects, from custom web applications to full-stack solutions, leveraging technologies such as JavaScript, React.js, Next.js, TypeScript, Express.js, Strapi (Headless CMS), Redux-Toolkit, and Easy-Peasy. On the frontend, I focus on building clean, accessible, and responsive interfaces using SASS, Tailwind CSS, shadcn/ui, Styled-Components, MUI, and Framer Motion. On the backend, I work with Strapi and Next.js full-stack features to build functional and manageable content systems with reliable integrations." />

            <Paragraph text="I work closely with my client, maintaining transparent and consistent communication to understand their needs and adapt to evolving requirements. From initial discussions to final deployment, I translate ideas into polished, professional digital solutions, refining designs and features along the way to ensure the final product aligns with their vision and delivers complete satisfaction." />
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
      <div className="w-11/12 pb-10 flex flex-col md:flex-row items-start justify-center gap-5">
        <Education />

        <Skills />
      </div>
    </div>
  );
};

export default About;
