import { StyleSheet, Text, View, Dimensions, Button, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH, FIREBASE_APP } from '../firebase';
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { ScrollView } from 'react-native-gesture-handler';
const Profile = () => {
  const database = getDatabase();
  const starCountRef = ref(database, 'User');
  const [read, setRead] = useState(false);
  const [all, setAll] = useState();


  const [user, setUser] = useState(FIREBASE_AUTH.currentUser);

  const [username, setUsername] = useState("unknow");
  const [age, setAge] = useState(0);
  const [tel, setTel] = useState("no phone number");
  const [email, setEmail] = useState("no email");
  const [score, setScore] = useState();
  const [key,setKey]=useState();
  // useEffect(() => {
  //   setUsername("unknow");
  //   setAge(0);
  //   setTel("no phone number");
  //   setEmail("no email");
  // }, []);
  onValue(starCountRef, (snapshot) => {
    if (!read) {
      const data = snapshot.val();
      setAll(data);
      console.log(user['email']);
      for (const [key, value] of Object.entries(data)) {
        console.log("=======================FOR=========================");
        console.log(`${key} ${value}`);
        // console.log(value['email']);
        if (value['email'] == user['email']) {
          console.log("MATCH");
          setUsername(value['username']);
          setEmail(user['email']);
          setScore(value['score']);
          setKey(key);
        } else {
          console.log(value['email'] + " != " + user['email']);
        }
      }
      setRead(true);
    }

  });
  const writeDB =(score)=>{
    const DATA = {
      username: username,
      email: email,
      score: score,
      tel:tel,
      age:age
  };
  console.log("data : " + DATA);
  const updates = {};
  updates['/User/' + key + '/'] = DATA;
  console.log(updates);
  return update(ref(database), updates);
  }
  console.log(email);
  return (
    <ScrollView >
      <View style={styles.section2}>
        <Image source={require('../assets/profileicon.png')}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.section3}>
          <TextInput style={styles.txt1} onChangeText={text => setUsername(text)}>{username}</TextInput>
        </View>

        <View style={styles.section5}>
          <View style={styles.section4}>
            <View style={styles.header_name}>
              <Text style={styles.txt2}>Age </Text>
            </View>
            <View style={styles.header_edTxt}>
              <TextInput placeholder="Your Age" onChangeText={text => setAge(text)}>{age}</TextInput>

            </View>
          </View>
          <View style={styles.section4}>
            <View style={styles.header_name}>
              <Text style={styles.txt2}>Tel</Text>
            </View>
            <View style={styles.header_edTxt}>
              <TextInput placeholder="Your Phone Number" onChangeText={text => setTel(text)}>{tel}</TextInput>
            </View>
          </View>
          <View style={styles.section4}>
            <View style={styles.header_name}>
              <Text style={styles.txt2}>Email </Text>
            </View>
            <View style={styles.header_edTxt}>
              <TextInput placeholder="Your Email" value={email}></TextInput>
            </View>
          </View>

          <View style={styles.section6}>
            <Button color="#38C674" style={styles.btn} title="Save" onPress={()=>writeDB(score)}></Button>
          </View>

        </View>
      </View>





    </ScrollView>
  );
}

export default Profile

const styles = StyleSheet.create({

  section1: {
    width: 200,
    height: 120,
  },
  section2: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 80,
  },
  section3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '5%',
    alignItems: 'center',
    marginTop: 10,
    //backgroundColor: 'blue',
  },
  section4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '13%',
    //alignItems: 'center',
    marginTop: 10,
    //backgroundColor: 'red',
  },
  section5: {
    flexDirection: 'column',
    //justifyContent: 'space-around',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    marginTop: 20,
    //backgroundColor: 'pink',
  },
  section6: {
    width: 200,
    height: '30%',
    marginTop: 50,
    //backgroundColor: 'purple',
  },
  txt1: {
    fontSize: 20,
    height: 50,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    width: '60%',
    textAlign: 'center',
    fontWeight: '800',
    padding: 10,
    backgroundColor: 'white',
    color: '#3E3E3E',
    borderRadius: 10,

  },
  txt2: {
    fontSize: 15,
    fontWeight: '800',
    color: '#3E3E3E',
  },
  txt3: {
    fontSize: 32,
    fontWeight: '700',
    margin: 20,
    color: '#565656'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  title2: {
    textAlign: 'center',
    marginVertical: 10,
    width: '100%',
    height: '25%',
    alignItems: 'center',
  },
  header_name: {
    marginLeft: 80,
    marginRight: 30,
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'green',
  },
  header_edTxt: {
    width: '45%',
    height: '100%',
    marginRight: 80,
    paddingLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  btn: {
    //width:100,
    borderRadius: 10,
  },
  Button: {
    flexDirection: 'row',
    height: 50,
    width: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 3,
  },
});