import React from "react";
import { dummyChartData } from "../lib/data";
import DonutChart from "./DonutChart";

const GridCharts = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-4 gap-6">
        {dummyChartData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center  shadow-md rounded-xl p-4"
          >
            <DonutChart
              value={item.optimization}
              label={item.name}
              color={item.color}
            />
            <p className="text-center font-semibold text-white capitalize mt-2 mr-20 ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridCharts;
