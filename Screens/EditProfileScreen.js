import React, { useLayoutEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Pressable,
    TextInput,
} from "react-native";
import profile from "../assets/images/Profile.jpg";
import { useFonts } from "expo-font";

const EditProfileScreen = ({ navigation }) => {
    const [loaded] = useFonts({
        BeVietnamProRegular: require("../assets/fonts/BeVietnamPro-Regular.ttf"),
        BeVietnamProBold: require("../assets/fonts/BeVietnamPro-Bold.ttf"),
    });

    // Header Styles
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: "#f2f2f2",
            },
            headerRight: () => (
                <Text
                    style={{
                        marginRight: 15,
                        fontSize: 18,
                        color: "#fe6262",
                        fontWeight: "bold",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    Done
                </Text>
            ),
            headerTitle: "Profile",
        });
    }, []);

    if (!loaded) {
        return null;
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={profile} style={styles.image} />
                <Pressable
                    onPress={() => alert("ok. let's change profile picture!")}
                >
                    <Text style={styles.changeImgText}>
                        Change profile picture
                    </Text>
                </Pressable>
            </View>
            <View style={styles.inputsContainer}>
                <TextInput
                    placeholder="First Name"
                    style={styles.input}
                    defaultValue="Seyed Mahdi"
                />
                <TextInput
                    placeholder="Last Name"
                    style={styles.input}
                    defaultValue="Jalali"
                />
                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    defaultValue="seyedmahdijalali2020@gmail.com"
                    style={styles.input}
                />
            </View>
        </ScrollView>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    header: {
        alignItems: "center",
        marginVertical: 10,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 70,
    },
    changeImgText: {
        marginTop: 8,
        color: "#404040",
        fontSize: 16,
        fontFamily: "BeVietnamProBold",
    },
    inputsContainer: {
        marginTop: 35,
    },
    input: {
        borderBottomColor: "#808080",
        borderBottomWidth: 2,
        padding: 3,
        marginBottom: 25,
        fontSize: 15,
        fontFamily: "BeVietnamProRegular",
        color: "#333",
    },
});
