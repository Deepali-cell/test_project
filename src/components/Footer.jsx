import React from "react";
import logo from "../assets/logo.png";
import { FiInstagram } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="text-white border m-10 p-4 rounded-4xl relative">
        <div className="flex justify-between">
          <ul className="flex justify-between items-center gap-6 text-[1.2rem]">
            <li className="">Home</li>
            <li>Features</li>
            <li>FAQs</li>
          </ul>
          <ul className="flex justify-between items-center gap-6 text-[1.5rem]">
            <li>
              <FiInstagram />
            </li>
            <li>
              <IoLogoLinkedin />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
        <div className="absolute -top-8 left-140">
          <img src={logo} alt="" className="w-60 h-40" />
        </div>
      </div>
      <p className="text-white text-center pt-10 pb-4">
        Copyright © 2025 GrieferGames
      </p>
    </>
  );
};

export default Footer;
