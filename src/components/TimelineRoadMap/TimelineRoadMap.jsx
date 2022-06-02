import React from "react";
import timelinebg from "../../images/timelinebg.png";

const TimelineRoadMap = () => {
  return (
    <div id="Roadmap" className="pb-10 pt-24">
      <h2 className="text-white font-bold lg:text-[3em] text-6xl text-center">
        Road Map
      </h2>
      <div className="bg-roadmapbg bg-cover bg-no-repeat mx-auto pt-64 pb-20">
        <img className="w-5/6 mx-auto" src={timelinebg} alt="" />
      </div>
    </div>
  );
};

export default TimelineRoadMap;
