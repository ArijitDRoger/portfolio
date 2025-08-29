// App.jsx
import React, { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Eye from "./pages/Eye";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import MouseTracker from "./components/MaouseTracker";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFullHeader, setShowFullHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past first viewport height
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowFullHeader(false);
      } else {
        setShowFullHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app relative bg-gray-100 overflow-x-hidden">
      <MouseTracker />
      <ScrollToTop />
      {/* Sticky Header */}
      <Header
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        showFullHeader={showFullHeader}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="menu fixed top-10 right-8 w-1/3 h-[85vh] rounded-2xl 
                       bg-black/70 backdrop-blur-md shadow-2xl shadow-gray-900 
                       border border-gray-700 z-50"
          >
            <Menu onClose={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <Page1 />
      <Page2 />
      <Eye />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
};

export default App;
