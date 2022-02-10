import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';


export default function PartyChat() {

  const [text, setText] = useState("");

  const [chat, setChat] = useState("");

  const onEnter = () => {
    setChat([...chat, text])
    setText('')
  }


  return (
    <View style={styles.container}>
        <View style={styles.chatContainer}>
          <FlatList
                  data={chat}
                  renderItem={({item}) => <Text>{item}</Text>}
            />
          </View>

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TextInput
            label="Chat here..."
            value={text}
            onChangeText={text => setText(text)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                onEnter()
              }
            }}
          />
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
      chatContainer: {
        flex: 5,
        alignItems: 'flex-end'
      },
});
