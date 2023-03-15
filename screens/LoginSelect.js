import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native'
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
        <View style={styles.container}>

            <View style={styles.section1}>
                <Text style={styles.txt1}>เข้าสู่ระบบ</Text>
                <Image source={require('../assets/googleicon.png')}
                    style={styles.img}
                />
                <Text style={styles.txt2}>เข้าสู่ระบบด้วย Google</Text>

            </View>
            <View style={styles.section2}>
                <Image source={require('../assets/phoneicon.png')}
                    style={{ width: 120, height: 120 ,marginTop:30}}
                />
                <Text style={styles.txt2}>เข้าสู่ระบบด้วยหมายเลขโทรศัพท์</Text>
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
        elevation: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: height - 90,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    section1: {
        width: width - 40,
        height: height / 2 - 60,
        justifyContent:'center',
        alignItems: 'center',
    },
    section2: {
        width: width - 40,
        height: height / 2 - 40,
        alignItems: 'center',
    },
    section3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width - 40,
        height: height / 4,
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
        fontWeight: '800',
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
    },
    img: {
        marginTop: 50,
        width: 120,
        height: 120,
    }
});