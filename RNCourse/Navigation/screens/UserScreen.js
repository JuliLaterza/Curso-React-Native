import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello, <Text style={styles.blueText}>User</Text>!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
    blueText: {
        color: 'navy',
    },
});

export default UserScreen;
