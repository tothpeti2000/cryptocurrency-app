import { Asset, OHLCV } from "../../interfaces/currency";
import { assets, ohlcv, Response } from "./responses";

const useMockAPI = () => {
  const getAllAssets = () => {
    console.log("Fetching assets");

    return new Promise<Response<Asset[]>>((resolve, reject) => {
      setTimeout(() => resolve(assets), 5000);
    });
  };

  const getExchangeRates = () => {
    console.log("Fetching exchange rates");

    return new Promise<Response<OHLCV[]>>((resolve, reject) => {
      setTimeout(() => resolve(ohlcv), 5000);
    });
  };

  return { getAllAssets, getExchangeRates };
};

export default useMockAPI;
