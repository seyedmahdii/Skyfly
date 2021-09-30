import React, { useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./Styles";
import Item from "./Item/Item";

const Items = ({ items }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return <Item item={item} />;
                }}
                numColumns={2}
            />
        </View>
    );
};

export default Items;
