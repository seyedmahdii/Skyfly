import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./Styles";

const CustomButton = (props) => {
    const { title = "Button title" } = props;
    return (
        <View style={[[props.fullWidth || styles.fullWidth]]}>
            <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.8}
                onPress={props.onPress}
            >
                <Text style={[styles.buttonText, { ...props.style }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomButton;
