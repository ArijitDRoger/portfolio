import React from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ onClose }) => {
  // Parent container animation (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each item
      },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }, // reverse order on exit
    },
  };

  // Each menu item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500 },
    },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="h-full flex flex-col p-6 text-[#12a6c7] z-100"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="text-3xl"
          >
            <IoClose />
          </motion.button>
        </div>

        {/* Menu Content */}
        <motion.div
          className="flex flex-col items-center justify-center flex-grow gap-6 text-8xl font-bold uppercase"
          variants={containerVariants}
        >
          <motion.a
            href="#page1"
            variants={itemVariants}
            className="hover:text-yellow-400 transition"
          >
            Home
          </motion.a>
          <motion.a
            href="#page2"
            variants={itemVariants}
            className="hover:text-yellow-400 transition"
          >
            About
          </motion.a>
          <motion.a
            href="#page3"
            variants={itemVariants}
            className="hover:text-yellow-400 transition"
          >
            Projects
          </motion.a>
          <motion.a
            href="#page4"
            variants={itemVariants}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
