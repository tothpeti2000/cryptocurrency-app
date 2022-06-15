import { Box, Typography } from "@mui/material";
import { useUserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useUserContext();

  return (
    <Box boxShadow={10} p={5}>
      <Typography variant="h1">Hello {String(user === undefined)}!</Typography>
      <Typography variant="h5">
        Add a new currency or check out the exchange rate of the previously
        added ones
      </Typography>
    </Box>
  );
};

export default Header;
