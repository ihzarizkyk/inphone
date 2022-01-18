import React from 'react';
import Home from './screen/Home';
import About from'./screen/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const sampleTabNavigation = createBottomTabNavigator(
);
 
export default class App extends React.Component {
render() {
 
return (
 
<NavigationContainer>
<sampleTabNavigation.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
 
if (route.name === 'Home') {
iconName = 'md-home-sharp';
} else if (route.name === 'about') {
iconName = 'md-reader-outline';
}
 
return <Ionicons name = {iconName} size={size} color={color} />;
},
})}
tabBarOptions={{
activeTintColor: 'red',
inactiveTintColor: 'gray',
}}
>
<sampleTabNavigation.Screen name="Home" component={Home} />
<sampleTabNavigation.Screen name="about" component={About} />
</sampleTabNavigation.Navigator>
</NavigationContainer>
);
}
}