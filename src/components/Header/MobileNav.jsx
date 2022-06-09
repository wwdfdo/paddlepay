import React from "react";
import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ menus }) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <ImMenu
      className="text-[30px] absolute right-[3%] top-2"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgClose
      className="text-[30px] absolute right-[3%] top-2"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <div className="lg:hidden gap-8 items-center text-sm font-semibold flex flex-col ">
        {open ? closeIcon : hamburgerIcon}

        {open &&
          menus.map((menu) => (
            <a
              key={menu.id}
              className={`text-white ${
                menu.id === "button"
                  ? "bg-[#274077] py-3 px-5 rounded-md text-white"
                  : ""
              }`}
              href={menu.link}
              onClick={() => closeMobileMenu()}
            >
              {menu.title}
            </a>
          ))}
      </div>
    </>
  );
};

export default MobileNav;
