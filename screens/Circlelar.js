import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import { ReText } from 'react-native-redash';
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

const BACKGROUND_COLOR = 'rgba(255, 255, 255,0)';
const BACKGROUND_STROKE_COLOR = '#F5EAEA';
const STROKE_COLOR = '#76FFB5';
const { width, height } = Dimensions.get('window');
const CIRCLE_LENGTH = 500;
const R = CIRCLE_LENGTH / (2 * Math.PI);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Circlelar = (props) => {
    const percentage = 1 - props.percentage
    const txt = 1 - props.txt
    const circleProgress = useSharedValue(1);
    
    useEffect(() => {
        circleProgress.value = withTiming(percentage, { duration: 2000 });
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * circleProgress.value
    }));
    const ProgressText = useDerivedValue(()=>{
        const temp = 10-circleProgress.value*10;
        return `${Math.floor(temp)}`;
    });

    return (

        <View style={styles.container}>
        <ReText style={[styles.ProgressText,]} text={ProgressText}></ReText>
        <Text style={[styles.ProgressText2,]}>Question</Text>
            <Svg width={width} height={height} style={{ position:'absolute'}}>
                <Circle
                    cx={width * 0.5}
                    cy={height * 0.5}
                    r={R}
                    fill={BACKGROUND_COLOR}
                    stroke={BACKGROUND_STROKE_COLOR}
                    strokeWidth={15}
                />
                <AnimatedCircle
                    cx={width * 0.5}
                    cy={height * 0.5}
                    r={R}
                    transform={{ rotation: -90, originX: width * 0.5, originY: height * 0.5 }}
                    fillOpacity={0}
                    fill={BACKGROUND_COLOR}
                    stroke={STROKE_COLOR}
                    strokeWidth={10}
                    strokeDasharray={CIRCLE_LENGTH}
                    animatedProps={animatedProps}
                    strokeLinecap="round"
                // strokeDashoffset={CIRCLE_LENGTH * circleProgress.value}
                />
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ProgressText:{
        fontSize:34,
        color:'#565656',
        fontWeight:'700',
        textAlign:'center',
    },
    ProgressText2:{
        fontSize:20,
        color:'#565656',
        textAlign:'center',
    },
});

export default Circlelar

