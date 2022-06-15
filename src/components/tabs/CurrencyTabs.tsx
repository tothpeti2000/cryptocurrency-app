import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { TabPanelProps } from "../../interfaces/props";
import AddCurrencyDialog from "../AddCurrencyDialog";
import useDialog from "../../hooks/useDialog";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `currency-tab-${index}`,
    "aria-controls": `currency-tabpanel-${index}`,
  };
};

const CurrencyTabs = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const { open } = useDialog();
  const currencies = ["HUF", "EUR", "USD"];

  const handleChange = (e: React.SyntheticEvent, newIdx: number) => {
    setActiveIdx(newIdx);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeIdx}
          variant="scrollable"
          onChange={handleChange}
          aria-label="currencyTabs"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label={<AddIcon />} {...a11yProps(0)} onClick={open} />
        </Tabs>
      </Box>

      <TabPanel value={activeIdx} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={activeIdx} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={activeIdx} index={2}>
        Item Three
      </TabPanel>

      <AddCurrencyDialog />
    </>
  );
};

export default CurrencyTabs;
