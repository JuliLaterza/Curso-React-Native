import { TextInput, Button ,View, StyleSheet, Modal, Image } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    
    return (
        <Modal visible={props.visible} animationType="fade" >
            <View style={styles.inputContainer}>
                <Image style= {styles.image} source={require('../assets/goal.png')}/>
                <TextInput
                    placeholder="Your course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value = {enteredGoalText} // Volvemos al estado anterior para resetear el valor.
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                       <Button title="Add Goal" onPress={addGoalHandler} color={'#A2FF86'}/>
                    </View>

                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={'#D71313'} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        botderBottomColor: '#ccc',
        
      },
      textInput: {
        width: '70%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginRight:8
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
      },
      button:{
        width: '50%',
        marginHorizontal:8,
        height: 30,
      },
      image: {
        marginBottom: 16,
        width: 150,
        height: 150,
      }
});