import React, {useState, useEffect} from "react";
import { Button, View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

const Details = ({ route }) => {

	const [data,setData] = useState([]);
	const [isLoading, setLoading] = useEffect(true);

	const urlphones = "https://7c05-139-228-215-130.ngrok.io/api/products/detail/${route.params.Keys}";

	const getDetail = async() => {
		try{
			const response = await fetch(urlphones);
			const json = await response.json();
			setData(json.results);
		}catch(error)
		{
			console.log(error);
		}finally{
			setLoading(false);
		};
	}


	useEffect(() => {
		getDetail();
	},[]);

	return (

		<View>
			{
				isLoading ? (
					<ActivityIndicator size="large" color="#2196F3" />
					):(
						<View style={styles.container}>
						<Text style={{marginTop: 10, marginBottom: 5}}>{route.params.data}</Text>
						<Image source={{ uri : data.image}} style={{width: 250, height: 300}} />
						<Text style={styles.judul}>{data.title}</Text>
						<Text style={{fontSize: 15, fontWeight: "bold"}}>Rating:{data.rates}</Text>
						<Text style={{fontSize: 20, fontWeight: "bold"}}>Rp{data.price}</Text>
						<Text style={{fontSize: 18, fontWeight: "bold"}}>{data.brands}</Text>
						<Text style={{fontSize: 25, fontWeight: "bold", marginTop: 5}}>{data.desc}</Text>

						</View>
					)
			}
		</View>

		)

}

export default Details;

const styles = StyleSheet.create({
	container: {
		margin: "auto",
		justifyContent: "center",
		padding: 40,
		width: "75%"
	},
	judul: {
		fontSize: 45,
		fontWeight: "bold"
	},
});