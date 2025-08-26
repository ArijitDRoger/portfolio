import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Eye from "./pages/Eye";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="app bg-gray-100 overflow-x-hidden">
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
