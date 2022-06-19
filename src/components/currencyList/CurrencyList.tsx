import { Box, List } from "@mui/material";
import useWebsocket from "../../api/websocket/useWebsocket";
import { WsData } from "../../interfaces/currency";
import { UserDisplayProps } from "../../interfaces/props";
import { styles } from "../../styles/styles";
import CurrencyListItem from "./CurrencyListItem";

const CurrencyList = (props: UserDisplayProps) => {
  //const data = useWebsocket();
  const data: WsData = {
    price_high: 0,
    price_low: 0,
  };

  return (
    <Box {...styles.boxWithShadow}>
      <h1>Exchange Rates</h1>
      <List>
        {props.user.currencies.map((c) => (
          <CurrencyListItem
            key={c.asset_id}
            currencyName={c.name}
            data={data}
          />
        ))}
      </List>
    </Box>
  );
};

export default CurrencyList;
