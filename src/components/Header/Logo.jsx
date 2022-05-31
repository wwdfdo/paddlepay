import React from "react";
import newlogo from "../../images/paddle-logo3.png";

const Logo = ({ width }) => {
  return (
    <div className={`${width}`}>
      {/* <img src={logo} alt="lOGO" /> */}
      <img src={newlogo} alt="Paddle logo" />
      {/* <img src={logoTwo} alt="lOGOTWO" /> */}
    </div>
  );
};

export default Logo;
