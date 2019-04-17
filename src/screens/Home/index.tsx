import * as React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    List,
    ListItem
} from "native-base";

import styles from "./styles";
export interface Props {
    navigation: any;
    assets: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
    render() {
        console.log("*******************");
        console.log(this.props);
        alert(this.props);
        const assetKeys = Object.keys(this.props.assets);
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        {assetKeys.map((item, i) => (
                            <ListItem
                                key={i}
                                // onPress={() =>
                                //     // this.props.navigation.navigate("BlankPage", {
                                //     //     name: { i }
                                //     // })
                                // }
                            >
                                <Text>{JSON.stringify(this.props.assets[item])}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Home;
