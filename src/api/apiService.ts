import axios from "axios";
import { useQuery } from "react-query";
import { Asset } from "../interfaces/currency";

const API_KEY = "51BF9506-7BCA-4C1F-8AA6-D75F64DBA696";

axios.defaults.headers.common = {
  "X-CoinAPI-Key": API_KEY,
};

const client = axios.create({
  baseURL: "https://rest.coinapi.io",
});

export const GetAllAssets = () => {
  return useQuery("assets", async () => {
    return await client.get<Asset[]>("v1/assets");
  });
};
