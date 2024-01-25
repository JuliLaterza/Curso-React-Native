import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function GameScreen () {
    return (
        <View style={styles.container}>
            <Text>VAMOS LA CONCHA DE TU HERMANA ALL BOYS</Text>
        </View>
    );
};

export default GameScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});