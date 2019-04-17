const initialState = {
    assets: [],
    isLoading: false,
    error: null
};

export default function(state = initialState, action:any) {
    console.log("Hitting reducer");
    if (action.type === "GET_ASSETS_SUCCESS") {
        return {
            ...state,
            assets: action.assets,
            isLoading: false,
        };
    }
    if (action.type === "ASSETS_ARE_LOADING") {
        return {
            ...state,
            isLoading: action.isLoading,
        };
    }
    if (action.type === "GET_ASSETS_FAILURE") {
        return {
            ...state,
            isLoading: false,
            error: action.error
        };
    }
    return state;
}
