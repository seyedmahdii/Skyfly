import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BG from "../assets/images/Auth-BG.jpg";
import { useFonts } from "expo-font";
import Input from "../Components/Input/Input";
import RadioButton from "../Components/RadioButton/RadioButton";
import * as Linking from "expo-linking";
import Button from "../Components/Button/Button";

const SignupScreen = ({ navigation }) => {
    const [loaded] = useFonts({
        BeVietnamPro: require("../assets/fonts/BeVietnamPro-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <ImageBackground source={BG} style={styles.container}>
            <SafeAreaView style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>Create an account</Text>
                    <Text style={styles.subTitle}>
                        Start your journey with us
                    </Text>
                </View>

                <View style={styles.form}>
                    <Input type="name" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <View style={styles.row}>
                        <RadioButton />
                        <Text style={styles.termsText}>
                            I agree to the{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL(
                                        "https://seyedmahdijalali.ir"
                                    )
                                }
                            >
                                Terms of Service
                            </Text>{" "}
                            and{" "}
                            <Text
                                style={styles.link}
                                onPress={() =>
                                    Linking.openURL(
                                        "https://seyedmahdijalali.ir"
                                    )
                                }
                            >
                                Privacy Policy
                            </Text>
                        </Text>
                    </View>
                    <Button
                        title="Sign up"
                        fullWidth={true}
                        onPress={() => navigation.replace("Panel")}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already have an account?{" "}
                    </Text>
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate("Login")}
                    >
                        Log in
                    </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    box: {
        backgroundColor: "white",
        paddingVertical: 50,
        paddingHorizontal: 20,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22,
        elevation: 5,
    },
    header: {
        marginBottom: 5,
    },
    title: {
        fontSize: 25,
        fontFamily: "BeVietnamPro",
        color: "#222",
    },
    subTitle: {
        color: "#909090",
        fontSize: 15,
    },
    form: {
        marginVertical: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 13,
        marginBottom: 20,
    },
    termsText: {
        marginLeft: 6,
    },
    link: {
        color: "#fe6262",
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    footerText: {
        color: "#8f92a1",
    },
});
