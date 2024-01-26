import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

export default NumberContainer;


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#72063c',
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: '#72063c',
        fontSize: 24,
    }
});