import React, { useEffect, useState, useRef } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children, className, onClick, href, download }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement
  const springX = useSpring(mouseX, { stiffness: 200, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      const radius = 120; // effect radius (smaller = less powerful)

      if (distance < radius) {
        mouseX.set((distanceX / radius) * 20); // max 20px shift
        mouseY.set((distanceY / radius) * 20);
      } else {
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const Component = href ? "a" : "div";

  return (
    <motion.div
      ref={ref}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <Component
        href={href}
        download={download}
        onClick={onClick}
        className={className}
      >
        {children}
      </Component>
    </motion.div>
  );
};

const Header = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 -right-[10px] w-full z-50 p-6 flex items-center justify-end">
      <div className="flex items-center px-7">
        {/* Resume button */}
        {!scrolled && (
          <MagneticButton
            href="/Arijit_Ghosh_Resume.pdf"
            download="Arijit_Ghosh_Resume.pdf"
            className="hover:bg-black px-3 py-2 rounded-full text-white border mr-4 h-[40px] flex items-center justify-center"
          >
            Resume
          </MagneticButton>
        )}

        {/* Menu icon */}
        <MagneticButton
          onClick={onMenuClick}
          className={`cursor-pointer ${
            scrolled ? "bg-white text-black p-2 rounded-full" : "text-white"
          }`}
        >
          <RiMenu3Fill className="text-2xl" />
        </MagneticButton>
      </div>
    </div>
  );
};

export default Header;
