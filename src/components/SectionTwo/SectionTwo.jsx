import React from "react";
import ridebike from "../../images/ridebicycleupdated.png";
import Aboutinfoshape from "../../images/about-info-shape.png";
import active from "../../images/verified-user.png";
import checked from "../../images/checked.png";
import partner from "../../images/partner.png";
import positive from "../../images/smiling-face.png";

const SectionTwo = () => {
  return (
    <div className="flex w-5/6 mx-auto gap-12 items-center py-32">
      <div className="mt-8 w-1/2">
        <div className="mb-10">
          <h2 className="text-[42px] leading-loose font-bold text-white">
            Social-Fi & Game-Fi <span className="text-[#2a77d7]">DAPP</span>
          </h2>
        </div>
        <div className="border-r-4 border-[#8A6FDF] text-[24px] font-bold relative pl-20">
          <div className="absolute left-0">
            <img src={Aboutinfoshape} alt="" />
          </div>
          <h2 className="mt-10 py-6 pr-16 pl-8 text-white text-xl text-right leading-relaxed">
            PaddlePay is a futuristic, eco-mobility platform combining worlds of
            Game-Fi and Social-Fi into the most green mode of mobility, cycling.
            <br />
            {/* <span className="text-[#2a77d7]">Since 2022</span> */}
          </h2>
        </div>
        <div className="border-r-4 border-[#8A6FDF] mt-10 py-6 pl-20">
          <div className="flex ml-10 mb-8 text-left">
            <div className="w-1/2 flex items-center gap-6">
              <div>
                <img className="w-[50px]" src={active} alt="" />
              </div>
              <div>
                <p className="text-[30px] leading[36px] font-bold text-[#9cdd69]">
                  3,000+
                </p>
                <p className="text-white font-semibold">Active Users</p>
              </div>
            </div>
            <div className="w-1/2 flex items-center gap-6">
              <div>
                <img className="w-[50px]" src={checked} alt="" />
              </div>
              <div>
                <p className=" text-[30px] leading[36px] font-bold text-[#9cdd69]">
                  6,000+
                </p>
                <p className="text-white font-semibold">Tasks Completed</p>
              </div>
            </div>
          </div>
          <div className="flex ml-10">
            <div className="w-1/2 flex items-center gap-6">
              <div>
                <img className="w-[50px]" src={partner} alt="" />
              </div>
              <div>
                <p className=" text-[30px] leading[36px] font-bold text-[#9cdd69]">
                  80+
                </p>
                <p className="text-white font-semibold">Partner</p>
              </div>
            </div>
            <div className="w-1/2 flex items-center gap-6">
              <div>
                <img className="w-[50px]" src={positive} alt="" />
              </div>
              <div>
                <p className=" text-[30px] leading[36px] font-bold text-[#9cdd69]">
                  4,000+
                </p>
                <p className="text-white font-semibold">Positive Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-48">
        <img src={ridebike} alt="" />
      </div>
    </div>
  );
};

export default SectionTwo;
