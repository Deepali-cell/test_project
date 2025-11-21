import React from "react";
import aircraft from "../assets/aircraft.png";
import { cardData } from "../lib/data3";

const ThirdCards = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row justify-between items-center gap-10 text-white py-10">
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        {cardData.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex gap-4 items-start p-4 bg-[#1a1a1a] rounded-xl shadow-md mx-10"
            >
              <Icon className="text-4xl text-blue-500" />
              <div>
                <h1 className="text-xl font-semibold mb-1">{item.title}</h1>
                <p className="text-gray-300 leading-tight">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:w-1/2">
        <img
          src={aircraft}
          alt="aircraft"
          className="w-[350px] md:w-[450px] drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default ThirdCards;
