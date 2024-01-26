import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import NumberContainer from '../components/NumberContainer';

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




function GameScreen ({userNumber, onGameOver}) {
    
    let maxBoundary = 100;
    let minBoundary = 1;

    const initialGuess = generateRandomNumber(
        minBoundary, 
        maxBoundary, 
        userNumber );
    
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {

        if ( (direction === 'lower' && currentGuess < userNumber) ||
             (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert(
                'Don\'t lie!',
                'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        };
                

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const nextNumber = generateRandomNumber(minBoundary,
             maxBoundary, 
             currentGuess);
        setCurrentGuess(nextNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Game Screen</Title>

            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,"lower")}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,"greater")}>+</PrimaryButton>
                </View>
                
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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
});