import React from "react";
import { BsPinAngleFill } from "react-icons/bs";

const LandingP = () => {
  return (
    <div className="my-40 text-white flex justify-center items-center flex-col">
      <span className="text-[1rem] flex justify-between items-center gap-2">
        Seit 2016 stabit, fair and ahne Kosten <BsPinAngleFill />
      </span>
      <h1 className="text-center text-6xl font-bold">
        Dein GrundStruck, dein <br />
        Entescheidungen, dein Geschiichte
      </h1>
      <div className="flex justify-between items-center my-10 gap-10">
        <button className="border bg-red-600 px-6 py-4 rounded-3xl border-red-600 text-white text-[1rem]">
          JETZI JOINEN
        </button>
        <p className="font-medium text-xl">JOINE UNSERN DISCORD></p>
      </div>
    </div>
  );
};

export default LandingP;
