import React from "react";
import ridebike from "../../images/paddlepay-bike.jpeg";
import Aboutinfoshape from "../../images/about-info-shape.png";

const SectionTwo = () => {
  return (
    <div className="flex w-5/6 mx-auto gap-12 items-center">
      <div className="w-1/2 mt-20">
        <img src={ridebike} alt="" />
      </div>
      <div className="mt-16">
        <div className="mb-10">
          <h2 className="text-[42px] leading-loose font-bold">
            Social-Fi & Game-Fi <span className="text-[#2a77d7]">DAPP</span>
          </h2>
        </div>
        <div className="border-l-4 border-[#8A6FDF] text-[24px] font-bold relative">
          <div className="absolute right-0">
            <img src={Aboutinfoshape} alt="" />
          </div>
          <h2 className="ml-10 mt-10 py-8">
            Revolutionary Ride-To-Earn
            <br />
            <span className="text-[#2a77d7]">Since 2022</span>
          </h2>
        </div>
        <div className="border-l-4 border-[#8A6FDF] mt-10 py-6">
          <div className="flex ml-10 mb-8 items-center">
            <div className="w-1/2">
              <p className="text-[30px] leading[36px] font-bold text-[#fcbb29]">
                3,000+
              </p>
              <p>Active Users</p>
            </div>
            <div className="w-1/2">
              <p className=" text-[30px] leading[36px] font-bold text-[#ac72c9]">
                6,000+
              </p>
              <p>Tasks Completed</p>
            </div>
          </div>
          <div className="flex ml-10">
            <div className="w-1/2">
              <p className=" text-[30px] leading[36px] font-bold text-[#83d840]">
                80+
              </p>
              <p>Partner</p>
            </div>
            <div className="w-1/2">
              <p className=" text-[30px] leading[36px] font-bold text-[#2a77d7]">
                4,000+
              </p>
              <p>Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
