import { List } from "@mui/material";
import { useEffect } from "react";
import { Asset } from "../../interfaces/currency";
import CurrencyListItem from "./CurrencyListItem";

const apiCall = {
  type: "hello",
  apikey: "51BF9506-7BCA-4C1F-8AA6-D75F64DBA696",
  heartbeat: false,
  subscribe_data_type: ["ohlcv"],
};

const CurrencyList = () => {
  const currencies: Asset[] = [
    { asset_id: "HUF", name: "Forint" },
    { asset_id: "EUR", name: "Euro" },
    { asset_id: "USD", name: "Dollar" },
  ];

  useEffect(() => {
    const ws = new WebSocket("wss://ws.coinapi.io/v1");

    ws.onopen = (e) => {
      console.log("WS opened");
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = (e) => {
      console.log("WS message");
      const json = JSON.parse(e.data);
      console.log(json);
    };

    return () => ws.close();
  });

  return <List></List>;
};

export default CurrencyList;
