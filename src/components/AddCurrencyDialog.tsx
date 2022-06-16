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
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDialogContext } from "../context/DialogContext";
import useAPI from "../hooks/useAPI";
import { Asset } from "../interfaces/currency";

const AddCurrencyDialog = () => {
  const { isOpen, close } = useDialogContext();
  const [assets, setAssets] = useState<Asset[]>();
  //const { getAssets } = useAPI();
  //const { isLoading, isError, error, data } = getAssets();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Asset[]>(
        "https://rest.coinapi.io/v1/assets?apikey=51BF9506-7BCA-4C1F-8AA6-D75F64DBA696"
      );

      setAssets(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Dialog open={isOpen} onClose={close}>
        <DialogTitle>Add new currency</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Select a currency from the list below
          </DialogContentText>

          <FormControl fullWidth>
            <NativeSelect>
              {assets === undefined ? (
                <CircularProgress />
              ) : (
                assets.map((asset) => (
                  <option key={asset.asset_id} value={asset.asset_id}>
                    {asset.name}
                  </option>
                ))
              )}
            </NativeSelect>
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
