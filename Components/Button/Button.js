import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./Styles";
import { AntDesign } from "@expo/vector-icons";

const CustomButton = (props) => {
    const {
        title = "Button title",
        textColor = "white",
        backgroundColor = "#fe6262",
        fontSize = 20,
        iconSize = 20,
        arrowRight,
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
                <Text
                    style={[
                        styles.buttonText,
                        { color: textColor, fontSize: fontSize },
                    ]}
                >
                    {title}
                    {arrowRight && (
                        <>
                            &nbsp; &nbsp;
                            <AntDesign
                                name="right"
                                size={iconSize}
                                color={textColor}
                            />
                        </>
                    )}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;
