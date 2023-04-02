import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Button } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core'

// import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';

const Pin = () => {
    const navigation = useNavigation();
    const REGISTER =()=>{
        navigation.navigate('LoginScreen')
    }
    const MAINMEMU =()=>{
        // action 
        navigation.navigate('MainMenu')
    }
    return (
        <ScrollView>

            <View style={styles.container} >
                <View style={styles.section1}>
                    <Text style={styles.txt1}>PIN</Text>
                    <Text style={styles.txt2}>please enter your phone number</Text>
                    <TextInput
                        style={[styles.shadow]}
                        placeholder="+66 999 999 9999"
                        autoFocus
                        autoCompleteType="tel"
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                    //onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                    /><Button
                        style={styles.Button}
                        title="Send Verification Code"
                    /*disabled={!phoneNumber}
                    onPress={async () => {
                        // The FirebaseRecaptchaVerifierModal ref implements the
                        // FirebaseAuthApplicationVerifier interface and can be
                        // passed directly to `verifyPhoneNumber`.
                        try {
                            const phoneProvider = new PhoneAuthProvider(auth);
                            const verificationId = await phoneProvider.verifyPhoneNumber(
                                phoneNumber,
                                recaptchaVerifier.current
                            );
                            setVerificationId(verificationId);
                            showMessage({
                                text: 'Verification code has been sent to your phone.',
                            });
                        } catch (err) {
                            showMessage({ text: `Error: ${err.message}`, color: 'red' });
                        }
                    }}*/
                    />
                </View>
                <View style={styles.section3}>
                    <TextInput
                        style={[styles.shadow]}
                        placeholder="Please Enter PIN Code"
                        autoFocus
                        autoCompleteType="tel"
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                    //onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                    />
                    <Button
                    onPress={MAINMEMU}
                        title="Confirm Verification Code"
                    /*disabled={!phoneNumber}
                    onPress={async () => {
                        // The FirebaseRecaptchaVerifierModal ref implements the
                        // FirebaseAuthApplicationVerifier interface and can be
                        // passed directly to `verifyPhoneNumber`.
                        try {
                            const phoneProvider = new PhoneAuthProvider(auth);
                            const verificationId = await phoneProvider.verifyPhoneNumber(
                                phoneNumber,
                                recaptchaVerifier.current
                            );
                            setVerificationId(verificationId);
                            showMessage({
                                text: 'Verification code has been sent to your phone.',
                            });
                        } catch (err) {
                            showMessage({ text: `Error: ${err.message}`, color: 'red' });
                        }
                    }}*/
                    />
                </View>
                <View style={styles.section4}>
                    <Button 
                    onPress={REGISTER}
                    color="#38C674" style={styles.btn} title="  BACK  "></Button>
                </View>
            </View>

        </ScrollView>
    );
}

export default Pin

const styles = StyleSheet.create({
    Button: {
        width: '100%'
    },
    cont: {
        flex: 1,
        width: '100%',
        height:'100%',
        backgroundColor:'yellow'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        minHeight:height-height*0.1,
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '10%',
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
        width: '100%',
        height: "40%",
        alignItems: 'center',
    },
    section2: {
        width: '100%',
        height: "25%",
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    section3: {
        width: '100%',
        height: "25%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    section4: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height:'10%',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 40,
        fontWeight: '800',
        marginTop: 20,
        color: '#565656'
    },
    txt2: {
        fontSize: 15,
        fontWeight: '500',
        color: '#565656',
        marginTop: 10
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
    shadow: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        width: '50%'
    }
});