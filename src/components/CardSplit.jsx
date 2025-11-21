import React from "react";
import { Link } from "react-router-dom";

const CardSplit = () => {
  return (
    <div className="flex justify-center items-center mt-20 ">
      <div className="border bg-white inline rounded-xl px-8 py-4 flex gap-4">
        <Link
          to="?codesplit=1"
          className="border bg-red-500 py-2 px-4 rounded-full text-black"
        >
          Java Edition
        </Link>

        <Link to="?codesplit=2" className="py-2 px-4 rounded-full text-black">
          BedRock
        </Link>
      </div>
    </div>
  );
};

export default CardSplit;
