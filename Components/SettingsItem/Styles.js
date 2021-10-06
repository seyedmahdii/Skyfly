import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 6,
        padding: 0,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconWrapper: {
        height: 40,
        width: 40,
        justifyContent: "center",
    },
    title: {
        color: "#222",
        fontFamily: "BeVietnamProRegular",
        fontSize: 16,
        marginLeft: 3,
    },
});

export default styles;
