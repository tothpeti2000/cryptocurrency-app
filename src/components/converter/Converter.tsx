import { Grid, Input } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { ChangeEventHandler, useState } from "react";
import AmountInput from "./AmountInput";
import { AssetWithExchangeRate } from "../../interfaces/currency";

const Converter = (props: AssetWithExchangeRate) => {
  const [amount, setAmount] = useState("");
  const [editedCurrency, setEditedCurrency] = useState("dollar");

  const handleDollarChange = (amount: string) => {
    setEditedCurrency("dollar");
    setAmount(amount);
  };

  const handleOtherCurrencyChange = (amount: string) => {
    setEditedCurrency(props.asset_id);
    setAmount(amount);
  };

  const toOtherCurrency = (dollars: number) => {
    return dollars * props.exchangeRate;
  };

  const toDollars = (otherCurrencyAmount: number) => {
    return otherCurrencyAmount / props.exchangeRate;
  };

  const convert = (
    amount: string,
    convertAmount: (fromAmount: number) => number
  ) => {
    const value = parseFloat(amount);

    return Number.isNaN(value) ? "" : convertAmount(value).toString();
  };

  const dollars =
    editedCurrency === props.asset_id ? convert(amount, toDollars) : amount;
  const otherAmount =
    editedCurrency === "dollar" ? convert(amount, toOtherCurrency) : amount;

  return (
    <Grid container justifyContent={"space-around"} alignItems={"center"}>
      <AmountInput
        currencyName="Dollars"
        amount={dollars}
        onChange={handleDollarChange}
      />
      <CompareArrowsIcon />
      <AmountInput
        currencyName={props.name}
        amount={otherAmount}
        onChange={handleOtherCurrencyChange}
      />
    </Grid>
  );
};

export default Converter;
