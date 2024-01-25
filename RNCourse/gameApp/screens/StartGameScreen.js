import { TextInput, View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {

    return (
        <View style={styles.inputContainer}>
            <Text>The Game Screen!</Text>
            <TextInput
                //placeholder="Enter a number"
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Start Game</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset Game</PrimaryButton>
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