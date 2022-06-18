import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  NativeSelect,
  Stack,
} from "@mui/material";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useQuery } from "react-query";
import useAPI, { queryOptions } from "../api/useAPI";
import useMockAPI from "../api/mock/useMockAPI";
import { useDialogContext } from "../context/DialogContext";
import { useUserContext } from "../context/UserContext";
import { Asset } from "../interfaces/currency";

const AddCurrencyDialog = () => {
  const { isOpen, close } = useDialogContext();
  const { addCurrency } = useUserContext();
  const { getAllAssets } = useMockAPI();

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedAsset, setSelectedAsset] = useState<Asset>();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const asset = JSON.parse(e.target.value);

    setSelectedValue(e.target.value);
    setSelectedAsset(asset);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    selectedAsset &&
      selectedAsset.asset_id !== "" &&
      addCurrency(selectedAsset);
    close();
  };

  const { data: assets, isLoading } = useQuery(
    "assets",
    getAllAssets,
    queryOptions
  );

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>Add new currency</DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Select a currency from the list below
          </DialogContentText>

          {isLoading && (
            <Stack alignItems={"center"}>
              <CircularProgress />
            </Stack>
          )}

          {assets && (
            <FormControl fullWidth>
              <NativeSelect value={selectedValue} onChange={handleChange}>
                <option value="">None</option>
                {assets.data.map((asset) => (
                  <option key={asset.asset_id} value={JSON.stringify(asset)}>
                    {asset.name}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddCurrencyDialog;
