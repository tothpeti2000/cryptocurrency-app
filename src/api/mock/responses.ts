import { Asset } from "../../interfaces/currency";

export interface Response<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
  error?: { message: string };
}

export const assetsSuccess: Response<Asset[]> = {
  data: [
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
      asset_id: "BTG",
      name: "Bitgem",
      price_usd: 15.53,
    },
    {
      asset_id: "ADA",
      name: "Cardano",
      price_usd: 0.46,
    },
    {
      asset_id: "USD",
      name: "Dollar",
      price_usd: 1,
    },
  ],
  isLoading: false,
  isError: false,
};
