import React from "react";
import Chart from "react-apexcharts";
function LineChartApex() {
  return (
    <div>
      {" "}
      <Chart
        type="line"
        width={800}
        height={500}
        series={[
          {
            name: "Products",
            data: [234, 600, 335, 245, 400, 200, 360],
          },
        ]}
        options={{
          xaxis: {
            categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
            title: { text: "Products Selling Years" },
          },
          yaxis: {
            title: { text: "No of Products Sold" },
          },
        }}
      ></Chart>
    </div>
  );
}

export default LineChartApex;
