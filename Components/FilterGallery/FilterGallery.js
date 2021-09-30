import React, { useState } from "react";
import { View } from "react-native";
import Categories from "./Categories/Categories";
import Items from "./Items/Items";
import styles from "./Styles";

const FilterGallery = ({ cities }) => {
    const categories = [
        "all",
        ...new Set(cities.map((city) => city.continent)),
    ];
    const [items, setItems] = useState(cities);

    const filterItems = (category) => {
        if (category === "all") {
            setItems(cities);
            return;
        }
        const filteredItems = cities.filter(
            (city) => city.continent === category
        );
        setItems(filteredItems);
    };

    return (
        <View style={styles.container}>
            <Categories categories={categories} filterItems={filterItems} />
            <Items items={items} />
        </View>
    );
};

export default FilterGallery;
