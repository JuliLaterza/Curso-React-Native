import {TextInput, StyleSheet, Button, View} from 'react-native'

function GoalInput () {
    render(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder='Ingrese su objetivo'
            onChangeText={goalInputHandler}
            />
            <Button title='Agregar' onPress={addGoalHandler}/>
        </View>
    )
}

export default GoalInput; 

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: '#cccccc',
        width:'70%',
        marginRight: 4,
        padding: 8
      },
      inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
});

