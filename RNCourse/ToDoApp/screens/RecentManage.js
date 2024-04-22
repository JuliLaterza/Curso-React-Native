import { Text, StyleSheet, View } from 'react-native';


function RecentManage() {
    return (
    <View style={styles.container}>
         <Text style={styles.text}>RecentManage</Text>
    </View>
    );
}


export default RecentManage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
});