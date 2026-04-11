import ProfessionalSummary from "@/app/about/ProfessionalSummary";
import WorkExperience from "@/app/about/WorkExperience";
import CertificationsAndCourses from "@/app/about/CertificationsAndCourses";
import Languages from "@/app/about/Languages";
import TechStackVisualization from "@/app/about/TechStackVisualization";
import CareerTimeline from "@/app/about/CareerTimeline";
import ContactCTA from "@/app/about/ContactCTA";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* ========================================================
       *               Professional Summary & Tagline
       ======================================================== */}
      <ProfessionalSummary />

      {/* ========================================================
       *               Original About Me Section (Commented Out)
       ======================================================== */}
      {/* 
      <div className="w-full lg:w-[87%] h-full pt-6 lg:pt-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 px-3 md:px-6 lg:px-0">
        <div className="w-full lg:w-7/12 text-center lg:text-left">
          <div className="text_container">
            <h2 className="text-2xl lg:text-3xl font-bold">About Me</h2>

            <Paragraph text="With over 4 years of experience in front-end development, I'm an expert at creating high-performance, scalable web applications that maximize user experience. My skills are JavaScript, TypeScript, React, and Next.js, and I have a deep understanding of building RESTful APIs using Node.js and Express. " />

            <Paragraph text="Recently, I've been building websites with AI-powered features integrated directly into the workflow. This approach ensures that the solutions I deliver stay modern, efficient, and ahead of the curve." />

            <Paragraph text="I truly enjoy learning new things. Right now, I'm exploring backend development and working with the MERN stack to strengthen my full-stack skills. When I'm not coding, I love spending time in peaceful green environments. I also exercise regularly to stay physically and mentally healthy." />

            <Paragraph text="Aiming for remote opportunities worldwide, I'm excited to bring my expertise to forward-thinking teams and contribute to projects driven by creativity and excellence." />
          </div>
        </div>

        <CircleImage image="./img/profile.png" />
      </div>

      <PersonalInfo />

      <div className="w-full lg:w-[87%] grid grid-cols-1 lg:grid-cols-5 pt-14 gap-5 px-3 md:px-6 lg:px-0">
        <Education />
        <Skills />
      </div>
      */}

      {/* ========================================================
       *               Work Experience
       ======================================================== */}
      <WorkExperience />

      {/* ========================================================
       *               Certifications & Courses
       ======================================================== */}
      <CertificationsAndCourses />

      {/* ========================================================
       *               Tech Stack Visualization
       ======================================================== */}
      <TechStackVisualization />

      {/* ========================================================
       *               Career Journey Timeline
       ======================================================== */}
      <CareerTimeline />

      {/* ========================================================
       *               Languages
       ======================================================== */}
      <Languages />

      {/* ========================================================
       *               Original Education & Skills (Alternative View)
       ======================================================== */}
      {/* 
      <div className="w-full lg:w-[87%] grid grid-cols-1 lg:grid-cols-5 pt-14 gap-5 px-3 md:px-6 lg:px-0">
        <Education />
        <Skills />
      </div>
      */}

      {/* ========================================================
       *               Contact CTA
       ======================================================== */}
      <ContactCTA />
    </div>
  );
};

export default About;
