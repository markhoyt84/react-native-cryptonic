import * as React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Body,
    List
} from "native-base";
import { ActivityIndicator } from 'react-native';

import styles from "./styles";
import AssetRow from "../../components/AssetRow";
export interface Props {
    assets: any;
    viewingCurrentAssetTrades: string;
    recentTradeData: [];
    loadRecentTradeDataForKeyPair: Function;
    loadingAssets: boolean;
}
export interface State {}
class Home extends React.Component<Props, State> {

    _loadRecentTradeData = (forKeyPairName:string) => {
        this.props.loadRecentTradeDataForKeyPair(forKeyPairName);
    };

    render() {
        const assetKeys = Object.keys(this.props.assets);
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                    <Title>Cryptonic Markets</Title>
                    </Body>
                </Header>
                <Content>
                    { this.props.loadingAssets &&
                    <ActivityIndicator
                        size='large'
                        style={styles.loadingIndicator}
                    />
                    }
                    <List>
                        {assetKeys.map((item, i) => (
                            <AssetRow
                                asset={this.props.assets[item]}
                                key={item}
                                loadRecentTradeData={this._loadRecentTradeData}
                                recentTradeData={this.props.recentTradeData}
                                viewingCurrentAssetTrades={this.props.viewingCurrentAssetTrades}
                            />
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Home;
