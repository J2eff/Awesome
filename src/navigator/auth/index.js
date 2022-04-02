import React, {useCallback} from 'react';
import {
    Alert
} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {LoginScreen,HomeScreen} from "@screens";
import {useSelector} from "react-redux";

const Stack = createStackNavigator();

export default function AuthNavigator() {
    const {navigate} = useNavigation();
    const {isSignIn, isSignUp} = useSelector(state => state.user);
    if (!isSignIn){
        Alert.alert("sdfasdf")
    }
    return (
            <Stack.Navigator>
                {!isSignIn && (<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}
                />)}

                {isSignIn && (<Stack.Screen name="Home" component={HomeScreen} />) }

            </Stack.Navigator>

        )
}
