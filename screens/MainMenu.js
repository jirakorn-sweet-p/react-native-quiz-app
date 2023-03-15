import { StyleSheet, Text, View, Dimensions, Button,Image } from 'react-native'
import React from 'react'
import Circlelar from './Circlelar'

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';

const TotalAnswer = () => {

    return (
        <View >
            <View style={styles.section1}>
                
            </View>
            <View style={styles.section2}>
            <Image source={require('../assets/quizicon.png')}
                    style={{ width: 200, height: 200 }}
                />
               
            </View>
            <View style={styles.section}>
                <Button color="#FFDD40" style={styles.btn} title="เลือกหมวดหมู่คำถาม"></Button>
            </View>
            <View >
                <Button color="#FF4155" style={styles.btn} title="กระดานคะแนน"></Button>
            </View>
            <View>
                <Button color="#38C674" style={styles.btn} title="ผู้พัฒนา"></Button>
            </View>
            <View>
                <Button color="#0053CE" style={styles.btn} title="ออกจากระบบ"></Button>
            </View>
            <View>
            <Image source={require('../assets/profileicon.png')}
                    style={{ width: 80, height: 80 }}
                />
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