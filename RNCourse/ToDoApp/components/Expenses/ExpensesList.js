import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";


function renderExpenseItem(itemData) {
    return (
        <ExpenseItem {...itemData.item} /> // spread operato. Traeme TODO
    )
}


function ExpensesList({ expenses }) {
    return <FlatList 
        data={expenses}
        renderItem={renderExpenseItem} 
        keyExtractor={(item) => item.id } />
}

export default ExpensesList;

const style = StyleSheet.create({
    
})