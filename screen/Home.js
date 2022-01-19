import React from "react";
import { Button, View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

export default class Home extends React.Component{
 
render(){

// const DATA = [
// 	{
// 		"id": 1,
// 		"name": "Phone Specs 1"
// 	},
// 	{
// 		"id": 2,
// 		"name": "Phone Specs 2"
// 	},
// 	{
// 		"id": 3,
// 		"name": "Phone Specs 3"
// 	},
// ];

// const Item = ({ item, Onpress}) => (
// 	<TouchableOpacity onPress={onPress}>
// 		<Text>{{item.name}}</Text>
// 	</TouchableOpacity>
// );



return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>
InPhone HomePage
</Text>



<Button title="Go to About"
onPress={() => this.props.navigation.navigate('about')}
 style={{marginBottom: 50}}/>

<Button title="Go to Details"
onPress={() => this.props.navigation.navigate('Details')}
/>
 
</View>
)
}
 
}