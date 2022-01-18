// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer} from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import Home from './screen/Home';
import About from'./sceen/About';
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