import { TextInput, View, Text, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen( { onPickNumber } ) {
    
    const [enteredValue, setEnteredValue] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function resetInputHandler() {
        setEnteredValue('');
    }

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredValue);

        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        console.log(choosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <Text>The Game Screen!</Text>
            <TextInput
                //placeholder="Enter a number"
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                onChangeText={numberInputHandler}
                value={enteredValue}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
            
        </View>
    );
}


export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .26,
        shadowRadius: 8,
        marginHorizontal: 16,
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginVertical: 8,
    },
});