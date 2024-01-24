import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('PrimaryButton pressed!');
    }
    return (
        <Pressable onPress={pressHandler} android_ripple={{color: "#640233"}}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .26,
        shadowRadius: 8,
        margin: 4
    },
    buttonText: {
        color: '#ddb52f',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});