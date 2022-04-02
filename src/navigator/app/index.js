import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
const Stack = createStackNavigator();
import {LoginScreen,DetailScreen} from '@screens'
import {AuthNavigator} from "@navigator";
import {useSelector} from 'react-redux';

export default function AppNavigator() {
    const {isSignIn} = useSelector(state => state.user);
    return (
        <Stack.Navigator>
            {!isSignIn&&<Stack.Screen
                name="Auth"
                component={AuthNavigator}
                options={{headerShown: false}}
            />}
            <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
