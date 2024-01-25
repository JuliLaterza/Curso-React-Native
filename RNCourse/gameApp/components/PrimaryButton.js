import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        onPress();
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            style={({pressed}) => pressed
            ? [styles.buttonInnercontainer,styles.pressed] // Si está presionado, cambia el estilo + presioanado
            : styles.buttonInnercontainer} // Si no esta presionado, deja el que esta por defecto
            onPress={onPress}
            android_ripple={{color: "#640233"}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnercontainer:{
        backgroundColor: '#72063c', // '#72063c'
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: '#ddb52f',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pressed: {
        backgroundColor: '#640233',
        opacity: 0.75,
    },
});