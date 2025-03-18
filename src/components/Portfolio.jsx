import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Code } from "lucide-react";
import "aos/dist/aos.css";

// Komponen TabPanel
function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
}

// Komponen HorizontalTabsPortfolio
export function HorizontalTabsPortfolio() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full bg-black text-white mt-0 p-2">
      <div className="flex flex-wrap justify-center gap-2 w-full px-2">
  <button
    onClick={() => handleChange(0)}
    className={`flex-1 min-w-[120px] text-sm md:text-lg font-medium border border-white rounded-3xl px-4 py-2 transition duration-300 hover:-translate-y-2 ${
      value === 0 ? 'text-[#fff]' : 'text-white'
    }`}
  >
    <Briefcase className="inline-block mr-1" /> Organization
  </button>
  <button
    onClick={() => handleChange(1)}
    className={`flex-1 min-w-[120px] text-sm md:text-lg font-medium border border-white rounded-3xl px-4 py-2 transition duration-300 hover:-translate-y-2 ${
      value === 1 ? 'text-[#fff]' : 'text-white'
    }`}
  >
    <Award className="inline-block mr-1" /> Certificate
  </button>
  <button
    onClick={() => handleChange(2)}
    className={`flex-1 min-w-[120px] text-sm md:text-lg font-medium border border-white rounded-3xl px-4 py-2 transition duration-300 hover:-translate-y-2 ${
      value === 2 ? 'text-[#fff]' : 'text-white'
    }`}
  >
    <Code className="inline-block mr-1" /> Project
  </button>
</div>
      <TabPanel value={value} index={0}>
  <h2 className="text-xl font-semibold mb-4"></h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { 
        title: "OASE Staff of BEM KMFT UGM",
        img: "/public/bem.jpg",
        desc: "Organizing sports and art events, accommodating students' interests and talents, and supporting BEM activities in the field of sportsmanship and creativity.",
        animation: "fade-up-right"
      },
      {
        title: "Mikat Staff of KMTETI FT UGM",
        img: "/public/kmteti.jpg",
        desc: "Develop and facilitate activities that support the development of students' interests and talents in the fields of academics, arts, and sports.",
        animation: "fade-up"
      },
    ].map((exp, index) => (
      <div key={index}
        className={`bg-black border border-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300`}
        data-aos={exp.animation}
        data-aos-duration="1200"
      >
        <img src={exp.img} alt={exp.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>
          <p className="text-gray-400 text-sm">{exp.desc}</p>
        </div>
      </div>
    ))}
  </div>
</TabPanel>

<TabPanel value={value} index={1}>
  <h2 className="text-xl font-semibold mb-4"></h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { 
        title: "Conditional IF-Else MS Excel",
        img: "/public/sertif1.jpg",
        desc: "MS Excel's Conditional If-Else certification proves the ability to use IF logic for automated data analysis.",
        animation: "fade-up-right"
      },
      {
        title: "VLOOKUP & HLOOKUP MS Excel",
        img: "/public/sertif2.jpg",
        desc: "The VLOOKUP and HLOOKUP MS Excel certifications prove the ability to search data vertically and horizontally efficiently.",
        animation: "fade-up"
      },
    ].map((exp, index) => (
      <div key={index}
        className={`bg-black border border-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300`}
        data-aos={exp.animation}
        data-aos-duration="1200"
      >
        <img src={exp.img} alt={exp.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>
          <p className="text-gray-400 text-sm">{exp.desc}</p>
        </div>
      </div>
    ))}
  </div>
</TabPanel>

<TabPanel value={value} index={2}>
  <h2 className="text-xl font-semibold mb-4"></h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      
    ].map((project, index) => (
      <div key={index} className="bg-black border border-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
        <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
</TabPanel>
    </div>
  );
}

// Komponen ScrollReveal
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

// Komponen Portfolio
const Portfolio = () => {
  const portfolioData = []; // Data proyek yang dihapus

  return (
    <div
      id="portfolio"
      className="flex flex-col min-h-screen w-full text-center items-center justify-center mt-32 gap-4 p-5 md:px-5 md:py-28 md:mt-20"
      style={{ scrollMarginTop: window.innerWidth < 768 ? "91px" : "1px" }}
    >
        <h1
        className="text-center text-4xl font-semibold mb-2 text-white md:text-6xl"
        data-aos="fade-up"
        data-aos-duration="600"
        >
          My Portfolio
        </h1>
        <p
        className="text-center justify-center mb-0 mt-0 max-w-[600px] font-base md:text-lg text-pretty text-sm text-gray-400"
        data-aos="fade-up"
        data-aos-duration="800"
        >My portfolio reflects the organization's experience, certification achievements, and the various projects I have worked on.</p>
      

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {portfolioData.map((project, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <HorizontalTabsPortfolio />
    </div>
  );
};

export default Portfolio;