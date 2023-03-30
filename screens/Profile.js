import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native'
import React from 'react'
import Circlelar from './Circlelar'
import { TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';

const TotalAnswer = () => {

    return (
        <View >
            <View style={styles.section2}>
                <Image source={require('../assets/profileicon.png')}
                    style={{ width: 200, height: 200 }}
                />
                <View style={styles.section3}>
                    <Text style={styles.txt1}>Username</Text>
                </View>

                <View style={styles.section5}>
                    <View style={styles.section4}>
                        <View style={styles.header_name}>
                            <Text style={styles.txt2}>Birth Date </Text>
                        </View>
                        <View style={styles.header_edTxt}>
                            <Text >edit_text </Text>
                           
                        </View>
                    </View>
                    <View style={styles.section4}>
                        <View style={styles.header_name}>
                            <Text style={styles.txt2}>Tel</Text>
                        </View>
                        <View style={styles.header_edTxt}>
                            <Text >edit_text </Text>
                        </View>
                    </View>
                    <View style={styles.section4}>
                        <View style={styles.header_name}>
                            <Text style={styles.txt2}>Email </Text>
                        </View>
                        <View style={styles.header_edTxt}>
                            <Text >edit_text </Text>
                        </View>
                    </View>

                    <View style={styles.section6}>
                        <Button color="#38C674" style={styles.btn} title="Save" ></Button>
                    </View>

                </View>
            </View>





        </View>
    );
}

export default TotalAnswer

const styles = StyleSheet.create({

    section1: {
        width: 200,
        height: 120,
    },
    section2: {
        width: width,
        height: height,
        alignItems: 'center',
        marginTop: 80,
    },
    section3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
        height: '5%',
        alignItems: 'center',
        marginTop: 10,
        //backgroundColor: 'blue',
    },
    section4: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width,
        height: '13%',
        //alignItems: 'center',
        marginTop: 10,
        //backgroundColor: 'red',
    },
    section5: {
        flexDirection: 'column',
        //justifyContent: 'space-around',
        width: width,
        height: '40%',
        alignItems: 'center',
        marginTop: 10,
        //backgroundColor: 'pink',
    },
    section6: {
        width: 200,
        height: '30%',
        marginTop: 50,
        //backgroundColor: 'purple',
    },
    txt1: {
        fontSize: 20,
        fontWeight: '800',
        //margin: 10,
        color: '#3E3E3E'
    },
    txt2: {
        fontSize: 15,
        fontWeight: '800',
        color: '#3E3E3E',
    },
    txt3: {
        fontSize: 32,
        fontWeight: '700',
        margin: 20,
        color: '#565656'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    title2: {
        textAlign: 'center',
        marginVertical: 10,
        width: width - 40,
        height: height / 4,
        alignItems: 'center',
    },
    header_name: {
        marginLeft: 80,
        marginRight: 30,
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: 'green',
    },
    header_edTxt: {
        width: '45%',
        height: '100%',
        marginRight: 80,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'yellow',
    },
    btn: {
        //width:100,
        borderRadius: 10,
    },
    Button: {
        flexDirection: 'row',
        height: 50,
        width:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation: 3,
    },
});