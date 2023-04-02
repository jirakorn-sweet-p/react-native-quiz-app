import { StyleSheet, Text, View, Dimensions, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core'


const MainMenu = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    const RANKING =()=>{
        navigation.navigate('Ranking')
    }
    const DEV =()=>{
        navigation.navigate('Developer')
    }
    const LOGIN =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        navigation.navigate('LoginScreen')
    }
    const PROFILE =()=>{
        navigation.navigate('Profile')
    }
    const CATEGORY =()=>{
        navigation.navigate('TypeQuestion')
    }
    return (
        <View style={styles.container}>

            <View style={styles.section2}>
                <Image source={require('../assets/quizicon.png')}
                    style={{ width: 200, height: 200 }}
                />
            </View>

            <TouchableOpacity style={styles.title} onPress={CATEGORY}>
                <Text style={[styles.btn,styles.t1]} >เลือกหมวดหมู่คำถาม</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.title} onPress={RANKING} >
                <Text  style={[styles.btn,styles.t2]} >กระดานคะแนน</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.title} onPress={DEV}>
                <Text style={[styles.btn,styles.t3]} >ผู้พัฒนา</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.title} onPress={LOGIN}>
                <Text style={[styles.btn,styles.t4]} >ออกจากระบบ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.title2} onPress={PROFILE}>
                <Image source={require('../assets/profileicon.png')}
                    style={{ width: 70, height: 70 }}
                />
                <Text style={styles.txt2}>บัญชีผู้ใช้</Text>
            </TouchableOpacity>

        </View>
    );
}

export default MainMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#73C3F9',
        alignItems: 'center',
    },
    Button: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation: 3,
    },

    section1: {
        width: 200,
        height: 200,
    },
    section2: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
    },
    section3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '25%',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 40,
        fontWeight: '800',
        margin: 10,
        color: '#565656'
    },
    txt2: {
        fontSize: 15,
        fontWeight: '500',
        color: '#474747',
        height: '50%',
        width: '40%',
        alignSelf: 'center',
        textAlignVertical: 'center',
        marginLeft: -20,
        zIndex: -1,
        paddingLeft: 40,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    txt3: {
        fontSize: 32,
        fontWeight: '700',
        margin: 20,
        color: '#565656'
    },
    btn: {
        width:'100%',
        height:'70%',
        padding:10,
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        borderRadius: 8,
        zIndex:99,
    },
    title: {
        textAlign: 'center',
        width: '50%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        // borderRadius: 20,
        height: "10%",
    },
    title2: {
        textAlign: 'center',
        marginVertical: 10,
        marginLeft: -10,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    t1: { backgroundColor: '#38C674', color: 'white' },
    t2: { backgroundColor: '#0053CE', color: 'white' },
    t3: { backgroundColor: '#FFDD40', color: 'white' },
    t4: { backgroundColor: '#FF4155', color: 'white' },
});