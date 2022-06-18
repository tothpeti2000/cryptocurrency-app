import { Box, List } from "@mui/material";
import { useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { Asset } from "../../interfaces/currency";
import { UserDisplayProps } from "../../interfaces/props";
import CurrencyListItem from "./CurrencyListItem";

const apiCall = {
  event: "bts:subscribe",
  data: { channel: "order_book_btcusd" },
  /*type: "hello",
  apikey: "51BF9506-7BCA-4C1F-8AA6-D75F64DBA696",
  heartbeat: false,
  subscribe_data_type: ["ohlcv"],*/
};

const CurrencyList = (props: UserDisplayProps) => {
  useEffect(() => {
    /*const ws = new WebSocket("wss://ws.coinapi.io/v1/");

    ws.onopen = (e) => {
      console.log("WS opened");
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = (e) => {
      console.log("WS message");
      const json = JSON.parse(e.data);
      console.log(json);
    };

    ws.onerror = () => {
      console.log("WS error");
    };

    ws.onclose = () => {
      console.log("WS closed");
    };

    return () => ws.close();*/
  }, []);

  return (
    <Box bgcolor={"white"} boxShadow={5} px={2}>
      <List>
        <h1>Exchange Rates</h1>
        {props.user.currencies.map((c) => (
          <CurrencyListItem key={c.asset_id} currency={c} />
        ))}
      </List>
    </Box>
  );
};

export default CurrencyList;
