import React from "react";
import mode1 from "../../images/bicycle.svg";
import mode2 from "../../images/trail.svg";
import mode3 from "../../images/trail.svg";
import "./Modes.css";
import { FaRunning } from "react-icons/fa";

const Modes = () => {
  return (
    // <div className="flex w-5/6 justify-center gap-4 mx-auto mt-20">
    //   <div className="w-1/3 text-center border-4 border-white py-40 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
    //     <FaRunning className="neon" />
    //     <p className="neon">Solo modes running/walking/biking</p>
    //   </div>
    //   <div className="w-1/3 text-center border-4 border-white py-40">
    //     <img className="mx-auto" src={mode2} alt="" />
    //     <p>Solo modes running/walking/biking</p>
    //   </div>
    //   <div className="w-1/3 text-center border-4 border-white py-40">
    //     <img className="mx-auto" src={mode3} alt="" />
    //     <p>Solo modes running/walking/biking</p>
    //   </div>
    // </div>

    <div className="flex w-5/6 mx-auto">
      <div class="ecosystem-item px-[10px] w-1/3 mx-auto my-[50px] ">
        <div class="ecosystem-content border-[4px] border-[#ffffff] shadow-[0px 4px 30px 3px #ffffff] pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <img
            className="mb-[1.5625vw] max-h-[7.510416666666667vw] relative mx-auto"
            src={mode1}
            alt=""
          />
          <p>
            Solo modes running/
            <br />
            walking/biking
          </p>
        </div>
      </div>
      <div class="ecosystem-item px-[10px] w-1/3 mx-auto my-[50px] ">
        <div class="ecosystem-content border-[4px] border-[#ffffff] shadow-[0px 4px 30px 3px #ffffff] pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <img
            className="mb-[1.5625vw] max-h-[7.510416666666667vw] relative mx-auto"
            src={mode1}
            alt=""
          />
          <p>
            Solo modes running/
            <br />
            walking/biking
          </p>
        </div>
      </div>
      <div class="ecosystem-item px-[10px] w-1/3 mx-auto my-[50px] ">
        <div class="ecosystem-content border-[4px] border-[#ffffff] shadow-[0px 4px 30px 3px #ffffff] pt-[54px] px-[22px] pb-[60px] relative h-[100%] text-center ">
          <img
            className="mb-[1.5625vw] max-h-[7.510416666666667vw] relative mx-auto"
            src={mode1}
            alt=""
          />
          <p>
            Solo modes running/
            <br />
            walking/biking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modes;
