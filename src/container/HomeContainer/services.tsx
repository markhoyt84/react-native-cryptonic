export function getAllAssets() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch("https://api.kraken.com/0/public/AssetPairs", requestOptions).then(handleResponse);
}

export function getTickerInformationForAssets(assetNames:string) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`https://api.kraken.com/0/public/Ticker?pair=${assetNames}`, requestOptions).then(handleResponse);
}

export function getRecentTradesForAssetWithName(assetName:string) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`https://api.kraken.com/0/public/Trades?pair=${assetName}`, requestOptions).then(handleResponse);
}

function handleResponse(response:any) {
    return response.text().then((text:string) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                location.reload(true);
            }

            const error = (data && data.error) || response.statusText;
            return error;
        }
        return data;
    });
}


