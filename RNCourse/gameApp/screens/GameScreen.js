import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Title from '../components/Title';

function GameScreen () {
    return (
        <View style={styles.screen}>
            <Title>Game Screen</Title> 

            <View>
                <Text>
                    Higher or lower?
                </Text>
            </View>
        </View>
    );
};

export default GameScreen;



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    }
});