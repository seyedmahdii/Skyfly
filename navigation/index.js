import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import DestDetailsScreen from "../Screens/DestDetailsScreen";
import BottomTabs from "./BottomTabNavigator";
import EditProfileScreen from "../Screens/EditProfileScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer initialRouteName="Welcome">
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Panel" component={BottomTabs} />
                <Stack.Screen
                    name="Destination"
                    component={DestDetailsScreen}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
