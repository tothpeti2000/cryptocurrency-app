import {
  CircularProgress,
  FormControl,
  NativeSelect,
  Stack,
} from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import { useQuery } from "react-query";
import useMockAPI from "../../api/mock/useMockAPI";
import { queryOptions } from "../../api/useAPI";
import { useUserContext } from "../../context/UserContext";
import { Asset } from "../../interfaces/currency";
import DialogFrame from "./DialogFrame";

const AddCurrencyDialog = () => {
  const { canAddCurrency, addCurrency } = useUserContext();
  const { getAllAssets } = useMockAPI();

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedAsset, setSelectedAsset] = useState<Asset>();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const asset = JSON.parse(e.target.value);

    setSelectedValue(e.target.value);
    setSelectedAsset(asset);
  };

  const handleSubmit = () => {
    selectedAsset &&
      selectedAsset.asset_id !== "" &&
      addCurrency(selectedAsset);
  };

  const { data: assets, isLoading } = useQuery(
    "assets",
    getAllAssets,
    queryOptions
  );

  return (
    <DialogFrame
      title="Add new currency"
      contentText="Select a currency from the list below"
      onSubmit={handleSubmit}
    >
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
              <option
                key={asset.asset_id}
                value={JSON.stringify(asset)}
                disabled={!canAddCurrency(asset.asset_id)}
              >
                {asset.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      )}
    </DialogFrame>
  );
};

export default AddCurrencyDialog;
