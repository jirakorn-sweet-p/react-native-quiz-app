import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import TotalAnswer from './screens/TotalAnswer';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
    <TotalAnswer></TotalAnswer>
        
    </View>
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
