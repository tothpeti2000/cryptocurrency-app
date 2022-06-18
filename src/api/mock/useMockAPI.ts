import { Asset } from "../../interfaces/currency";
import { assetsSuccess, Response } from "./responses";

const useMockAPI = () => {
  const getAllAssets = () => {
    console.log("Fetching assets");

    return new Promise<Response<Asset[]>>((resolve, reject) => {
      setTimeout(() => resolve(assetsSuccess), 5000);
    });
  };

  return { getAllAssets };
};

export default useMockAPI;
