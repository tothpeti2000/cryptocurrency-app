export const wsURL = "ws://ws-sandbox.coinapi.io/v1/";

export const apiCall = {
  type: "hello",
  apikey: process.env.REACT_APP_API_KEY,
  heartbeat: false,
  subscribe_data_type: ["ohlcv"],
  subscribe_filter_period_id: ["1MIN"],
  subscribe_filter_symbol_id: ["COINBASE_SPOT_"],
};
