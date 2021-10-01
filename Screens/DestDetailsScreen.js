import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Ticket from "../Components/Ticket/Ticket";
import { Ionicons } from "@expo/vector-icons";
import Box from "../Components/Box/Box";
import Information from "../Components/Information/Information";
import Button from "../Components/Button/Button";

const DestDetailsScreen = ({ navigation, route }) => {
    const { city, continent, country, desc, id, images, price } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.slideshow}>
                <View style={styles.header}>
                    <Pressable
                        style={[
                            styles.iconWrapper,
                            { backgroundColor: "rgba(112, 112, 112, 0.6)" },
                        ]}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            size={26}
                            color="#d9d9d9"
                        />
                    </Pressable>
                    <Pressable
                        style={[
                            styles.iconWrapper,
                            { backgroundColor: "white" },
                        ]}
                        onPress={() => alert("You liked it!")}
                    >
                        <Ionicons name="heart" size={21} color="#fe6262" />
                    </Pressable>
                </View>
                <SliderBox
                    images={images}
                    circleLoop={true}
                    activeOpacity={1}
                    sliderBoxHeight={300}
                    dotColor="#f2f2f2"
                    inactiveDotColor="#bfbfbf"
                    paginationBoxVerticalPadding={20}
                />
            </View>

            <View style={styles.content}>
                <Box>
                    <Information
                        city={city}
                        country={country}
                        continent={continent}
                        desc={desc}
                    />
                </Box>

                <Box>
                    <Ticket
                        from="Tehran"
                        to={city}
                        duration="12h"
                        price={price}
                    />
                </Box>

                <Button
                    title="Book Now"
                    fullWidth={true}
                    style={{
                        marginTop: 10,
                    }}
                    onPress={() => alert("Ok. it's booked :)")}
                />
            </View>
        </ScrollView>
    );
};

export default DestDetailsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(253, 253, 253)",
    },
    header: {
        width: "100%",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        top: 15,
        left: 0,
        zIndex: 1000,
    },
    iconWrapper: {
        height: 30,
        width: 30,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    slideshow: {
        position: "relative",
    },
    content: {
        padding: 10,
    },
});
