import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import MapScreen from "../Screens/MapScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createMaterialBottomTabNavigator();

function Tabs() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            shifting={true}
            screenOptions={{
                tabBarLabel: null,
                tabBarColor: "white",
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: (tabInfo) => (
                        <MaterialIcons
                            name="home-filled"
                            size={27}
                            color={tabInfo.focused ? "#fe6262" : "#dedede"}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarIcon: (tabInfo) => (
                        <Ionicons
                            name="compass"
                            size={27}
                            color={tabInfo.focused ? "#fe6262" : "#dedede"}
                        />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: (tabInfo) => (
                        <Ionicons
                            name="settings"
                            size={26}
                            color={tabInfo.focused ? "#fe6262" : "#dedede"}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

export default Tabs;
