import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import PartySession from '../../Pages/PartySession';
import PartyChat from '../../Pages/PartyChat';

const screens = {
    PartySession: {
    screen: PartySession,
    navigationOptions: {
        headerShown: false,
    }
  },
  PartyChat: {
    screen: PartyChat,
  },
};

// home stack navigator screens
const ChatStack = createStackNavigator(screens);

export default createAppContainer(ChatStack);