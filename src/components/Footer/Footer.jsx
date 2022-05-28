import React from "react";
import Logo from "../../images/updatelogo.png";
import googleplay from "../../images/googleplay.jpg";
import applestore from "../../images/applestore.jpg";
import telegram from "../../images/telegram.png";
import telegramcolor from "../../images/telegram-color.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div id="footer" className="flex justify-between w-5/6 mx-auto  pb-10">
      <div>
        <img className="w-[80px]" src={Logo} alt="" />
        <p className="text-white">
          Copyright © 2021.RBicycle All Rights Reserved.
        </p>
        <div className="flex mt-2">
          <div>
            <img className="w-auto h-[40px] mr-5" src={googleplay} alt="" />
          </div>
          <div>
            <img className="w-auto h-[40px]" src={applestore} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-end">
        <h2 className="text-white text-xl font-semibold">Subscribe Us</h2>
        <div className="bg-blue-600 py-2 px-4">
          <form className="flex items-center" action="">
            <input className="bg-blue-600" type="text" />
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
