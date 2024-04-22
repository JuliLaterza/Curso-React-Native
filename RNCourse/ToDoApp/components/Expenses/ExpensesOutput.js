import { View, Text, FlatList } from 'react-native';


function ExpensesOutput(){
    return (
        <View>
            <View>
                <Text>Ultimos 7 días</Text>
                <Text>$10</Text>
            </View>
            <FlatList />
        </View>
    )
}

export default ExpensesOutput;