import React from "react";
import ridebike from "../../images/ridebicycleupdated.png";
import Aboutinfoshape from "../../images/about-info-shape1.png";
import active from "../../images/verified-user.png";
import checked from "../../images/checked.png";
import partner from "../../images/partner.png";
import positive from "../../images/smiling-face.png";

const SectionTwo = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:w-5/6 mx-auto gap-12 items-center pt-20"
      id="home"
    >
      <div className="mt-8 w-5/6 md:w-1/2 ">
        <div className="mb-10">
          <h2 className="lg:text-[42px] text-3xl text-center leading-loose font-bold text-white">
            Social-Fi & Game-Fi <span className="text-[#2a77d7]">DAPP</span>
          </h2>
        </div>
        <div className="border-r-4 border-[#74f59c] text-[24px] font-bold relative pl-20">
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
        <div className="border-r-4 border-[#74f59c] mt-10 py-6 lg:pl-20">
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
                <p className="text-white">Tasks Completed</p>
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
      <div className="lg:w-1/2 lg:mt-48">
        <img src={ridebike} alt="" />
      </div>
    </div>
  );
};

export default SectionTwo;
