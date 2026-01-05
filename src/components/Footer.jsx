import React from "react";
import DecorativeGradients from "./DecorativeGradients";
import Logo from "../assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-[#141619] font-[Inter] text-[#BCBCBC] border-t border-white/25 flex flex-col px-4 sm:px-10 pt-14 sm:pb-16 items-center lg:px-40 lg:pt-24 lg:pb-16">

      {/* Top Section */}
      <div className="Top w-full flex justify-center sm:justify-between items-center gap-10 sm:gap-0">
        
        <div className="TopLeft flex flex-col items-center justify-center gap-3">
          <h3 className="text-white text-base font-normal uppercase leading-6 whitespace-nowrap">
            Gravity Team
          </h3>
          <h4 className="font-normal leading-5">About Us</h4>
          <h4 className="font-normal leading-5">Work with Us</h4>
        </div>

        <div className="TopRight">
          <img src={Logo} alt="Gravity Team Logo" className="select-none" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="Bottom w-full flex flex-col sm:flex-row justify-between items-center py-10 sm:py-0 gap-4 md:gap-10 whitespace-nowrap">

        <div className="BottomLeft">
          <h4 className="font-normal leading-5 pt-6 md:pt-14">
            Terms of Use & Privacy Policy
          </h4>
        </div>

        <div className="BottomRight">
          <h4 className="font-normal leading-5 pt-6 md:pt-14">
            ©2022 Gravity Team. All Rights Reserved
          </h4>
        </div>
      </div>

      <DecorativeGradients />
    </footer>
  );
};

export default Footer;
