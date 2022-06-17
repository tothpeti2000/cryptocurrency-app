import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Asset } from "../../interfaces/currency";
import AmountInput from "./AmountInput";

const Converter = (props: Asset) => {
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
    return dollars / props.price_usd;
  };

  const toDollars = (otherCurrencyAmount: number) => {
    return otherCurrencyAmount * props.price_usd;
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
        currencyName="Dollar"
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
