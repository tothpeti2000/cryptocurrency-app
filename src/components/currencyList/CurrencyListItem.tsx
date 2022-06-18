import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CurrencyListItemProps } from "../../interfaces/props";

const apiCall = {
  event: "bts:subscribe",
  data: { channel: "order_book_btcusd" },
  /*type: "hello",
  apikey: "51BF9506-7BCA-4C1F-8AA6-D75F64DBA696",
  heartbeat: false,
  subscribe_data_type: ["ohlcv"],*/
};

const CurrencyListItem = (props: CurrencyListItemProps) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    /*"wss://ws.bitstamp.net";
    const ws = new WebSocket();
    "wss://ws.coinapi.io/v1/"

    ws.onopen = (e) => {
      console.log("WS opened");
      //ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = (e) => {
      const json = JSON.parse(e.data);

      try {
        if (json.event === "data") {
          setBids(json.data.bids.slice(0, 5));
        }
      } catch (err) {
        console.log(err);
      }
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
    <>
      <ListItem>
        <ListItemText
          primary={props.currency.name}
          secondary={
            <Typography component={"div"}>
              <Box>
                <TrendingUpIcon />
                <Typography
                  component="span"
                  variant="body2"
                  color={"text.primary"}
                >
                  {bids[0]}
                </Typography>
              </Box>

              <Box>
                <TrendingDownIcon />
                <Typography
                  component="span"
                  variant="body2"
                  color={"text.primary"}
                >
                  {props.currency.name}
                </Typography>
              </Box>
            </Typography>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default CurrencyListItem;
