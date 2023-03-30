import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';
const Setting = () => {
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
                <View style={styles.container4}>

                    {/* RANK 1 */}
                    <View style={styles.container3}>

                        <View style={styles.header_rank1_1}>
                            <Image source={require('../assets/1st_rank.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.header_rank1_2}>
                            <Text style={styles.txt_rank1}>waveza007 </Text>
                        </View>
                        <View style={styles.header_rank1_3}>
                            <Text style={styles.txt_rank1}>40</Text>
                        </View>
                    </View>

                    {/* RANK 2 */}
                    <View style={styles.container3}>

                        <View style={styles.header_rank1_1}>
                        <Image source={require('../assets/2nd_rank.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.header_rank1_2}>
                            <Text style={styles.txt_rank2}>SweetP </Text>
                        </View>
                        <View style={styles.header_rank1_3}>
                            <Text style={styles.txt_rank2}>39 </Text>
                        </View>
                    </View>

                    {/* RANK 3 */}
                    <View style={styles.container3}>

                        <View style={styles.header_rank1_1}>
                        <Image source={require('../assets/3rd_rank.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.header_rank1_2}>
                            <Text style={styles.txt_rank3}>FlukeZa5521 </Text>
                        </View>
                        <View style={styles.header_rank1_3}>
                            <Text style={styles.txt_rank3}>38 </Text>
                        </View>
                    </View>

                    {/* NORMAL */}
                    <View style={styles.container3}>

                        <View style={styles.header_rank1_1}>
                        </View>
                        <View style={styles.header_rank1_2}>
                            <Text style={styles.txt_rank4}>Username </Text>
                        </View>
                        <View style={styles.header_rank1_3}>
                            <Text style={styles.txt_rank4}>0 </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Setting

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
        marginLeft: 17,
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    header_rank1_2: {
        width: '45%',
        height: '100%',
        marginRight:20,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow',
    },
    header_rank1_3: {
        width: '25%',
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
        height: height - 90,
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
        fontSize: 32,
        textAlign:'left',
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
        fontSize: 28,
        textAlign:'left',
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
        fontSize: 26,
        textAlign:'left',
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
        textAlign:'left',
        fontWeight: '900',
        color: '#9E9E9E',

    }
})