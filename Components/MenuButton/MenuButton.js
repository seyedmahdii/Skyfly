import React from "react";
import { StyleSheet, Pressable, View } from "react-native";

const MenuButton = (props) => {
    return (
        <Pressable {...props}>
            <View
                style={{
                    height: 3,
                    width: 32,
                    backgroundColor: "#333",
                    borderRadius: 10,
                    marginBottom: 3,
                }}
            ></View>
            <View
                style={{
                    height: 3,
                    width: 23,
                    backgroundColor: "#333",
                    borderRadius: 10,
                    marginVertical: 3,
                }}
            ></View>
            <View
                style={{
                    height: 3,
                    width: 32,
                    backgroundColor: "#333",
                    borderRadius: 10,
                    marginVertical: 3,
                }}
            ></View>
        </Pressable>
    );
};

export default MenuButton;

const styles = StyleSheet.create({});
