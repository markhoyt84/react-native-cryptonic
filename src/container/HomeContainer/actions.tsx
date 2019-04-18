import { getAllAssets, getTickerInformationForAssets, getRecentTradesForAssetWithName } from "./services";

export function assetsAreLoading(bool: boolean) {
    console.log("All Assets Loading");
    return {
        type: "ASSETS_ARE_LOADING",
        isLoading: bool
    };
}
export function getAssetsSuccess(assets: Object) {
    return {
        type: "GET_ASSETS_SUCCESS",
        assets
    };
}
export function getAssetsFailure(error: Error) {
    return {
        type: "GET_ASSETS_FAILURE",
        error
    };
}
export function assetTradesAreLoading(bool: boolean, assetname: string) {
    return {
        type: "ASSET_TRADES_ARE_LOADING",
        isLoading: bool,
        assetName: assetname
    };
}
export function getAssetTradesSuccess(trades: []) {
    return {
        type: "GET_ASSET_TRADES_SUCCESS",
        trades
    };
}
export function getAssetTradesFailure(error: Error) {
    return {
        type: "GET_ASSET_TRADES_FAILURE",
        error
    };
}

export function fetchAllAssets() {
    return dispatch => {
        dispatch(assetsAreLoading(true));
        getAllAssets()
            .then(
                response => {
                    dispatch(fetchTickerInformation(response.result));
                },
                error => {
                    dispatch(getAssetsFailure(error));
                });
    };
}

export function fetchTickerInformation(fromAssets:object) {
    const assetNames = Object.keys(fromAssets);
    const commaDelimitedAssetNames = assetNames.join(",");
    return dispatch => {
        getTickerInformationForAssets(commaDelimitedAssetNames)
            .then(
                response => {
                    dispatch(getAssetsSuccess(mapAssetInfoToMarketData(fromAssets, response.result)));
                },
                error => {
                    dispatch(getAssetsFailure(error));
                });
    };
}

export function fetchRecentTradesForAssetWithName(assetName:string) {
    return dispatch => {
        dispatch(assetTradesAreLoading(true, assetName));
        getRecentTradesForAssetWithName(assetName)
            .then(
                response => {
                    let lastTwentyFiveTrades;
                    if (response.result[assetName].length >= 25) {
                        lastTwentyFiveTrades = response.result[assetName].slice(response.result[assetName].length - 25, response.result[assetName].length);
                    } else {
                        lastTwentyFiveTrades = response.result[assetName];
                    }
                    dispatch(getAssetTradesSuccess(lastTwentyFiveTrades));
                },
                error => {
                    dispatch(getAssetTradesFailure(error));
                });
    };
}


function createAssetLookUpTable(fromAssets: object) {
    const assetNames = Object.keys(fromAssets);
    let assetGroups = {};
    for (let i = 0; i < assetNames.length; i++) {
        if (assetNames[i].indexOf(".") == -1) {
            let currentGroupName = fromAssets[assetNames[i]].base;
            let currentGroup = assetGroups[currentGroupName];
            if (currentGroup) {
                currentGroup[assetNames[i]] = fromAssets[assetNames[i]];
            } else {
                console.log("Create *********** " + i);
                let newObject = new Object();
                newObject[assetNames[i]] = fromAssets[assetNames[i]];
                assetGroups[currentGroupName] = newObject;
            }
        }
    }
    return assetGroups;
}


function mapAssetInfoToMarketData(fromAssets: object, marketData: object) {
    const assetNames = Object.keys(fromAssets);
    let assetGroups = {};
    for (let i = 0; i < assetNames.length; i++) {
        console.log(JSON.stringify(marketData[assetNames[i]]));
        fromAssets[assetNames[i]].marketData = marketData[assetNames[i]];
    }
    return createAssetLookUpTable(fromAssets);
}
