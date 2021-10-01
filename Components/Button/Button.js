import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./Styles";

const CustomButton = (props) => {
    const {
        title = "Button title",
        textColor = "white",
        backgroundColor = "#fe6262",
    } = props;
    return (
        <TouchableOpacity
            style={[[props.fullWidth || styles.fullWidth]]}
            onPress={props.onPress}
            activeOpacity={0.8}
        >
            <View
                style={[
                    styles.buttonContainer,
                    [props.style],
                    { backgroundColor: backgroundColor },
                ]}
            >
                <Text style={[styles.buttonText, { color: textColor }]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;
