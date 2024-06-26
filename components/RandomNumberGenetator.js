import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { COLORS, SIZES } from '../constents/theme';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RandomNumberGenerator = ({min, max, updateEvery, lowLimit, highLimit}) => {
  const [number, setNumber] = useState(getRandomNumber(min, max));
  const opacity = useSharedValue(1);

  useEffect(() => {
    const interval = setInterval(() => {
      opacity.value = 0; // Start fade-out animation
      setTimeout(() => {
        setNumber(getRandomNumber(min, max));
        opacity.value = withTiming(1, { duration: 500, easing: Easing.linear }); // Fade-in animation
      }, 500);
    }, updateEvery);

    return () => clearInterval(interval);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  

  return (
    <Animated.View style={animatedStyle}>
      <Text style={number >= lowLimit && number <= highLimit ? styles.inRangeNum : styles.outRangeNum}>{number}</Text>
    </Animated.View>
  );
};

export default RandomNumberGenerator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inRangeNum: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: "green",
    paddingHorizontal: 10,
  },
  outRangeNum: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: "red",
    backgroundColor: COLORS.bg,
    paddingHorizontal: 10,

  },
});
