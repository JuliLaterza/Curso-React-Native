import { Text, StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';


function RecentExpenses() {
    return <ExpensesOutput expensesPeriod="Last 7 days" />;
}


export default RecentExpenses;

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