import { Grid, Stack } from "@mui/material";
import AddCurrencyDialog from "../components/AddCurrencyDialog";
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
    <Stack spacing={2} height={"100vh"}>
      <Header user={user} />
      <DialogProvider>
        <Stack direction={"row"} spacing={2}>
          <Stack flex={3}>
            <CurrencyList user={user} />
          </Stack>
          <Stack flex={9}>
            <CurrencyTabs user={user} />
          </Stack>
          <AddCurrencyDialog />
        </Stack>
      </DialogProvider>
    </Stack>
  );
};

export default Dashboard;
