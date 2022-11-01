import React from "react";
import Chart from "react-apexcharts";
function BarChartApex() {
  return (
    <div>
      {" "}
      <Chart
        type="bar"
        width={800}
        height={500}
        series={[
          {
            name: "Nexpak Agile Solutions",
            data: [3000, 6000, 2000, 5000, 8000, 7000, 6000],
          },
        ]}
        options={{
          xaxis: {
            categories: [
              "react js",
              "python",
              "mongodb",
              "mongoose",
              "Django",
              "javascript",
              "java",
              "ruby",
            ],
            title: { text: "Latest Technologies of modern world" },
          },
          yaxis: {
            title: { text: "User of these technologies" },
          },
        }}
      ></Chart>
    </div>
  );
}

export default BarChartApex;
