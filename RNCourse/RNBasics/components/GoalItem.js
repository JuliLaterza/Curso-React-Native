import { View, Text, StyleSheet, Pressable} from 'react-native'


function GoalItem( props ) {
    return (

        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.textGoal}>{props.text}</Text>
            </View>
        </Pressable>
    )
};

export default GoalItem


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      textGoal:{
        color: 'white'
      }
});