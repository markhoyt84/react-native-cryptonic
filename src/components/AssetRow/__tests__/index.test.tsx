import * as React from "react";
import "react-native";
import Home, {default as AssetRow} from "../index";

import * as renderer from "react-test-renderer";

const loadRecentTradeData = jest.fn();
const viewingCurrentAssetTrades = "XXRPXXBT";
const key = "XXRPXXBT";
const asset = {
    XXRPXXBT: {
            altname: 'XRPXBT',
            wsname: 'XRP/XBT',
            aclass_base: 'currency',
            base: 'XXRP',
            marketData:
                {
                    a: [ '0.000064540', '82', '82.000' ],
                    b: [ '0.000064520', '133', '133.000' ],
                    c: [ '0.000064520', '78.24731849' ],
                    v: [ '62230.34154864', '2146763.84366635' ],
                    p: [ '0.000064451', '0.000063446' ],
                    t: [ 70, 1343 ],
                    l: [ '0.000064190', '0.000061670' ],
                    h: [ '0.000064890', '0.000065460' ],
                    o: '0.000064220'
                }
    },
    XXRPZCAD: {
            altname: 'XRPCAD',
            wsname: 'XRP/CAD',
            aclass_base: 'currency',
            base: 'XXRP',
            marketData:
                {
                    a: [ '0.45965000', '295', '295.000' ],
                    b: [ '0.45650000', '133', '133.000' ],
                    c: [ '0.46445000', '560.48311500' ],
                    v: [ '3614.00475523', '148109.70996547' ],
                    p: [ '0.45780850', '0.44328552' ],
                    t: [ 10, 211 ],
                    l: [ '0.45364000', '0.43540000' ],
                    h: [ '0.46445000', '0.46445000' ],
                    o: '0.45461000'
                }
    }
};
const recentTradeData = [];

it("renders correctly", () => {
    const tree = renderer.create(<AssetRow asset={asset} key={key} loadRecentTradeData={loadRecentTradeData} recentTradeData={[]} viewingCurrentAssetTrades={viewingCurrentAssetTrades}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
