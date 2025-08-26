import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      wordsRef.current,
      { rotateX: 70 },
      {
        rotateX: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.3, // makes them animate one after another
        ease: "power2.Out",
        scrollTrigger: {
          // markers: true,
          trigger: wordsRef.current[0],
          start: "top 100%", // when top of first word hits 100% viewport
          end: "bottom -60%",
          toggleActions: "play none none reverse",
          scrub: 3,
        },
      }
    );
  }, []);

  const words = ["Turning", "ideas", "into", "interactive", "realities"];

  return (
    <div className="items-center justify-center h-[180vh] w-full bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="flex items-center justify-center h-16 w-full">
        <p>&copy; 2025 Arijit Ghosh. All rights reserved.</p>
      </div>

      <div className="flex flex-col items-center justify-center p-5 w-full perspective-[3000px]">
        {words.map((word, i) => (
          <div
            key={i}
            ref={(el) => (wordsRef.current[i] = el)}
            className="uppercase leading-[33vh] text-[40vh] text-white tracking-tighter font-bold origin-[100%_100%]"
          >
            <h1>{word}</h1>
          </div>
        ))}
      </div>

      <div className="line w-5 h-1 border-1 border-black z-10 absolute bottom-[10vh]"></div>
    </div>
  );
};

export default Page2;
