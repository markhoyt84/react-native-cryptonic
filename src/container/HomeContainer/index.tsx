import * as React from "react";
import { connect } from "react-redux";
import Home from "../../screens/Home";
import { fetchAllAssets, fetchRecentTradesForAssetWithName } from "./actions";

export interface Props {
    navigation: any;
    fetchAllAssets: Function;
    fetchAssetTrades: Function;
    assets: Object;
    recentTradeData: [];
    viewingCurrentAssetTrades: string;
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
        return <Home navigation={this.props.navigation} assets={this.props.assets} loadRecentTradeDataForKeyPair={this._loadRecentTradeData} recentTradeData={this.props.recentTradeData} viewingCurrentAssetTrades={this.props.viewingCurrentAssetTrades}/>;
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        fetchAllAssets: () => dispatch(fetchAllAssets()),
        fetchAssetTrades: (withAssetName: string) => dispatch(fetchRecentTradesForAssetWithName(withAssetName))
    }
}


const mapStateToProps = state => ({
    assets: state.homeReducer.assets,
    recentTradeData: state.homeReducer.assetTrades,
    viewingCurrentAssetTrades: state.homeReducer.viewingCurrentAssetTrades,
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
