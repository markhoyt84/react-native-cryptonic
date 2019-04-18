import * as React from "react";
import { connect } from "react-redux";
import Home from "../../screens/Home";
import { fetchAllAssets, fetchRecentTradesForAssetWithName } from "./actions";

export interface Props {
    fetchAllAssets: Function;
    fetchAssetTrades: Function;
    assets: object;
    recentTradeData: [];
    viewingCurrentAssetTrades: string;
    isLoading: boolean;
}

export interface State {}

class HomeContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.fetchAllAssets();
    }

    _loadRecentTradeData = (forKeyPairName:string) => {
        this.props.fetchAssetTrades(forKeyPairName);
    };

    render() {
        return <Home assets={this.props.assets} loadRecentTradeDataForKeyPair={this._loadRecentTradeData} recentTradeData={this.props.recentTradeData} viewingCurrentAssetTrades={this.props.viewingCurrentAssetTrades} loadingAssets={this.props.isLoading}/>;
    }
}

export function mapDispatchToProps(dispatch:any) {
    return {
        fetchAllAssets: () => dispatch(fetchAllAssets()),
        fetchAssetTrades: (withAssetName: string) => dispatch(fetchRecentTradesForAssetWithName(withAssetName))
    }
}

const mapStateToProps = (state:any) => ({
    assets: state.homeReducer.assets,
    recentTradeData: state.homeReducer.assetTrades,
    viewingCurrentAssetTrades: state.homeReducer.viewingCurrentAssetTrades,
    isLoading: state.homeReducer.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
