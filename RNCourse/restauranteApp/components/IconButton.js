import { Pressable  } from "react-native";
import { Ionicons } from '@expo/vector-icons';


function IconButton () {
    return (
        <Pressable>
            <Ionicons name="ios-star" size={24} color="black" />
        </Pressable>
    );
}

export default IconButton;