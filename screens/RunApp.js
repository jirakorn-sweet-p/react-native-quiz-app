import React from 'react'
import Welcome from './Welcome'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainMenu from './MainMenu';
import TotalAnswer from './TotalAnswer';
import LoginScreen from './LoginScreen';
import Pin from './Pin';
import Ranking from './Ranking';
import QuizApp from './QuizApp';
import TypeQuestion from './TypeQuestion';
import Profile from './Profile';
import Developer from './Developer';




const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

const RunApp = () => {
    TypeQuestion
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen options={{ headerShown: false }} name='TypeQuestion' component={TypeQuestion}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='Developer' component={Developer}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='QuizApp' component={QuizApp}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='Ranking' component={Ranking}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='Welcome' component={Welcome}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='MainMenu' component={MainMenu}></Stack.Screen>
            {/* <Stack.Screen options={{ headerShown: false }} name='Pin' component={Pin}></Stack.Screen> */}
            <Stack.Screen options={{ headerShown: false }} name='TotalAnswer' component={TotalAnswer}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen}></Stack.Screen>
            <Stack.Screen options={{ headerShown: false }} name='Profile' component={Profile}></Stack.Screen>

        </Stack.Navigator>
    )
}

export default RunApp

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