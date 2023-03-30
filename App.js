import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import TotalAnswer from './screens/TotalAnswer';
import Welcome from './screens/Welcome';
import LoginSelect from './screens/LoginSelect';
import Pin from './screens/Pin';
import MainMenu from './screens/MainMenu';
import ScoreBoard from './screens/ScoreBoard';

import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window');

export default function App() {
  return (

        <ScoreBoard></ScoreBoard>
        //<TotalAnswer></TotalAnswer>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: height,
    backgroundColor:'#73C3F9'
  },
  section1: {
    width:width-40,
    margin:20,
    height: height/2,
    backgroundColor: 'red'
  },
});
