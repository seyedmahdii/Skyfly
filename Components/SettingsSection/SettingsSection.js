import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import { useFonts } from "expo-font";

const SettingsSection = ({ children, title }) => {
    const [loaded] = useFonts({
        BeVietnamProLight: require("../../assets/fonts/BeVietnamPro-Light.ttf"),
        BeVietnamProRegular: require("../../assets/fonts/BeVietnamPro-Regular.ttf"),
        BeVietnamProBold: require("../../assets/fonts/BeVietnamPro-Bold.ttf"),
        BeVietnamProExtraBold: require("../../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>{children}</View>
        </View>
    );
};

export default SettingsSection;
