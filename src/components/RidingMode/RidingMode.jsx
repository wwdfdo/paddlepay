import React from "react";
import { ridingModesArray } from "../../arrays/ridingModeArray";

const RidingMode = () => {
  return (
    <div id="RidingMode" className="pt-24">
      <h2 className="text-white font-rubik font-bold text-center text-[2.5em] pb-16">
        Riding Modes
      </h2>
      <div className="w-4/5 flex lg:flex-row flex-col justify-center gap-8 mx-auto">
        {ridingModesArray.map((mode) => (
          <div className=" text-white rounded-lg w-full p-10 transition ease-in-out delay-150 bg-[#144648] hover:-translate-y-1 hover:scale-105">
            <h3 className="mb-5 font-bold font-rubik text-xl">{mode.title}</h3>
            <p className=" font-semibold font-relaxed font-lato">{mode.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidingMode;
