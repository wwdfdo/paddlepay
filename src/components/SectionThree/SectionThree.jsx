import React from "react";
import { earnToBikes } from "../../arrays/bikeToEarnArray";

const SectionThree = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          The Groundbreaking Bike-To-Earn.
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-row-2 text-white gap-8 justify-center">
        {earnToBikes.map((bike) => (
          <div className="flex justify-center bg-[#51bfa52a] py-10 gap-5 rounded-lg">
            <div>
              <img className="w-[50px]" src={bike.img} alt="" />
            </div>
            <div className="w-2/3">
              <h2>{bike.title}</h2>
              <p>{bike.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
