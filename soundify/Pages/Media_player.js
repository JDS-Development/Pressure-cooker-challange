import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Media_player()  {

  const [isPlaying, setIsPlaying] = useState(false)
  const [song, setSongName] = useState(require("../images/juicewrld-legends.jpg"))
  const [songTitle, setSongTitle] = useState("Juice WRLD - Righteous")

    const setPlaying = ({}) => {
        if(isPlaying){
          setIsPlaying(false)
        }
        else{
          setIsPlaying(true)
        }
    }

    const setSong = ({}) => {
      if(song == require("../images/postmalone.jpg")) {
        setSongName(require("../images/juicewrld-legends.jpg"))
        setSongTitle("Juice WRLD - Righteous")
      }
      else{
        setSongName(require("../images/postmalone.jpg"))
        setSongTitle("Post Malone - Congratulations")
      }
  }
    
    if(isPlaying)
    {    
      return (
        <View style={[styles.container, {flexDirection: "column"}]}>
          <Text style={[styles.title, {flex: 1}]}>Now playing</Text>
          <View style={[styles.container_center, {flex: 3}]}>
              <Image style={styles.cover}  source={song} />
          </View>
          <View style={{flex: 1}}>
              <Text style={styles.song_title}>{songTitle}</Text>
              <View style={[styles.container_center, {flexDirection: "row"}]}>
                <Icon  name="step-backward" size={30} color={"#7198FF"} style={styles.control_icon} />
                
                <Icon.Button style={styles.control_icon}  underlayColor={"transparent"} name="play" size={30} backgroundColor={"transparent"} color={"#7198FF"} onPress={setPlaying} />

                <Icon.Button style={styles.control_icon}  underlayColor={"transparent"} name="step-forward" size={30} backgroundColor={"transparent"} color={"#7198FF"} onPress={setSong} /></View>
              
          </View>
        </View>
      );
} 
else {
  return (
<View style={[styles.container, {flexDirection: "column"}]}>
          <Text style={[styles.title, {flex: 1}]}>Now playing</Text>
          <View style={[styles.container_center, {flex: 3}]}>
              <Image style={styles.cover}  source={song} />
          </View>
          <View style={{flex: 1}}>
              <Text style={styles.song_title}>{songTitle}</Text>
              <View style={[styles.container_center, {flexDirection: "row"}]}>
                <Icon  name="step-backward" size={30} color={"#7198FF"} style={styles.control_icon} />
                
                <Icon.Button style={styles.control_icon}  underlayColor={"transparent"} name="pause" size={30} backgroundColor={"transparent"} color={"#7198FF"} onPress={setPlaying} />

                <Icon.Button style={styles.control_icon}  underlayColor={"transparent"} name="step-forward" size={30} backgroundColor={"transparent"} color={"#7198FF"} onPress={setSong} />
              </View>
              
          </View>
        </View>
  );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    container_center: {
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
        position: "absolute",
        fontSize: 34,
        fontWeight: "700",
        color: "#7198FF",      
        top: 67,
        left: 37,
    },
    song_title: {
      fontSize: 28,
      left: 20,
      fontWeight: "700",
      color: "#7198FF",    
    },
    cover: {
      position: "relative",
      width: 300,
      height: 300,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 80,
    },
    control_icon: {
      padding: 30
    },
});
