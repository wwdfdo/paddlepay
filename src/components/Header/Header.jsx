import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-full h-[100px] fixed z-20 bg-gradient-to-r from-[#06122e] via-black to-[#06122e]">
      <div className="w-4/5 flex justify-between mx-auto pt-[15px]">
        <Logo />
        <div className="flex gap-8 items-center text-base font-semibold text-white">
          <div>Home</div>
          <div>About</div>
          <div>Features</div>
          <div>Dapp</div>
          <div>Team</div>
          <div>Roadmap</div>
          <div className="bg-[#5b7fd7] py-3 px-5 rounded-md">
            <button>NFT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
