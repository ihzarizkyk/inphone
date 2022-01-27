import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView
} from "react-native";

const Details = ({ route }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDetail = async () => {
    const urlphones = `https://f9f6-139-228-215-130.ngrok.io/api/products/detail/${route.params.keys}`;
    try {
      const response = await fetch(urlphones);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {/* <Text>Welcome</Text> */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : (
        <ScrollView>
			<View style={styles.container}>
			<Text style={{ marginTop: 10, marginBottom: 5 }}></Text>
			<Image source={{ uri: data[0].image }} style={{ width: 250, height: 300 }} />
			<Text style={styles.judul}>{data[0].title}</Text>
			<Text style={{ fontSize: 15, fontWeight: "bold" }}>Rating:{data[0].rates}</Text>
			<Text style={{ fontSize: 20, fontWeight: "bold" }}>Rp{data[0].price}</Text>
			<Text style={{ fontSize: 18, fontWeight: "bold" }}>{data[0].brands}</Text>
			{data[0].desc.split("<br>").map((element, index)=>(
				<Text key={index} style={{ fontSize: 12, fontWeight: "bold", marginTop: 0 }}>{element}</Text>
			))}
			</View>
        </ScrollView>
      )}
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    justifyContent: "center",
    padding: 40,
    width: "75%",
  },
  judul: {
    fontSize: 45,
    fontWeight: "bold",
  },
});