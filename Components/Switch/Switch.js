import React from "react";
import { View, Animated, Pressable } from "react-native";
import styles from "./Styles";

const Switch = ({ value, setter }) => {
    return (
        <Pressable
            style={styles.container(value)}
            onPress={() => setter(!value)}
        >
            <View style={styles.circle(value)}></View>
        </Pressable>
    );
};

export default Switch;
