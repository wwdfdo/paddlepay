import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { menus } from "../../arrays/menuArray";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

const Header = () => {
  const [navId, setNavId] = useState();

  return (
    <div className="w-full lg:h-[85px] h-[60px] fixed z-20 bg-[#14213d] font-[Fira Sans]">
      <div className="w-4/5 lg:flex justify-between items-center mx-auto pt-[15px]">
        <Logo width={"w-[200px]"} />
        <Navigation menus={menus} navId={navId} setNavId={setNavId} />
        <MobileNav menus={menus} />
      </div>
    </div>
  );
};

export default Header;
