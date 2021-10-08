import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import profileImg from "../assets/images/Profile.jpg";
import { useFonts } from "expo-font";
import Button from "../Components/Button/Button";
import SettingsSection from "../Components/SettingsSection/SettingsSection";
import SettingsItem from "../Components/SettingsItem/SettingsItem";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Switch from "../Components/Switch/Switch";

const SettingsScreen = ({ navigation }) => {
    const [loaded] = useFonts({
        BeVietnamProLight: require("../assets/fonts/BeVietnamPro-Light.ttf"),
        BeVietnamProRegular: require("../assets/fonts/BeVietnamPro-Regular.ttf"),
        BeVietnamProBold: require("../assets/fonts/BeVietnamPro-Bold.ttf"),
        BeVietnamProExtraBold: require("../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    });
    const [darkMode, setDarkMode] = useState(false);

    if (!loaded) {
        return null;
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={profileImg} style={styles.profileImg} />
                <Text style={styles.name}>seyed mahdi jalali</Text>
                <Text style={styles.email}>seyedmahdijalali2020@gmail.com</Text>
                <Button
                    title="Edit Profile"
                    arrowRight={true}
                    onPress={() => navigation.navigate("EditProfile")}
                    fontSize={18}
                />
            </View>
            <SettingsSection title="content">
                <SettingsItem
                    Icon={Ionicons}
                    iconInfo={{
                        name: "heart-outline",
                        size: 28,
                        color: "#737373",
                    }}
                    title="Favorites"
                >
                    <AntDesign name="right" size={20} color="#333" />
                </SettingsItem>
                <SettingsItem
                    Icon={MaterialIcons}
                    iconInfo={{ name: "history", size: 28, color: "#737373" }}
                    title="History"
                >
                    <AntDesign name="right" size={20} color="#333" />
                </SettingsItem>
            </SettingsSection>

            <SettingsSection title="preferences">
                <SettingsItem
                    Icon={Ionicons}
                    iconInfo={{
                        name: "heart-outline",
                        size: 28,
                        color: "#737373",
                    }}
                    title="Language"
                >
                    <View style={{ flexDirection: "row" }}>
                        <Text
                            style={{
                                color: "#8c8c8c",
                                fontSize: 15,
                                marginRight: 3,
                            }}
                        >
                            English
                        </Text>
                        <AntDesign name="right" size={20} color="#333" />
                    </View>
                </SettingsItem>
                <SettingsItem
                    Icon={Ionicons}
                    iconInfo={{
                        name: "moon-outline",
                        size: 28,
                        color: "#737373",
                    }}
                    title="Dark Mode"
                >
                    <Switch value={darkMode} setter={setDarkMode} />
                </SettingsItem>
                <SettingsItem
                    Icon={AntDesign}
                    iconInfo={{ name: "wifi", size: 28, color: "#737373" }}
                    title="Download via Wi-Fi"
                >
                    <AntDesign name="right" size={20} color="#333" />
                </SettingsItem>
            </SettingsSection>

            <SettingsSection title="help">
                <SettingsItem
                    Icon={Ionicons}
                    iconInfo={{
                        name: "chatbubble-ellipses-outline",
                        size: 28,
                        color: "#737373",
                    }}
                    title="Ask a Question"
                >
                    <AntDesign name="right" size={20} color="#333" />
                </SettingsItem>
                <SettingsItem
                    Icon={AntDesign}
                    iconInfo={{
                        name: "questioncircleo",
                        size: 28,
                        color: "#737373",
                    }}
                    title="Skyfly FAQ"
                >
                    <AntDesign name="right" size={20} color="#333" />
                </SettingsItem>
                <SettingsItem
                    Icon={AntDesign}
                    iconInfo={{ name: "Safety", size: 28, color: "#737373" }}
                    title="Privacy Policy"
                >
                    <AntDesign name="right" size={20} color="#333" />
                </SettingsItem>
            </SettingsSection>
        </ScrollView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fcfcfc",
        flex: 1,
    },
    header: {
        backgroundColor: "white",
        padding: 7,
        paddingVertical: 15,
        alignItems: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 80,
        marginBottom: 10,
    },
    name: {
        fontSize: 21,
        fontFamily: "BeVietnamProBold",
        textTransform: "capitalize",
        color: "#222",
        marginBottom: 3,
    },
    email: {
        color: "#808080",
        fontFamily: "BeVietnamProRegular",
        fontSize: 15,
        marginBottom: 14,
    },
});
