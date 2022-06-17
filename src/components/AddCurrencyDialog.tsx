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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDialogContext } from "../context/DialogContext";
import { useUserContext } from "../context/UserContext";
import useAPI from "../hooks/useAPI";
import { Asset } from "../interfaces/currency";
import { AssetOption } from "../interfaces/props";

const AddCurrencyDialog = () => {
  const { isOpen, close } = useDialogContext();
  const { addCurrency } = useUserContext();

  const [assets, setAssets] = useState<Asset[]>();
  const { handleSubmit, control } = useForm<AssetOption>();
  //const { getAssets } = useAPI();
  //const { isLoading, isError, error, data } = getAssets();

  const onSubmit: SubmitHandler<AssetOption> = (data) => {
    close();
    addCurrency(data.IDWithName);
  };

  useEffect(() => {
    /*const fetchData = async () => {
      const response = await axios.get<Asset[]>(
        "https://rest.coinapi.io/v1/assets?apikey=51BF9506-7BCA-4C1F-8AA6-D75F64DBA696"
      );

      setAssets(response.data);
    };

    fetchData();*/
  }, []);

  return (
    <div>
      <Dialog open={isOpen} onClose={close}>
        <DialogTitle>Add new currency</DialogTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText>
              Select a currency from the list below
            </DialogContentText>

            <Controller
              name="IDWithName"
              control={control}
              defaultValue="BTC,Bitcoin"
              render={({ field }) => (
                <FormControl fullWidth>
                  <NativeSelect {...field}>
                    {assets &&
                      assets.map((asset) => (
                        <option
                          key={asset.asset_id}
                          value={[asset.asset_id, asset.name]}
                        >
                          {asset.name}
                        </option>
                      ))}
                  </NativeSelect>
                </FormControl>
              )}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={close}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddCurrencyDialog;
