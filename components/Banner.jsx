"use client";

const Banner = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-14 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner-img.jpg')" }}
      ></div>

      {/* Overlay with color and opacity */}
      <div className="absolute inset-0 bg-[#007A3F] opacity-95"></div>

      {/* Content */}
      <div className="relative w-full py-14 lg:py-20 flex flex-col items-center justify-center gap-4">
        <h2 className="w-full lg:w-[87%] text-2xl lg:text-4xl font-semibold text-white text-center leading-[1.3] px-3 md:px-6 lg:px-0">
          Exploring <span className="text-[#ffbb01]">AI-Powered</span> Web
          Development
        </h2>
      </div>
    </div>
  );
};

export default Banner;
