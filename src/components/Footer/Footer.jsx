import React from "react";
import Logo from "../../images/updatelogo.png";
import googleplay from "../../images/googleplay.jpg";
import applestore from "../../images/applestore.jpg";

const Footer = () => {
  return (
    <div id="footer" className="flex justify-between w-5/6 mx-auto">
      <div>
        <img className="w-[80px]" src={Logo} alt="" />
        <p className="text-white">
          Copyright © 2021.RBicycle All Rights Reserved.
        </p>
        <div className="flex gap-3 mt-5">
          <div>
            <img src={googleplay} alt="" />
          </div>
          <div>
            <img src={applestore} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-xl font-semibold">Subscribe Us</h2>
        <div className="bg-blue-600 py-2 px-4">
          <form action="">
            <input className="bg-blue-600" type="text" />
            <button>click</button>
          </form>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
