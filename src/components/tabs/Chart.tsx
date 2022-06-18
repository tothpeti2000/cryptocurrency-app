import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Page 1", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page 2", uv: 500, pv: 2400, amt: 2400 },
  { name: "Page 3", uv: 1000, pv: 2400, amt: 2400 },
  { name: "Page 4", uv: 735, pv: 2400, amt: 2400 },
  { name: "Page 5", uv: 109, pv: 2400, amt: 2400 },
  { name: "Page 6", uv: 566, pv: 2400, amt: 2400 },
  { name: "Page 7", uv: 660, pv: 2400, amt: 2400 },
  { name: "Page 8", uv: 1205, pv: 2400, amt: 2400 },
  { name: "Page 9", uv: 350, pv: 2400, amt: 2400 },
  { name: "Page 10", uv: 950, pv: 2400, amt: 2400 },
];

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
