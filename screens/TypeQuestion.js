import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const TypeQuestion = () => {
    const navigation = useNavigation();

    const START_GAME = (i) => {
        console.log(i);
        navigation.navigate('QuizApp', { type: i })
    }
    return (
        <View style={[styles.container, styles.bg]}>
            <View style={[styles.con3]}>
                <Text style={[styles.header, styles.t1]}>เลือกหมวดหมู่</Text>
            </View>

            <TouchableOpacity style={styles.con2} onPress={() => START_GAME(1)}>
                <Text style={[styles.btn, styles.txt, styles.t1]}>ความรู้ทั่วไป</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.con2} onPress={() => START_GAME(2)}>
                <Text style={[styles.btn, styles.txt, styles.t2]} >ความรู้ไม่ได้ช่วยอะไร</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.con2} onPress={() => START_GAME(3)}>
                <Text style={[styles.btn, styles.txt, styles.t3]}>คำถามเชาว์</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.con2} onPress={() => START_GAME(4)}>
                <Text style={[styles.btn, styles.txt, styles.t4]}>คำถามทดสอบ IQ</Text>
            </TouchableOpacity>


        </View>
    )
}

export default TypeQuestion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    con3: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',

        width: '100%',

    },
    con2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,

    },
    btn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        width: '60%',
        height: 50,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
    },
    header: {
        fontSize: 26,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        width: '60%',
        fontWeight: '800',
        padding: 20,
        borderRadius: 8,
        textAlign: 'center',

    },
    txt: {
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center'
    },
    t1: { backgroundColor: '#38C674', color: 'white' },
    t2: { backgroundColor: '#0053CE', color: 'white' },
    t3: { backgroundColor: '#FFDD40', color: 'white' },
    t4: { backgroundColor: '#FF4155', color: 'white' },
    bg: { backgroundColor: '#73C3F9' },
})