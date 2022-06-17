import { Delete } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useUserContext } from "../../context/UserContext";
import { TabPanelProps } from "../../interfaces/props";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, assetID, ...other } = props;
  const { deleteCurrency } = useUserContext();

  const handleClick = () => {
    deleteCurrency(assetID);
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
        <Box bgcolor={"gray"} p={3}>
          {index}
          <Fab color="error" onClick={handleClick}>
            <Delete />
          </Fab>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
