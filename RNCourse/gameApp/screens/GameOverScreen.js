import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxMessage}>
                <Text style={styles.texto} >well done, u tried bro</Text>
            </View>
        </View>
    );
};

export default GameOverScreen;



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    boxMessage: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    texto: {
        fontSize: 20,
    }
});