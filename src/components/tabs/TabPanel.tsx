import { Delete } from "@mui/icons-material";
import { Box, Fab, Grid, Stack } from "@mui/material";
import { useDialogContext } from "../../context/DialogContext";
import { useUserContext } from "../../context/UserContext";
import { TabPanelProps } from "../../interfaces/props";
import Chart from "../Chart";
import Converter from "../converter/Converter";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, currency, ...other } = props;
  const { deleteCurrency } = useUserContext();
  const {} = useDialogContext();

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
        <Stack p={3} bgcolor="white">
          <Chart />
          <Converter {...currency} />
          <Box alignSelf={"flex-end"}>
            <Fab color="error" onClick={handleClick}>
              <Delete />
            </Fab>
          </Box>
        </Stack>
      )}
    </div>
  );
};

export default TabPanel;
