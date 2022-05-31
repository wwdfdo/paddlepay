import React from "react";
// import Logo from "../../images/updatelogo.png";
import googleplay from "../../images/googleplay1.png";
import applestore from "../../images/applestore1.png";
import telegram from "../../images/telegram.png";
import telegramcolor from "../../images/telegram-color.png";
import twitter from "../../images/twitter.png";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <div id="footer" className="flex justify-between w-5/6 mx-auto  pb-10">
      <div>
        <Logo width={"w-[150px]"} />
        <p className="text-white pt-6">
          Copyright © 2021.RBicycle All Rights Reserved.
        </p>
        <div className="flex mt-2">
          <div className="relative  mr-5">
            <img className="w-auto h-[40px]" src={googleplay} alt="" />
            <div className="w-full bg-white opacity-50 absolute top-0 h-full rounded-lg  cursor-pointer"></div>
          </div>
          <div className="relative">
            <img className="w-auto h-[40px]" src={applestore} alt="" />
            <div className="w-full bg-white opacity-50 absolute top-0 h-full rounded-lg cursor-pointer"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-end">
        <h2 className="text-white text-xl font-semibold">Subscribe Us</h2>
        <div className="bg-blue-600 py-2 px-4">
          <form className="flex items-center" action="">
            <input
              className="bg-blue-600 focus:outline-none text-white"
              type="text"
            />
            <button>
              <img className="w-[24px] ml-2" src={telegram} alt="" />
            </button>
          </form>
        </div>

        <div className="flex gap-4">
          <div>
            <img className="w-[30px]" src={telegramcolor} alt="" />
          </div>
          <div>
            <img className="w-[30px]" src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
