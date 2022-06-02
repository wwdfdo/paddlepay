import React from "react";
import { earnToBikes } from "../../arrays/bikeToEarnArray";

const SectionThree = () => {
  return (
    <div id="Features" className="w-3/4 mx-auto lg:pt-28 pt-10">
      <div>
        <h2 className="lg:text-[3em] text-[1.875em] font-bold text-center text-white lg:mb-16">
          The Groundbreaking Bike-To-Earn.
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:grid-row-2  text-white lg:gap-8 justify-center">
        {earnToBikes.map((bike) => (
          <div
            key={bike.title}
            className="flex justify-center bg-[#51bfa52a] py-10 gap-5 rounded-lg mt-8"
          >
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
