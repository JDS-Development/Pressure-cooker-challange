import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import BottomNav from "./Components/BottomNav";
import TopNav from "./Components/TopNav";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNav />
      <BottomNav style={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
