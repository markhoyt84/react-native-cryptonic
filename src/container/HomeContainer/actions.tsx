import { getAllAssets } from "./services";

export function assetsAreLoading(bool: boolean) {
    console.log("All Assets Loading");
    return {
        type: "ASSETS_ARE_LOADING",
        isLoading: bool,
    };
}
export function getAssetsSuccess(assets: Object) {
    return {
        type: "GET_ASSETS_SUCCESS",
        assets,
    };
}
export function getAssetsFailure(error: Error) {
    return {
        type: "GET_ASSETS_FAILURE",
        error
    };
}
export function fetchAllAssets() {
    return dispatch => {
        dispatch(assetsAreLoading(true));
        getAllAssets()
            .then(
                response => {
                    dispatch(getAssetsSuccess(response.result));
                },
                error => {
                    dispatch(getAssetsFailure(error));
                });
    };
}
