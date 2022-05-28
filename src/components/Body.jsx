import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SectionSeven from "./SectionSeven/SectionSeven";
import SectionSix from "./SectionSix/SectionSix";
import SectionFive from "./SectionFive/SectionFive";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import Timeline from "./Timeline/Timeline";
import BikeSlider from "./Bike Slider/BikeSlider";

const Body = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#06122e] via-black to-[#06122e] font-sansman">
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionSix />
      <BikeSlider />
      <SectionSeven />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Body;
