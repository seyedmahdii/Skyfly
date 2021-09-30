import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";
import MenuButton from "../MenuButton/MenuButton";
import ProfileImg from "../../assets/images/Profile.jpg";

const Header = () => {
    return (
        <View style={styles.container}>
            <MenuButton onPress={() => alert("Open Drawer")} />

            <View style={styles.headerRight}>
                <View
                    style={{
                        alignItems: "flex-end",
                    }}
                >
                    <Text style={styles.username}>Mahdi</Text>
                    <Text style={styles.status}>Pro</Text>
                </View>
                <Image source={ProfileImg} style={styles.profile} />
            </View>
        </View>
    );
};

export default Header;
