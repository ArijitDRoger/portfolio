import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;

    gsap.fromTo(
      el,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // animation starts when footer is 80% into viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Let’s Build Something Amazing Together
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg text-gray-400 mb-8 text-center max-w-xl"
      >
        I’m always open to new opportunities, collaborations, and creative
        projects. Let’s connect!
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex space-x-6 text-2xl"
      >
        <a
          href="https://github.com/ArijitDRoger"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/arijitghosh"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-400 transition"
        >
          <FaTwitter />
        </a>
      </motion.div>

      {/* Divider Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
        className="w-2/3 h-[1px] bg-gray-700 mt-10"
      ></motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
        className="text-sm text-gray-500 mt-6"
      >
        © {new Date().getFullYear()} Arijit Ghosh. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Page6;
