import { Box, Typography } from "@mui/material";
import { HeaderProps } from "../interfaces/props";

const Header = (props: HeaderProps) => {
  return (
    <Box boxShadow={10} p={5}>
      <Typography variant="h1">Hello {props.userName}!</Typography>
      <Typography variant="h5">
        Add a new currency or check out the exchange rate of the previously
        added ones
      </Typography>
    </Box>
  );
};

export default Header;
