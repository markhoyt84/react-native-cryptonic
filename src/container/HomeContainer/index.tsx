import * as React from "react";
import { connect } from "react-redux";
import Home from "../../screens/Home";
import { fetchAllAssets } from "./actions";

export interface Props {
    navigation: any;
    fetchAllAssets: Function;
    assets: Object;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.fetchAllAssets();
    }

    render() {
        alert(JSON.stringify(this.props));
        return <Home navigation={this.props.navigation} assets={this.props.assets} />;
    }
}

function bindAction(dispatch) {
    return {
        fetchAllAssets: () => dispatch(fetchAllAssets()),
    };
}

const mapStateToProps = state => ({
    assets: state.homeReducer.assets,
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
