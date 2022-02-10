import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function PartyChat() {

  return (
    <View style={styles.container}>
        <View style={{ flex: 1 }} >
            <Text>Party chat!</Text>
        </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
});
