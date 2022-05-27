import React from "react";
import Header from "./Header/Header";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";

const Body = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#06122e] to-[#0b017a]">
      <Header />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Body;
