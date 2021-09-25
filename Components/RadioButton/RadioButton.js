import React, { useState } from "react";
import { Pressable, View } from "react-native";
import styles from "./Styles";

const RadioButton = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Pressable
            style={styles.container}
            onPress={() => setIsSelected(!isSelected)}
        >
            {isSelected && <View style={styles.active}></View>}
        </Pressable>
    );
};

export default RadioButton;
