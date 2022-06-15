import { Delete } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { TabPanelProps } from "../../interfaces/props";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, onDelete, ...other } = props;

  const handleClick = () => {
    alert("Hello World!" + index);
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
          <Fab color="error" onClick={() => props.onDelete(index)}>
            <Delete />
          </Fab>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
