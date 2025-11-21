import ReactApexChart from "react-apexcharts";

const DonutChart = ({ value, label, color }) => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: [label],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: `${value}%`,
              fontSize: "22px",
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    grid: {
      padding: { bottom: -100 },
    },
    colors: [color],
  };

  return (
    <ReactApexChart
      options={options}
      series={[value]}
      type="donut"
      width={300}
      height={300}
    />
  );
};

export default DonutChart;
