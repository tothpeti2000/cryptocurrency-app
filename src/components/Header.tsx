import { Typography } from "@mui/material";
import { HeaderProps } from "../interfaces/props";

const Header = (props: HeaderProps) => {
  return (
    <>
      <Typography variant="h1">Hello {props.userName}!</Typography>
      <Typography variant="h5">
        Add a new currency or check out the exchange rate of the previously
        added ones
      </Typography>
    </>
  );
};

export default Header;
