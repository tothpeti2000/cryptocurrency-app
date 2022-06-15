import { List } from "@mui/material";
import CurrencyListItem from "./CurrencyListItem";

const CurrencyList = () => {
  const currencies = ["HUF", "EUR", "USD"];

  return (
    <List>
      {currencies.map((c) => (
        <CurrencyListItem key={c} currency={c} min={1} max={10} />
      ))}
    </List>
  );
};

export default CurrencyList;
