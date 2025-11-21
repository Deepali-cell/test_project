import AiSuggestionBox from "./AiSuggestionBox";
import GridCharts from "./GridCharts";

const MiddleChartArea = () => {
  return (
    <div className="text-white border m-20 rounded-4xl p-4 bg-black ">
      <div>
        <h2>Resource Efficiency</h2>
        <h1>87% Cost Optimization</h1>
      </div>
      <div>
        <GridCharts />
      </div>
      <div>
        <AiSuggestionBox />
      </div>
    </div>
  );
};

export default MiddleChartArea;
