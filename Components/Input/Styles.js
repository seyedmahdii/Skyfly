import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#d2d2d2",
        borderBottomWidth: 2,
        marginVertical: 15,
    },
    input: {
        fontSize: 15,
        color: "#222",
        flex: 1,
        padding: 3,
        marginHorizontal: 5,
    },
    hide: {
        display: "none",
    },
});

export default styles;
