import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function PartySession({ navigation }) {

    const [inParty, setInParty] = useState(false)

    const pressHandler = () => {
        //navigation.navigate('ReviewDetails');
        navigation.push('PartyChat');
      }

    const partySet = ({}) => {
        if(inParty){
            setInParty(false)
        }
        else{
            setInParty(true)
        }
    }

if(inParty){
  return (
    <View style={styles.container}>
        <View style={{ flex: 1 }} >
            <Text>Party page!</Text>
        </View>
        <View style={{ flex: 3}} >
            <Text>Join a party</Text>
            <FlatList
                horizontal={true}
                data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                ]}
                renderItem={({item}) => <Button title={item.key} onPress={partySet}/>}
            />
        </View>
        <View style={{ flex: 2}} >
        <Button
                    title="Create party"
                    onPress={partySet}
                />
        </View>

      
      <StatusBar style="auto" />
    </View>
  );
}
else{
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }} >
                <Text>Party page!</Text>
            </View>
            <View style={{ flex: 2}} >
                <Text>People in your party</Text>
                <FlatList
                    horizontal={true}
                    data={[
                    {key: 'Dirk'},
                    {key: 'Sem'},
                    {key: 'Jovi'}
                    ]}
                    renderItem={({item}) => <Text style={styles.item}> {item.key} </Text>}
                />

                <Button
                    title="Go to party chat"
                    onPress={pressHandler}
                />
            </View>
            <View style={{ flex: 2}} >
                <Text>Party code: WSUJNF</Text>
                <Button
                        title="Leave party"
                        onPress={partySet}
                />
            </View>
    
          
          <StatusBar style="auto" />
        </View>
      );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
});
