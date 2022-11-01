import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Chart from "react-apexcharts";
import ChartApex from "./components/ChartApex";
import { UserData } from "./Data";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Legend,
//   Line,
//   LineChart,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

function App() {
  // const data = [
  //   {
  //     name: "React js",
  //     student: 5,
  //     fee: 10,
  //   },
  //   {
  //     name: "Python",
  //     student: 2,
  //     fee: 15,
  //   },
  //   {
  //     name: "Java",
  //     student: 7,
  //     fee: 20,
  //   },
  //   {
  //     name: "Ruby",
  //     student: 4,
  //     fee: 25,
  //   },
  //   {
  //     name: "Python",
  //     student: 9,
  //     fee: 30,
  //   },
  //   {
  //     name: "Deep learning",
  //     student: 10,
  //     fee: 35,
  //   },
  // ];
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["rgba(75,192,192,1)", "red", "green"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <div className="container m-auto">
        <h3 className="my-5">Below is the Bar Chart</h3>

        <div style={{ width: 700 }} className="col-md-8 m-auto">
          <BarChart chartData={userData} />
        </div>
        <h3 className="my-5">Below is the Line Chart</h3>
        <div style={{ width: 700 }} className="col-md-8 m-auto">
          <LineChart chartData={userData} />
        </div>

        <h3 className="my-5">Below is the Pie Chart</h3>
        <div style={{ width: 700 }} className="col-md-8 m-auto">
          <PieChart chartData={userData} />
        </div>

        <h3 className="my-5">Below is the Charts with ApexCharts</h3>
        <div style={{ width: 700 }} className="col-md-8 m-auto">
          <ChartApex />
        </div>
      </div>
    </>
  );
}

export default App;
