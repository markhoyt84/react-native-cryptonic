import * as React from "react";
import "react-native";
import Home from "../index";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const loadRecentTradeDataForKeyPair = jest.fn();
const viewingCurrentAssetTrades = "";
const assets = {};

it("renders correctly", () => {
    const tree = renderer.create(<Home assets={assets} loadRecentTradeDataForKeyPair={loadRecentTradeDataForKeyPair} recentTradeData={[]} viewingCurrentAssetTrades={viewingCurrentAssetTrades} loadingAssets={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
