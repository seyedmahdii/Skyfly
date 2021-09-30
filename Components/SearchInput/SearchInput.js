import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles";
import { Foundation } from "@expo/vector-icons";

const SearchInput = (props) => {
    return (
        <View style={[styles.container, [props.style]]}>
            <TextInput style={styles.input} placeholder="Search" />
            <Foundation name="filter" size={26} color="#333" />
        </View>
    );
};

export default SearchInput;
