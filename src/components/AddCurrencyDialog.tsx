import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import useAPI from "../hooks/useAPI";
import useDialog from "../hooks/useDialog";

const AddCurrencyDialog = () => {
  const { isOpen, close } = useDialog();

  return (
    <div>
      <Dialog open={isOpen} onClose={close}>
        <DialogTitle>Add new currency</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Select a currency from the list below
          </DialogContentText>

          <FormControl fullWidth>
            <InputLabel id="currencyLabel">Currency</InputLabel>
            <Select
              labelId="currencyLabel"
              id="currencySelect"
              label="Currency"
            >
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={close}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCurrencyDialog;
