import React from "react";
import Home from "./screen/Home";
import About from "./screen/About";
import Details from "./screen/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from "react-native-vector-icons/Ionicons";

const sampleTabNavigation = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>

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
          }}
        >

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      
          <sampleTabNavigation.Screen name="Home" component={Home} />
          <sampleTabNavigation.Screen name="About" component={About} />
        </sampleTabNavigation.Navigator>
      </NavigationContainer>
    );
  }
}
