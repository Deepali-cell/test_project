import React from "react";
import javaeditionimg from "../assets/Javaedition.jpg";

const Javaedition = () => {
  return (
    <div className=" px-10 py-10 rounded-xl border w-160 bg-black  text-white my-10 flex justify-center items-center mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold ">Java Edition</h1>
        <ul className="text-[1rem] ">
          <li className="pt-6">Minicraft offnet</li>
          <li className="pt-6">MehresPillar -> Server Hinzufugen</li>
          <li className="pt-6">
            GreferGames.net in ServerAddresses engiben...
          </li>
          <li className="pt-6">Join & loslegen!</li>
        </ul>
        <button className="my-10 border bg-red-600 p-4 rounded-3xl border-red-600 text-white text-xl">
          GESCHENK ABHOLEN
        </button>
      </div>
      <div>
        <img src={javaeditionimg} alt="" className="h-80 w-80" />
      </div>
    </div>
  );
};

export default Javaedition;
