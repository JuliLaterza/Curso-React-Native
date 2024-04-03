import { Pressable  } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

function IconButton({ icon, color, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 10,
    }
});