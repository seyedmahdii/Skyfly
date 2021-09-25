import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../Screens/WelcomeScreen";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer initialRouteName="Welcome">
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={HomeScreen} options={{}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
