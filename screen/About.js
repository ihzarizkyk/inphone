import React, { Component } from "react";
import { Text, Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

export default class Aboutscreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={[styles.box1]}>
            <Image style={{ height: 150, width: 150 }} source={require("../assets/logo.png")} />
          </View>
          <View style={[styles.box2]}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>InPhone</Text>
            <Text style={{ fontSize: 20 }}>ITTelkom Surabaya</Text>
            <Text style={{ marginTop: 5 }}>
              <IonIcon name="star" size={20} color="#F7CA18" />
              <IonIcon name="star" size={20} color="#FDD718" />
              <IonIcon name="star" size={20} color="#FDD718" />
              <IonIcon name="star" size={20} color="#FDD718" />
              <IonIcon name="star" size={20} color="#FDD718" />
              (5.0)
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, marginBottom: 5 }}>Descriptions</Text>
            <Text style={{ fontSize: 15, color: "#565656" }}>
              InPhone merupakan aplikasi yang dapat membantu pengguna untuk mengetahui spesifikasi berbagai smartphone. {"\n"}
              {"\n"}Dengan aplikasi InPhone ini, Anda tidak akan salah memilih smartphone. {"\n"}Semoga bermanfaat..
            </Text>

            <Text style={styles.lineStyle}></Text>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>Features</Text>
            <Text style={{ fontSize: 15, color: "#565656" }}>
              - Kategori smartphone {"\n"}- Search smartphone {"\n"}- List smartphone (IPhone, Samsung, OPPO, VIVO, dll. {"\n"}- Spesifikasi smartphone{" "}
            </Text>

            <Text style={styles.lineStyle}></Text>

            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>More Information</Text>
            <Text style={{ fontSize: 15, color: "#565656" }}>InPhone@gmail.com {"\n"}@inphonePABkel7</Text>
            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "bold" }}>Credits Api from specsphones.rf.gd</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  box1: {
    marginTop: 30,
    marginLeft: 20,
    height: 20,
  },
  box2: {
    marginLeft: 190,
    marginTop: 10,
  },
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  lineStyle: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    height: 2,
    backgroundColor: "#d9d8d4",
  },
});
