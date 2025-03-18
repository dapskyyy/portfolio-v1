import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-32 py-4 bg-black/70 text-gray-300 fixed top-0 z-50 max-w-screen-2xl mx-auto border-b border-b-gray-600 backdrop-blur">
      <a
        href="#home"
        className="text-white bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Daffa.
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        {['home', 'about', 'portfolio', 'contact'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="text-lg cursor-pointer opacity-70 transition-all duration-300 border-b-2 border-transparent hover:opacity-100 hover:border-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden cursor-pointer z-50" onClick={menuOpen}>
        <div
          className={`w-8 h-1 bg-white mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          style={{ borderRadius: "4px" }}
        ></div>
        <div
          className={`w-8 h-1 bg-white mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
          style={{ borderRadius: "4px" }}
        ></div>
        <div
          className={`w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          style={{ borderRadius: "4px" }}
        ></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-black/90 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {['home', 'about', 'portfolio', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-2xl text-white cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            onClick={closeMenu}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
