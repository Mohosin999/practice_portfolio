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

            <Paragraph text="I create responsive, SEO-friendly, and high-performance web applications that combine modern design with scalable architecture. With over 4 years in web development, I focus on building products that look great, work smoothly, and help businesses grow." />

            <Paragraph text="Recently, I’ve been building websites with AI-powered features integrated directly into the workflow, and I aim to incorporate AI in some way across all future projects. This approach ensures that the solutions I deliver stay modern, efficient, and ahead of the curve." />

            <Paragraph text="I’ve contributed to a wide range of projects—ranging from custom web apps to full-stack solutions—using technologies such as JavaScript, React.js, Next.js, TypeScript, Express.js, and Strapi. On the frontend, I emphasize clean and accessible interfaces with Tailwind CSS and shadcn/ui, while on the backend, I ensure solid integrations and flexible content management systems." />

            <Paragraph text="Clients I collaborate with value the transparency and dedication I bring to each project. From the first conversation to deployment, I ensure their goals remain the priority while translating ideas into polished, professional digital solutions." />
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
