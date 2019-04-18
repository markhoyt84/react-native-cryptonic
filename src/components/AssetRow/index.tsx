import * as React from "react";
import {
    Text,
    View,
    Button,
    ActivityIndicator
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import styles from "./styles";

export interface Props {
    asset: object;
    recentTradeData: [];
    loadRecentTradeData: Function;
    viewingCurrentAssetTrades: string;
}

interface State {
    selectedIndex: number;
}

class AssetRow extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    _handleIndexChange = (index: number) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    };

    render() {
        const currentAssetSet = this.props.asset;
        const recentTradeData = this.props.recentTradeData || [];
        const viewingTradesForAssetName = this.props.viewingCurrentAssetTrades;
        const { selectedIndex } = this.state;

        let isOpen = false;
        let currentAsset:any;
        let currentAssetMarketData:any;
        let tradablePairs:any;
        let lastTwentyFiveTradeValues = recentTradeData.map((trade) => { return trade[0]});
        if (currentAssetSet) {
            tradablePairs = Object.keys(currentAssetSet);
            currentAsset = currentAssetSet[tradablePairs[selectedIndex]];
            currentAssetMarketData = currentAsset.marketData;
            isOpen = (viewingTradesForAssetName == tradablePairs[selectedIndex]);
        }

        return (
            <View style={styles.container }>
                <Text adjustsFontSizeToFit style={styles.assetLabel}>
                    Asset Name: { currentAsset.base }
                </Text>
                <Text style={styles.descriptionLabel}>
                    CurrentTradingPair: { tradablePairs[selectedIndex] }
                </Text>
                <Text style={styles.descriptionLabel}>
                    Opening Price: ${ currentAssetMarketData ? currentAssetMarketData.o : '0.00' }
                </Text>
                {tradablePairs != null && tradablePairs.length > 0 &&
                <SegmentedControlTab
                    values={tradablePairs}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this._handleIndexChange}
                />
                }
                <Button
                    title={"View Recent Trades"}
                    onPress={() => {
                        this.props.loadRecentTradeData(tradablePairs[selectedIndex]);
                    }}
                />
                <View style={isOpen ? styles.viewChartOpen : styles.viewChartClosed}>
                    {recentTradeData.length == 0 &&
                        <ActivityIndicator size='large'/>
                    }
                    {recentTradeData.length > 0 &&
                    <LineChart
                        data={{
                            labels: ['Last 25 Trades'],
                            datasets: [{
                                data: lastTwentyFiveTradeValues
                            }]
                        }}
                        width={Dimensions.get('window').width - 20}
                        height={220}
                        yAxisLabel={'$'}
                        chartConfig={{
                            backgroundColor: '#000000',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                    }
                </View>
            </View>
        );
    }
}

export default AssetRow;
