import React from "react";
import Home from "./screen/Home";
import About from "./screen/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const sampleTabNavigation = createBottomTabNavigator();
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
          <sampleTabNavigation.Screen name="Home" component={Home} />
          <sampleTabNavigation.Screen name="About" component={About} />
        </sampleTabNavigation.Navigator>
      </NavigationContainer>
    );
  }
}
