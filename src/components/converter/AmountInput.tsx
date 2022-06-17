import { Box, Input } from "@mui/material";
import { ChangeEventHandler } from "react";
import { AmountInputProps } from "../../interfaces/props";

const AmountInput = (props: AmountInputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Box>
      <h1>{props.currencyName}</h1>
      <Input
        type="number"
        value={props.amount}
        onChange={handleChange}
        placeholder="Type here..."
      />
    </Box>
  );
};

export default AmountInput;
