import { StyleSheet, Text, View, Dimensions, Button } from 'react-native'
import React, { useState } from 'react'
import Circlelar from './Circlelar'
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_APP } from '../firebase';
import { getDatabase, onValue, ref, set, update } from "firebase/database";

const TotalAnswer = () => {
    const nav = useNavigation();
    const database = getDatabase();
    const starCountRef = ref(database, 'User');
    const [read, setRead] = useState(false);
    const temp = useRoute();
    const [user, setUser] = useState(FIREBASE_AUTH.currentUser);
    console.log(temp);
    console.log(user['email']);
    const writeDB = (s, u, e) => {
        console.log("================writeDB=================");

        // const username = "username@"+Number(Object.keys(all_user).length+1);
        const DATA = {
            username: u,
            email: e,
            score: s
        };
        console.log("data : " + DATA);
        const updates = {};
        updates['/User/' + u + '/'] = DATA;
        return update(ref(database), updates);
    }

    onValue(starCountRef, (snapshot) => {
        if (!read) {
            const data = snapshot.val();
            for (const [key, value] of Object.entries(data)) {
                console.log("=======================FOR=========================");
                // console.log(`${key} ${value}`);
                // console.log(value['email']);
                if (value['email'] == user['email']) {
                    console.log("MATCH");
                    console.log(value['score']);
                    console.log(value['score']['type@' + temp['params']['type']]);
                    // if(temp['params']['type'])
                    let i = value['score'];
                    for (const [key2, value2] of Object.entries(value['score'])) {
                        console.log(`${key2} ${value2}`);
                        if (Number(key2.slice(5)) == Number(temp['params']['type'])) {
                            console.log("SAMMM");
                            i['type@' + key2.slice(5)] = Number(temp['params']['p']*10);
                        }

                    }
                    console.log(value['email']);//getEMAIL
                    console.log(value['username']);//getUSERNAME
                    console.log(i); //getSCORE
                    writeDB(i, value['username'], value['email']);
                    console.log("================ END =================");
                } else {
                    console.log(value['email'] + " != " + user['email']);
                }
            }
            setRead(true);
        }

    });
    const BackToHome = () => {
        nav.navigate("MainMenu");
    }
    const NewGame = () => {
        nav.navigate("TypeQuestion");
    }

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <Circlelar percentage={temp['params']['point'] * 0.1}></Circlelar>
            </View>
            <View style={styles.section2}>
                <Text style={styles.txt1}>ยินดีด้วย</Text>
                <Text style={styles.txt2}>คุณสามารถตอบคำถามถูก 8 ข้อ</Text>
                <Text style={styles.txt3}>{temp['params']['point']}/10</Text>
            </View>
            <View style={styles.section3}>
                <Button color="#38C674" onPress={NewGame} style={styles.btn} title="  Next  "></Button>
                <Button color="#38C674" onPress={BackToHome} style={styles.btn} title="  Menu  "></Button>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // marginLeft: 20,
        // marginRight: 20,
        // marginTop: 50,
        // marginBottom: 20,
        // borderRadius: 10,
        backgroundColor: 'white',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,

        // elevation: 11,
    },
    section1: {
        width: '100%',
        height: '50%',
    },
    section2: {
        width: '100%',
        height: '25%',
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