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
       *               Work Experience
       ======================================================== */}
      <WorkExperience />

      {/* ========================================================
        *               Tech Stack Visualization
        ======================================================== */}
      <TechStackVisualization />

      {/* ========================================================
       *               Certifications & Courses
       ======================================================== */}
      <CertificationsAndCourses />

      {/* ========================================================
       *               Career Journey Timeline
       ======================================================== */}
      {/* <CareerTimeline /> */}

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
      {/* <ContactCTA /> */}
    </div>
  );
};

export default About;
