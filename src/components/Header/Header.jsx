import React from "react";
import Logo from "./Logo";
import { useState } from "react";
import { menus } from "../../arrays/menuArray";

const Header = () => {
  const [navId, setNavId] = useState();

  return (
    <div className="w-full h-[85px] fixed z-20 bg-[#14213d] font-[Fira Sans]">
      <div className="w-4/5 flex justify-between items-center mx-auto pt-[15px]">
        <Logo width={"w-[200px]"} />
        <div className="flex gap-8 items-center text-sm font-semibold ">
          {menus.map((menu) => (
            <a
              key={menu.id}
              className={`${
                navId === menu.id ? "text-[#73f59b]" : "text-white"
              } ${
                menu.id === "button"
                  ? "bg-[#274077] py-3 px-5 rounded-md text-white"
                  : ""
              }`}
              onClick={() => setNavId(menu.id)}
              href={menu.link}
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
