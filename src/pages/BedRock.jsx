import React from "react";
import bedrock from "../assets/bedrock.jpeg";

const BedRock = () => {
  return (
    <>
      {" "}
      <div className=" px-10 py-10 rounded-xl border w-160 bg-black  text-white my-10 flex justify-center items-center mx-auto mt-10">
        <div>
          <h1 className="text-2xl font-bold ">Bed Rock</h1>
          <ul className="text-[1rem] ">
            <li className="pt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, odio.
            </li>
            <li className="pt-6">Lorem, ipsum.</li>
            <li className="pt-6">Lorem ipsum dolor sit amet consectetur.</li>
            <li className="pt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
          <button className="my-10 border bg-red-600 p-4 rounded-3xl border-red-600 text-white text-xl">
            GESCHENK ABHOLEN
          </button>
        </div>
        <div>
          <img src={bedrock} alt="" className="h-80 w-160" />
        </div>
      </div>
    </>
  );
};

export default BedRock;
