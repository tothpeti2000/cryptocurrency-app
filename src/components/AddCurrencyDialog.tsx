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
import {
  ChangeEventHandler,
  FormEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDialogContext } from "../context/DialogContext";
import { useUserContext } from "../context/UserContext";
import useAPI from "../hooks/useAPI";
import { Asset } from "../interfaces/currency";

const AddCurrencyDialog = () => {
  const { isOpen, close } = useDialogContext();
  const { addCurrency } = useUserContext();

  const [assets, setAssets] = useState<Asset[]>();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  //const { getAssets } = useAPI();
  //const { isLoading, isError, error, data } = getAssets();

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

  useEffect(() => {
    /*const fetchData = async () => {
      const response = await axios.get<Asset[]>(
        "https://rest.coinapi.io/v1/assets?apikey=51BF9506-7BCA-4C1F-8AA6-D75F64DBA696"
      );

      setAssets(response.data);
    };

    fetchData();*/

    const assets: Asset[] = [
      {
        asset_id: "BTC",
        name: "Bitcoin",
        price_usd: 20519,
      },
      {
        asset_id: "ARK",
        name: "Ark",
        price_usd: 0.4,
      },
      {
        asset_id: "USD",
        name: "Dollar",
        price_usd: 1,
      },
    ];

    setAssets(assets);
  }, []);

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>Add new currency</DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Select a currency from the list below
          </DialogContentText>

          {assets && (
            <FormControl fullWidth>
              <NativeSelect value={selectedValue} onChange={handleChange}>
                <option value="">None</option>
                {assets.map((asset) => (
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
