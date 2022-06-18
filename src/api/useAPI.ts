import axios from "axios";
import { useQuery } from "react-query";
import { Asset } from "../interfaces/currency";

const API_KEY = process.env.REACT_APP_API_KEY;

axios.defaults.headers.common = {
  "X-CoinAPI-Key": API_KEY ?? "",
};

const client = axios.create({
  baseURL: "https://rest.coinapi.io",
});

export const queryOptions = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

const useAPI = () => {
  const getAllAssets = () => {
    return client.get<Asset[]>("v1/assets");
  };

  return { getAllAssets };
};

export default useAPI;
