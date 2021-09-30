import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Title from "../Components/Title/Title";
import SearchInput from "../Components/SearchInput/SearchInput";
import FilterGallery from "../Components/FilterGallery/FilterGallery";
import { places } from "../Data/Places";
import Header from "../Components/Header/Header";

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.padding}>
                <Title
                    title="Where would you like to travel?"
                    style={styles.title}
                />
                <SearchInput style={styles.searchInput} />
                <FilterGallery cities={places} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    padding: {
        padding: 10,
    },
    title: {
        marginBottom: 10,
    },
    searchInput: {
        marginVertical: 10,
        marginBottom: 25,
    },
});
