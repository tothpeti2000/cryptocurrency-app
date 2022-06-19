export interface Asset {
  asset_id: string;
  name: string;
  price_usd: number;
}

export interface WsData {
  price_high: number;
  price_low: number;
}
