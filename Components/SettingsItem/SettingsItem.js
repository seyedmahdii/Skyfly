import React, { Children } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import styles from "./Styles";
import { useFonts } from "expo-font";

const SettingsItem = ({ Icon, iconInfo, title, children }) => {
    const [loaded] = useFonts({
        BeVietnamProRegular: require("../../assets/fonts/BeVietnamPro-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.iconWrapper}>
                        <Icon
                            name={iconInfo.name}
                            size={iconInfo.size}
                            color={iconInfo.color}
                        />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.right}>{children}</View>
            </View>
        </TouchableNativeFeedback>
    );
};

export default SettingsItem;
