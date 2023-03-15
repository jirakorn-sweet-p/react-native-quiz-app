import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Button } from 'react-native'
import React from 'react'

// import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const width_proportion = '50%';
const height_proportion = '50%';

const Pin = () => {
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
                <Text style={styles.txt1}>PIN</Text>
                <Text style={styles.txt2}>please enter your phone number</Text>
                <TextInput
                    style={{ marginVertical: 15, fontSize: 17 }}
                    placeholder="+66 999 999 9999"
                    autoFocus
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                    //onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
            </View>
            <View style={styles.section2}>
                <Button
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
                    style={{ marginVertical: 15, fontSize: 17 }}
                    placeholder="Please Enter PIN Code"
                    autoFocus
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                    textContentType="telephoneNumber"
                //onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                <Button
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
                <Button color="#38C674" style={styles.btn} title="  BACK  "></Button>
            </View>
        </View>
    );
}

export default Pin

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
        marginTop: 100,
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
    },
    section1: {
        width: width - 100,
        height: height / 4,
        alignItems: 'center'
    },
    section2: {
        width: width - 100,
        height: height / 10,
        alignItems: 'center',
        marginTop: 50
    },
    section3: {
        width: width - 100,
        height: height / 7,
        alignItems: 'center',
    },
    section4: {
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
        margin: 20,
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
    }
});