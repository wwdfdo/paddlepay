import React from "react";
import overviewImg from "../../images/nftv8.png";
import "./Overview.css";

const Overview = () => {
  return (
    <div id="Overview" className="pt-20">
      <h2 className="text-[2.5em] font-rubik font-bold text-center text-white pb-20">
        Overview
      </h2>
      <div className="flex lg:flex-row flex-col w-4/5 justify-between mx-auto items-center gap-20">
        <img className="lg:w-1/2" src={overviewImg} alt="" />
        <div className="box flex flex-col w-1/2 h-[400px] relative justify-center items-center  overflow-hidden rounded-[16px]">
          <h2 className="text=[#fff] z-10 text-2xl font-bold mb-6 font-rubik">
            EXPERIENCE JUST FOR RIDER OFFER
          </h2>
          <p className="text=[#fff] z-10 leading-loose text-semibold text-lg">
            Ride2Earn is a tokenized sports application based on web3. Users can
            purchase NFTs in the form of virtual bicycles which are linked to
            real riding activities. By riding around, users will earn our in-app
            token, which can either be used in-app or cashed out for profit. Our
            goal is to push our community toward a healthier lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
