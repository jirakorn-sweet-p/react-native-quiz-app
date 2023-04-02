import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native'
import React from 'react'
import Circlelar from './Circlelar'
import { useNavigation } from '@react-navigation/core'
// import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';
// 
const Welcome = () => {
    const navigation = useNavigation();
    // const nav = useNavigation();
    // const BackToHome = () => {
    //     nav.navigate("Home");
    // }setTimeout(myFunction, 3000);
    // const NewGame = () => {
    //     nav.navigate("MenuGame");
    // }
    const to_Menu = () => { 
        navigation.navigate("MainMenu");
    };
    // setTimeout(to_Menu,5000)
    return (
        <View style={styles.container}>

            <View style={styles.section2}>
                <Image source={require('../assets/quizicon.png')}
                    style={{ width: 200, height: 200 }}
                />

            </View>
            <View style={styles.section3}>
                <Button onPress={to_Menu} color="#38C674" style={styles.btn} title="  ควิซพา(คลาย)เครียด  "></Button>
            </View>

        </View>
    );
}

export default Welcome

const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    container:{
        flexDirection:'column',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#73C3F9',
    },
    section1: {
        width: 200,
        height: 200,
    },
    section2: {
        width: "100%",
        height:'40%',
        alignItems: 'center',
    },
    section3: {
        alignItems: 'center',
        width: "100%",
        alignItems: 'center',
    },
    txt1: {
        fontSize: 40,
        fontWeight: '800',
        margin: 10,
        color: '#565656'
    },
    txt2: {
        fontSize: 20,
        fontWeight: '500',
        color: '#565656'
    },
    txt3: {
        fontSize: 32,
        fontWeight: '700',
        margin: 20,
        color: '#565656'
    },
    btn: {
        borderRadius: 10,
    }
});