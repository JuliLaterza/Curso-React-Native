import { StyleSheet, Text } from 'react-native';


function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    );
}


export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        borderRadius: 12,
    }
});