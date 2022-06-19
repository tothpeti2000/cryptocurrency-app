import axios from "axios";
import { useQuery } from "react-query";
import { Asset } from "../interfaces/currency";
import { get, queryOptions } from "./rest/client";

const useAPI = () => {
  const getAllAssets = useQuery(
    "assets",
    () => get<Asset[]>("v1/assets"),
    queryOptions
  );

  return { getAllAssets };
};

export default useAPI;
