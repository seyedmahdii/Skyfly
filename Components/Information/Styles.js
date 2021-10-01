import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    place: {
        color: "#222",
        fontFamily: "BeVietnamProExtraBold",
        fontSize: 23,
        textTransform: "capitalize",
    },
    desc: {
        color: "#595959",
        fontFamily: "BeVietnamProLight",
        lineHeight: 19,
        marginVertical: 10,
        textAlign: "justify",
    },
    features: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 20,
    },
    feature: {},
    featureValue: {
        color: "#595959",
        fontFamily: "BeVietnamProRegular",
        textTransform: "uppercase",
        fontSize: 14,
    },
    featureTieleWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: -22,
        marginTop: 5,
    },
    featureTitle: {
        color: "#8f8f8f",
        fontFamily: "BeVietnamProLight",
        fontSize: 13,
        textTransform: "capitalize",
        marginLeft: 3,
    },
});

export default styles;
