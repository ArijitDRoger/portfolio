import React, { useRef } from "react";

const Page5 = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const mouseMoving = (e) => {
    const rotateBox = (ref) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const xVal = (e.clientX - (rect.x + rect.width / 2)) / 30;
      const yVal = (e.clientY - (rect.y + rect.height / 2)) / 30;
      ref.current.style.transform = `rotateX(${-yVal}deg) rotateY(${xVal}deg)`;
    };

    rotateBox(leftRef);
    rotateBox(rightRef);
  };

  return (
    <div
      className="relative w-screen h-screen bg-black overflow-hidden perspective-[1000px]"
      onMouseMove={mouseMoving}
    >
      {/* Background Video */}
      <div className="container h-full rounded-2xl">
        <video
          src="./earth.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full rounded-2xl object-fit"
        ></video>
      </div>

      {/* Left Top Box */}
      <div
        ref={leftRef}
        className="leftTop text flex flex-col items-center justify-center absolute top-[8%] left-[10vh] h-[40vh] w-[40vh] border border-white rounded-xl transition-transform duration-100 ease-out"
      >
        <h2 className="text-3xl font-bold text-white uppercase">
          the Universe
        </h2>
        <h2 className="text-3xl font-bold text-white uppercase">is so big</h2>
        <h2 className="text-3xl font-bold text-white uppercase">to explore</h2>
      </div>

      {/* Right Bottom Box */}
      <div
        ref={rightRef}
        className="rightBottom text flex flex-col items-center justify-center absolute bottom-[8%] right-[10vh] h-[30vh] w-[80vh] border border-white rounded-xl scale-90 transition-transform duration-100 ease-out "
      >
        <h2 className="text-2xl font-bold text-white uppercase">
          And your journey has just begun
        </h2>
        <h2 className="text-2xl font-bold text-white uppercase">
          Start exploring today
        </h2>
        <h2 className="text-2xl font-bold text-white uppercase">
          The future belongs to the curious
        </h2>
      </div>
    </div>
  );
};

export default Page5;
