import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';
const Developer = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.txt_title}>Developer</Text>
                </View>
            </View>

            <View style={styles.container1}>
                <View style={styles.container2}>
                    {/* Developer Name */}

                    <View style={styles.container4}>
                    <Image source={require('../assets/dev3.jpg')}
                                style={{ width: 320, height: 200 }}
                            />

                        <View style={styles.container5}>
                            <Text style={styles.txt_nameD1}>Mr.Atsadawut Homdee</Text>
                            <Text style={styles.txt_nameD2}>Mr.Apichai Tuppoota</Text>
                            <Text style={styles.txt_nameD3}>Mr.Jirakorn Donhuabo</Text>
                            <Text style={styles.txt_nameD4}>Ms.Supaporn Krungsaenmueang</Text>

                            <Text style={styles.txt_kku}>College of Computing, KKU</Text>
                            
                        </View>
                        

                    </View>

                </View>
            </View>
        </View>

    )
}

export default Developer

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
    container_name: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        //backgroundColor: 'yellow',
    },
    container_name1: {
        //marginTop: -5,
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        //alignItems: 'center',
        paddingLeft: 65,
        //backgroundColor: 'yellow',
    },
    container_name2: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        //alignItems: 'center',
        //paddingLeft: 50,
        //backgroundColor: 'purple',
    },
    container1: {
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
    },
    container2: {
        flex: 1,
        height: '90%',
        width: '100%',
        flexDirection: 'row',
        marginTop: -20,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20,
        //alignItems: 'center',
        //backgroundColor: 'green',
    },
    container3: {
        marginTop: -5,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        //backgroundColor: 'purple',
    },
    container4: {
        marginTop: 20,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        //backgroundColor: 'purple',
    },
    container5: {
        marginTop: 5,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        //backgroundColor: 'purple',
    }
    ,
    title: {
        width: '110%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:'10%'
    },
    txt_title: {
        paddingTop: 10,
        paddingBottom: 10,
        //paddingLeft: 10,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#4F4F4F',
        alignSelf: 'flex-end',
        fontSize: 30,
        fontWeight: '900',
        color: 'white',
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 2,
        },
        textShadowRadius: 1,


    }
    ,
    txt_nameD1: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900',
        color: 'white',
        backgroundColor: '#38C674',
    },
    txt_nameD2: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900',
        color: 'white',
        backgroundColor: '#0053CE',
    },
    txt_nameD3: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900',
        color: 'white',
        backgroundColor: '#EECE3B',

    },
    txt_nameD4: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900',
        color: 'white',
        backgroundColor: '#FF4155',
    },
    txt_name: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '700',
        color: 'white',
        textShadowColor: "#38C674",
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 1,
    }
    ,
    txt_name2: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '700',
        color: '#0053CE',

        textShadowColor: "#38C674",
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 1,
    },
    txt_kku: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '900',
        color: 'grey',
        
    }
})