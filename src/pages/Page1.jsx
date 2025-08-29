import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { transform } from "motion";
import Menu from "../components/Menu";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Page1 = () => {
  const rotateDivRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (left + width / 2);
    const offsetY = e.clientY - (top + height / 2);

    x.set(offsetX * 0.15); // adjust multiplier for strength
    y.set(offsetY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        rotateDivRef.current.getBoundingClientRect().x -
        rotateDivRef.current.getBoundingClientRect().width / 2) /
        30
    );
    setYVal(
      (e.clientY -
        rotateDivRef.current.getBoundingClientRect().y -
        rotateDivRef.current.getBoundingClientRect().height / 5) /
        5
    );

    rotateDivRef.current.style.transform = `rotateX(${-yVal}deg) rotateY(${xVal}deg)`;
  };

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="relative perspective-[800px] h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black py-4 px-3.5 overflow-hidden"
    >
      {/* <div className="menu absolute top-8 right-8 w-1/3 h-[91vh] rounded-2xl bg-black/70 backdrop-blur-md shadow-2xl shadow-gray-900 border border-gray-700">
        <Menu />
      </div> */}

      <div className="h-full w-full flex bg-[url('/images/ag.png')] bg-cover rounded-xl shadow-2xl shadow-gray-900">
        <div
          className="logo relative py-8 px-10 flex "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ width: "200px", height: "200px" }} // 👈 enlarged invisible area
        >
          <motion.h1
            style={{ x: springX, y: springY }}
            className="text-5xl font-bold text-white cursor-none"
          >
            AG.
          </motion.h1>
        </div>
        {/* <Header /> */}
      </div>

      {/* Rotating div */}
      <div
        ref={rotateDivRef}
        className="rotateDiv absolute grid items-center justify-center top-1/3 left-[20.5vh] content p-8 w-[45%] transition-transform duration-200 ease-out"
      >
        <h1 className="text-8xl font-bold text-white capitalize">I am</h1>
        <h1 className="text-5xl font-bold text-white uppercase">
          Frontend developer.
        </h1>
        <h1 className="text-5xl font-bold text-white uppercase">
          Responsiveness is key
        </h1>
        <h1 className="text-2xl font-bold text-red-600 uppercase">
          to a great user experience.
        </h1>
      </div>
    </div>
  );
};

export default Page1;
