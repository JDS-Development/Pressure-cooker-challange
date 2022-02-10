import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SearchBarComponent from "../Components/SearchbarComponent";

export default function Home() {
  return (
    <View>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.txt}>Good morning</Text>
        <Text style={styles.txt1}>Your playlist</Text>
        <Text style={styles.txt2}>Your podcast</Text>
        <Text style={styles.txt3}>Your albums</Text>
      </View>
      <View style={styles.searchbar}>
        <SearchBarComponent />
      </View>
      {/* First row */}
      <View>
        <View style={styles.row1}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
        </View>
      </View>
      {/* Second row */}
      <View>
        <View style={styles.row2}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
        </View>
      </View>
      {/* Third row */}
      <View>
        <View style={styles.row3}>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
          <View style={styles.box}>
            <Image
              style={styles.img}
              source={require("../images/cover1.jpg")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    flex: 1,
    padding: 20,
    fontSize: 40,
    position: "absolute",
    color: "#7198FF",
  },
  txt1: {
    flex: 1,
    padding: 20,
    fontSize: 30,
    position: "absolute",
    color: "#7198FF",
    marginTop: 150,
  },
  txt2: {
    flex: 1,
    padding: 20,
    fontSize: 30,
    position: "absolute",
    color: "#7198FF",
    marginTop: 450,
  },
  txt3: {
    flex: 1,
    padding: 20,
    fontSize: 30,
    position: "absolute",
    color: "#7198FF",
    marginTop: 300,
  },
  row1: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    padding: 20,
    marginTop: 200,
  },
  row2: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    padding: 20,
    marginTop: 350,
  },
  row3: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    padding: 20,
    marginTop: 500,
  },
  searchbar: {
    flex: 1,
    position: "absolute",
    padding: 20,
    marginTop: 60,
    width: 400,
  },
  box: {
    width: 75,
    height: 75,
    marginRight: 67,
    backgroundColor: "powderblue",
  },
  img: {
    width: 75,
    height: 75,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
