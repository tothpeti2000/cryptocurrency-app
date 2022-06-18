import AddIcon from "@mui/icons-material/Add";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { DialogProvider, useDialogContext } from "../../context/DialogContext";
import { UserDisplayProps } from "../../interfaces/props";
import { styles } from "../../styles/styles";
import AddCurrencyDialog from "../dialog/AddCurrencyDialog";
import TabPanel from "./TabPanel";

const CurrencyTabs = (props: UserDisplayProps) => {
  const { open } = useDialogContext();
  const [currentIdx, setCurrenIdx] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newIdx: number) => {
    setCurrenIdx(newIdx);
  };

  return (
    <Stack {...styles.boxWithShadow}>
      <h1>My Currencies</h1>

      <Tabs
        sx={{ borderBottom: 1, borderColor: "divider" }}
        value={currentIdx}
        variant={"scrollable"}
        onChange={handleChange}
        aria-label="currency-tabs"
      >
        {props.user.currencies.map((c) => (
          <Tab key={c.asset_id} label={c.name} />
        ))}

        <Tab label={<AddIcon />} onClick={open} />
        <AddCurrencyDialog />
      </Tabs>

      <DialogProvider>
        {props.user.currencies.map((c, idx) => (
          <TabPanel
            key={c.asset_id}
            value={currentIdx}
            index={idx}
            currency={c}
          />
        ))}
      </DialogProvider>
    </Stack>
  );
};

export default CurrencyTabs;
