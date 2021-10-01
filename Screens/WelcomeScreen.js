import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import BG from "../assets/images/Welcome-BG.jpg";
import Button from "../Components/Button/Button.js";

const WelcomeScreen = ({ navigation }) => {
    const [loaded] = useFonts({
        BeVietnamPro: require("../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <ImageBackground source={BG} style={styles.container}>
            <StatusBar style="light" />

            <SafeAreaView style={styles.box}>
                <Text style={styles.title} numberOfLines={3}>
                    Travel with comfort and safety!
                </Text>
                <Button
                    title="sign up"
                    fullWidth={false}
                    onPress={() => navigation.replace("Signup")}
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    box: {
        margin: 30,
        marginBottom: 100,
    },
    title: {
        color: "white",
        fontSize: 55,
        fontFamily: "BeVietnamPro",
        marginBottom: 20,
        textShadowColor: "gray",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
});
