import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Typography } from "@mui/material";
import "../index.css";

const Title = () => {
  return (
    <Typography variant="h1" color={"primary"} mb={10}>
      Crypt
      <CurrencyExchangeIcon className="App-logo" fontSize="inherit" /> Exchange
    </Typography>
  );
};

export default Title;
