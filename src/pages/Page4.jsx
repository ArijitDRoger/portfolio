import React from "react";
import { motion } from "framer-motion";

const skills = ["ReactJS", "Three.js", "Spring Boot", "MySQL", "TailwindCSS"];

const Page4 = () => {
  return (
    <div className="h-[230vh] w-screen flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="h-full w-screen flex items-center justify-center p-15">
        <div className="text-white w-full h-full">
          <div className="p-10 flex flex-col items-center gap-10 ">
            <h1 className="text-5xl font-bold text-[45vh]">Skills</h1>

            {/* Animated Skills */}
            <div className="skills flex flex-col items-center justify-center ">
              {skills.map((skill, index) => (
                <motion.h4
                  key={index}
                  className="text-[25vh] leading-[200px] border-b-1 "
                  initial={{
                    x: index % 2 === 0 ? -300 : 300, // left for even, right for odd
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: index * 0.2, // slight stagger effect
                  }}
                  viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible
                >
                  {skill}
                </motion.h4>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
