import React from "react";
import Header from "./Header/Header";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";

const Body = () => {
  return (
    <div className="w-full bg-[#070d13]">
      <Header />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Body;
