import { Pressable  } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

function IconButton ({icon, color, onPress}) {
    return (
        <Pressable style={styles.button}>
            <Ionicons name="star-outline" size={24} color="#ffbe0b" />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 10,
    }
});