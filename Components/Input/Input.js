import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Input = ({ type, placeholder }) => {
    const [isPWVisible, setIsPWVisible] = useState(false);

    return (
        <View style={styles.container}>
            {type === "email" && (
                <FontAwesome5 name="envelope" size={20} color="#8f92a1" />
            )}
            {type === "name" && (
                <Feather name="user" size={20} color="#8f92a1" />
            )}
            {type === "password" && (
                <Feather name="lock" size={20} color="#8f92a1" />
            )}

            <TextInput
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={type === "password" ? !isPWVisible : false}
                maxLength={40}
            />

            {isPWVisible ? (
                <Feather
                    name="eye-off"
                    size={20}
                    color="#8f92a1"
                    onPress={() => setIsPWVisible(!isPWVisible)}
                    style={type !== "password" && styles.hide}
                />
            ) : (
                <Feather
                    name="eye"
                    size={22}
                    color="#8f92a1"
                    onPress={() => setIsPWVisible(!isPWVisible)}
                    style={type !== "password" && styles.hide}
                />
            )}
        </View>
    );
};

export default Input;
