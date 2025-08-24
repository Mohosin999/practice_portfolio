import CircleImage from "@/components/ui/circle-image";
import PersonalInfo from "@/components/personal-info";
import Education from "@/components/education";
import Skills from "@/components/skills";

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-28 flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        {/* Content (left on desktop, below on mobile) */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <div className="text_container">
            <h2 className="text-4xl font-bold">About Me</h2>

            <p className="py-4 text-sm lg:text-base text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences. I'm Mohosin Hasan Akash, a frontend
              web developer from Bangladesh. I specialize in building web
              applications using React and Express. My passion is crafting
              user-friendly and visually appealing digital experiences.
            </p>

            <p className="py-4 text-sm lg:text-base text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences. I'm Mohosin Hasan Akash, a frontend
              web developer from Bangladesh. I specialize in building web
              applications using React and Express. My passion is crafting
              user-friendly and visually appealing digital experiences. Hi, I'm
              Mohosin Hasan Akash, a frontend web developer from Bangladesh. I
              specialize in building web applications using React and Express.
              My passion is crafting user-friendly and visually appealing
              digital experiences.
            </p>
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
