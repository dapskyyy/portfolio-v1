import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    const texts = ["Web Developer Enthusiast", "Microcontroller Enthusiast"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 200;
    const deletingSpeed = 100;

    useEffect(() => {
        AOS.init();

        const handleTyping = () => {
            const currentText = texts[index];
            if (isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(currentText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearInterval(typingInterval);
    }, [displayText, isDeleting, index]);

    return (
        <div id="home" className="bg-black text-white flex justify-center items-center h-screen px-8">
            <section className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl">
                {/* Bagian Kiri */}
                <div className="text-center md:text-left max-w-md" data-aos="fade-right" data-aos-duration="600">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
                        Hi! I'm <span className="text-white">Daffa</span>.
                    </h1>
                    <h2 className="text-lg md:text-2xl font-medium leading-tight h-[32px]" data-aos="fade-right" data-aos-duration="800">
  <span className="text-white">
    {displayText}
    <span className="blinking-cursor">|</span>
  </span>
</h2>

                    <p className="text-lg md:text-xl mt-2 text-gray-300" data-aos="fade-right" data-aos-duration="1000">
                        Undergraduate Electrical Engineering Student at Gadjah Mada University.
                    </p>

                    {/* Button */}
                    <a href="#contact">
                        <button className="mt-5 bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-black hover:text-white hover:border hover:border-white transition-transform transform hover:scale-105" data-aos="fade-right" data-aos-duration="1200">
                            Contact Me →
                        </button>
                    </a>

                    {/* Social Media */}
                    <div className="flex gap-5 mt-6 text-2xl justify-center md:justify-start" data-aos="fade-right" data-aos-duration="1400">
                        <a href="https://instagram.com/naradaffa_" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com/in/naradaffa" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/dapskyyy" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                            <FaGithub />
                        </a>
                        <a href="https://tiktok.com/@dapsky.id" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                            <FaTiktok />
                        </a>
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="relative w-60 h-60 md:w-96 md:h-96 flex justify-center md:justify-end" data-aos="fade-left" data-aos-duration="1000">
                    <img src="/3d4.png" alt="3D Developer Illustration" className="w-full animate-float" />
                </div>
            </section>

            {/* Animasi Float dan Cursor */}
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-20px); }
                        100% { transform: translateY(0); }
                    }

                    .animate-float {
                        animation: float 3s ease-in-out infinite;
                    }

                    .blinking-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #fff;
  animation: blink 1s steps(2, start) infinite;
  vertical-align: text-bottom; /* Pastikan sejajar dengan teks */
  margin-left: 2px;
  position: relative;
}


                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `}
            </style>
        </div>
    );
};

export default HeroSection;