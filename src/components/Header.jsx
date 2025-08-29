import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Header = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Example: after 100px scroll we change header
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 -right-[10px] w-full z-50 p-6 flex items-center justify-end">
      <div className="flex items-center px-7">
        {/* Hire Me button visible only before scrolling past Page1 */}
        {!scrolled && (
          <motion.a
            href="/Arijit_Ghosh_Resume.pdf"
            download="Arijit_Ghosh_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-black px-3 py-2 rounded-full text-white border mr-4 h-[40px]"
          >
            Resume
          </motion.a>
        )}

        {/* Menu icon (changes style after Page1) */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onMenuClick}
          className={`cursor-pointer ${
            scrolled ? "bg-white text-black p-2 rounded-full" : "text-white"
          }`}
        >
          <RiMenu3Fill className="text-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
