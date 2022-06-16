import AddIcon from "@mui/icons-material/Add";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Asset } from "../../interfaces/currency";
import AddCurrencyDialog from "../AddCurrencyDialog";
import TabPanel from "./TabPanel";
import CloseIcon from "@mui/icons-material/Close";
import { useToggleContext } from "../../context/ToggleContext";

const CurrencyTabs = () => {
  const [value, setValue] = useState(0);
  const { open } = useToggleContext();
  const [currencies, setCurrencies] = useState<Asset[]>([
    { asset_id: "HUF", name: "Forint" },
    { asset_id: "EUR", name: "Euro" },
    { asset_id: "USD", name: "Dollar" },
  ]);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDelete = (idx: number) => {
    setCurrencies((currencies) => currencies.splice(idx, 1));
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "white" }}>
        <Tabs value={value} onChange={handleChange} aria-label="currency-tabs">
          {currencies.map((c) => (
            <Tab key={c.asset_id} label={c.name} />
          ))}

          <Tab label={<AddIcon />} onClick={open} />
        </Tabs>
      </Box>

      {currencies.map((c) => (
        <TabPanel
          key={c.asset_id}
          value={value}
          index={currencies.indexOf(c)}
          onDelete={handleDelete}
        />
      ))}
    </Box>
  );
};

export default CurrencyTabs;
