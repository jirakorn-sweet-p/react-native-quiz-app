import { StyleSheet, ScrollView, Text, View, Dimensions, Button, Image, TextInput, TouchableOpacity, Pressable, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH, FIREBASE_APP } from '../firebase';
import { getDatabase, onValue, ref, set, update } from "firebase/database";
// import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core'
import image from './image';


const Profile = () => {
  const database = getDatabase();
  const starCountRef = ref(database, 'User');
  const [read, setRead] = useState(false);
  const [read2, setRead2] = useState(true);
  const [all, setAll] = useState();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const AVATAR = [];
  const [user, setUser] = useState(FIREBASE_AUTH.currentUser);
  const [oldusername, setOldUsername] = useState("unknow");
  const [username, setUsername] = useState("unknow");
  const [age, setAge] = useState();
  const [tel, setTel] = useState();
  const [ic, setIC] = useState(1);
  const [imagSrc, setImageSrc] = useState();
  const [email, setEmail] = useState();
  const [score, setScore] = useState();
  const [key, setKey] = useState();

  const writeDB = async (score, icc) => {
    console.log("====================================");

    const DATA = {
      username: username,
      email: email,
      score: score,
      tel: tel,
      age: age,
      avatar: ic
    };
    console.log("data : " + DATA);
    const updates = {};
    updates['/User/' + key + '/'] = DATA;
    console.log(updates);
    console.log("====================================");
    try {
      await update(ref(database), updates);
      // Data saved successfully!
      console.log("Data saved successfully!");
    } catch (error) {
      // The write failed...
      console.log(error);
    };
  }
  useEffect(() => {
    //   if(read2){
    // //         setImageSrc(image.avatar1);
    // //   setAge(0);
    // //   setTel('no');
    //   }
      setRead2(false)
    onValue(starCountRef, (snapshot) => {
      if (!read) {
        const data = snapshot.val();
        setAll(data);
        // console.log(user['email']);
        for (const [key, value] of Object.entries(data)) {
          // console.log("=======================FOR=========================");
          // console.log(`${key} ${value}`);
          // console.log(value['email']);
          if (value['email'] == user['email']) {
            console.log("MATCH");
            setUsername(value['username']);
            setOldUsername(value['username']);
            setEmail(user['email']);
            setScore(value['score']);

            let count = 1;
            for (im in image){
              // console.log(im);
              if(count == value['avatar']){
                setImageSrc(image[im]);
              }
              count = count+1;
              
            }
            
            setKey(key);
            if (value.hasOwnProperty('tel')) {
              setTel(value['tel']);
              setIC(value['avatar']);
            }

            if (value.hasOwnProperty('age')) {
              setAge(value['age']);
              setIC(value['avatar']);
            }
          } else {
            console.log(value['email'] + " != " + user['email']);
          }
        }
        setRead(true);
      }

    });

  }, []);

  const Home = () => {
    writeDB(score, imagSrc);
    // navigation.navigate('MainMenu');
  }
  const avatar = () => {
    console.log("CLICK");
    setModalVisible(true);
  }
  const icon = (i) => {
    console.log("CLICK " + i);
    setIC(i);
    // console.log(imagSrc);
    writeDB(score, i);
    setModalVisible(false);
  }

  console.log(email);
  AVATAR.push(
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.module3}>
            <Text style={styles.modalText}>Change Avatar</Text>
          </View>
          <ScrollView>
            <View style={styles.module1}>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar1); icon(1) }}><Image source={require('../assets/avatar/1.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar2); icon(2) }}><Image source={require('../assets/avatar/2.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar3); icon(3) }}><Image source={require('../assets/avatar/3.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar4); icon(4) }}><Image source={require('../assets/avatar/4.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar5); icon(5) }}><Image source={require('../assets/avatar/5.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar6); icon(6) }}><Image source={require('../assets/avatar/6.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar7); icon(7) }}><Image source={require('../assets/avatar/7.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar8); icon(8) }}><Image source={require('../assets/avatar/8.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar9); icon(9) }}><Image source={require('../assets/avatar/9.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar10); icon(10) }}><Image source={require('../assets/avatar/10.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar11); icon(11) }}><Image source={require('../assets/avatar/11.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar12); icon(12) }}><Image source={require('../assets/avatar/12.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar13); icon(13) }}><Image source={require('../assets/avatar/13.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar14); icon(14) }}><Image source={require('../assets/avatar/14.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar15); icon(15) }}><Image source={require('../assets/avatar/15.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar16); icon(16) }}><Image source={require('../assets/avatar/16.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar17); icon(17) }}><Image source={require('../assets/avatar/17.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar18); icon(18) }}><Image source={require('../assets/avatar/18.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar19); icon(19) }}><Image source={require('../assets/avatar/19.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
              <TouchableOpacity onPress={() => { setImageSrc(image.avatar20); icon(20) }}><Image source={require('../assets/avatar/20.png')}
                style={styles.imageStyle}
              /></TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.module2}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>cancle</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView >
      {AVATAR}
      <View style={styles.section2}>
        <TouchableOpacity onPress={() => { avatar() }}>
          <Image source={imagSrc}
            style={{ width: 200, height: 200 }}
          />
        </TouchableOpacity>

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
            <Button color="#38C674" style={styles.btn} title="Save" onPress={() => Home()}></Button>
          </View>

        </View>
      </View>

    </ScrollView>
  );
}

export default Profile

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    margin: 14.5
  },
  module1: {
    flex: 2,
    width: '100%',
    height: '80%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  module2: {
    width: '100%',
    height: '10%',
    // backgroundColor: 'green',
  },
  module3: {
    width: '100%',
    height: '10%',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  centeredView: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700'
  },
});