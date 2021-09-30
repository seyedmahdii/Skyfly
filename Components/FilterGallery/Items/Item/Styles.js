import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        height: 270,
        maxHeight: 270,
    },
    imageBG: {
        width: "100%",
        height: "100%",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        paddingHorizontal: 12,
    },
    city: {
        color: "white",
        fontSize: 20,
        textTransform: "capitalize",
    },
    price: {
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 20,
        fontSize: 16,
    },
});

export default styles;
