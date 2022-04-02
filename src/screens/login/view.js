import React, {useEffect,useCallback} from 'react';
import {TouchableOpacity, View, Text, Alert,StyleSheet} from 'react-native';
import appleAuth ,{ AppleButton
} from '@invertase/react-native-apple-authentication';
import {api} from '@utils';
import {useMutation} from 'react-query';
import jwtDecode from 'jwt-decode';

interface tokenType {
    aud: string,
    auth_time: number,
    c_hash: string,
    email: string,
    email_verified: string,
    exp: number,
    iat: number,
    is_private_email: string,
    iss: string,
    nonce: string,
    nonce_supported: boolean,
    sub: string
}

export default function ScreenView(
) {

    const {mutateAsync} = useMutation(payload =>
        api.post('/users', payload),
    );

    const handleAppleLogin = useCallback(async () => {
        let credentialState, token;
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });
            token = appleAuthRequestResponse.identityToken;
            credentialState = await appleAuth.getCredentialStateForUser(
                appleAuthRequestResponse.user,
            );
        } catch (error) {

            return;
        }
        Alert.alert(token)
        if (credentialState === appleAuth.State.AUTHORIZED && token) {

            const result = await mutateAsync({
                data: token,
                identity_provider: 'apple'});

        }
    }, [mutateAsync]);

    useEffect(() => {
        // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
        return appleAuth.onCredentialRevoked(async () => {
            console.warn('If this function executes, User Credentials have been Revoked');
        });
    }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

    return (
        <View>
            <AppleButton
                buttonStyle={AppleButton.Style.BLACK}
                buttonType={AppleButton.Type.SIGN_IN}
                style={{
                    width: 350, // You must specify a width
                    height: 45, // You must specify a height
                }}
                onPress={handleAppleLogin}
            />
        </View>
    )
}



