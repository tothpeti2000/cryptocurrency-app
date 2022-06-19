import { Asset, ExchangeRate } from "../../interfaces/currency";
import { subtractWeekFromCurrentDate } from "../utils";
import { assets, ohlcv, Response } from "./responses";

const useMockAPI = () => {
  const getAllAssets = () => {
    console.log("Fetching assets");

    return new Promise<Response<Asset[]>>((resolve, reject) => {
      setTimeout(() => resolve(assets), 5000);
    });
  };

  const getExchangeRates = (assetID: string) => {
    console.log(
      `Fetching ${assetID}/USD exchange rates from ${subtractWeekFromCurrentDate()}`
    );

    return new Promise<Response<ExchangeRate[]>>((resolve, reject) => {
      setTimeout(() => resolve(ohlcv), 5000);
    });
  };

  return { getAllAssets, getExchangeRates };
};

export default useMockAPI;
