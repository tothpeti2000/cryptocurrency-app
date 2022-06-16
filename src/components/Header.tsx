import { Box, Typography } from "@mui/material";
import { useUserContext } from "../context/UserContext";

const Header = () => {
  const { user } = useUserContext();

  return (
    <Box bgcolor={"white"} boxShadow={5} p={2}>
      <h1>Hello {String(user?.userName)}!</h1>
      <Typography variant="body1">
        Add a new currency or check out the exchange rate of the previously
        added ones
      </Typography>
    </Box>
  );
};

export default Header;
