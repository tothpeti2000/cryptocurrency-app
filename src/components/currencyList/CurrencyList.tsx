import { Box, List } from "@mui/material";
import useWebsocket from "../../api/websocket/useWebsocket";
import { UserDisplayProps } from "../../interfaces/props";
import { styles } from "../../styles/styles";
import CurrencyListItem from "./CurrencyListItem";

const CurrencyList = (props: UserDisplayProps) => {
  const assetIDs = props.user.currencies.map((c) => c.asset_id);
  const data = useWebsocket(assetIDs);

  return (
    <Box {...styles.boxWithShadow}>
      <h1>Exchange Rates</h1>
      {data.price_high}
      {/*<List>
        {props.user.currencies.map((c) => (
          <CurrencyListItem
            key={c.asset_id}
            currencyName={c.name}
            price_high={price_high}
            price_low={price_low}
          />
        ))}
        </List>*/}
    </Box>
  );
};

export default CurrencyList;
