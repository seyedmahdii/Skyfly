import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";

const Information = ({ city, country, continent, desc }) => {
    const [loaded] = useFonts({
        BeVietnamProLight: require("../../assets/fonts/BeVietnamPro-Light.ttf"),
        BeVietnamProRegular: require("../../assets/fonts/BeVietnamPro-Regular.ttf"),
        BeVietnamProExtraBold: require("../../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <>
            <View>
                <Text style={styles.place}>
                    {city}, {country}
                </Text>
            </View>
            <Text style={styles.desc}>{desc}</Text>
            <View style={styles.features}>
                <View style={styles.feature}>
                    <Text style={styles.featureValue}>{continent}</Text>
                    <View style={styles.featureTieleWrapper}>
                        <Entypo name="globe" size={17} color="#0767a6" />
                        <Text style={styles.featureTitle}>Continent</Text>
                    </View>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureValue}>625 KM</Text>
                    <View style={styles.featureTieleWrapper}>
                        <Ionicons
                            name="location-sharp"
                            size={20}
                            color="#fe6262"
                        />
                        <Text style={styles.featureTitle}>Distance</Text>
                    </View>
                </View>
                <View style={styles.feature}>
                    <Text style={styles.featureValue}>625 KM</Text>
                    <View style={styles.featureTieleWrapper}>
                        <Ionicons name="sunny" size={22} color="#f79807" />
                        <Text style={styles.featureTitle}>sunny</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Information;
