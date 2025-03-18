import React, { useEffect, memo } from "react";
import { FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = memo(() => (
  <div id="about" className="text-center p-20 lg:mb-8 mb-2 px-[5%] sticky top-[90px]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-6xl mt-8 font-semibold text-transparent bg-clip-text bg-gradient-to-r text-white"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    ></p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          <img
            src="/public/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div
      className="h-auto pb-[5%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-[-200px] sm:mt-[-180px]"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-4 sm:pt-6 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-semibold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-2xl text-md text-transparent bg-clip-text bg-gradient-to-r text-white">
                Hello, I'm
              </span>
              <span
                className="text-5xl text-md block mt-2 text-white"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Naranabil Daffa Iskandar
              </span>
            </h2>

            <p
              className="sm:text-lg lg:text-lg text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0 -mt-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I'm an UGM Electrical Engineering student with expertise in Arduino, ESP, and web development using C++, Python, HTML, CSS, JavaScript, and TypeScript. Experience designing innovative IoT solutions and automation systems as well as responsive web interfaces. Ready to contribute to the development of useful technology.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a
                href="/public/cv.pdf" // ganti dengan path file kamu
                download="CV_Naranabil Daffa.pdf" // nama file saat di-download
                className="w-full lg:w-auto"
              >
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-white text-black font-medium transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:bg-black hover:text-white hover:border hover:border-white  animate-bounce-slow"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);