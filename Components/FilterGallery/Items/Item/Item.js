import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./Styles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
    const [loaded] = useFonts({
        BeVietnamProExtraBold: require("../../../../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
        BeVietnamProRegular: require("../../../../assets/fonts/BeVietnamPro-Regular.ttf"),
    });
    const navigation = useNavigation();

    if (!loaded) {
        return null;
    }
    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("Destination", item)}
        >
            <ImageBackground
                source={item.images[0]}
                style={styles.imageBG}
                imageStyle={{
                    borderRadius: 20,
                }}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.content}>
                        <Text
                            style={[
                                styles.city,
                                { fontFamily: "BeVietnamProExtraBold" },
                            ]}
                        >
                            {item.city.substr(0, 8)}
                        </Text>
                        <Text
                            style={[
                                styles.price,
                                { fontFamily: "BeVietnamProRegular" },
                            ]}
                        >
                            ${item.price}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    );
};

export default Item;
