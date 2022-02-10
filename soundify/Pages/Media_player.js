import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default function Media_player()  {
    return (
      <View >
        <Text style={styles.title}>Now playing</Text>
        <View style={styles.container}>
            <Image style={styles.cover}  source={require('../images/juicewrld-legends.jpg')} />
        </View>
        <View>
            <Text style={styles.title}>Juice</Text>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
        position: "absolute",
        fontSize: 36,
        fontWeight: "700",
        color: "#7198FF",      
        top: 67,
        left: 44,
    },
    cover: {
        position: "absolute",
        width: 300,
        height: 300,
        marginLeft: "auto",
        marginRight: "auto",
        top: 222,
    }
});
