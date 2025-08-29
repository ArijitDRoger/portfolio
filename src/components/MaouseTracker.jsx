import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseTracker = () => {
  const [clicks, setClicks] = useState([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleClick = (e) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);

      // Remove ripple after animation
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 600);
    };

    document.body.style.cursor = "none"; // Hide system cursor
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.body.style.cursor = "default"; // Reset on unmount
    };
  }, [x, y]);

  return (
    <>
      {/* Main smooth cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          background:
            "radial-gradient(circle at center, #00eaff 0%, #007bff 100%)",
          boxShadow: "0 0 20px 6px rgba(0, 174, 255, 0.7)",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      ></motion.div>

      {/* Ripple effects on click */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="fixed rounded-full pointer-events-none"
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            left: click.x,
            top: click.y,
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(0, 174, 255, 0.4)",
            border: "2px solid rgba(0, 174, 255, 0.8)",
            transform: "translate(-50%, -50%)",
            zIndex: 9998,
          }}
        />
      ))}
    </>
  );
};

export default MouseTracker;
