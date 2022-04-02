import React from "react";
import {Button, Text, View} from "react-native";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Seonoh Detail Screen</Text>
                <Button
                    title = 'Go Home screen'
                    onPress = {()=>this.props.navigation.navigate('Auth')}/>
            </View>
        );
    }
}

export default DetailsScreen
