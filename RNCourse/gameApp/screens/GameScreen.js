import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function generateRandomNumber(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min; // Con este codigo genero un numero entero.

    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

function GameScreen ({userNumber}) {
    const initialGuess = generateRandomNumber(1, 100, userNumber );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Game Screen</Title>

            <PrimaryButton onPress={generateRandomNumber}>
                Generar Numero
            </PrimaryButton>
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