<<<<<<< HEAD
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import TotalAnswer from './screens/TotalAnswer';
import Welcome from './screens/Welcome';
import LoginSelect from './screens/LoginSelect';
import Pin from './screens/Pin';
import MainMenu from './screens/MainMenu';
import ScoreBoard from './screens/ScoreBoard';
import Profile from './screens/Profile';
import Developer from './screens/Developer';
>>>>>>> e2d862d110f4c17e09e169d158ab847525f7b2d2

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RunApp from './screens/RunApp';
import { NavigationContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function App() {
  
  return (
<<<<<<< HEAD
    <NavigationContainer style={styles.container}>
      <RunApp></RunApp>
    </NavigationContainer>
    
=======

        //<ScoreBoard></ScoreBoard>
        //<TotalAnswer></TotalAnswer>
        <Developer></Developer>

    

>>>>>>> e2d862d110f4c17e09e169d158ab847525f7b2d2
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: height,
    backgroundColor: '#73C3F9'
  },
  section1: {
    width: width - 40,
    margin: 20,
    height: height / 2,
    backgroundColor: 'red'
  },
});
