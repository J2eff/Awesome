import React from "react";
import {Button, Text, View} from "react-native";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Seonoh Home Screen</Text>
                <Button
                    title = 'Go detail screen'
                    onPress = {()=>this.props.navigation.navigate('Details')}/>
            </View>
        );
    }
}

export default HomeScreen
