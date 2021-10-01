import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Ticket = ({ from, to, duration, price }) => {
    const [loaded] = useFonts({
        BeVietnamProRegular: require("../../assets/fonts/BeVietnamPro-Regular.ttf"),
        BeVietnamProExtraBold: require("../../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <>
            <View style={styles.header}>
                <View style={styles.row}>
                    <View style={styles.circle(true)}></View>
                    <View style={styles.dash}></View>
                    <View style={styles.dash}></View>
                    <View style={styles.dash}></View>
                    <View style={styles.dash}></View>
                    <Ionicons name="airplane" size={22} color="#fe6262" />
                    <View style={styles.dash}></View>
                    <View style={styles.dash}></View>
                    <View style={styles.dash}></View>
                    <View style={styles.dash}></View>
                    <View style={styles.circle(false)}></View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subHeading(true)}>{from}</Text>
                    <Text style={styles.duration}>{duration}</Text>
                    <Text style={styles.subHeading(false)}>{to}</Text>
                </View>
                <View style={styles.timing}>
                    <View>
                        <Text style={styles.heading(true)}>10:40am</Text>
                        <Text style={styles.subHeading(true)}>
                            8.29.2021, Mon
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.heading(false)}>12:00pm</Text>
                        <Text style={styles.subHeading(false)}>
                            8.30.2021, Tue
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
                <View style={styles.dash}></View>
            </View>
            <View style={styles.footer}>
                <View style={styles.companyWrapper}>
                    <Entypo name="aircraft-take-off" size={22} color="#555" />
                    <Text style={styles.company}>qatar airways</Text>
                </View>
                <Text style={styles.price}>${price}</Text>
            </View>
        </>
    );
};

export default Ticket;
