import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Styles";

const CustomButton = (props) => {
    const { title = "Button title" } = props;
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <Text style={[styles.buttonText, { ...props.style }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
