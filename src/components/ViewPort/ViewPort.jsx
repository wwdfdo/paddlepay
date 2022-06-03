import React from "react";
import Applestore from "../../images/applestore1.png";
import Googleplay from "../../images/googleplay1.png";
import ridebike from "../../images/ridebicycleupdated.png";

const ViewPort = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-4/5 mx-auto gap-12 items-center pt-28">
      <div className="mt-8 w-5/6 md:w-2/5 text-white flex flex-col gap-8 ">
        <div>
          <h1 className=" text-6xl font-bold font-opensans leading-relaxed">
            Social-Fi & <br /> Game-Fi <br /> DAPP
          </h1>
        </div>
        <div>
          <p className=" text-2xl leading-relaxed font-semibold">
            PedalPay is a futuristic, eco-mobility platform combining worlds of
            Game-Fi and Social-Fi into the most green mode of mobility, cycling.
          </p>
        </div>
        <div className="flex gap-6">
          <button>
            <img className=" w-[160px]" src={Applestore} alt="" />
          </button>
          <button>
            <img className=" w-[160px]" src={Googleplay} alt="" />
          </button>
        </div>
      </div>
      <div className="lg:w-2/3">
        <img src={ridebike} alt="" />
      </div>
    </div>
  );
};

export default ViewPort;
