import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="text-white border m-10 p-4 rounded-4xl relative" id="nav">
      <div className="flex justify-between sm-invisible" id="navoption">
        <ul className="flex justify-between items-center gap-6 text-[1.2rem]">
          <li className="">Home</li>
          <li>Features</li>
          <li>FAQs</li>
        </ul>
        <button className="border bg-red-600 p-4 rounded-3xl border-red-600 text-white text-xl">
          GESCHENK ABHOLEN
        </button>
      </div>
      <div className="absolute -top-8 left-140">
        <img src={logo} alt="" className="w-60 h-40" />
      </div>
    </div>
  );
};

export default Navbar;
