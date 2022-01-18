import React from "react";
import { Button, View, Text } from "react-native";
import React from "react";
import { Button, View, Text } from "react-native";
export default class Home extends React.Component{
 
render(){
return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>
This is Home Screen
</Text>
<Button title="Go to About"
onPress={() => this.props.navigation.navigate('about')}
/>
 
</View>
)
}
 
}