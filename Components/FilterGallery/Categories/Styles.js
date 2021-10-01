import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
    },
    button: (isActive) => ({
        backgroundColor: isActive ? "#fe6262" : "#f4f4f4",
        elevation: 0,
        marginHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 25,
        fontSize: 17,
        textTransform: "capitalize",
    }),
});

export default styles;
