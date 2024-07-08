import { Pressable, View, Text, StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/style";

function ExpenseItem({description,amount,date}){
    return (
    <Pressable>
        <View style={style.extenseItem}>
            <View >
                <Text style={[style.textBase, style.description]} >{description}</Text>
                <Text style={style.textBase}>{date.toString()}</Text>
            </View>
            <View  style = {style.amountContainer} >
                <Text style = {style.amount}>{amount}</Text>
            </View>
        </View>
    </Pressable>
    )
}

export default ExpenseItem;

const style = StyleSheet.create({
    extenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.verde,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        elevation: 3,
        shadowColor: GlobalStyles.colors.azul,
        shadowRadius: 4,
        shadowOffset: {width:1, height:1},
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.celes_oscu
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.celes_oscu,
        fontWeight: 'bold'
    }
})