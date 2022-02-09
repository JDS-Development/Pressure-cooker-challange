import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import BottomNav from "./Components/BottomNav";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
