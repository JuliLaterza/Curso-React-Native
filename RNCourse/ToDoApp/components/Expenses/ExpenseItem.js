import { Pressable, View, Text, StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({description,amount,date}){
    const navigation = useNavigation();

    function expensePressHandler(){
        navigation.navigate("ManageExpense")
    }



    return (
    <Pressable onPress={expensePressHandler} style={ ({ pressed }) => pressed && style.pressed } android_ripple>
        <View style={style.extenseItem}>
            <View >
                <Text style={[style.textBase, style.description]} >{description}</Text>
                <Text style={style.textBase}>{getFormattedDate(date)}</Text>
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
    pressed: {
        opacity: 0.70
    },
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
        color: GlobalStyles.colors.azul
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
        borderRadius: 4,
    },
    amount: {
        color: GlobalStyles.colors.celes_oscu,
        fontWeight: 'bold'
    }
})