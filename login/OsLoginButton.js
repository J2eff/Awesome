import React from 'react';
import type {Node} from 'react';
import {

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


const OsLoginButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#FFFFFF",
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
export default OsLoginButton
