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

            <Paragraph text="With over 4+ years of experience in web development, I focus on creating responsive, SEO-friendly, and high-performance web applications that combine clean design with robust architecture." />

            <Paragraph text="I work extensively with JavaScript, React.js, Next.js, TypeScript, Express.js, Strapi, Context API, and Redux Toolkit. For UI and styling, skilled in Tailwind CSS and shadcn/ui to deliver clean and accessible interfaces. Hands-on experience with Git, Jest, and building both frontend-only and full-stack MERN applications. In a recent freelance project, I developed a custom web app using Next.js, TypeScript, Tailwind CSS, and integrated Strapi for backend content management, and worked closely with the client to ensure the technical solution aligned with their business goals." />

            <Paragraph text="I’m always exploring smarter, faster ways to build, use AI tools to boost productivity, inspire creativity, and maintain high code quality." />
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
