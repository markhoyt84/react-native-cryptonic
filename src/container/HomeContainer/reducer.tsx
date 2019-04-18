const initialState = {
    assets: [],
    isLoading: false,
    error: null,
    viewingCurrentAssetTrades: null,
    assetTrades: []
};

export default function(state = initialState, action:any) {
    if (action.type === "ASSETS_ARE_LOADING") {
        return {
            ...state,
            isLoading: action.isLoading,
        };
    }
    if (action.type === "GET_ASSETS_SUCCESS") {
        return {
            ...state,
            assets: action.assets,
            isLoading: false,
        };
    }
    if (action.type === "GET_ASSETS_FAILURE") {
        return {
            ...state,
            isLoading: false,
            error: action.error
        };
    }
    if (action.type === "ASSET_TRADES_ARE_LOADING") {
        return {
            ...state,
            viewingCurrentAssetTrades: action.assetName,
            assetTrades: []
        };
    }
    if (action.type === "GET_ASSET_TRADES_SUCCESS") {
        return {
            ...state,
            assetTrades: action.trades
        };
    }
    if (action.type === "GET_ASSET_TRADES_FAILURE") {
        return {
            ...state,
            isLoading: false,
            error: action.error
        };
    }

    return state;
}
