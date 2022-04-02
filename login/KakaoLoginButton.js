import React from 'react';
import type {Node} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const login =  ()=>  {

}

const KakaoLoginButton = () => (
    <TouchableOpacity onPress={login} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{"카카오로 시작하기"}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#FADF4B",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#1C1C1C",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});
export default KakaoLoginButton
