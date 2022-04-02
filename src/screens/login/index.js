import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import React from "react";
import {Button, Text, View} from "react-native";
import ScreenView from  './view'

class LoginScreen
    extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScreenView ></ScreenView>
                {/*<Button*/}
                {/*    title = 'Go Home screen'*/}
                {/*    onPress = {()=>this.props.navigation.navigate('Home')}/>*/}
            </View>
        );
    }
}

export default LoginScreen
