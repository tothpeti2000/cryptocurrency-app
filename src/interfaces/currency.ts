export interface Asset {
  asset_id: string;
  name: string;
}

export interface AssetWithExchangeRate extends Asset {
  exchangeRate: number;
}
