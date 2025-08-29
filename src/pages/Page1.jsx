import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { transform } from "motion";

const Page1 = () => {
  const rotateDivRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

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
      <div className="h-full w-full flex bg-[url('/images/ag.png')] bg-cover rounded-xl shadow-2xl shadow-gray-900">
        <div className="logo py-8 px-10">
          <h1 className="text-5xl font-bold text-white shadow-black-500 shadow-2xl">
            AG.
          </h1>
        </div>
        <Header />
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
