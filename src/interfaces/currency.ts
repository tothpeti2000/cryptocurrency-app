export interface Asset {
  asset_id: string;
  name: string;
  price_usd: number;
}

export interface WsData {
  price_high: number;
  price_low: number;
}

export interface OHLCV extends WsData {
  time_period_start: string;
}
