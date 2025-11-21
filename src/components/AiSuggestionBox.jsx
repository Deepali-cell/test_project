import React from "react";
import ai from "../assets/ai.png";

const AiSuggestionBox = () => {
  return (
    <div className="flex justify-between items-center border border-purple-900 bg-black rounded-xl px-4">
      <div className="flex justify-between items-center">
        <img src={ai} alt="ai" className="h-20 w-20" />
        <div>
          <h3 className="text-xl font-bold">AI Suggestion</h3>
          <p className="font-sm">
            Switch 3 models from GPU to CPU deployment to save $240/month
          </p>
        </div>
      </div>
      <div>
        <button className="bg-blue-950 p-2 rounded-xl cursor">
          Apply Suggestion
        </button>
      </div>
    </div>
  );
};

export default AiSuggestionBox;
