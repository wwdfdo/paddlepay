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
        <div>Home</div>
        <div>About</div>
        <div>Features</div>
        <div>Dapp</div>
        <div>Team</div>
        <div>Roadmap</div>
        <div className="bg-[#5b7fd7] py-3 px-5 rounded-md">NFT</div>
      </div>
    </div>
  );
};

export default Header;
