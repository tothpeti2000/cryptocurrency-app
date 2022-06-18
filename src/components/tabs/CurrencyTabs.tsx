import AddIcon from "@mui/icons-material/Add";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useDialogContext } from "../../context/DialogContext";
import { UserDisplayProps } from "../../interfaces/props";
import TabPanel from "./TabPanel";

const CurrencyTabs = (props: UserDisplayProps) => {
  const [value, setValue] = useState(0);
  const { open } = useDialogContext();

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack boxShadow={5} px={2} bgcolor={"white"}>
      <h1>My Currencies</h1>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          variant={"scrollable"}
          onChange={handleChange}
          aria-label="currency-tabs"
        >
          {props.user.currencies.map((c) => (
            <Tab key={c.asset_id} label={c.name} />
          ))}

          <Tab label={<AddIcon />} onClick={open} />
        </Tabs>
      </Box>

      {props.user.currencies.map((c) => (
        <TabPanel
          key={c.asset_id}
          value={value}
          index={props.user.currencies.indexOf(c)}
          currency={c}
        />
      ))}
    </Stack>
  );
};

export default CurrencyTabs;
