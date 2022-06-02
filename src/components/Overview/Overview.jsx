import React from "react";
import overviewImg from "../../images/overviewimg.png";

const Overview = () => {
  return (
    <div id="Overview" className="pt-20">
      <h2 className="lg:text-[2.5em] font-rubik text-[1.875em] font-bold text-center text-white lg:mb-16">
        Overview
      </h2>
      <div className="flex w-4/5 justify-between mx-auto items-center gap-20">
        <img className="w-1/2 h-[500px]" src={overviewImg} alt="" />
        <div className="w-1/2 text-white bg-[#144648ed] py-10 px-10 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-rubik">
              EXPERIENCE JUST FOR RIDER OFFER
            </h3>
          </div>
          <div>
            <p className=" leading-loose text-semibold text-lg">
              Ride2Earn is a tokenized sports application based on web3. Users
              can purchase NFTs in the form of virtual bicycles which are linked
              to real riding activities. By riding around, users will earn our
              in-app token, which can either be used in-app or cashed out for
              profit. Our goal is to push our community toward a healthier
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
