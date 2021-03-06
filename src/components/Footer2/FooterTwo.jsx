import React from "react";
import instagram from "../../images/footer-icons/instagram.png";
import facebook from "../../images/footer-icons/facebook.png";
import twitter from "../../images/footer-icons/twitter.png";
import linkedin from "../../images/footer-icons/linkedin.png";
import whatsapp from "../../images/footer-icons/whatsapp.png";
import Logo from "../Header/Logo";
import "./footer.css";

const FooterTwo = () => {
  return (
    <div className="text-white">
      <div className="flex lg:flex-row flex-col w-4/5 lg:justify-between items-center lg:text-left text-center gap-8 text-white mx-auto my-16">
        <div className="flex flex-col">
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Contact
          </h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Useful Links
          </h2>
          <ul>
            <li>What Is Paddlepay?</li>
            <li>The Opportunity</li>
            <li>Team And Advisors</li>
            <li>The Technology</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#51AD6D] font-sans font-semibold mb-3">
            Recent post
          </h2>
          <ul>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div>
            <h2 className="mb-3 text-[#51AD6D] font-sans font-semibold">
              NEWSLETTER
            </h2>
            <form className="flex" action="#">
              <input
                className="border-none py-1 text-black font-semibold outline-0 w-3/5 pl-2"
                type="text"
              />
              <input
                className="bg-[#51AD6D] px-3 py-1  ml-1"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="">
              <a href="">
                <img className="w-[31px] logoclass" src={instagram} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="w-[31px]" src={facebook} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="w-[31px]" src={twitter} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="w-[31px]" src={linkedin} alt="" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="w-[31px]" src={whatsapp} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Logo width={"w-[250px]"} center={"mx-auto"} />
      <h2 className="text-center py-5">
        Copyright ?? 2021.RBicycle All Rights Reserved.
      </h2>
    </div>
  );
};

export default FooterTwo;
