import React from "react";
import mobilefive from "../../images/mobile-5.png";

const SectionFour = () => {
  return (
    <div className="flex w-3/4 mx-auto gap-8">
      <div className="bg-slidebg w-1/2 bg-cover bg-no-repeat relative">
        <img className="absolute left-[30%] w-1/3" src={mobilefive} alt="" />
      </div>
      <div className="text-white">
        <p>SPEED UP</p>
        <h2 className="text-6xl ">good morning</h2>
        <p>
          Ride-To-Earn is a health and fitness DAPP. Users can earn by moving
          outdoors with bikes
        </p>
      </div>
    </div>
  );
};

export default SectionFour;
