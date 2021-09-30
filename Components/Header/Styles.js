import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        // width: "100%",
        // zIndex: 1000,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    username: {
        fontFamily: "BeVietnamPro",
        fontSize: 16,
        color: "#222",
    },
    status: {
        fontSize: 12,
        color: "#666",
        backgroundColor: "#fe6262",
        color: "white",
        padding: 1,
        paddingHorizontal: 4,
        borderRadius: 5,
    },
    profile: {
        height: 45,
        width: 45,
        borderRadius: 45,
        marginLeft: 7,
    },
});

export default styles;
