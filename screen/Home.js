import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, Image, ScrollView, TouchableOpacity, FlatList,} from 'react-native';
import { Navigation } from "@react-navigation/native";

const Home = ({navigation}) =>{
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    
const getData = async () => {
        try {
            const response = await fetch("https://7c05-139-228-215-130.ngrok.io/api/products/all");
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => {
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: "center"}}>
            <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}
                style={styles.container}>
                <Text style={styles.Title}>{item.title}</Text>   
                <Image source={{uri: item.image }}  style={{width:160, height:160}}/>
                <Text style={{fontSize: 10, fontWeight: "bold"}}>Rating: {item.rates}</Text>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>Harga: Rp{item.price}</Text>
            </TouchableOpacity> 
            </View>
          </View>
        );
    };

    useEffect(()=> {
        getData();
    
    }, [])
 
     
    return(
        <ScrollView>
       <View>
            {
                isLoading ? (
                    <ActivityIndicator size="large" color="#2196F3"/>

                ):(
                    <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}/>
                )
            }
        
        </View>
        </ScrollView>
    );
    }
        

    export default Home;

    const styles = StyleSheet.create({ 
        container: {
            margin: 1,
            padding: 20,
        },

        Title :{

            margin:5,
            fontWeight:'bold',
            fontSize: 15
        },

        card :{
        shadowColor:"10px 10px 17px -12px rgba(0,0,0,0.75)",
        width: 250,
        height: 250,
        marginBottom: 10
        }    

    })