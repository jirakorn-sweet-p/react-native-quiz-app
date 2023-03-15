import { StyleSheet, Text, View, Dimensions, Button,Image } from 'react-native'
import React from 'react'
import Circlelar from './Circlelar'
// import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';

const TotalAnswer = () => {
    // const nav = useNavigation();
    // const BackToHome = () => {
    //     nav.navigate("Home");
    // }
    // const NewGame = () => {
    //     nav.navigate("MenuGame");
    // }
    return (
        <View >
            <View style={styles.section1}>
                
            </View>
            <View style={styles.section2}>
            <Image source={require('../assets/quizicon.png')}
                    style={{ width: 200, height: 200 }}
                />
               
            </View>
            <View style={styles.section3}>
                <Button color="#38C674" style={styles.btn} title="  ควิซพา(คลาย)เครียด  "></Button>
            </View>
        </View>
    );
}

export default TotalAnswer

const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row', 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
    },

    section1: {
        width: 200,
        height: 200,
    },
    section2: {
        width: width - 40,
        height: height/4,
        alignItems:'center',
    },
    section3: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width: width - 40,
        height: height/4,
        alignItems:'center',
    },
    txt1:{
        fontSize:40,
        fontWeight:'800',
        margin:10,
        color:'#565656'
    },
    txt2:{
        fontSize:20,
        fontWeight:'500',
        color:'#565656'
    },
    txt3:{
        fontSize:32,
        fontWeight:'700',
        margin:20,
        color:'#565656'
    },
    btn:{
        borderRadius:10,
    }
});