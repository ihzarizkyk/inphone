import React from "react";
import Home from "./screen/Home";
import About from "./screen/About";
import Details from "./screen/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const sampleTabNavigation = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <sampleTabNavigation.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "md-home-sharp";
          } else if (route.name === "About") {
            iconName = "md-information-circle-sharp";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#0F58E3",
        inactiveTintColor: "gray",
      }}>
      <sampleTabNavigation.Screen name="Home" component={Home} />
      <sampleTabNavigation.Screen name="About" component={About} />
    </sampleTabNavigation.Navigator>
  );
};

export default class App extends React.Component {
  render() {
    return <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: "false" }}> 
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailSpech" component={Details} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>;
  }
}