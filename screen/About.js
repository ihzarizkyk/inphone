import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

export default class Aboutscreen extends Component {
	render() {

		return (
			<SafeAreaView style={{flex: 1, alignItems: "center", justifyCenter: "center"}}>
				<ScrollView>
					<Image 
						style={{ height: 250, width: 200, marginTop: 50}} 
						source={{	uri:"https://i.ibb.co/YDy6rXr/InPhone.jpg"	}} />

					<Text style={{ fontSize: 75, fontWeight: 'bold'}}>About InPhone</Text>

					<Text>
						INPHONE adalah aplikasi penyedia informasi spesifikasi device yang dibuuat menggunakan React native
					</Text>

					<Text style={{fontWeight: "bold", fontColor: "gray"}}>
						Credits Api from techspecs.io
					</Text>
				</ScrollView>
			</SafeAreaView>
				)
	}

}