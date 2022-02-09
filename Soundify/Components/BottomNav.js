import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Home from "../Pages/Home";

const MusicRoute = () => <Text>Music</Text>;

const PodcastRoute = () => <Text>Podcast</Text>;

const AudioBookRoute = () => <Text>AudioBooks</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "music", title: "Music" },
    { key: "podcast", title: "Podcast" },
    { key: "audiobook", title: "AudioBook" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <Home jumpTo={Home} />;
      case "music":
        return <MusicRoute jumpTo={jumpTo} />;
      case "podcast":
        return <PodcastRoute jumpTo={jumpTo} />;
      case "audiobook":
        return <AudioBookRoute jumpTo={jumpTo} />;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
    />
  );
};

export default BottomNav;
