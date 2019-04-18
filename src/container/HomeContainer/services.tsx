import {AppConstants} from "../../constants/app.constants";

export function getAllAssets() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(AppConstants.assetPairs, requestOptions).then(handleResponse);
}

export function getTickerInformationForAssets(assetNames:string) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(AppConstants.ticker + assetNames, requestOptions).then(handleResponse);
}

export function getRecentTradesForAssetWithName(assetName:string) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(AppConstants.trades + assetName, requestOptions).then(handleResponse);
}

function handleResponse(response:any) {
    return response.text().then((text:string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.error) || response.statusText;
            return error;
        }
        return data;
    });
}


