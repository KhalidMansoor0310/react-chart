import "./App.css";
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

  return (
    <>
      <div className="container m-auto">
        <h1 className="text-center">Line Chart in react JS</h1>
        {/* <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={data}
          width={400}
          height={400}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip />
          <Line
            dataKey="student"
            type={"monotone"}
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            dataKey="fee"
            type={"monotone"}
            stroke="green"
            activeDot={{ r: 8 }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer aspect={3} width="100%">
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fee" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer aspect={3} width="100%">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="fee"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="student"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer> */}
      </div>
    </>
  );
}

export default App;
