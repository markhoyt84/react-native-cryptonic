import Config from 'react-native-config'

export const AppConstants = {
    assetPairs: Config.API_URL + "/AssetPairs",
    ticker: Config.API_URL + "/Ticker?pair=",
    trades: Config.API_URL + "/Trades?pair="
};
