import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
// import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH,FIREBASE_APP } from '../firebase';
import { getDatabase, onValue, ref, set,update } from "firebase/database";



  
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const auth = FIREBASE_AUTH;
    const database = getDatabase();
    let all_user ={};
    const starCountRef = ref(database, 'User');
    const [user, setUser] = useState(FIREBASE_AUTH.currentUser);

    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        all_user = data;
    }, {
        onlyOnce: true
    });
    useEffect(() => {
        setUser(FIREBASE_AUTH.currentUser);
        if (user != null) {
            navigation.navigate("MainMenu");
        }
    },[user])

    const signUp = async () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("REGISTER SUCCESS");
            writeDB();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage=="Firebase: Error (auth/email-already-in-use)."){
                alert("REGISTER FAIL : this email has used.");
                writeDB();
            }
            
          });
        console.log("🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️");
        // alert('check your email');
    }
    const signIn = async () => {
        const accoount = await signInWithEmailAndPassword(auth, email, password);
        console.log("================LOGIN=================");
        
        setUser(FIREBASE_AUTH.currentUser);
    }

    const writeDB =()=>{
        console.log("================writeDB=================");
        const score = {
            'type@1':0,
            'type@2':0,
            'type@3':0,
            'type@4':0,
        }

        const username = "username@"+Number(Object.keys(all_user).length+1);
        const DATA = {
            username:username,
            email:email,
            avatar:1,
            score:score
        };
        console.log("data : "+DATA);
        const updates = {};
        updates['/User/'+username+'/'] = DATA;
        return update(ref(database), updates);
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={signIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={signUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})