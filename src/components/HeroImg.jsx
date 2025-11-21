import React from "react";
import hero from "../assets/hero.png";

const HeroImg = () => {
  return (
    <>
      <div
        className="h-full w-full  bg-cover bg-center fixed top-0 left-0 -z-10"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
    </>
  );
};

export default HeroImg;
