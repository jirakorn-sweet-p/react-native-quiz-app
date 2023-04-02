
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RunApp from './screens/RunApp';
import { NavigationContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function App() {
  
  return (
    <NavigationContainer style={styles.container}>
      <RunApp></RunApp>
    </NavigationContainer>
    
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
