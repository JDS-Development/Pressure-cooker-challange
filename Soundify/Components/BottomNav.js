import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Home from "../Pages/Home";
import Media_player from "../Pages/Media_player";
import Party from "../Pages/Party";

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
    { key: "party", title: "Party" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "home":
        return <Home jumpTo={Home} />;
      case "music":
        return <Media_player jumpTo={Media_player} />;
      case "podcast":
        return <PodcastRoute jumpTo={jumpTo} />;
      case "audiobook":
        return <AudioBookRoute jumpTo={jumpTo} />;
      case "party":
        return <Party jumpTo={Party} />;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      barStyle={{ backgroundColor: '#7198FF' }}
    />
  );
};

export default BottomNav;
