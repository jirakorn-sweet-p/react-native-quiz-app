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
                    <View style={styles.container3}>
                        <View style={styles.container_name}>
                            <Text style={styles.txt_name}>นายอัษฎาวุธ หอมดี</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.container_name}>
                            <Text style={styles.txt_name}>นางสาวสุภาภรณ์ กรุงแสนเมือง</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.container_name}>
                            <Text style={styles.txt_name}>นายอภิชัย ทัพภูตา</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <View style={styles.container_name}>
                            <Text style={styles.txt_name}>นายจิรากร ดอนหัวบ่อ</Text>
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
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        marginTop: 7,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        //backgroundColor: 'green',
    },
    container3: {
        marginTop: 10,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'purple',
    },
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
        paddingLeft: 10,
        textAlign: 'center',
        width: '100%',
        borderRadius: 10,
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
    txt_name: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '700',
        color: '#49D88B',
        textShadowColor: "#38C674",
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 1,
    }
})