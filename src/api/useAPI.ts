import { Asset, ExchangeRate } from "../interfaces/currency";
import { client } from "./rest/client";
import { subtractWeekFromCurrentDate } from "./utils";

const useAPI = () => {
  const getAllAssets = () => {
    console.log("Fetching assets");

    return client.get<Asset[]>("v1/assets");
  };

  const getExchangeRates = (assetID: string) => {
    console.log(`Fetching ${assetID}/USD exchange rates`);
    const intervalStart = subtractWeekFromCurrentDate();

    return client.get<ExchangeRate[]>(
      `v1/exchangerate/${assetID}/USD/history?period_id=1DAY&time_start=${intervalStart}`
    );
  };

  return { getAllAssets, getExchangeRates };
};

export default useAPI;
