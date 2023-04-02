import { Dimensions, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Circlelar from './Circlelar'
import TotalAnswer from './TotalAnswer'
import { child, getDatabase, onValue, push, ref, set, update } from "firebase/database";
import { FIREBASE_APP } from '../firebase';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'


// const { width, height } = Dimensions.get('window');
let ranNums = [];
let p = 0;
const QuizApp = () => {
    const nav = useNavigation();

    const [question, setQuestion] = useState(1);
    const [quiz, setQuiz] = useState("Question ?");
    const [choice1, setChoice1] = useState("choice1");
    const [choice2, setChoice2] = useState("choice2");
    const [choice3, setChoice3] = useState("choice3");
    const [choice4, setChoice4] = useState("choice4");
    const [answer, setAnswer] = useState("answer");
    const [read, setRead] = useState(0);
    const [isran, setIsran] = useState(0);
    
    const temp = useRoute();
    const db = getDatabase(FIREBASE_APP);
    const starCountRef = ref(db, 'Quiz/category@' + temp['params']['type']);
    let all_question = {};

    const [QQ, setQQ] = useState();

    const QUESTION = [];
    const CHOICE = [];
    const PROGRESS = [];

    // const ranNums = [];
    var arr_quiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        i = arr_quiz.length,
        j = 0;
    const [point, setPoint] = useState(0);
    var random_choice = [1, 2, 3, 4],
        ranChoices = [],
        m = random_choice.length,
        n = 0;
    useEffect(() => {
        if (all_question != null) {
            if (all_question.hasOwnProperty('question@' + question.toString())) {
                if (all_question['question@' + question.toString()].hasOwnProperty('title')) {
                    // setQuestion(2);

                    // console.log("RANDDOM : " + ranNums);
                    // ####### RANDOM CHOICE ######
                    if (random_choice.length != 0) {
                        while (m--) {
                            n = Math.floor(Math.random() * (m + 1));
                            ranChoices.push(random_choice[n]);
                            random_choice.splice(n, 1);
                        }
                    }

                    // console.log("============= SET CHOICE RANDOM =============");
                    // ranChoices = ranChoices.slice(0, 10)
                    // console.log(all_question['question@' + question.toString()]['choices']);
                    setQuiz(all_question['question@' + QQ[question - 1].toString()]['title']);
                    setChoice1(all_question['question@' + QQ[question - 1].toString()]['choices']['choice@' + ranChoices[0].toString()]);
                    setChoice2(all_question['question@' + QQ[question - 1].toString()]['choices']['choice@' + ranChoices[1].toString()]);
                    setChoice3(all_question['question@' + QQ[question - 1].toString()]['choices']['choice@' + ranChoices[2].toString()]);
                    setChoice4(all_question['question@' + QQ[question - 1].toString()]['choices']['choice@' + ranChoices[3].toString()]);
                    setAnswer(all_question['question@' + QQ[question - 1].toString()]['answer']);
                    setRead(2);
                    // console.log(quiz);
                } else {
                    console.log("NO QUESTION TITLE");
                }
            } else {
                console.log("NO QUESTION 1");
            }
        } else {
            console.log("NO ALL QUESTION");
        }

    });

    onValue(starCountRef, (snapshot) => {

        const data = snapshot.val();
        all_question = data;

        if (isran == 0) {
            // ####### RANDOM QUESTION ######
            console.log(ranNums.length);
            console.log(i);
            if (arr_quiz.length != 0) {
                if (ranNums.length == 15) {
                    ranNums = [];
                }
                p=0;
                while (i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    ranNums.push(arr_quiz[j]);
                    arr_quiz.splice(j, 1);
                }
            }
            setQQ(ranNums);
            // ranNums = ranNums.slice(0, 10)
            // console.log(ranNums);

            setRead(1);
            setIsran(1);
        }

    }, {
        // onlyOnce: true
    },[]);


    if (read == 2) {
        console.log("LOADING...");
        QUESTION.push(
            <Text style={styles.txt1}>{quiz}</Text>
        );

        CHOICE.push(
            <View style={styles.con_choice}>
                <TouchableOpacity style={styles.choice} onPress={() => check(0)}>
                    {/* <Text style={styles.txt2_1}>1</Text> */}
                    <Text style={styles.txt2}>1. {choice1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choice} onPress={() => check(1)}>
                    {/* <Text style={styles.txt2_1}>2</Text> */}
                    <Text style={styles.txt2}>2. {choice2}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choice} onPress={() => check(2)}>
                    {/* <Text style={styles.txt2_1}>3</Text> */}
                    <Text style={styles.txt2}>3. {choice3}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choice} onPress={() => check(3)}>
                    {/* <Text style={styles.txt2_1}>4</Text> */}
                    <Text style={styles.txt2}>4. {choice4}</Text>
                </TouchableOpacity>
            </View>
        );
        PROGRESS.push(
            <Circlelar percentage={question * 0.1} txt="Question"></Circlelar>
        );

    }


    const check = (num) => {
        setRead(3);
        
        console.log("QUESTION " + question);
        console.log(ranChoices[num]);
        console.log(answer);
        if (ranChoices[num] == answer) {
            console.log("CORRECT ANSWER");
            setPoint(point + 1);
            p=p+1
        } else {
            console.log("NOT CORRECT ANSWER");
        }

        if (question == 10) {
            console.log("GAME END");
            console.log(p);
            console.log(point);
            nav.navigate("TotalAnswer", { point: p ,type:temp['params']['type'] })
        }
        
        
        setQuestion(question + 1);


        // setQuiz(all_question['question@' + question.toString()]['title']);
        // console.log(all_question['question@' + question.toString()]['title']);
        // setRead(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                {PROGRESS}
            </View>
            <View style={styles.section2}>
                <View style={styles.question}>
                    {QUESTION}
                </View>

                {CHOICE}


            </View>
        </View>
    )
}

export default QuizApp

const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation: 3,
    },
    con_choice: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        height: "100%",
        width: "100%",
        backgroundColor: 'white',

    },
    section1: {
        width: "100%",
        height: "30%",
        marginTop: 20,
        // backgroundColor:'red'
    },
    section2: {
        width: "100%",
        height: "70%",
    },
    txt1: {
        fontSize: 32,
        fontWeight: '800',
        margin: 10,
        color: '#565656'
    },
    txt2: {
        fontSize: 18,
        fontWeight: '500',
        color: '#565656',
        textAlign: 'left',
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        borderRadius: 10,
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
    choice: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 8,
        width: '70%',
        // height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,


    },
    question: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
    }
});