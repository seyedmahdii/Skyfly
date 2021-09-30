import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

const Title = (props) => {
    const [loaded] = useFonts({
        BeVietnamProExtraBold: require("../../assets/fonts/BeVietnamPro-ExtraBold.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <Text
            style={[
                [
                    {
                        fontFamily: "BeVietnamProExtraBold",
                        fontSize: 35,
                        color: "#222",
                        marginVertical: 10,
                    },
                    [props.style],
                ],
            ]}
            numberOfLines={3}
        >
            {props.title}
        </Text>
    );
};

export default Title;
