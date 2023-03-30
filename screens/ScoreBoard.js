import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Button, Image } from 'react-native'
import React from 'react'

// import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';

const ScoreBoard = () => {
    /*for (const [key, value] of Object.entries(data[''])) {
        ex2.push(
            <View style={styles.section2}>
                <View style={styles.row}>
                    <Image source={require('../assets/medal1.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={styles.txt_1st}>waveza007</Text>
                    <Text style={styles.txt_1st}>20</Text>
                </View>
            </View>
        )
    }*/
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Button color="#38C674" style={styles.btn} title="  BACK  "></Button>
            </View>
            <View style={styles.section1}>
                <Text style={styles.txt_header}>Score Board</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.section2}>
                    <View style={styles.row}>
                        <Image source={require('../assets/medal1.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.txt_1st}>waveza007</Text>
                        <Text style={styles.txt_1st}>20</Text>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.row}>
                        <Image source={require('../assets/medal2.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.txt_2nd}>Sweet P</Text>
                        <Text style={styles.txt_2nd}>39</Text>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.row}>
                        <Image source={require('../assets/medal3.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.txt_3rd}>FlukeZa5521</Text>
                        <Text style={styles.txt_3rd}>38</Text>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.row}>
                        <Image source={require('../assets/empty.png')}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.txt_normal}>waveza007</Text>
                        <Text style={styles.txt_normal}>20</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ScoreBoard
const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation: 3,
    },
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: '#73C3F9',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: height - 300,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -25,
        marginBottom: 100,
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
    }, header: {
        marginTop: 50,
        right: 115,
        width: width - 100,
        height: height / 10,
        alignItems: 'center'
    },
    section1: {
        flex: 1,
        backgroundColor: '#FBCE30',
        width: width - 50,
        height: height / 8,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 50,
        borderRadius: 10,
        hadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    section2: {
        backgroundColor: '#fff',
        width: width - 50,
        height: height / 10,
        marginTop: 10,
    },
    row: {
        marginLeft: 15,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
    },
    txt_header: {
        fontSize: 30,
        fontWeight: '800',
        margin: 20,
        color: '#fff'
    },
    txt_1st: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFE600',
        marginTop: 10,
        marginLeft: 25,
    },
    txt_2nd: {
        fontSize: 18,
        fontWeight: '500',
        color: '#9E9E9E',
        marginTop: 10,
        marginLeft: 25,
    },
    txt_3rd: {
        fontSize: 18,
        fontWeight: '500',
        color: '#CE7430',
        marginTop: 10,
        marginLeft: 25,
    },
    txt_normal: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        marginTop: 10,
        marginLeft: 25,
    },
    btn: {
        borderRadius: 10,
    }
});