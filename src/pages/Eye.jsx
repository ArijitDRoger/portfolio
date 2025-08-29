import React, { useEffect, useState, useRef } from "react";

const Eye = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showProjects, setShowProjects] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for Projects text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjects(true);
        }
      },
      { threshold: 0.7 } // visible when 70% is in view
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  // Pupil movement
  const getPupilStyle = (eyeX, eyeY) => {
    const dx = mouse.x - eyeX;
    const dy = mouse.y - eyeY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 60);

    return {
      transform: `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`,
    };
  };

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Face */}
      <div className="absolute flex h-[800px] w-[800px] bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-900 rounded-full items-center justify-center">
        {/* Eyes */}
        <div className="absolute top-[25%] flex items-center gap-9">
          {/* Left Eye */}
          <div className="eye w-[40vh] h-[40vh] bg-gradient-to-b from-white via-gray-200 to-gray-400 rounded-full flex items-center justify-center relative">
            <div
              className="pupil w-[15vh] h-[15vh] bg-black rounded-full flex items-center justify-center transition-transform duration-0"
              style={getPupilStyle(
                window.innerWidth / 2 - 100,
                window.innerHeight / 2 - 100
              )}
            >
              <div className="reflection w-[5vh] h-[5vh] bg-white rounded-full absolute top-[20%] left-[20%] opacity-70"></div>
            </div>
          </div>

          {/* Right Eye */}
          <div className="eye w-[40vh] h-[40vh] bg-gradient-to-b from-white via-gray-200 to-gray-400 rounded-full flex items-center justify-center relative">
            <div
              className="pupil w-[15vh] h-[15vh] bg-black rounded-full flex items-center justify-center transition-transform duration-0"
              style={getPupilStyle(
                window.innerWidth / 2 + 100,
                window.innerHeight / 2 - 100
              )}
            >
              <div className="reflection w-[5vh] h-[5vh] bg-white rounded-full absolute top-[20%] left-[20%] opacity-70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hands */}
      <div className="absolute flex items-center justify-between w-full h-1/2">
        <div className="hand z-60 w-[60vh] h-[45vh] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-900 rounded-full"></div>
        <div className="hand z-60 w-[60vh] h-[45vh] bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-900 rounded-full"></div>
      </div>

      {/* Bottom halves */}
      <div className="w-full h-1/2 bg-gradient-to-b from-black via-gray-900 to-gray-900"></div>
      <div
        ref={projectRef}
        className="projects z-10 w-full h-1/2 bg-black flex items-center justify-center text-white text-[30vh] font-bold uppercase tracking-tighter"
      >
        <h1
          className={`transition-all duration-1000 ${
            showProjects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          Projects
        </h1>
      </div>
    </div>
  );
};

export default Eye;
