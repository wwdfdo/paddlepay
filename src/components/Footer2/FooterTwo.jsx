import React from "react";
import instagram from "../../images/footer-icons/instagram.png";
import facebook from "../../images/footer-icons/facebook.png";
import twitter from "../../images/footer-icons/twitter.png";
import linkedin from "../../images/footer-icons/linkedin.png";
import whatsapp from "../../images/footer-icons/whatsapp.png";
import Logo from "../Header/Logo";

const FooterTwo = () => {
  return (
    <div className="text-white border-t-2 border-white w-[95%] mx-auto">
      <div className="flex w-3/4 justify-between text-white mx-auto my-16">
        <div className="flex flex-col">
          <h2 className="text-[#73f59b] mb-3">Contact</h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#73f59b] mb-3">useful links</h2>
          <ul>
            <li>What Is Paddlepay?</li>
            <li>The Opportunity</li>
            <li>Team And Advisors</li>
            <li>The Technology</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#73f59b] mb-3">Recent post</h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div>
            <h2 className="mb-2 text-[#73f59b] mb-3">NEWSLETTER</h2>
            <form action="#">
              <input className="border-none py-1 text-black" type="text" />
              <input
                className="bg-[#73f59b] px-3 py-1 active:border-none"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="w-[45px]">
              <img src={instagram} alt="" />
            </div>
            <div className="w-[45px]">
              <img src={facebook} alt="" />
            </div>
            <div className="w-[45px]">
              <img src={twitter} alt="" />
            </div>
            <div className="w-[45px]">
              <img src={linkedin} alt="" />
            </div>
            <div className="w-[45px]">
              <img src={whatsapp} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Logo width={"w-[300px]"} center={"mx-auto"} />
      <h2 className="text-center py-5">
        Copyright © 2021.RBicycle All Rights Reserved.
      </h2>
    </div>
  );
};

export default FooterTwo;
