import React from "react";

import Header from "./Header/Header";
// import SectionSeven from "./SectionSeven/SectionSeven";
import SectionSix from "./SectionSix/SectionSix";
// import SectionThree from "./SectionThree/SectionThree";
// import SectionTwo from "./SectionTwo/SectionTwo";
// import Timeline from "./Timeline/Timeline";
// import SlickSlider from "./SlickSlider/SlickSlider";
// import SectionFour from "./SectionFour/SectionFour";
import FooterTwo from "./Footer2/FooterTwo";
import TimelineRoadMap from "./TimelineRoadMap/TimelineRoadMap";
import ViewPort from "./ViewPort/ViewPort";
import RidingMode from "./RidingMode/RidingMode";
import Overview from "./Overview/Overview";
import CardSlider from "./CardSlider/CardSlider";
import Modes from "./Modes/Modes";
import NeonText from "./NeonText/NeonText";
// import FontBox from "./FontBox/FontBox";

const Body = () => {
  return (
    <div className="w-full bg-[#14213d] text-white font-sans">
      <Header />
      <ViewPort />
      <Overview />
      {/* <SectionTwo /> */}
      {/* <SlickSlider /> */}
      <CardSlider />
      {/* <SectionThree /> */}
      <RidingMode />
      <SectionSix />
      <Modes />
      {/* <FontBox /> */}
      <NeonText />
      <TimelineRoadMap />
      {/* <SectionSeven /> */}
      {/* <Timeline /> */}
      {/* <SectionFour /> */}

      <FooterTwo />
    </div>
  );
};

export default Body;
