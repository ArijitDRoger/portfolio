import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "eTournament",
    image: "./images/eTournament.png",
    description:
      "A platform for hosting and participating in online tournaments. Built with React, Firebase, and modern UI/UX design.",
    link: "https://etournament.netlify.app",
    color: "#a033ff",
  },
  {
    id: 2,
    title: "whatsCry",
    image: "./images/whatsCry.png",
    description:
      "A real-time chat app with friend requests, avatars, and notifications. Built with React, Firebase, and Bootstrap.",
    link: "https://whatscry.netlify.app",
    color: "#ffcc00",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden px-4">
      {/* Background PROJECTS Title */}
      <motion.h1
        className="absolute text-[20vh] md:text-[25vh] font-bold text-white tracking-widest z-0 opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15, scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        PROJECTS
      </motion.h1>

      {/* Project Showcase */}
      <motion.div
        key={project.id}
        className="relative z-10 flex flex-col md:flex-row w-full md:w-4/5 h-[70vh] rounded-2xl shadow-xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}22, #0b0033)`,
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side: Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.image}
            className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </AnimatePresence>

        {/* Right Side: Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 text-white"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              style={{ color: project.color }}
            >
              {project.title}
            </h2>
            <p className="text-base md:text-lg mb-6">{project.description}</p>
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Visit Project <ExternalLink size={18} />
            </button>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      <div className="absolute bottom-4 flex flex-col items-center gap-4">
        {/* Prev / Next */}
        <div className="flex gap-6">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <ArrowLeft size={18} /> Prev
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-3">
          {projects.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-yellow-400" : "bg-gray-500"
              }`}
              animate={{ scale: idx === currentIndex ? 1.3 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
