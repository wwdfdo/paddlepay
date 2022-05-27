import React from "react";
import logoTwo from "../../images/logoTwo.png";
import logo from "../../images/logo.png";
import logoThree from "../../images/logoThree.png";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-4/5 flex justify-between mx-auto">
      <Logo />
      <div className="flex gap-8 items-center text-base font-semibold">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#">Features</a>
        </div>
        <div>
          <a href="#">Dapp</a>
        </div>
        <div>
          <a href="#">Team</a>
        </div>
        <div>
          <a href="#">Roadmap</a>
        </div>
        <div className="bg-[#8A6FDF] py-3 px-5 rounded-md">NFT</div>
      </div>
    </div>
  );
};

export default Header;
