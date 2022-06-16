import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddCurrencyDialog from "../components/AddCurrencyDialog";
import Chart from "../components/Chart";
import CurrencyList from "../components/currencyList/CurrencyList";
import Header from "../components/Header";
import CurrencyTabs from "../components/tabs/CurrencyTabs";
import { DialogProvider } from "../context/DialogContext";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      navigate("/");
    }
  });

  return (
    <Grid container direction={"column"} rowSpacing={2}>
      <Header />
      <DialogProvider>
        <Grid item container columnSpacing={2}>
          <Grid item xs={3}>
            <CurrencyList />
          </Grid>
          <Grid item xs={9}>
            <CurrencyTabs />
          </Grid>
          <AddCurrencyDialog />
        </Grid>
      </DialogProvider>
    </Grid>
  );
};

export default Dashboard;
