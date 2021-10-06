import { StyleSheet } from "react-native";

let containerHeight = 30,
    containerWidth = 50;
let space = 6;
let circleHeight = containerHeight - space,
    circleWidth = containerHeight - space;
let padding = space / 2;

const styles = StyleSheet.create({
    container: (active) => ({
        backgroundColor: active ? "#fe6262" : "#f2f2f2",
        height: containerHeight,
        width: containerWidth,
        borderRadius: 20,
        justifyContent: "center",
        position: "relative",
    }),
    circle: (active) => ({
        height: circleHeight,
        width: circleWidth,
        borderRadius: circleHeight,
        backgroundColor: "white",
        elevation: 2,
        position: "absolute",
        top: padding,
        left: active ? containerWidth - circleWidth - padding : padding,
        zIndex: 1000,
    }),
});

export default styles;
