import { Box, Stack } from "@mui/material";
import CurrencyList from "../components/currencyList/CurrencyList";
import Header from "../components/Header";
import Redirect from "../components/Redirect";
import CurrencyTabs from "../components/tabs/CurrencyTabs";
import { DialogProvider } from "../context/DialogContext";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  // If an unauthenticated user tries to access the page, show Redirect instead
  if (user === undefined) {
    return <Redirect />;
  }

  return (
    <Stack spacing={2}>
      <Header user={user} />

      <Stack direction={"row"} spacing={2}>
        <Box width={"25%"}>
          <CurrencyList user={user} />
        </Box>

        <Box width={"75%"}>
          <DialogProvider>
            <CurrencyTabs user={user} />
          </DialogProvider>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
