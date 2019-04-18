const baseURL = "https://api.kraken.com/0/public";

export const AppConstants = {
    assetPairs: baseURL + "/AssetPairs",
    ticker: baseURL + "/Ticker?pair=",
    trades: baseURL + "/Trades?pair="
};
