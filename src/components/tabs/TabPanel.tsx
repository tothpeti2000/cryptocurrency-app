import { Delete } from "@mui/icons-material";
import { Fab, Grid } from "@mui/material";
import { useUserContext } from "../../context/UserContext";
import { TabPanelProps } from "../../interfaces/props";
import Chart from "../Chart";
import Converter from "../converter/Converter";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, currency, ...other } = props;
  const { deleteCurrency } = useUserContext();

  const handleClick = () => {
    deleteCurrency(currency.asset_id);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`currency-tabpanel-${index}`}
      aria-labelledby={`currency-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container direction={"column"} p={3}>
          <Grid item>
            <Chart />
          </Grid>

          <Grid item>
            <Converter {...currency} />
          </Grid>

          <Grid item alignSelf={"flex-end"}>
            <Fab color="error" onClick={handleClick}>
              <Delete />
            </Fab>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default TabPanel;
