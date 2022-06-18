import { Grid } from "@mui/material";
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
    <Grid container direction={"column"} rowSpacing={2} height={"100vh"}>
      <Header user={user} />
      <DialogProvider>
        <Grid item container columnSpacing={2}>
          <Grid item xs={3}>
            <CurrencyList user={user} />
          </Grid>
          <Grid item xs={9}>
            <CurrencyTabs user={user} />
          </Grid>
          <AddCurrencyDialog />
        </Grid>
      </DialogProvider>
    </Grid>
  );
};

export default Dashboard;
