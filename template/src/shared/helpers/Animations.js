import { Animated } from 'react-native';

export function oscillate(animatedValue, config) {
  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.8,
        duration: config.time || 1000,
        useNativeDriver: true
      }),
      Animated.timing(animatedValue, {
        toValue: 0.4,
        duration: config.time || 1000,
        useNativeDriver: true
      }),
    ]),
    {iterations: 10}
  ).start(() => oscillateOpacity(animatedValue))
}

export function fade(animatedValue, config) {
  const newValue = config.type == "in" ? 1 : 0;
  Animated.timing(animatedValue, {
    toValue: newValue,
    duration: config.time || 1000,
    useNativeDriver: true
  }).start()
}


