import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/style';


function ExpensesSummary( { expenses, periodName } ) {
    
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);
    
    
    return (
    <View style={style.container} >
        <Text style={style.period} >{periodName}</Text>
        <Text style={style.sum} >${expensesSum.toFixed(2)}</Text>
    </View>
    );
}

export default ExpensesSummary;


const style = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.grey,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    period:{
        fontSize: 16,
        color: GlobalStyles.colors.azul,
        fontWeight: 'bold'
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.celes_oscu
    }
})