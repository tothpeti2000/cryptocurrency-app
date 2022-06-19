import { Box } from "@mui/material";
import { useQuery } from "react-query";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useMockAPI from "../../api/mock/useMockAPI";
import { queryOptions } from "../../api/rest/client";
import { ChartProps } from "../../interfaces/props";
import Spinner from "../Spinner";

const Chart = (props: ChartProps) => {
  const { getExchangeRates } = useMockAPI();

  const { data: chartData, isLoading } = useQuery(
    "chartData",
    getExchangeRates,
    queryOptions
  );

  return (
    <Box width={600} height={300}>
      {isLoading ? (
        <Spinner />
      ) : (
        <LineChart width={600} height={300} data={chartData?.data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="time_open" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price_high" />
          <Line type="monotone" dataKey="price_low" />
          <Spinner />
        </LineChart>
      )}
    </Box>
  );
};

export default Chart;
