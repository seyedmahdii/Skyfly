import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./Styles";

const CustomButton = (props) => {
    const { title = "Button title" } = props;
    return (
        <TouchableOpacity
            style={[[props.fullWidth || styles.fullWidth]]}
            onPress={props.onPress}
            activeOpacity={0.8}
        >
            <View style={[styles.buttonContainer, [props.style]]}>
                <Text style={[styles.buttonText, { ...props.style }]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;
