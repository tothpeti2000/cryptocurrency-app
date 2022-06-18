import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const Chart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" />
    </LineChart>
  );
};

export default Chart;
