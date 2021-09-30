import React, { useState } from "react";
import { ScrollView } from "react-native";
import styles from "./Styles";
import Button from "../../Button/Button";

const Categories = ({ categories, filterItems }) => {
    const [chosenCategory, setChosenCategory] = useState("all");

    const handleClick = (category) => {
        filterItems(category);
        setChosenCategory(category);
    };

    return (
        <ScrollView style={styles.container} horizontal={true}>
            {categories.map((category, ind) => (
                <Button
                    title={category}
                    onPress={() => handleClick(category)}
                    style={styles.button(
                        chosenCategory === category ? true : false
                    )}
                    key={ind}
                />
            ))}
        </ScrollView>
    );
};

export default Categories;
