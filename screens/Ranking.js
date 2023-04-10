import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, log } from 'react-native-reanimated'
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import image from './image';


const Ranking = () => {
    const database = getDatabase();
    const starCountRef = ref(database, 'User');
    const [read, setRead] = useState(false);
    const [read2, setRead2] = useState(0);
    let all_user = {};
    const ranking = {};
    const [all, setAll] = useState();
    const [sortable, setSortable] = useState();
    const [imagSrc, setImageSrc] = useState();

    const RANK1 = [];
    const RANK2 = [];
    const RANK3 = [];
    const RANK4 = [];
    const [ex1, setEx1] = useState();
    const [ex2, setEx2] = useState();
    const [ex3, setEx3] = useState();
    const [ex4, setEx4] = useState();
    let s = {};

    useEffect(() => {


        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (!read) {
                all_user = data;
                setAll(all_user);
                console.log(all_user);
                for (const [key, value] of Object.entries(data)) {
                    console.log(`${key} ${value}`);
                    if (value.hasOwnProperty('score')) {
                        ranking[key] = value['score']['type@1'] + value['score']['type@2'] + value['score']['type@3'] + value['score']['type@4']
                    } else if (value.hasOwnProperty('username')) {
                        ranking[key] = 0;
                    } else {
                        ranking['unknow'] = 0;
                    }
                }
                s = Object.keys(ranking).sort(function (a, b) { return ranking[b] - ranking[a] })
                setSortable(s);
                // console.log(sortable);
                // console.log(sortable[0]);
                console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙ssss");
            }
            console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙=====");
            if (read2 == 0) {
                console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙=0");
                console.log(s);
                console.log(typeof s);
                let sum = 0;
                console.log(all_user);
                for (const [key, value] of Object.entries(s)) {
                    // console.log(`${key} ${value}`);
                    // console.log(all_user[value]);
                    sum = all_user[value]['score']['type@1'] + all_user[value]['score']['type@2'] + all_user[value]['score']['type@3'] + all_user[value]['score']['type@4']
                    // console.log(sum);
                    // console.log(typeof s);
                    let count = 1;
                    // console.log(all_user[value]);
                    for (im in image) {
                        // console.log(all_user[value]['avatar']);
                        // console.log(count);
                        if (count == all_user[value]['avatar']) {
                            setImageSrc(image[im]);
                            if (key == 0) {
                                console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙0");
                                RANK1.push(
                                    <View style={styles.container3}>

                                        <View style={styles.header_rank1_1}>
                                            <Image source={require('../assets/1st_rank.png')}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_1}>
                                            <Image source={image[im]}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_2}>
                                            <Text style={styles.txt_rank1}>{all_user[value]['username']} </Text>
                                        </View>
                                        <View style={styles.header_rank1_3}>
                                            <Text style={styles.txt_rank1}>{sum}</Text>
                                        </View>
                                    </View>
                                );
                            } else if (key == 1) {
                                console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙1");
                                RANK2.push(
                                    <View style={styles.container3}>

                                        <View style={styles.header_rank1_1}>
                                            <Image source={require('../assets/2nd_rank.png')}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_1}>
                                            <Image source={image[im]}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_2}>
                                            <Text style={styles.txt_rank2}>{all_user[value]['username']} </Text>
                                        </View>
                                        <View style={styles.header_rank1_3}>
                                            <Text style={styles.txt_rank2}>{sum} </Text>
                                        </View>
                                    </View>
                                );
                            } else if (key == 2) {
                                console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙2");
                                RANK3.push(
                                    <View style={styles.container3}>

                                        <View style={styles.header_rank1_1}>
                                            <Image source={require('../assets/3rd_rank.png')}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_1}>
                                            <Image source={image[im]}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_2}>
                                            <Text style={styles.txt_rank3}>{all_user[value]['username']} </Text>
                                        </View>
                                        <View style={styles.header_rank1_3}>
                                            <Text style={styles.txt_rank3}>{sum} </Text>
                                        </View>
                                    </View>
                                );
                            } else {
                                console.log("🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙🥙else");
                                RANK4.push(
                                    <View style={styles.container3}>
                                        <View style={styles.header_rank1_1}>
                                        </View>
                                        <View style={styles.header_rank1_1}>
                                            <Image source={image[im]}
                                                style={styles.img}
                                            />
                                        </View>
                                        <View style={styles.header_rank1_2}>
                                            <Text style={styles.txt_rank4}>{all_user[value]['username']} </Text>
                                        </View>
                                        <View style={styles.header_rank1_3}>
                                            <Text style={styles.txt_rank4}>{sum} </Text>
                                        </View>
                                    </View>
                                );
                            }
                        }
                        count = count + 1;

                    }

                }
                // console.log(all);
                console.log(RANK4.toString() + "==");
                setEx1(RANK1);
                setEx2(RANK2);
                setEx3(RANK3);
                setEx4(RANK4);
            } else {
                console.log("[[[[[[[[");
            }


        }, {
            onlyOnce: true
        });
        setRead(true);
        setRead2(1);

    },)


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.titleL}>
                    <Text style={styles.txtL}>Score </Text>
                </View>
                <View style={styles.titleR}>
                    <Text style={styles.txtR}> Board</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <ScrollView style={styles.container4}>

                    {/* RANK 1 */}
                    {ex1}
                    {/* RANK 2 */}
                    {ex2}
                    {/* RANK 3 */}
                    {ex3}
                    {/* NORMAL */}
                    {ex4}


                </ScrollView>
            </View>
        </View>

    )
}

export default Ranking

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContentL: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#73C3F9',
    },
    header: {
        width: '70%',
        marginTop: 20,
        height: '11%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    header_rank1_1: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'row',
        // backgroundColor: 'red',
    },
    header_rank1_2: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    header_rank1_3: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
    },
    titleL: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:'10%'
    },
    titleR: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight:'10%',
    },
    txtL: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        textAlign: 'right',
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#FBCE30',
        alignSelf: 'flex-end',
        fontSize: 36,
        fontWeight: '900',
        color: 'white',
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 1,


    },
    txtR: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        textAlign: 'left',
        width: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        fontSize: 36,
        color: '#FBCE30',
        fontWeight: '900',
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 1,

    },
    container2: {
        flex: 1,
        //alignItems: 'center',
        height: '100%',
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
    ,
    container3: {
        marginTop: 10,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        //backgroundColor: 'purple',
    }
    ,
    container4: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        marginTop: 7,
        marginBottom: 20,
        borderRadius: 10,
        //backgroundColor: 'green',
    },
    img: {
        //marginTop: 50,
        width: 50,
        height: 50,
    },
    txt_rank1: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 28,
        textAlign: 'left',
        fontWeight: '900',
        color: '#FFC700',
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 1,
    },
    txt_rank2: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 26,
        textAlign: 'left',
        fontWeight: '900',
        color: 'silver',
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 1,
    }
    ,
    txt_rank3: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: '900',
        color: '#CE7430',
        // textShadowColor: "#000",
        // textShadowOffset: {
        //     width: 1,
        //     height: 2,
        // },
        // textShadowRadius: 1,
    }
    ,
    txt_rank4: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 24,
        textAlign: 'left',
        fontWeight: '900',
        color: '#9E9E9E',

    }
})