import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        marginBottom: 6,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    circle: (origin) => ({
        height: 11,
        width: 11,
        borderRadius: 11,
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: origin ? "#fe6262" : "#222",
    }),
    dash: {
        height: 2,
        width: 20,
        backgroundColor: "#d1d1d1",
        borderRadius: 10,
    },
    duration: {
        fontFamily: "BeVietnamProExtraBold",
        fontWeight: "bold",
        fontSize: 16,
    },
    timing: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
    },
    heading: (origin) => ({
        fontFamily: "BeVietnamProExtraBold",
        textAlign: origin ? "left" : "right",
        fontSize: 18,
        color: "#222",
    }),
    subHeading: (origin) => ({
        fontFamily: "BeVietnamProRegular",
        textAlign: origin ? "left" : "right",
        color: "#a6a6a6",
        textTransform: "capitalize",
        minWidth: 85,
        fontSize: 15.5,
    }),
    footer: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    companyWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    company: {
        textTransform: "capitalize",
        fontFamily: "BeVietnamProRegular",
        color: "#a6a6a6",
        fontSize: 17,
        marginLeft: 5,
    },
    price: {
        fontFamily: "BeVietnamProExtraBold",
        fontSize: 16,
        color: "#333",
    },
});

export default styles;
